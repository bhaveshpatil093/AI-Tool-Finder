import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Target, 
  Users, 
  Award, 
  Heart,
  ArrowRight,
  CheckCircle2,
  Globe,
  Zap,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: "AI Tools Listed", value: "50+", icon: Sparkles },
    { label: "Categories Covered", value: "20+", icon: Target },
    { label: "Happy Users", value: "50K+", icon: Users },
    { label: "Comparisons Made", value: "10K+", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We meticulously verify and update tool information to ensure accuracy and reliability."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear, honest information about pricing, features, and limitations of every tool."
    },
    {
      icon: Users,
      title: "Community",
      description: "Built by the community, for the community. Your feedback shapes our platform."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always staying ahead of the curve with the latest AI tools and technologies."
    }
  ];

  const team = [
    {
      name: "KAYAHA Development Team",
      role: "Core Development",
      description: "Building the future of AI tool discovery"
    },
    {
      name: "KAYAHA Design Team", 
      role: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences"
    },
    {
      name: "KAYAHA Engineering Team",
      role: "Backend & Infrastructure", 
      description: "Ensuring reliability and performance at scale"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5" variant="secondary">
              <Heart className="h-3 w-3 mr-1.5" />
              About AI Tool Finder
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Empowering AI Innovation
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              AI Tool Finder by KAYAHA is the comprehensive platform that helps you discover, 
              compare, and find the perfect AI tools for your specific needs. We believe in 
              democratizing access to AI technology.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <Card>
              <CardContent className="pt-12 pb-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    To make AI technology accessible to everyone by providing a centralized platform 
                    where users can discover, compare, and choose the right AI tools for their specific 
                    needs. We believe that the right tool can transform how you work, create, and innovate.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Badge variant="outline" className="px-4 py-2">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Verified Tools
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      <Globe className="h-4 w-4 mr-2" />
                      Global Access
                    </Badge>
                    <Badge variant="outline" className="px-4 py-2">
                      <Users className="h-4 w-4 mr-2" />
                      Community Driven
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <Card>
              <CardContent className="pt-12 pb-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-6">
                      AI Tool Finder was born from a simple observation: the AI landscape is vast and 
                      constantly evolving, making it challenging for individuals and businesses to find 
                      the right tools for their specific needs.
                    </p>
                    <p className="mb-6">
                      Founded by KAYAHA, we recognized that while AI tools were becoming more powerful 
                      and accessible, the process of discovering and comparing them was fragmented and 
                      time-consuming. Users were spending hours researching tools across multiple platforms, 
                      often missing out on better alternatives.
                    </p>
                    <p className="mb-6">
                      We set out to solve this problem by creating a comprehensive, user-friendly platform 
                      that brings together the best AI tools in one place. Our platform not only helps you 
                      discover new tools but also provides detailed comparisons, user reviews, and 
                      personalized recommendations.
                    </p>
                    <p>
                      Today, AI Tool Finder serves thousands of users worldwide, from individual creators 
                      to enterprise teams, helping them make informed decisions about AI tools and 
                      accelerate their innovation journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect AI Tool?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of users who have already discovered their ideal AI tools through our platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/browse">
                    <Button size="lg" className="gradient-primary">
                      Browse Tools
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/submit">
                    <Button size="lg" variant="outline">
                      Submit Your Tool
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
