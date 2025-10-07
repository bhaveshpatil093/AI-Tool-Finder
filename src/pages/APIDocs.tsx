import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, 
  Copy, 
  ExternalLink, 
  Key, 
  Server, 
  Zap,
  CheckCircle2,
  AlertCircle,
  Info
} from 'lucide-react';

const APIDocs = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/api/tools",
      description: "Get all AI tools",
      parameters: [
        { name: "category", type: "string", required: false, description: "Filter by category" },
        { name: "limit", type: "number", required: false, description: "Number of results (default: 50)" },
        { name: "offset", type: "number", required: false, description: "Offset for pagination" }
      ]
    },
    {
      method: "GET",
      path: "/api/tools/{id}",
      description: "Get specific AI tool by ID",
      parameters: [
        { name: "id", type: "string", required: true, description: "Tool ID" }
      ]
    },
    {
      method: "GET",
      path: "/api/tools/search",
      description: "Search AI tools",
      parameters: [
        { name: "q", type: "string", required: true, description: "Search query" },
        { name: "category", type: "string", required: false, description: "Filter by category" }
      ]
    },
    {
      method: "POST",
      path: "/api/tools/compare",
      description: "Compare multiple AI tools",
      parameters: [
        { name: "toolIds", type: "array", required: true, description: "Array of tool IDs to compare" }
      ]
    }
  ];

  const codeExamples = {
    javascript: `// Get all tools
const response = await fetch('https://api.aitoolfinder.com/v1/tools', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const tools = await response.json();

// Search tools
const searchResponse = await fetch('https://api.aitoolfinder.com/v1/tools/search?q=chatbot', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});
const searchResults = await searchResponse.json();`,

    python: `import requests

# Get all tools
headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.aitoolfinder.com/v1/tools', headers=headers)
tools = response.json()

# Search tools
search_response = requests.get(
    'https://api.aitoolfinder.com/v1/tools/search',
    params={'q': 'chatbot'},
    headers=headers
)
search_results = search_response.json()`,

    curl: `# Get all tools
curl -X GET "https://api.aitoolfinder.com/v1/tools" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Search tools
curl -X GET "https://api.aitoolfinder.com/v1/tools/search?q=chatbot" \\
  -H "Authorization: Bearer YOUR_API_KEY"`
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              API Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrate AI Tool Finder into your applications with our comprehensive REST API
            </p>
          </div>

          {/* Quick Start */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Get API Key</h3>
                  <p className="text-sm text-muted-foreground">
                    Sign up and get your free API key
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Make Requests</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our REST API to fetch data
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Integrate</h3>
                  <p className="text-sm text-muted-foreground">
                    Build amazing applications
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Endpoints */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">API Endpoints</h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={endpoint.method === 'GET' ? 'default' : 'secondary'}
                          className="font-mono"
                        >
                          {endpoint.method}
                        </Badge>
                        <code className="text-lg font-mono bg-muted px-3 py-1 rounded">
                          {endpoint.path}
                        </code>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-4">{endpoint.description}</p>
                    {endpoint.parameters.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Parameters:</h4>
                        <div className="space-y-2">
                          {endpoint.parameters.map((param, paramIndex) => (
                            <div key={paramIndex} className="flex items-center gap-4 text-sm">
                              <code className="font-mono bg-muted px-2 py-1 rounded min-w-[80px]">
                                {param.name}
                              </code>
                              <Badge variant="outline" className="text-xs">
                                {param.type}
                              </Badge>
                              <Badge 
                                variant={param.required ? "destructive" : "secondary"}
                                className="text-xs"
                              >
                                {param.required ? "Required" : "Optional"}
                              </Badge>
                              <span className="text-muted-foreground">{param.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="curl">cURL</TabsTrigger>
              </TabsList>
              <TabsContent value="javascript" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{codeExamples.javascript}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="python" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{codeExamples.python}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="curl" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{codeExamples.curl}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Response Examples */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Response Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Success Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "data": {
    "tools": [
      {
        "id": "1",
        "name": "ChatGPT",
        "company": "OpenAI",
        "category": ["Chatbot", "Content Writing"],
        "pricing": {
          "model": "Freemium",
          "free_tier": {
            "available": true
          }
        },
        "ratings": {
          "overall": 4.5,
          "total_reviews": 15000
        }
      }
    ],
    "total": 50,
    "page": 1,
    "limit": 10
  }
}`}
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    Error Response
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": false,
  "error": {
    "code": "INVALID_API_KEY",
    "message": "The provided API key is invalid",
    "details": "Please check your API key and try again"
  }
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Rate Limits */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Rate Limits & Pricing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Free</div>
                  <div className="text-sm text-muted-foreground mb-4">Perfect for getting started</div>
                  <ul className="text-sm space-y-1">
                    <li>1,000 requests/month</li>
                    <li>Basic endpoints</li>
                    <li>Community support</li>
                  </ul>
                </div>
                <div className="text-center border-2 border-primary rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">Pro</div>
                  <div className="text-sm text-muted-foreground mb-4">For growing applications</div>
                  <ul className="text-sm space-y-1">
                    <li>50,000 requests/month</li>
                    <li>All endpoints</li>
                    <li>Priority support</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">Enterprise</div>
                  <div className="text-sm text-muted-foreground mb-4">For large-scale applications</div>
                  <ul className="text-sm space-y-1">
                    <li>Unlimited requests</li>
                    <li>Custom endpoints</li>
                    <li>Dedicated support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Get your API key and start building amazing applications with AI Tool Finder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary">
                  Get API Key
                </Button>
                <Button size="lg" variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default APIDocs;
