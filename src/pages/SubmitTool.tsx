import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Plus, 
  X, 
  Upload, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  DollarSign,
  Star,
  Globe,
  Smartphone,
  Users,
  Code,
  Shield,
  Clock
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Tool name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  website: z.string().url('Please enter a valid URL'),
  tagline: z.string().min(10, 'Tagline must be at least 10 characters'),
  description: z.string().min(50, 'Description must be at least 50 characters'),
  category: z.array(z.string()).min(1, 'Please select at least one category'),
  pricingModel: z.string().min(1, 'Please select a pricing model'),
  freeTier: z.boolean(),
  startingPrice: z.number().min(0, 'Price must be positive'),
  features: z.object({
    apiAccess: z.boolean(),
    mobileApp: z.boolean(),
    teamCollaboration: z.boolean(),
    offlineMode: z.boolean(),
    customTraining: z.boolean(),
  }),
  languagesSupported: z.number().min(1, 'Must support at least 1 language'),
  inputTypes: z.array(z.string()).min(1, 'Please select at least one input type'),
  outputFormats: z.array(z.string()).min(1, 'Please select at least one output format'),
  integrations: z.array(z.string()).optional(),
  modelType: z.string().min(1, 'Please specify the model type'),
  processing: z.string().min(1, 'Please specify the processing type'),
  gdprCompliant: z.boolean(),
  dataPrivacy: z.string().min(1, 'Please specify data privacy level'),
  uptime: z.string().min(1, 'Please specify uptime'),
  launchDate: z.string().min(1, 'Please specify launch date'),
  contactEmail: z.string().email('Please enter a valid email'),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters'),
});

const categories = [
  'Content Writing', 'Image Generation', 'Video', 'Code Assistant',
  'Audio & Voice', 'Design', 'Chatbot', 'Productivity', 'Research',
  'Marketing', 'Presentation', 'Meeting Assistant', 'Transcription',
  'Writing Assistant', 'AI Companion', 'Automation', 'Music',
  '3D Generation', 'Branding', 'ML Platform'
];

const inputTypes = [
  'Text', 'Image', 'Audio', 'Video', 'Document', 'Code', 'Data', 'Voice'
];

const outputFormats = [
  'Text', 'Image', 'Audio', 'Video', 'Document', 'Code', 'Data', 'JSON', 'PDF'
];

const SubmitTool = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [customCategory, setCustomCategory] = useState('');
  const [customIntegration, setCustomIntegration] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      website: '',
      tagline: '',
      description: '',
      category: [],
      pricingModel: '',
      freeTier: false,
      startingPrice: 0,
      features: {
        apiAccess: false,
        mobileApp: false,
        teamCollaboration: false,
        offlineMode: false,
        customTraining: false,
      },
      languagesSupported: 1,
      inputTypes: [],
      outputFormats: [],
      integrations: [],
      modelType: '',
      processing: '',
      gdprCompliant: false,
      dataPrivacy: '',
      uptime: '',
      launchDate: '',
      contactEmail: '',
      contactName: '',
    },
  });

  const addCustomCategory = () => {
    if (customCategory.trim() && !form.getValues('category').includes(customCategory)) {
      const currentCategories = form.getValues('category');
      form.setValue('category', [...currentCategories, customCategory]);
      setCustomCategory('');
    }
  };

  const removeCategory = (category: string) => {
    const currentCategories = form.getValues('category');
    form.setValue('category', currentCategories.filter(c => c !== category));
  };

  const addCustomIntegration = () => {
    if (customIntegration.trim() && !form.getValues('integrations')?.includes(customIntegration)) {
      const currentIntegrations = form.getValues('integrations') || [];
      form.setValue('integrations', [...currentIntegrations, customIntegration]);
      setCustomIntegration('');
    }
  };

  const removeIntegration = (integration: string) => {
    const currentIntegrations = form.getValues('integrations') || [];
    form.setValue('integrations', currentIntegrations.filter(i => i !== integration));
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Tool submission:', values);
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="text-center">
              <CardContent className="pt-12 pb-12">
                <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-success" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Tool Submitted Successfully!</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Thank you for submitting your AI tool. Our team will review it and add it to our platform within 2-3 business days.
                </p>
                <div className="space-y-4">
                  <Button 
                    onClick={() => setSubmitSuccess(false)}
                    className="gradient-primary"
                  >
                    Submit Another Tool
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/'}>
                    Back to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
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
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Submit Your AI Tool
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your AI tool with our community and help others discover innovative solutions
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tool Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., ChatGPT" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., OpenAI" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL *</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tagline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tagline *</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of what your tool does" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detailed Description *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide a comprehensive description of your tool's capabilities, use cases, and unique features..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Categories *</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={form.watch('category').includes(category)}
                          onCheckedChange={(checked) => {
                            const currentCategories = form.getValues('category');
                            if (checked) {
                              form.setValue('category', [...currentCategories, category]);
                            } else {
                              form.setValue('category', currentCategories.filter(c => c !== category));
                            }
                          }}
                        />
                        <Label htmlFor={category} className="text-sm">{category}</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add custom category"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                    />
                    <Button type="button" variant="outline" onClick={addCustomCategory}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {form.watch('category').map((category) => (
                      <Badge key={category} variant="secondary" className="flex items-center gap-1">
                        {category}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => removeCategory(category)}
                        />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Pricing Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="pricingModel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pricing Model *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select pricing model" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Freemium">Freemium</SelectItem>
                              <SelectItem value="Free">Free</SelectItem>
                              <SelectItem value="Paid">Paid</SelectItem>
                              <SelectItem value="Enterprise">Enterprise</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startingPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Starting Price (USD/month)</FormLabel>
                          <FormControl>
                            <Input 
                              type="number" 
                              placeholder="0" 
                              {...field}
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="freeTier"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Offers Free Tier</FormLabel>
                          <FormDescription>
                            Does your tool offer a free version or trial?
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Features & Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="features.apiAccess"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="flex items-center gap-2">
                              <Code className="h-4 w-4" />
                              API Access
                            </FormLabel>
                            <FormDescription>
                              Tool provides API for developers
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.mobileApp"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="flex items-center gap-2">
                              <Smartphone className="h-4 w-4" />
                              Mobile App
                            </FormLabel>
                            <FormDescription>
                              Available on mobile devices
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.teamCollaboration"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              Team Collaboration
                            </FormLabel>
                            <FormDescription>
                              Supports team features
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="features.offlineMode"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="flex items-center gap-2">
                              <Shield className="h-4 w-4" />
                              Offline Mode
                            </FormLabel>
                            <FormDescription>
                              Works without internet
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="languagesSupported"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Languages Supported</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="1" 
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Technical Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Technical Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="modelType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Model Type *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., GPT-4, Claude, Custom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="processing"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Processing Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select processing type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Cloud">Cloud</SelectItem>
                              <SelectItem value="Local">Local</SelectItem>
                              <SelectItem value="Hybrid">Hybrid</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="dataPrivacy"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data Privacy Level *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select privacy level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="High">High</SelectItem>
                              <SelectItem value="Medium">Medium</SelectItem>
                              <SelectItem value="Low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="uptime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Uptime *</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 99.9%" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="gdprCompliant"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>GDPR Compliant</FormLabel>
                          <FormDescription>
                            Tool complies with GDPR regulations
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="contactName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="launchDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Launch Date *</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="gradient-primary min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-5 w-5" />
                      Submit Tool
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SubmitTool;
