import React, { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckCircle2, XCircle, Star, ArrowRight, Plus, X, Search, Check, ChevronsUpDown, ExternalLink, Download, Share2 } from "lucide-react";
import { tools } from "@/data/tools";

const Compare = () => {
  const [searchParams] = useSearchParams();
  const initialIds = searchParams.get("tools")?.split(",") || [];
  const [selectedToolIds, setSelectedToolIds] = useState<string[]>(
    initialIds.length > 0 ? initialIds : tools.slice(0, 3).map(t => t.id)
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedTools = tools.filter(t => selectedToolIds.includes(t.id));
  const availableTools = tools.filter(t => !selectedToolIds.includes(t.id));

  // Filter tools based on search query
  const filteredTools = useMemo(() => {
    if (!searchQuery) return availableTools;
    return availableTools.filter(tool => 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [availableTools, searchQuery]);

  const addTool = (toolId: string) => {
    if (selectedToolIds.length < 5 && !selectedToolIds.includes(toolId)) {
      setSelectedToolIds([...selectedToolIds, toolId]);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const removeTool = (toolId: string) => {
    setSelectedToolIds(selectedToolIds.filter(id => id !== toolId));
  };

  const exportToPDF = () => {
    // Create a simple PDF export functionality
    const comparisonData = {
      tools: selectedTools.map(tool => ({
        name: tool.name,
        company: tool.company,
        rating: tool.ratings.overall,
        pricing: tool.pricing.model,
        features: {
          api: tool.features.api_access,
          mobile: tool.features.mobile_app,
          team: tool.features.team_collaboration
        }
      })),
      generatedAt: new Date().toLocaleString()
    };

    const dataStr = JSON.stringify(comparisonData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai-tools-comparison-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const shareComparison = () => {
    if (navigator.share) {
      navigator.share({
        title: 'AI Tools Comparison',
        text: `Compare ${selectedTools.length} AI tools: ${selectedTools.map(t => t.name).join(', ')}`,
        url: window.location.href
      });
    } else {
      // Fallback: copy to clipboard
      const comparisonText = `AI Tools Comparison:\n${selectedTools.map(tool => 
        `${tool.name} (${tool.company}) - ⭐ ${tool.ratings.overall}/5`
      ).join('\n')}`;
      
      navigator.clipboard.writeText(comparisonText).then(() => {
        alert('Comparison copied to clipboard!');
      });
    }
  };

  const comparisonRows = [
    { 
      category: "Basic Information", 
      icon: "📋",
      items: [
        { label: "Company", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <span className="font-medium text-foreground">{t.company}</span>
          </div>
        )},
        { label: "Launch Date", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <span className="text-sm text-muted-foreground">{new Date(t.launch_date).toLocaleDateString()}</span>
          </div>
        )},
        { label: "Website", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <a href={t.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
              <ExternalLink className="h-3 w-3" />
              <span className="text-sm">Visit</span>
            </a>
          </div>
        )},
      ]
    },
    { 
      category: "Pricing & Plans", 
      icon: "💰",
      items: [
        { label: "Pricing Model", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <Badge variant={t.pricing.model === "Freemium" ? "default" : "secondary"} className="text-xs">
              {t.pricing.model}
            </Badge>
          </div>
        )},
        { label: "Free Tier", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            {t.pricing.free_tier.available ? (
              <div className="flex items-center justify-center gap-1 text-success">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-medium">Available</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <XCircle className="h-4 w-4" />
                <span className="text-sm">Not Available</span>
              </div>
            )}
          </div>
        )},
        { label: "Starting Price", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <span className="font-semibold text-lg">
              {t.pricing.free_tier.available ? "Free" : `$${t.pricing.plans[0]?.price}/mo`}
            </span>
          </div>
        )},
      ]
    },
    { 
      category: "Key Features", 
      icon: "⚡",
      items: [
        { label: "API Access", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            {t.features.api_access ? (
              <div className="flex items-center justify-center gap-1 text-success">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-medium">Yes</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <XCircle className="h-4 w-4" />
                <span className="text-sm">No</span>
              </div>
            )}
          </div>
        )},
        { label: "Mobile App", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            {t.features.mobile_app ? (
              <div className="flex items-center justify-center gap-1 text-success">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-medium">Available</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <XCircle className="h-4 w-4" />
                <span className="text-sm">Not Available</span>
              </div>
            )}
          </div>
        )},
        { label: "Team Collaboration", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            {t.features.team_collaboration ? (
              <div className="flex items-center justify-center gap-1 text-success">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-medium">Supported</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <XCircle className="h-4 w-4" />
                <span className="text-sm">Not Supported</span>
              </div>
            )}
          </div>
        )},
        { label: "Languages Supported", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <span className="font-semibold text-lg">{t.features.languages_supported}</span>
            <span className="text-xs text-muted-foreground block">languages</span>
          </div>
        )},
      ]
    },
    { 
      category: "Technical Specs", 
      icon: "🔧",
      items: [
        { label: "Model Type", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <span className="text-sm font-medium">{t.technical.model_type}</span>
          </div>
        )},
        { label: "Processing", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <Badge variant="outline" className="text-xs">
              {t.technical.processing}
            </Badge>
          </div>
        )},
        { label: "GDPR Compliant", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            {t.technical.gdpr_compliant ? (
              <div className="flex items-center justify-center gap-1 text-success">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-medium">Yes</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <XCircle className="h-4 w-4" />
                <span className="text-sm">No</span>
              </div>
            )}
          </div>
        )},
        { label: "Uptime", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <span className="font-semibold text-lg text-success">{t.technical.uptime}</span>
          </div>
        )},
      ]
    },
    { 
      category: "Ratings & Reviews", 
      icon: "⭐",
      items: [
        { label: "Overall Rating", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-bold text-lg">{t.ratings.overall}</span>
            </div>
            <span className="text-xs text-muted-foreground">out of 5</span>
          </div>
        )},
        { label: "Ease of Use", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="font-semibold">{t.ratings.ease_of_use}</span>
              <Star className="h-3 w-3 fill-warning text-warning" />
            </div>
          </div>
        )},
        { label: "Feature Set", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="font-semibold">{t.ratings.features}</span>
              <Star className="h-3 w-3 fill-warning text-warning" />
            </div>
          </div>
        )},
        { label: "Value for Money", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <span className="font-semibold">{t.ratings.value}</span>
              <Star className="h-3 w-3 fill-warning text-warning" />
            </div>
          </div>
        )},
        { label: "Total Reviews", getValue: (t: typeof tools[0]) => (
          <div className="text-center">
            <span className="font-semibold text-lg">{t.ratings.total_reviews.toLocaleString()}</span>
            <span className="text-xs text-muted-foreground block">reviews</span>
        </div>
      )},
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Compare AI Tools
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Make informed decisions with our comprehensive side-by-side comparison of AI tools
            </p>
          </div>

          {/* Tool Selection Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🔍</span>
                Select Tools to Compare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                {selectedTools.map((tool) => (
                  <Card key={tool.id} className="relative group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        onClick={() => removeTool(tool.id)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">{tool.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-lg truncate">{tool.name}</h3>
                        <p className="text-sm text-muted-foreground">{tool.company}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-3 w-3 fill-warning text-warning" />
                            <span className="text-sm font-medium">{tool.ratings.overall}</span>
                            <span className="text-xs text-muted-foreground">({tool.ratings.total_reviews.toLocaleString()})</span>
                          </div>
                        </div>
                      </div>
                  </CardContent>
                </Card>
                ))}

            {selectedToolIds.length < 5 && (
                  <Popover open={searchOpen} onOpenChange={setSearchOpen}>
                    <PopoverTrigger asChild>
                      <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
                        <CardContent className="p-4 flex items-center justify-center h-full min-h-[80px]">
                          <div className="text-center">
                            <Plus className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                            <span className="text-sm font-medium">Add Tool</span>
                          </div>
                </CardContent>
              </Card>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-0" align="start">
                      <Command>
                        <CommandInput 
                          placeholder="Search tools..." 
                          value={searchQuery}
                          onValueChange={setSearchQuery}
                        />
                        <CommandList>
                          <CommandEmpty>No tools found.</CommandEmpty>
                          <CommandGroup>
                            {filteredTools.slice(0, 10).map((tool) => (
                              <CommandItem
                                key={tool.id}
                                value={tool.name}
                                onSelect={() => addTool(tool.id)}
                                className="flex items-center gap-3 p-3"
                              >
                                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                                  <span className="text-sm font-bold">{tool.name[0]}</span>
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">{tool.name}</div>
                                  <div className="text-sm text-muted-foreground">{tool.company}</div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-warning text-warning" />
                                  <span className="text-sm">{tool.ratings.overall}</span>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
            )}
          </div>

              {selectedTools.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No tools selected</h3>
                  <p className="text-muted-foreground mb-4">Add tools to start comparing features, pricing, and capabilities</p>
                  <Button onClick={() => setSearchOpen(true)} className="gradient-primary">
                    <Search className="h-4 w-4 mr-2" />
                    Search & Add Tools
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Premium Comparison Table */}
          {selectedTools.length > 0 && (
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 border-b">
                <CardTitle className="text-xl">Detailed Comparison</CardTitle>
                <p className="text-muted-foreground">Compare {selectedTools.length} tools across key metrics</p>
              </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                      <tr className="border-b bg-muted/30">
                        <th className="text-left p-6 font-semibold sticky left-0 bg-card z-10 min-w-[200px]">
                          Features
                        </th>
                        {selectedTools.map((tool) => (
                          <th key={tool.id} className="text-center p-6 font-semibold min-w-[250px] bg-gradient-to-b from-primary/5 to-transparent">
                            <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <span className="text-lg font-bold text-primary">{tool.name[0]}</span>
                              </div>
                              <div>
                                <div className="font-semibold text-lg">{tool.name}</div>
                                <div className="text-sm text-muted-foreground">{tool.company}</div>
                                <div className="flex items-center justify-center gap-1 mt-1">
                                  <Star className="h-3 w-3 fill-warning text-warning" />
                                  <span className="text-sm font-medium">{tool.ratings.overall}</span>
                                </div>
                              </div>
                            </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((section) => (
                        <React.Fragment key={section.category}>
                          <tr className="bg-gradient-to-r from-muted/50 to-muted/30 border-b">
                            <td colSpan={selectedTools.length + 1} className="p-4 font-semibold text-lg">
                              <div className="flex items-center gap-2">
                                <span className="text-xl">{section.icon}</span>
                            {section.category}
                              </div>
                          </td>
                        </tr>
                        {section.items.map((item) => (
                            <tr key={item.label} className="border-b hover:bg-muted/20 transition-colors">
                              <td className="p-6 text-sm font-medium sticky left-0 bg-card border-r">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                              {item.label}
                                </div>
                            </td>
                              {selectedTools.map((tool) => (
                                <td key={tool.id} className="p-6 text-sm">
                                {item.getValue(tool)}
                              </td>
                            ))}
                          </tr>
                        ))}
                        </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          )}

          {/* Action Buttons */}
          {selectedTools.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="gap-2" onClick={exportToPDF}>
                <Download className="h-4 w-4" />
                Export as JSON
            </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={shareComparison}>
                <Share2 className="h-4 w-4" />
              Share Comparison
            </Button>
            <Link to="/browse">
                <Button size="lg" className="gradient-primary gap-2">
                Browse More Tools
                  <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Compare;
