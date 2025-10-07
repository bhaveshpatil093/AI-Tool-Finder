import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List, ArrowRight, X } from "lucide-react";
import { tools } from "@/data/tools";

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category") ? [searchParams.get("category")!] : []
  );
  const [selectedPricingModels, setSelectedPricingModels] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  const categories = Array.from(new Set(tools.flatMap(t => t.category)));
  const pricingModels = Array.from(new Set(tools.map(t => t.pricing.model)));
  const features = ["API Available", "Mobile App", "Team Collaboration", "Offline Mode"];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = searchQuery === "" || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategories.length === 0 || 
      tool.category.some(cat => selectedCategories.includes(cat));

    const matchesPricing = selectedPricingModels.length === 0 || 
      selectedPricingModels.includes(tool.pricing.model);

    const lowestPrice = tool.pricing.free_tier.available 
      ? 0 
      : tool.pricing.plans[0]?.price || 0;
    const matchesPrice = lowestPrice >= priceRange[0] && lowestPrice <= priceRange[1];

    const matchesRating = tool.ratings.overall >= minRating;

    const matchesFeatures = selectedFeatures.length === 0 || selectedFeatures.every(feature => {
      if (feature === "API Available") return tool.features.api_access;
      if (feature === "Mobile App") return tool.features.mobile_app;
      if (feature === "Team Collaboration") return tool.features.team_collaboration;
      if (feature === "Offline Mode") return tool.features.offline_mode;
      return true;
    });

    return matchesSearch && matchesCategory && matchesPricing && matchesPrice && matchesRating && matchesFeatures;
  });

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleCompareToggle = (toolId: string) => {
    setSelectedTools(prev => 
      prev.includes(toolId)
        ? prev.filter(id => id !== toolId)
        : prev.length < 5 ? [...prev, toolId] : prev
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPricingModels([]);
    setPriceRange([0, 500]);
    setSelectedFeatures([]);
    setMinRating(0);
    setSearchQuery("");
  };

  const activeFiltersCount = selectedCategories.length + selectedPricingModels.length + 
    selectedFeatures.length + (minRating > 0 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Browse AI Tools</h1>
            <p className="text-lg text-muted-foreground">
              Discover and compare {tools.length} AI tools across all categories
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>

          <div className="flex gap-6">
            {/* Filters Sidebar */}
            {showFilters && (
              <aside className="w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <div className="glass-effect rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-semibold">Filters</h2>
                      {activeFiltersCount > 0 && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={clearFilters}
                          className="text-xs"
                        >
                          Clear all
                        </Button>
                      )}
                    </div>

                    <ScrollArea className="h-[calc(100vh-250px)]">
                      <div className="space-y-6 pr-4">
                        {/* Categories */}
                        <div>
                          <h3 className="font-medium mb-3">Category</h3>
                          <div className="space-y-2">
                            {categories.slice(0, 10).map(category => (
                              <div key={category} className="flex items-center gap-2">
                                <Checkbox 
                                  id={category}
                                  checked={selectedCategories.includes(category)}
                                  onCheckedChange={() => handleCategoryToggle(category)}
                                />
                                <Label htmlFor={category} className="text-sm cursor-pointer">
                                  {category}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Pricing Model */}
                        <div className="pt-4 border-t">
                          <h3 className="font-medium mb-3">Pricing Model</h3>
                          <div className="space-y-2">
                            {pricingModels.map(model => (
                              <div key={model} className="flex items-center gap-2">
                                <Checkbox 
                                  id={model}
                                  checked={selectedPricingModels.includes(model)}
                                  onCheckedChange={() => {
                                    setSelectedPricingModels(prev =>
                                      prev.includes(model)
                                        ? prev.filter(m => m !== model)
                                        : [...prev, model]
                                    );
                                  }}
                                />
                                <Label htmlFor={model} className="text-sm cursor-pointer">
                                  {model}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Price Range */}
                        <div className="pt-4 border-t">
                          <h3 className="font-medium mb-3">Price Range</h3>
                          <div className="space-y-4">
                            <Slider
                              value={priceRange}
                              onValueChange={setPriceRange}
                              max={500}
                              step={10}
                              className="w-full"
                            />
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span>${priceRange[0]}</span>
                              <span>${priceRange[1]}/mo</span>
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="pt-4 border-t">
                          <h3 className="font-medium mb-3">Features</h3>
                          <div className="space-y-2">
                            {features.map(feature => (
                              <div key={feature} className="flex items-center gap-2">
                                <Checkbox 
                                  id={feature}
                                  checked={selectedFeatures.includes(feature)}
                                  onCheckedChange={() => {
                                    setSelectedFeatures(prev =>
                                      prev.includes(feature)
                                        ? prev.filter(f => f !== feature)
                                        : [...prev, feature]
                                    );
                                  }}
                                />
                                <Label htmlFor={feature} className="text-sm cursor-pointer">
                                  {feature}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="pt-4 border-t">
                          <h3 className="font-medium mb-3">Minimum Rating</h3>
                          <Select value={minRating.toString()} onValueChange={(v) => setMinRating(Number(v))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0">All ratings</SelectItem>
                              <SelectItem value="3">3+ stars</SelectItem>
                              <SelectItem value="4">4+ stars</SelectItem>
                              <SelectItem value="4.5">4.5+ stars</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredTools.length}</span> of <span className="font-semibold text-foreground">{tools.length}</span> tools
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex gap-1 border rounded-lg p-1">
                    <Button
                      size="sm"
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      onClick={() => setViewMode("grid")}
                      className="h-8 w-8 p-0"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      onClick={() => setViewMode("list")}
                      className="h-8 w-8 p-0"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Tools Grid */}
              <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                {filteredTools.map((tool, index) => (
                  <div key={tool.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <ToolCard 
                      tool={tool} 
                      onCompareToggle={handleCompareToggle}
                      isSelected={selectedTools.includes(tool.id)}
                    />
                  </div>
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No tools found matching your criteria</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

          {/* Compare Bar */}
      {selectedTools.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="glass-effect rounded-full shadow-xl px-6 py-4 flex items-center gap-4 border-2 border-primary/20">
            <Badge variant="secondary">{selectedTools.length} selected</Badge>
            <span className="text-sm font-medium">
              {selectedTools.length < 2 
                ? "Select at least 2 tools to compare"
                : `Compare ${selectedTools.length} tools`}
            </span>
            <Link to={`/compare?tools=${selectedTools.join(",")}`}>
              <Button 
                size="sm" 
                disabled={selectedTools.length < 2}
                className="gradient-primary"
              >
                Compare Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button 
              size="sm" 
              variant="ghost"
              onClick={() => setSelectedTools([])}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Browse;
