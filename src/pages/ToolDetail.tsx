import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToolCard } from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Star, 
  ExternalLink, 
  Share2, 
  CheckCircle2, 
  XCircle,
  Calendar,
  TrendingUp,
  Users,
  ArrowRight,
  Plus,
  Minus
} from "lucide-react";
import { tools } from "@/data/tools";

const ToolDetail = () => {
  const { slug } = useParams();
  const tool = tools.find(t => t.slug === slug);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
            <Link to="/browse">
              <Button>Browse All Tools</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const similarTools = tools.filter(t => 
    t.id !== tool.id && 
    t.category.some(cat => tool.category.includes(cat))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-4xl font-bold text-primary">{tool.name[0]}</span>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {tool.category.map(cat => (
                    <Badge key={cat} variant="secondary">{cat}</Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">{tool.tagline}</p>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-warning text-warning" />
                      <span className="text-2xl font-bold">{tool.ratings.overall}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({tool.ratings.total_reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">50K+ users</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Updated {new Date(tool.last_updated).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={tool.website} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gradient-primary">
                      Visit Website
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <Link to="/compare">
                    <Button size="lg" variant="outline">
                      Compare
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{tool.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold mb-2">Best for:</h4>
                          <ul className="space-y-1">
                            {tool.best_for.map((use, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                <span>{use}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Pros & Cons</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-success">
                            <Plus className="h-4 w-4" />
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {tool.pros.map((pro, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-success">✓</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-destructive">
                            <Minus className="h-4 w-4" />
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {tool.cons.map((con, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-destructive">✗</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="features" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Core Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="font-medium">API Access</span>
                          {tool.features.api_access ? (
                            <CheckCircle2 className="h-5 w-5 text-success" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="font-medium">Mobile App</span>
                          {tool.features.mobile_app ? (
                            <CheckCircle2 className="h-5 w-5 text-success" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="font-medium">Team Collaboration</span>
                          {tool.features.team_collaboration ? (
                            <CheckCircle2 className="h-5 w-5 text-success" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex items-center justify-between py-2 border-b">
                          <span className="font-medium">Offline Mode</span>
                          {tool.features.offline_mode ? (
                            <CheckCircle2 className="h-5 w-5 text-success" />
                          ) : (
                            <XCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <span className="font-medium">Languages Supported</span>
                          <Badge>{tool.features.languages_supported}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Integrations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tool.integrations.map(integration => (
                          <Badge key={integration} variant="secondary">
                            {integration}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="pricing" className="space-y-6">
                  {tool.pricing.free_tier.available && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Free Tier</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{tool.pricing.free_tier.limits}</p>
                      </CardContent>
                    </Card>
                  )}

                  <div className="grid md:grid-cols-2 gap-4">
                    {tool.pricing.plans.map(plan => (
                      <Card key={plan.name}>
                        <CardHeader>
                          <CardTitle className="flex items-baseline justify-between">
                            <span>{plan.name}</span>
                            <span className="text-2xl font-bold">${plan.price}</span>
                          </CardTitle>
                          <p className="text-sm text-muted-foreground">per {plan.billing}</p>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rating Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { label: "Ease of Use", value: tool.ratings.ease_of_use },
                        { label: "Features", value: tool.ratings.features },
                        { label: "Value for Money", value: tool.ratings.value },
                        { label: "Customer Support", value: tool.ratings.support },
                      ].map((rating) => (
                        <div key={rating.label}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">{rating.label}</span>
                            <span className="text-sm font-semibold">{rating.value}/5</span>
                          </div>
                          <Progress value={rating.value * 20} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Company</p>
                    <p className="font-semibold">{tool.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Pricing Model</p>
                    <Badge>{tool.pricing.model}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Starting Price</p>
                    <p className="font-semibold">
                      {tool.pricing.free_tier.available 
                        ? "Free" 
                        : `$${tool.pricing.plans[0]?.price}/mo`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Model Type</p>
                    <p className="text-sm">{tool.technical.model_type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Uptime</p>
                    <p className="text-sm">{tool.technical.uptime}</p>
                  </div>
                </CardContent>
              </Card>

              {similarTools.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Similar Tools</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {similarTools.map(similarTool => (
                      <Link 
                        key={similarTool.id} 
                        to={`/tool/${similarTool.slug}`}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-primary">{similarTool.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {similarTool.name}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {similarTool.tagline}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToolDetail;
