import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Users, 
  CheckCircle2,
  Zap,
  Target,
  Shield
} from "lucide-react";
import { categories } from "@/data/tools";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const stats = [
    { label: "AI Tools Listed", value: "50+", icon: Sparkles },
    { label: "Comparisons Today", value: "2,450", icon: TrendingUp },
    { label: "Happy Users", value: "50K+", icon: Users },
  ];

  const features = [
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Find the perfect AI tools with intelligent search and filtering"
    },
    {
      icon: Target,
      title: "Side-by-Side Compare",
      description: "Compare features, pricing, and performance in detail"
    },
    {
      icon: Sparkles,
      title: "AI Recommendations",
      description: "Get personalized tool suggestions based on your needs"
    },
    {
      icon: Shield,
      title: "Verified Reviews",
      description: "Read authentic reviews from real users and experts"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 px-4 py-1.5" variant="secondary">
              <Sparkles className="h-3 w-3 mr-1.5" />
              Find Your Perfect AI Tools
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              AI Tool Finder by KAYAHA
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Compare features, pricing, and performance. Get personalized recommendations from our curated collection of 50+ AI tools.
            </p>

            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Search for AI tools... (e.g., 'image generation', 'code assistant')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg shadow-lg border-2 focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/browse">
                <Button size="lg" className="gradient-primary group">
                  Browse All Tools
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/recommendations">
                <Button size="lg" variant="outline">
                  Get Recommendations
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New: Curated picks carousel */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Editor’s Picks</h2>
            <Link to="/recommendations" className="text-sm text-primary hover:underline">See all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lightweight feature tiles without pulling full tools data */}
            {["Claude Code", "Framer AI", "Gamma"].map((title, i) => (
              <Card key={title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{title}</h3>
                    <Badge variant="secondary">Recommended</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Handpicked for great UX, value, and performance.</p>
                  <Link to="/recommendations">
                    <Button variant="outline" size="sm">
                      Learn why
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New: Trust signals strip */}
      <section className="py-8 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Curated database</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Transparent pricing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Real user feedback</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No spam</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="flex items-center justify-center gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Find the Right AI Tool
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to discover, evaluate, and choose the best AI tools for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse AI tools organized by their primary use case
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 12).map((category, index) => (
              <Link 
                key={category.name}
                to={`/browse?category=${encodeURIComponent(category.name)}`}
              >
                <Card className="group hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count} tools</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/categories">
              <Button variant="outline" size="lg">
                View All Categories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 gradient-hero opacity-10" />
            <CardContent className="pt-12 pb-12 text-center relative">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Find Your Perfect AI Tool?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who have discovered the best AI tools for their needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/recommendations">
                  <Button size="lg" className="gradient-primary">
                    Get Personalized Recommendations
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" variant="outline">
                    Browse All Tools
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
