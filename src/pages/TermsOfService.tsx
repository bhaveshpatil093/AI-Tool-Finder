import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  AlertTriangle, 
  Shield, 
  UserX,
  Gavel,
  CheckCircle2
} from 'lucide-react';

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle2,
      content: [
        "By accessing and using AI Tool Finder, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, you may not use our service",
        "We reserve the right to modify these terms at any time without prior notice",
        "Your continued use of the service constitutes acceptance of any modifications"
      ]
    },
    {
      title: "Description of Service",
      icon: FileText,
      content: [
        "AI Tool Finder is a platform for discovering, comparing, and evaluating AI tools",
        "We provide information about AI tools, their features, pricing, and capabilities",
        "Our service includes comparison tools, recommendations, and user reviews",
        "We do not guarantee the accuracy or completeness of tool information"
      ]
    },
    {
      title: "User Responsibilities",
      icon: UserX,
      content: [
        "You must provide accurate and complete information when creating an account",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree not to use the service for any unlawful or prohibited activities",
        "You must not attempt to gain unauthorized access to our systems"
      ]
    },
    {
      title: "Prohibited Uses",
      icon: AlertTriangle,
      content: [
        "Using the service for any illegal or unauthorized purpose",
        "Transmitting viruses, malware, or other harmful code",
        "Attempting to reverse engineer or hack our systems",
        "Violating any applicable laws or regulations"
      ]
    },
    {
      title: "Intellectual Property",
      icon: Shield,
      content: [
        "All content on our platform is protected by copyright and other intellectual property laws",
        "You may not reproduce, distribute, or create derivative works without permission",
        "Tool information is provided for informational purposes only",
        "We respect the intellectual property rights of third parties"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: Gavel,
      content: [
        "We provide the service 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount you paid for the service",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: October 7, 2024
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="pt-8 pb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  Welcome to AI Tool Finder by KAYAHA. These Terms of Service ("Terms") govern your use 
                  of our website and services. Please read these terms carefully before using our platform.
                </p>
                <p className="text-muted-foreground">
                  By accessing or using our service, you agree to be bound by these Terms. If you disagree 
                  with any part of these terms, then you may not access the service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Main Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardContent className="pt-8 pb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Account Termination */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Account Termination</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-muted-foreground">
                  Upon termination, your right to use the service will cease immediately. If you wish to 
                  terminate your account, you may simply discontinue using the service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Disclaimers</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  The information on this website is provided on an "as is" basis. To the fullest extent 
                  permitted by law, we exclude all representations, warranties, conditions and terms 
                  relating to our website and the use of this website.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• We do not warrant that the website will be constantly available or available at all</li>
                  <li>• We do not warrant that the information on this website is complete, true, accurate or non-misleading</li>
                  <li>• We do not warrant that the tools listed on our platform will meet your requirements</li>
                  <li>• We are not responsible for the actions or policies of third-party tool providers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Governing Law</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  These Terms shall be interpreted and governed by the laws of the United States, without 
                  regard to its conflict of law provisions. Our failure to enforce any right or provision 
                  of these Terms will not be considered a waiver of those rights.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Changes to Terms</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any 
                  time. If a revision is material, we will try to provide at least 30 days notice prior 
                  to any new terms taking effect.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="px-4 py-2">
                  Email: legal@kayaha.ai
                </Badge>
                <Badge variant="outline" className="px-4 py-2">
                  Phone: +1 (555) 123-4567
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
