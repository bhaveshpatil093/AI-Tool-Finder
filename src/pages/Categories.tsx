import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Image, 
  Video, 
  Code, 
  Mic, 
  Palette, 
  MessageSquare, 
  Zap, 
  Search, 
  BarChart,
  TrendingUp,
  Languages,
  ArrowRight,
  Presentation,
  Users,
  Edit,
  Heart,
  Settings,
  Music,
  Box,
  Award,
  Brain
} from "lucide-react";
import { categories, tools } from "@/data/tools";

const iconMap: Record<string, any> = {
  FileText, Image, Video, Code, Mic, Palette, 
  MessageSquare, Zap, Search, BarChart, TrendingUp, Languages,
  Presentation, Users, Edit, Heart, Settings, Music, Box, Award, Brain
};

const Categories = () => {
  const categoryDetails = categories.map(cat => {
    const categoryTools = tools.filter(t => t.category.includes(cat.name));
    const Icon = iconMap[cat.icon] || Zap;
    const topTools = categoryTools.slice(0, 3);
    
    return {
      ...cat,
      Icon,
      description: getCategoryDescription(cat.name),
      topTools
    };
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Explore AI Tools by Category</h1>
            <p className="text-lg text-muted-foreground">
              Browse our curated collection of AI tools organized by their primary use cases and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryDetails.map((category, index) => (
              <Card 
                key={category.name} 
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <category.Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h2>
                      <Badge variant="secondary">{category.count} tools</Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {category.description}
                  </p>

                  {category.topTools.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Popular tools:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {category.topTools.map(tool => (
                          <Badge key={tool.id} variant="outline" className="text-xs">
                            {tool.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link to={`/browse?category=${encodeURIComponent(category.name)}`}>
                    <Button variant="outline" className="w-full group/btn">
                      Explore {category.name}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    "Content Writing": "AI-powered writing assistants for blogs, articles, marketing copy, and more. Generate high-quality content in seconds.",
    "Image Generation": "Create stunning visuals, artwork, and graphics from text descriptions using advanced AI models.",
    "Video": "Edit, generate, and enhance videos with AI. From automated editing to synthetic video creation.",
    "Code Assistant": "AI coding assistants that help you write, debug, and optimize code faster across multiple languages.",
    "Audio & Voice": "AI tools for voice synthesis, transcription, music generation, and audio enhancement.",
    "Design": "AI-powered design tools for creating graphics, UI/UX designs, and visual content effortlessly.",
    "Chatbot": "Conversational AI for customer support, virtual assistants, and interactive experiences.",
    "Productivity": "AI tools to boost your productivity, automate tasks, and streamline workflows.",
    "Research": "AI-powered research assistants for finding, analyzing, and summarizing information.",
    "Marketing": "AI tools for marketing automation, ad creation, SEO, and campaign optimization.",
    "Presentation": "AI-powered presentation tools for creating engaging slides and visual content quickly.",
    "Meeting Assistant": "AI tools for meeting transcription, note-taking, and productivity enhancement.",
    "Transcription": "Convert speech to text with high accuracy using advanced AI transcription services.",
    "Writing Assistant": "AI tools for grammar checking, style improvement, and writing enhancement.",
    "AI Companion": "Personal AI companions for emotional support, conversation, and mental health.",
    "Automation": "AI-powered automation tools for streamlining business processes and workflows.",
    "Music": "AI tools for music generation, composition, and audio content creation.",
    "3D Generation": "AI-powered 3D modeling, capture, and generation for creative and technical projects.",
    "Branding": "AI tools for logo design, brand identity, and visual branding solutions.",
    "ML Platform": "Machine learning platforms and tools for AI model deployment and development."
  };
  
  return descriptions[category] || "Discover powerful AI tools in this category.";
}

export default Categories;
