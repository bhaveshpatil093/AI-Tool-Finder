import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, Target, DollarSign, Zap, ArrowRight } from "lucide-react";
import { tools, categories } from "@/data/tools";

const Recommendations = () => {
  const [step, setStep] = useState<"input" | "results">("input");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState([100]);
  const [skillLevel, setSkillLevel] = useState("intermediate");
  const [primaryUseCase, setPrimaryUseCase] = useState("");
  const [loading, setLoading] = useState(false);

  const exampleQueries = [
    "I need to generate product descriptions for my e-commerce site. Processing about 500 products per week, need Shopify integration, budget is $50/month.",
    "Looking for an AI tool to help with coding. I'm a Python developer working on data science projects, need good documentation.",
    "Want to create social media graphics quickly. Not a designer, need templates and easy editing, preferably under $30/month.",
  ];

  const handleGetRecommendations = () => {
    setLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      setStep("results");
    }, 2000);
  };

  // Simple recommendation logic (in real app, this would be AI-powered)
  const recommendedTools = tools.slice(0, 5);
  const alternativeTools = tools.slice(5, 8);

  if (step === "results") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={() => setStep("input")}
                className="mb-4"
              >
                ← Back to search
              </Button>
              <h1 className="text-4xl font-bold mb-4">Your Personalized Recommendations</h1>
              <p className="text-lg text-muted-foreground">
                Based on your requirements, here are the best AI tools for you
              </p>
            </div>

            {/* Top Recommendations */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Top Matches
              </h2>
              <div className="space-y-6">
                {recommendedTools.map((tool, index) => (
                  <Card key={tool.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Badge className="mb-2">{95 - index * 5}% Match</Badge>
                          <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center">
                            <span className="text-3xl font-bold text-primary">{tool.name[0]}</span>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold mb-1">{tool.name}</h3>
                              <p className="text-sm text-muted-foreground">{tool.company}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground">Starting at</p>
                              <p className="text-lg font-semibold">
                                {tool.pricing.free_tier.available ? "Free" : `$${tool.pricing.plans[0]?.price}/mo`}
                              </p>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4">{tool.tagline}</p>

                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Why it's recommended:</p>
                            <ul className="space-y-1">
                              <li className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-success mt-0.5">✓</span>
                                <span>Matches your budget requirements perfectly</span>
                              </li>
                              <li className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-success mt-0.5">✓</span>
                                <span>Suitable for {skillLevel} skill level</span>
                              </li>
                              <li className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-success mt-0.5">✓</span>
                                <span>Strong ratings and proven reliability</span>
                              </li>
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {tool.category.map(cat => (
                              <Badge key={cat} variant="secondary">
                                {cat}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-3">
                            <Link to={`/tool/${tool.slug}`}>
                              <Button variant="outline">
                                View Details
                              </Button>
                            </Link>
                            <Button className="gradient-primary">
                              Try Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Alternative Options */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Other Options to Consider</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alternativeTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Get AI-Powered Recommendations</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us what you're looking for, and we'll recommend the perfect AI tools based on your specific needs, budget, and skill level.
            </p>
          </div>

          {/* Main Input */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <Label className="text-base font-semibold mb-2 block">
                Describe what you want to accomplish
              </Label>
              <Textarea
                placeholder="Be as detailed as possible. For example: 'I need to generate product descriptions for an e-commerce site, process about 500 products per week, integrate with Shopify, and my budget is $50/month.'"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[150px] mb-4"
              />
              
              <div className="space-y-2 mb-4">
                <Label className="text-sm font-medium">Quick examples:</Label>
                {exampleQueries.map((query, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-left h-auto py-3 px-4"
                    onClick={() => setDescription(query)}
                  >
                    <span className="text-xs text-muted-foreground line-clamp-2">{query}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Optional Structured Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-5 w-5 text-primary" />
                  <Label className="text-base font-semibold">Primary Use Case</Label>
                </div>
                <Select value={primaryUseCase} onValueChange={setPrimaryUseCase}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.name} value={cat.name}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-primary" />
                  <Label className="text-base font-semibold">Technical Skill Level</Label>
                </div>
                <Select value={skillLevel} onValueChange={setSkillLevel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-5 w-5 text-primary" />
                <Label className="text-base font-semibold">Monthly Budget</Label>
              </div>
              <Slider
                value={budget}
                onValueChange={setBudget}
                max={500}
                step={10}
                className="mb-3"
              />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">$0</span>
                <span className="font-semibold">${budget[0]}/month</span>
                <span className="text-muted-foreground">$500+</span>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="gradient-primary min-w-[300px]"
              onClick={handleGetRecommendations}
              disabled={!description.trim() || loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  Get Recommendations
                  <Sparkles className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Our AI will analyze your requirements and match you with the best tools
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Recommendations;
