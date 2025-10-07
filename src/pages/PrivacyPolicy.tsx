import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  UserCheck,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal information you provide when creating an account (name, email address)",
        "Usage data including pages visited, tools compared, and search queries",
        "Device information such as browser type, operating system, and IP address",
        "Cookies and similar tracking technologies to enhance your experience"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "To provide and improve our services",
        "To personalize your experience and show relevant content",
        "To communicate with you about updates and new features",
        "To analyze usage patterns and improve our platform"
      ]
    },
    {
      title: "Information Sharing",
      icon: UserCheck,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share aggregated, non-personal data for research purposes",
        "We may disclose information if required by law or to protect our rights",
        "We may share data with trusted service providers who assist in our operations"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "We implement industry-standard security measures to protect your data",
        "All data transmission is encrypted using SSL/TLS protocols",
        "We regularly audit our security practices and update them as needed",
        "Access to personal data is restricted to authorized personnel only"
      ]
    },
    {
      title: "Your Rights",
      icon: Shield,
      content: [
        "Right to access your personal data",
        "Right to correct inaccurate information",
        "Right to delete your account and associated data",
        "Right to opt-out of marketing communications"
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Privacy Policy
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
                  At AI Tool Finder by KAYAHA, we are committed to protecting your privacy and ensuring 
                  the security of your personal information. This Privacy Policy explains how we collect, 
                  use, and safeguard your information when you use our platform.
                </p>
                <p className="text-muted-foreground">
                  By using our service, you agree to the collection and use of information in accordance 
                  with this policy. If you do not agree with our policies and practices, please do not 
                  use our service.
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
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cookies Section */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Cookies and Tracking</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze site traffic, and personalize content. You can control cookie settings through 
                  your browser preferences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Required for basic site functionality and security
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our site
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Data Retention</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Account data: Retained until account deletion</li>
                  <li>• Usage data: Retained for up to 2 years for analytics</li>
                  <li>• Marketing data: Retained until you opt-out</li>
                  <li>• Legal requirements: Retained as required by applicable law</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* International Transfers */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">International Data Transfers</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure that such transfers comply with applicable data protection laws and implement 
                  appropriate safeguards to protect your personal information.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Children's Privacy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Our service is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian 
                  and believe your child has provided us with personal information, please contact us.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="mt-8">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-6">Changes to This Privacy Policy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="pt-8 pb-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions About This Privacy Policy?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="outline" className="px-4 py-2">
                  Email: privacy@kayaha.ai
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

export default PrivacyPolicy;
