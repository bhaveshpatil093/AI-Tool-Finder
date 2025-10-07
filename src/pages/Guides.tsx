import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  User, 
  Star,
  CheckCircle2,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const Guides = () => {
  const guides = [
    {
      title: "Getting Started with AI Tools",
      description: "A beginner's guide to understanding and using AI tools effectively",
      difficulty: "Beginner",
      duration: "15 min",
      topics: ["Introduction", "Basic Concepts", "First Steps"],
      icon: BookOpen,
      featured: true
    },
    {
      title: "How to Compare AI Tools",
      description: "Learn how to evaluate and compare different AI tools side-by-side",
      difficulty: "Intermediate",
      duration: "20 min",
      topics: ["Comparison Criteria", "Feature Analysis", "Decision Making"],
      icon: Target
    },
    {
      title: "AI Tool Security Best Practices",
      description: "Essential security considerations when using AI tools in your workflow",
      difficulty: "Advanced",
      duration: "25 min",
      topics: ["Data Privacy", "API Security", "Compliance"],
      icon: Shield
    },
    {
      title: "Integrating AI Tools into Your Workflow",
      description: "Step-by-step guide to seamlessly incorporate AI tools into your daily work",
      difficulty: "Intermediate",
      duration: "30 min",
      topics: ["Workflow Design", "Tool Selection", "Implementation"],
      icon: Zap
    },
    {
      title: "AI Tool Pricing and Budgeting",
      description: "Understanding pricing models and how to budget for AI tools effectively",
      difficulty: "Beginner",
      duration: "18 min",
      topics: ["Pricing Models", "Cost Analysis", "Budget Planning"],
      icon: Target
    },
    {
      title: "Building Custom AI Workflows",
      description: "Advanced guide to creating custom workflows with multiple AI tools",
      difficulty: "Advanced",
      duration: "45 min",
      topics: ["Workflow Design", "API Integration", "Automation"],
      icon: Zap
    }
  ];

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Tool Guides
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides to help you master AI tools and make informed decisions
            </p>
          </div>

          {/* Featured Guide */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              Featured Guide
            </h2>
            {guides.filter(guide => guide.featured).map((guide) => (
              <Card key={guide.title} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <guide.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <Badge className={difficultyColors[guide.difficulty as keyof typeof difficultyColors]}>
                          {guide.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {guide.difficulty} Level
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {guide.topics.map((topic) => (
                        <Badge key={topic} variant="outline">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <Button className="group/btn">
                      Start Guide
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                        <guide.icon className="h-12 w-12 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">Complete Guide</h4>
                      <p className="text-sm text-muted-foreground">
                        Step-by-step instructions with examples
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* All Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">All Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.filter(guide => !guide.featured).map((guide, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <guide.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge className={difficultyColors[guide.difficulty as keyof typeof difficultyColors]}>
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {guide.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {guide.difficulty}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {guide.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{guide.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" className="w-full group/btn">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Tips */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="pt-12 pb-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">Quick Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Start Small</h3>
                    <p className="text-sm text-muted-foreground">
                      Begin with one tool and master it before adding more
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Define Goals</h3>
                    <p className="text-sm text-muted-foreground">
                      Clearly define what you want to achieve with AI tools
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Security First</h3>
                    <p className="text-sm text-muted-foreground">
                      Always consider data privacy and security implications
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep up with the latest developments in AI tools
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guides;
