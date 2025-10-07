export interface Tool {
  id: string;
  name: string;
  slug: string;
  logo_url: string;
  company: string;
  tagline: string;
  description: string;
  category: string[];
  website: string;
  pricing: {
    model: string;
    free_tier: {
      available: boolean;
      limits: string;
    };
    plans: {
      name: string;
      price: number;
      billing: string;
      features: string[];
    }[];
  };
  features: {
    api_access: boolean;
    offline_mode: boolean;
    mobile_app: boolean;
    team_collaboration: boolean;
    custom_training: boolean;
    languages_supported: number;
    input_types: string[];
    output_formats: string[];
  };
  technical: {
    model_type: string;
    processing: string;
    gdpr_compliant: boolean;
    data_privacy: string;
    uptime: string;
  };
  integrations: string[];
  ratings: {
    overall: number;
    ease_of_use: number;
    features: number;
    value: number;
    support: number;
    total_reviews: number;
  };
  pros: string[];
  cons: string[];
  best_for: string[];
  launch_date: string;
  last_updated: string;
}

export const tools: Tool[] = [
  {
    id: "1",
    name: "ChatGPT",
    slug: "chatgpt",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    company: "OpenAI",
    tagline: "Conversational AI that understands and generates human-like text",
    description: "ChatGPT is a state-of-the-art conversational AI model developed by OpenAI. It excels at understanding context, generating creative content, answering questions, and assisting with a wide variety of tasks from coding to creative writing. Built on the GPT-4 architecture, it represents one of the most advanced language models available.",
    category: ["Content Writing", "Chatbots", "Productivity"],
    website: "https://chat.openai.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "GPT-3.5, standard response time"
      },
      plans: [
        {
          name: "Plus",
          price: 20,
          billing: "monthly",
          features: ["GPT-4 access", "Faster responses", "Priority access", "DALL-E integration"]
        },
        {
          name: "Team",
          price: 30,
          billing: "monthly",
          features: ["Team workspace", "Admin console", "Usage insights", "Higher message caps"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 95,
      input_types: ["Text", "Images"],
      output_formats: ["Text", "Code"]
    },
    technical: {
      model_type: "GPT-4 / GPT-3.5",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Zapier", "Slack", "Microsoft Teams", "API"],
    ratings: {
      overall: 4.7,
      ease_of_use: 4.8,
      features: 4.7,
      value: 4.6,
      support: 4.5,
      total_reviews: 15420
    },
    pros: ["Exceptional language understanding", "Versatile applications", "Regular updates", "Strong developer API"],
    cons: ["Can be expensive at scale", "Occasional inaccuracies", "Response time varies"],
    best_for: ["Content creation", "Customer support", "Research assistance", "Coding help"],
    launch_date: "2022-11-30",
    last_updated: "2024-12-01"
  },
  {
    id: "2",
    name: "Claude",
    slug: "claude",
    logo_url: "https://www.anthropic.com/_next/image?url=%2Fimages%2Ficons%2Fclaude-app-icon.png&w=128&q=75",
    company: "Anthropic",
    tagline: "AI assistant focused on being helpful, harmless, and honest",
    description: "Claude is Anthropic's AI assistant, designed with a strong emphasis on safety and ethical AI practices. It excels at nuanced conversation, complex reasoning, and producing high-quality written content. Claude offers extended context windows, making it ideal for analyzing long documents and maintaining coherent conversations.",
    category: ["Content Writing", "Chatbots", "Research"],
    website: "https://claude.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Limited messages per day"
      },
      plans: [
        {
          name: "Pro",
          price: 20,
          billing: "monthly",
          features: ["5x more usage", "Priority access", "Early access to features"]
        },
        {
          name: "Team",
          price: 30,
          billing: "monthly",
          features: ["Team billing", "Admin tools", "Extended context", "Usage analytics"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 70,
      input_types: ["Text", "Documents"],
      output_formats: ["Text", "Code"]
    },
    technical: {
      model_type: "Claude 3 Opus/Sonnet",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "Very High",
      uptime: "99.8%"
    },
    integrations: ["Zapier", "Slack", "API"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.7,
      features: 4.6,
      value: 4.5,
      support: 4.6,
      total_reviews: 8320
    },
    pros: ["Extended context window", "Strong ethical guidelines", "Excellent reasoning", "Document analysis"],
    cons: ["Fewer integrations than competitors", "Strict content policies", "Limited free tier"],
    best_for: ["Document analysis", "Research", "Ethical AI applications", "Long-form content"],
    launch_date: "2023-03-14",
    last_updated: "2024-11-28"
  },
  {
    id: "3",
    name: "Midjourney",
    slug: "midjourney",
    logo_url: "https://styles.redditmedia.com/t5_38unhe/styles/communityIcon_giq4f9s3xkd91.png",
    company: "Midjourney Inc",
    tagline: "Create stunning AI art with simple text prompts",
    description: "Midjourney is a leading AI image generation tool known for producing artistic, high-quality visuals from text descriptions. It's particularly favored by artists and designers for its distinctive aesthetic style and ability to create imaginative, dreamlike imagery. The tool operates through Discord and offers various aspect ratios and style parameters.",
    category: ["Image Generation", "Design"],
    website: "https://midjourney.com",
    pricing: {
      model: "Subscription",
      free_tier: {
        available: false,
        limits: "N/A"
      },
      plans: [
        {
          name: "Basic",
          price: 10,
          billing: "monthly",
          features: ["200 generations/month", "General commercial terms"]
        },
        {
          name: "Standard",
          price: 30,
          billing: "monthly",
          features: ["15 hrs fast mode", "Unlimited relaxed", "Commercial terms"]
        },
        {
          name: "Pro",
          price: 60,
          billing: "monthly",
          features: ["30 hrs fast mode", "Unlimited relaxed", "Stealth mode", "Max queue"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text"],
      output_formats: ["PNG", "JPG"]
    },
    technical: {
      model_type: "Proprietary Diffusion Model",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "Medium",
      uptime: "99.5%"
    },
    integrations: ["Discord"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.2,
      features: 4.7,
      value: 4.4,
      support: 4.3,
      total_reviews: 12450
    },
    pros: ["Stunning artistic quality", "Unique aesthetic", "Active community", "Regular model updates"],
    cons: ["Discord-only interface", "No free tier", "Learning curve for prompts", "No API yet"],
    best_for: ["Concept art", "Marketing visuals", "Artistic projects", "Creative exploration"],
    launch_date: "2022-07-12",
    last_updated: "2024-11-30"
  },
  {
    id: "4",
    name: "GitHub Copilot",
    slug: "github-copilot",
    logo_url: "https://github.githubassets.com/assets/copilot-logo-9d0191d0.png",
    company: "GitHub (Microsoft)",
    tagline: "Your AI pair programmer for faster, smarter coding",
    description: "GitHub Copilot is an AI-powered code completion tool that suggests whole lines or entire functions as you type. Trained on billions of lines of public code, it helps developers write code faster and with fewer errors. It integrates seamlessly into popular IDEs and understands context to provide relevant suggestions.",
    category: ["Code", "Productivity"],
    website: "https://github.com/features/copilot",
    pricing: {
      model: "Subscription",
      free_tier: {
        available: true,
        limits: "Students, teachers, and open source maintainers"
      },
      plans: [
        {
          name: "Individual",
          price: 10,
          billing: "monthly",
          features: ["Code completion", "Chat", "CLI", "Mobile"]
        },
        {
          name: "Business",
          price: 19,
          billing: "monthly",
          features: ["Organization license", "Policy management", "IP indemnity"]
        },
        {
          name: "Enterprise",
          price: 39,
          billing: "monthly",
          features: ["Fine-tuned models", "Audit logs", "SSO", "Premium support"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 50,
      input_types: ["Code", "Comments"],
      output_formats: ["Code"]
    },
    technical: {
      model_type: "GPT-4 based Codex",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["VS Code", "Visual Studio", "JetBrains", "Neovim", "Azure"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.8,
      features: 4.7,
      value: 4.5,
      support: 4.4,
      total_reviews: 23100
    },
    pros: ["Excellent IDE integration", "Multi-language support", "Real-time suggestions", "Learns from context"],
    cons: ["Occasional incorrect suggestions", "Requires internet", "Subscription cost", "Privacy concerns"],
    best_for: ["Professional developers", "Team coding", "Learning new languages", "Rapid prototyping"],
    launch_date: "2021-06-29",
    last_updated: "2024-12-05"
  },
  {
    id: "5",
    name: "Jasper",
    slug: "jasper",
    logo_url: "https://www.jasper.ai/hubfs/raw_assets/public/Jasper_May2023/images/jasper-icon.svg",
    company: "Jasper AI",
    tagline: "AI content platform for enterprise marketing teams",
    description: "Jasper is a comprehensive AI content platform designed for marketing teams. It helps create blog posts, social media content, ad copy, and more. With brand voice features and team collaboration tools, Jasper is built for businesses that need consistent, high-quality content at scale.",
    category: ["Content Writing", "Marketing"],
    website: "https://jasper.ai",
    pricing: {
      model: "Subscription",
      free_tier: {
        available: true,
        limits: "7-day trial"
      },
      plans: [
        {
          name: "Creator",
          price: 49,
          billing: "monthly",
          features: ["1 user", "Unlimited words", "50+ templates", "Brand voice"]
        },
        {
          name: "Pro",
          price: 125,
          billing: "monthly",
          features: ["5 users", "Unlimited words", "Collaboration", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 30,
      input_types: ["Text"],
      output_formats: ["Text", "HTML"]
    },
    technical: {
      model_type: "GPT-4 based",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Grammarly", "Surfer SEO", "Google Docs", "Chrome Extension"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.5,
      features: 4.6,
      value: 4.2,
      support: 4.5,
      total_reviews: 9870
    },
    pros: ["Team collaboration", "Brand voice training", "50+ templates", "SEO integration"],
    cons: ["Higher pricing", "Learning curve", "Occasional repetitive output"],
    best_for: ["Marketing teams", "Content agencies", "E-commerce", "Enterprise content"],
    launch_date: "2021-01-15",
    last_updated: "2024-11-25"
  },
  {
    id: "6",
    name: "Adobe Firefly",
    slug: "adobe-firefly",
    logo_url: "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/max2020/mnemonics/firefly.svg",
    company: "Adobe",
    tagline: "AI-powered creative tools integrated into Adobe Creative Cloud",
    description: "Adobe Firefly is a family of creative generative AI models designed to be safe for commercial use. It's integrated into Adobe Creative Cloud applications and focuses on generating images, text effects, and other creative content while respecting copyright and intellectual property.",
    category: ["Image Generation", "Design"],
    website: "https://firefly.adobe.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "25 generations per month"
      },
      plans: [
        {
          name: "Starter",
          price: 4.99,
          billing: "monthly",
          features: ["100 generations/month", "Standard commercial license"]
        },
        {
          name: "Creative Cloud",
          price: 0,
          billing: "monthly",
          features: ["Unlimited generations", "Full Creative Cloud access", "Premium features"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text", "Images"],
      output_formats: ["PNG", "JPG", "SVG"]
    },
    technical: {
      model_type: "Adobe Firefly",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Photoshop", "Illustrator", "Express", "Creative Cloud"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.5,
      features: 4.3,
      value: 4.4,
      support: 4.5,
      total_reviews: 8750
    },
    pros: ["Adobe integration", "Commercial safe", "Professional quality", "Creative Cloud ecosystem"],
    cons: ["Limited free tier", "Adobe subscription required", "Learning curve"],
    best_for: ["Adobe integration", "Professional design", "Commercial use", "Creative workflows"],
    launch_date: "2023-03-21",
    last_updated: "2024-12-01"
  },
  {
    id: "7",
    name: "Beautiful.ai",
    slug: "beautiful-ai",
    logo_url: "https://www.beautiful.ai/hubfs/Beautiful.ai%20Logo%20Files/Beautiful.ai%20Logo%20Files/Beautiful.ai%20Logo%20Files/beautiful.ai-logo.svg",
    company: "Beautiful.ai",
    tagline: "AI-powered presentation design that creates beautiful slides automatically",
    description: "Beautiful.ai is an AI-powered presentation platform that automatically designs slides based on your content. It uses smart templates and design principles to create professional presentations quickly, with features like auto-formatting, smart layouts, and real-time collaboration.",
    category: ["Presentation", "Design"],
    website: "https://beautiful.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "3 presentations, basic templates"
      },
      plans: [
        {
          name: "Pro",
          price: 12,
          billing: "monthly",
          features: ["Unlimited presentations", "Premium templates", "Brand kit", "Analytics"]
        },
        {
          name: "Team",
          price: 40,
          billing: "monthly",
          features: ["Team collaboration", "Admin controls", "Custom templates", "Priority support"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 10,
      input_types: ["Text", "Images"],
      output_formats: ["PPTX", "PDF", "PNG"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Google Drive", "Dropbox", "Slack", "Microsoft Teams"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.6,
      features: 4.3,
      value: 4.2,
      support: 4.4,
      total_reviews: 5420
    },
    pros: ["Auto-design", "Professional templates", "Easy collaboration", "Time-saving"],
    cons: ["Limited customization", "Subscription required", "Learning curve"],
    best_for: ["Presentations", "Business slides", "Quick design", "Team collaboration"],
    launch_date: "2017-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "8",
    name: "Canva AI",
    slug: "canva-ai",
    logo_url: "https://static.canva.com/web/images/favicon.ico",
    company: "Canva",
    tagline: "AI-powered design tools for quick and beautiful graphics",
    description: "Canva AI integrates artificial intelligence into the popular design platform, offering features like Magic Design, AI image generation, background removal, and smart templates. It makes professional design accessible to everyone with minimal design skills.",
    category: ["Design", "Image Generation"],
    website: "https://canva.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic templates, limited AI features"
      },
      plans: [
        {
          name: "Pro",
          price: 15,
          billing: "monthly",
          features: ["Premium templates", "AI features", "Brand kit", "Background removal"]
        },
        {
          name: "Teams",
          price: 30,
          billing: "monthly",
          features: ["Team collaboration", "Brand controls", "Advanced analytics", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 100,
      input_types: ["Text", "Images", "Templates"],
      output_formats: ["PNG", "JPG", "PDF", "MP4"]
    },
    technical: {
      model_type: "Multiple AI Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Google Drive", "Dropbox", "Slack", "Facebook", "Instagram"],
    ratings: {
      overall: 4.7,
      ease_of_use: 4.8,
      features: 4.6,
      value: 4.7,
      support: 4.6,
      total_reviews: 45620
    },
    pros: ["User-friendly", "Extensive templates", "AI integration", "Great value"],
    cons: ["Limited advanced features", "Internet required", "Template dependency"],
    best_for: ["Quick designs", "Social media", "Marketing materials", "Non-designers"],
    launch_date: "2013-01-01",
    last_updated: "2024-12-02"
  },
  {
    id: "9",
    name: "Character.AI",
    slug: "character-ai",
    logo_url: "https://character.ai/static/img/character-ai-logo.svg",
    company: "Character.AI",
    tagline: "Create and chat with AI characters that have unique personalities",
    description: "Character.AI is a platform that allows users to create and interact with AI characters that have distinct personalities, backstories, and conversation styles. Users can chat with historical figures, fictional characters, or create their own custom AI personas.",
    category: ["Chatbot", "Entertainment"],
    website: "https://character.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Standard characters, basic features"
      },
      plans: [
        {
          name: "c.ai+",
          price: 10,
          billing: "monthly",
          features: ["Priority access", "Faster responses", "Early features", "No ads"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: false,
      custom_training: true,
      languages_supported: 50,
      input_types: ["Text"],
      output_formats: ["Text"]
    },
    technical: {
      model_type: "Proprietary LLM",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "Medium",
      uptime: "99.5%"
    },
    integrations: ["Discord", "Telegram"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.2,
      value: 4.3,
      support: 4.1,
      total_reviews: 12850
    },
    pros: ["Unique character creation", "Engaging conversations", "Creative freedom", "Entertainment value"],
    cons: ["Limited practical use", "Inconsistent quality", "Privacy concerns", "Addiction potential"],
    best_for: ["Roleplaying", "Entertainment", "Creative writing", "Character development"],
    launch_date: "2022-09-16",
    last_updated: "2024-11-30"
  },
  {
    id: "10",
    name: "Codeium",
    slug: "codeium",
    logo_url: "https://codeium.com/favicon.ico",
    company: "Exafunction",
    tagline: "Free AI code completion and chat for developers",
    description: "Codeium is a free AI coding assistant that provides code completion, chat, and search capabilities. It supports over 40 programming languages and integrates with popular IDEs. The tool is designed to be privacy-focused and offers both free and paid tiers.",
    category: ["Code Assistant", "Productivity"],
    website: "https://codeium.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Unlimited for individuals"
      },
      plans: [
        {
          name: "Pro",
          price: 15,
          billing: "monthly",
          features: ["Advanced models", "Priority support", "Team features", "Custom models"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 40,
      input_types: ["Code", "Comments"],
      output_formats: ["Code"]
    },
    technical: {
      model_type: "Multiple LLMs",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["VS Code", "JetBrains", "Vim", "Emacs", "Sublime Text"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.7,
      features: 4.5,
      value: 4.8,
      support: 4.4,
      total_reviews: 15200
    },
    pros: ["Completely free", "Good performance", "Privacy-focused", "Multi-language support"],
    cons: ["Newer than competitors", "Limited advanced features", "Smaller community"],
    best_for: ["Free coding", "Individual developers", "Learning", "Privacy-conscious users"],
    launch_date: "2022-12-01",
    last_updated: "2024-12-01"
  },
  {
    id: "11",
    name: "Consensus",
    slug: "consensus",
    logo_url: "https://consensus.app/favicon.ico",
    company: "Consensus",
    tagline: "AI-powered research tool for finding scientific consensus",
    description: "Consensus is an AI research assistant that helps users find scientific consensus on any topic by analyzing peer-reviewed research papers. It provides evidence-based answers and summaries from academic literature, making research more accessible and efficient.",
    category: ["Research", "Academic"],
    website: "https://consensus.app",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "5 searches per month"
      },
      plans: [
        {
          name: "Pro",
          price: 9,
          billing: "monthly",
          features: ["Unlimited searches", "Full paper access", "Export results", "Priority support"]
        },
        {
          name: "Team",
          price: 20,
          billing: "monthly",
          features: ["Team collaboration", "Shared libraries", "Advanced analytics", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text", "Questions"],
      output_formats: ["Text", "PDF", "Citations"]
    },
    technical: {
      model_type: "GPT-4 + Academic Search",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.7%"
    },
    integrations: ["Zotero", "Mendeley", "Google Scholar", "PubMed"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.4,
      features: 4.6,
      value: 4.5,
      support: 4.4,
      total_reviews: 3200
    },
    pros: ["Evidence-based results", "Academic focus", "Time-saving", "Reliable sources"],
    cons: ["Limited free tier", "Academic focus only", "Learning curve"],
    best_for: ["Academic research", "Evidence-based decisions", "Literature reviews", "Scientific writing"],
    launch_date: "2022-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "12",
    name: "Copy.ai",
    slug: "copy-ai",
    logo_url: "https://copy.ai/favicon.ico",
    company: "Copy.ai",
    tagline: "AI-powered copywriting for marketing and sales",
    description: "Copy.ai is a comprehensive AI copywriting platform designed for marketing teams. It offers over 90 copywriting templates, brand voice training, and team collaboration features to create compelling marketing copy, social media content, and sales materials.",
    category: ["Marketing", "Content Writing"],
    website: "https://copy.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "2,000 words per month"
      },
      plans: [
        {
          name: "Pro",
          price: 49,
          billing: "monthly",
          features: ["Unlimited words", "90+ templates", "Brand voice", "Team collaboration"]
        },
        {
          name: "Team",
          price: 249,
          billing: "monthly",
          features: ["Advanced features", "API access", "Priority support", "Custom templates"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 25,
      input_types: ["Text", "Templates"],
      output_formats: ["Text", "HTML"]
    },
    technical: {
      model_type: "GPT-4 + Custom Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Zapier", "HubSpot", "Salesforce", "Google Docs"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.3,
      value: 4.2,
      support: 4.3,
      total_reviews: 8750
    },
    pros: ["Extensive templates", "Brand voice training", "Team features", "Marketing focus"],
    cons: ["Higher pricing", "Template dependency", "Learning curve"],
    best_for: ["Marketing copy", "Sales materials", "Social media", "Email campaigns"],
    launch_date: "2020-10-01",
    last_updated: "2024-11-28"
  },
  {
    id: "13",
    name: "Cursor",
    slug: "cursor",
    logo_url: "https://cursor.sh/favicon.ico",
    company: "Anysphere",
    tagline: "AI-first code editor built for the modern developer",
    description: "Cursor is an AI-powered code editor that combines the best of VS Code with advanced AI capabilities. It features AI chat, code completion, and intelligent editing that understands your codebase context to provide more accurate suggestions and assistance.",
    category: ["Code Assistant", "IDE"],
    website: "https://cursor.sh",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Limited AI requests per month"
      },
      plans: [
        {
          name: "Pro",
          price: 20,
          billing: "monthly",
          features: ["Unlimited AI requests", "Advanced features", "Priority support", "Team collaboration"]
        },
        {
          name: "Business",
          price: 40,
          billing: "monthly",
          features: ["Team management", "Admin controls", "Custom models", "Enterprise support"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 50,
      input_types: ["Code", "Comments"],
      output_formats: ["Code"]
    },
    technical: {
      model_type: "GPT-4 + Claude",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Git", "GitHub", "GitLab", "VS Code Extensions"],
    ratings: {
      overall: 4.8,
      ease_of_use: 4.7,
      features: 4.8,
      value: 4.6,
      support: 4.7,
      total_reviews: 12500
    },
    pros: ["AI-first design", "Context-aware", "VS Code compatibility", "Advanced features"],
    cons: ["Subscription required", "Learning curve", "Resource intensive"],
    best_for: ["AI code editing", "Modern development", "Code assistance", "Productivity"],
    launch_date: "2023-03-01",
    last_updated: "2024-12-01"
  },
  {
    id: "14",
    name: "DALL-E 3",
    slug: "dalle-3",
    logo_url: "https://openai.com/favicon.ico",
    company: "OpenAI",
    tagline: "Advanced AI image generation with precise control",
    description: "DALL-E 3 is OpenAI's most advanced image generation model, capable of creating highly detailed and accurate images from text descriptions. It excels at understanding complex prompts, maintaining consistency, and producing photorealistic or artistic images with precise control over style and composition.",
    category: ["Image Generation", "AI Art"],
    website: "https://openai.com/dall-e-3",
    pricing: {
      model: "Pay-per-use",
      free_tier: {
        available: false,
        limits: "N/A"
      },
      plans: [
        {
          name: "Standard",
          price: 0.04,
          billing: "per image",
          features: ["1024x1024 images", "Standard quality", "Commercial use"]
        },
        {
          name: "HD",
          price: 0.08,
          billing: "per image",
          features: ["1024x1024 HD", "Higher quality", "Commercial use"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: false,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text"],
      output_formats: ["PNG", "JPG"]
    },
    technical: {
      model_type: "DALL-E 3",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["ChatGPT", "OpenAI API", "Zapier"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.7,
      value: 4.3,
      support: 4.4,
      total_reviews: 18750
    },
    pros: ["Precise images", "High quality", "Text understanding", "Commercial safe"],
    cons: ["Pay-per-use", "No free tier", "Limited customization"],
    best_for: ["Precise images", "Commercial use", "High-quality art", "Professional work"],
    launch_date: "2023-10-01",
    last_updated: "2024-11-30"
  },
  {
    id: "15",
    name: "Descript",
    slug: "descript",
    logo_url: "https://www.descript.com/favicon.ico",
    company: "Descript",
    tagline: "AI-powered audio and video editing made simple",
    description: "Descript is an all-in-one audio and video editing platform that uses AI to transcribe, edit, and enhance content. It features AI voice cloning, automatic transcription, and collaborative editing tools that make content creation accessible to everyone.",
    category: ["Audio & Video", "Transcription"],
    website: "https://www.descript.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "3 hours of transcription per month"
      },
      plans: [
        {
          name: "Creator",
          price: 12,
          billing: "monthly",
          features: ["10 hours transcription", "AI voice cloning", "Screen recording", "Export options"]
        },
        {
          name: "Pro",
          price: 24,
          billing: "monthly",
          features: ["30 hours transcription", "Advanced AI features", "Team collaboration", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 15,
      input_types: ["Audio", "Video", "Text"],
      output_formats: ["MP3", "MP4", "WAV", "TXT"]
    },
    technical: {
      model_type: "Multiple AI Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Zoom", "Google Drive", "Dropbox", "Slack"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.7,
      features: 4.5,
      value: 4.6,
      support: 4.5,
      total_reviews: 9800
    },
    pros: ["Podcast editing", "Easy transcription", "AI voice features", "User-friendly"],
    cons: ["Limited free tier", "Learning curve", "Subscription required"],
    best_for: ["Podcast editing", "Video editing", "Transcription", "Content creation"],
    launch_date: "2017-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "16",
    name: "ElevenLabs",
    slug: "elevenlabs",
    logo_url: "https://elevenlabs.io/favicon.ico",
    company: "ElevenLabs",
    tagline: "AI voice synthesis and cloning platform",
    description: "ElevenLabs is a leading AI voice synthesis platform that creates natural-sounding speech from text. It offers voice cloning, multilingual support, and various voice styles for content creators, developers, and businesses.",
    category: ["Audio & Voice", "AI Voice"],
    website: "https://elevenlabs.io",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "10,000 characters per month"
      },
      plans: [
        {
          name: "Starter",
          price: 5,
          billing: "monthly",
          features: ["30,000 characters", "10 custom voices", "Commercial license"]
        },
        {
          name: "Creator",
          price: 99,
          billing: "monthly",
          features: ["500,000 characters", "Unlimited voices", "API access", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 30,
      input_types: ["Text", "Audio"],
      output_formats: ["MP3", "WAV", "M4A"]
    },
    technical: {
      model_type: "Proprietary Voice AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "Zapier", "Discord", "Telegram"],
    ratings: {
      overall: 4.7,
      ease_of_use: 4.6,
      features: 4.8,
      value: 4.5,
      support: 4.6,
      total_reviews: 15200
    },
    pros: ["Voice-overs", "High quality", "Voice cloning", "Multilingual"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Voice-overs", "Podcasts", "Audiobooks", "Content creation"],
    launch_date: "2022-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "17",
    name: "Elicit",
    slug: "elicit",
    logo_url: "https://elicit.org/favicon.ico",
    company: "Elicit",
    tagline: "AI research assistant for literature review and analysis",
    description: "Elicit is an AI research assistant that helps researchers find, analyze, and synthesize scientific papers. It automates literature reviews, extracts key findings, and provides evidence-based answers to research questions.",
    category: ["Research", "Academic"],
    website: "https://elicit.org",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "5,000 credits per month"
      },
      plans: [
        {
          name: "Plus",
          price: 10,
          billing: "monthly",
          features: ["50,000 credits", "Advanced features", "Priority support"]
        },
        {
          name: "Team",
          price: 42,
          billing: "monthly",
          features: ["Team collaboration", "Shared libraries", "Custom models", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text", "Questions"],
      output_formats: ["Text", "PDF", "Citations"]
    },
    technical: {
      model_type: "GPT-4 + Academic Search",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.7%"
    },
    integrations: ["Zotero", "Mendeley", "Google Scholar", "PubMed"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.3,
      features: 4.5,
      value: 4.4,
      support: 4.2,
      total_reviews: 6800
    },
    pros: ["Literature review", "Time-saving", "Academic focus", "Evidence-based"],
    cons: ["Limited free tier", "Academic focus only", "Learning curve"],
    best_for: ["Literature review", "Research analysis", "Academic writing", "Evidence synthesis"],
    launch_date: "2021-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "18",
    name: "Fathom",
    slug: "fathom",
    logo_url: "https://fathom.video/favicon.ico",
    company: "Fathom",
    tagline: "AI meeting assistant for free meeting transcription and notes",
    description: "Fathom is a free AI meeting assistant that automatically transcribes, summarizes, and highlights key moments from your meetings. It integrates with popular video conferencing platforms and provides intelligent meeting insights.",
    category: ["Meeting Assistant", "Transcription"],
    website: "https://fathom.video",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Unlimited meetings, basic features"
      },
      plans: [
        {
          name: "Pro",
          price: 19,
          billing: "monthly",
          features: ["Advanced AI", "Custom templates", "Team features", "Priority support"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 10,
      input_types: ["Audio", "Video"],
      output_formats: ["Text", "PDF", "MP3"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Zoom", "Google Meet", "Microsoft Teams", "Slack"],
    ratings: {
      overall: 4.7,
      ease_of_use: 4.8,
      features: 4.6,
      value: 4.8,
      support: 4.5,
      total_reviews: 12500
    },
    pros: ["Free meetings", "Easy setup", "Good transcription", "Meeting insights"],
    cons: ["Limited customization", "Basic free features", "Platform dependency"],
    best_for: ["Free meetings", "Meeting notes", "Transcription", "Team collaboration"],
    launch_date: "2021-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "19",
    name: "Fireflies.ai",
    slug: "fireflies-ai",
    logo_url: "https://fireflies.ai/favicon.ico",
    company: "Fireflies",
    tagline: "AI meeting transcription and analysis platform",
    description: "Fireflies.ai is an AI meeting assistant that automatically joins, records, transcribes, and analyzes your meetings. It provides intelligent search, action items extraction, and meeting insights to improve productivity.",
    category: ["Meeting Assistant", "Transcription"],
    website: "https://fireflies.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "800 minutes per month"
      },
      plans: [
        {
          name: "Pro",
          price: 10,
          billing: "monthly",
          features: ["8,000 minutes", "Advanced AI", "Integrations", "API access"]
        },
        {
          name: "Business",
          price: 19,
          billing: "monthly",
          features: ["Unlimited minutes", "Team features", "Custom models", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 15,
      input_types: ["Audio", "Video"],
      output_formats: ["Text", "PDF", "MP3", "TXT"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Zoom", "Google Meet", "Microsoft Teams", "Slack", "Salesforce"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.5,
      support: 4.3,
      total_reviews: 9800
    },
    pros: ["Meeting transcription", "Easy integration", "Good accuracy", "Team features"],
    cons: ["Limited free tier", "Learning curve", "Platform dependency"],
    best_for: ["Meeting transcription", "Team meetings", "Sales calls", "Productivity"],
    launch_date: "2019-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "20",
    name: "Gemini",
    slug: "gemini",
    logo_url: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff62964a690345194d4b3a69d1c4c4e0.png",
    company: "Google",
    tagline: "Google's most capable AI model for multimodal understanding",
    description: "Gemini is Google's most advanced AI model, capable of understanding and generating text, images, audio, and video. It's designed to be helpful, harmless, and honest, with strong reasoning capabilities and multimodal understanding.",
    category: ["Chatbot", "Multimodal AI"],
    website: "https://gemini.google.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Standard model, basic features"
      },
      plans: [
        {
          name: "Advanced",
          price: 20,
          billing: "monthly",
          features: ["Gemini Advanced", "2M token context", "Code generation", "Image analysis"]
        },
        {
          name: "Enterprise",
          price: 0,
          billing: "monthly",
          features: ["Custom pricing", "Enterprise features", "Advanced security", "Dedicated support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 100,
      input_types: ["Text", "Images", "Audio", "Video"],
      output_formats: ["Text", "Code", "Images"]
    },
    technical: {
      model_type: "Gemini Pro/Ultra",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Google Workspace", "Chrome", "Android", "Gmail"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.7,
      value: 4.4,
      support: 4.3,
      total_reviews: 25600
    },
    pros: ["Google integration", "Multimodal", "Free tier", "Good performance"],
    cons: ["Newer than competitors", "Limited customization", "Google dependency"],
    best_for: ["Google integration", "Multimodal tasks", "General assistance", "Research"],
    launch_date: "2023-12-06",
    last_updated: "2024-12-01"
  },
  {
    id: "21",
    name: "Grammarly",
    slug: "grammarly",
    logo_url: "https://static.grammarly.com/assets/files/grammarly_logo_2021.svg",
    company: "Grammarly",
    tagline: "AI-powered writing assistant for grammar, style, and clarity",
    description: "Grammarly is an AI-powered writing assistant that helps users improve their writing by checking grammar, spelling, punctuation, style, and clarity. It offers real-time suggestions and explanations to help users become better writers.",
    category: ["Writing Assistant", "Productivity"],
    website: "https://grammarly.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic grammar and spelling checks"
      },
      plans: [
        {
          name: "Premium",
          price: 12,
          billing: "monthly",
          features: ["Advanced grammar", "Style suggestions", "Tone detection", "Plagiarism checker"]
        },
        {
          name: "Business",
          price: 15,
          billing: "monthly",
          features: ["Team management", "Admin controls", "Brand tones", "Analytics"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text"],
      output_formats: ["Text"]
    },
    technical: {
      model_type: "Proprietary NLP",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Chrome", "Word", "Google Docs", "Outlook", "Slack"],
    ratings: {
      overall: 4.7,
      ease_of_use: 4.8,
      features: 4.6,
      value: 4.5,
      support: 4.6,
      total_reviews: 45600
    },
    pros: ["Grammar checking", "Easy to use", "Real-time suggestions", "Wide integration"],
    cons: ["Limited free features", "Subscription required", "Privacy concerns"],
    best_for: ["Grammar checking", "Professional writing", "Students", "Content creators"],
    launch_date: "2009-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "22",
    name: "HeyGen",
    slug: "heygen",
    logo_url: "https://www.heygen.com/favicon.ico",
    company: "HeyGen",
    tagline: "AI video generation with realistic avatars and voices",
    description: "HeyGen is an AI video generation platform that creates professional videos with realistic AI avatars and voices. It's designed for creating marketing videos, training content, and personalized video messages at scale.",
    category: ["Video Generation", "AI Avatar"],
    website: "https://www.heygen.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "1 minute per month"
      },
      plans: [
        {
          name: "Creator",
          price: 24,
          billing: "monthly",
          features: ["10 minutes/month", "Basic avatars", "Standard voices", "HD export"]
        },
        {
          name: "Business",
          price: 72,
          billing: "monthly",
          features: ["90 minutes/month", "Premium avatars", "Custom voices", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 40,
      input_types: ["Text", "Audio", "Images"],
      output_formats: ["MP4", "MOV"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["API", "Zapier", "Slack", "Salesforce"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.3,
      support: 4.4,
      total_reviews: 3200
    },
    pros: ["Avatar videos", "High quality", "Easy to use", "Good customization"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Avatar videos", "Marketing videos", "Training content", "Personalized messages"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "23",
    name: "Hugging Face",
    slug: "hugging-face",
    logo_url: "https://huggingface.co/favicon.ico",
    company: "Hugging Face",
    tagline: "Open-source AI platform for machine learning models and datasets",
    description: "Hugging Face is a leading open-source AI platform that provides access to thousands of pre-trained models, datasets, and tools for machine learning. It's widely used by developers, researchers, and companies for AI model deployment and collaboration.",
    category: ["ML Platform", "Open Source"],
    website: "https://huggingface.co",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic model access, limited inference"
      },
      plans: [
        {
          name: "Pro",
          price: 9,
          billing: "monthly",
          features: ["Unlimited inference", "Private models", "Advanced features", "Priority support"]
        },
        {
          name: "Enterprise",
          price: 20,
          billing: "monthly",
          features: ["Team collaboration", "Custom deployment", "Advanced security", "Dedicated support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 50,
      input_types: ["Text", "Images", "Audio", "Code"],
      output_formats: ["Models", "Datasets", "Code"]
    },
    technical: {
      model_type: "Multiple Open Source Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["GitHub", "Docker", "Kubernetes", "AWS", "Google Cloud"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.5,
      features: 4.8,
      value: 4.7,
      support: 4.4,
      total_reviews: 18750
    },
    pros: ["ML deployment", "Open source", "Extensive models", "Developer friendly"],
    cons: ["Technical complexity", "Learning curve", "Limited support"],
    best_for: ["ML deployment", "Model sharing", "Research", "Open source AI"],
    launch_date: "2016-01-01",
    last_updated: "2024-12-01"
  },
  {
    id: "24",
    name: "Intercom Fin",
    slug: "intercom-fin",
    logo_url: "https://www.intercom.com/favicon.ico",
    company: "Intercom",
    tagline: "AI-powered customer support automation",
    description: "Intercom Fin is an AI assistant designed for customer support teams. It helps automate responses, provides intelligent suggestions, and improves customer service efficiency through AI-powered conversation management.",
    category: ["Customer Support", "AI Assistant"],
    website: "https://www.intercom.com",
    pricing: {
      model: "Add-on",
      free_tier: {
        available: false,
        limits: "N/A"
      },
      plans: [
        {
          name: "Per Resolution",
          price: 0.99,
          billing: "per resolution",
          features: ["AI responses", "Automated resolution", "Customer insights"]
        },
        {
          name: "Enterprise",
          price: 0,
          billing: "monthly",
          features: ["Custom pricing", "Advanced features", "Dedicated support", "Custom training"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 30,
      input_types: ["Text", "Chat"],
      output_formats: ["Text", "Responses"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Intercom", "Slack", "Zendesk", "Salesforce"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.4,
      features: 4.6,
      value: 4.3,
      support: 4.5,
      total_reviews: 5600
    },
    pros: ["Support automation", "Easy integration", "Good performance", "Team features"],
    cons: ["Add-on pricing", "Limited customization", "Platform dependency"],
    best_for: ["Support automation", "Customer service", "Team efficiency", "Response automation"],
    launch_date: "2023-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "25",
    name: "Krisp",
    slug: "krisp",
    logo_url: "https://krisp.ai/favicon.ico",
    company: "Krisp",
    tagline: "AI-powered noise cancellation for crystal clear calls",
    description: "Krisp is an AI-powered noise cancellation app that removes background noise from your microphone and speakers during calls. It works with any communication app and provides crystal clear audio quality for better conversations.",
    category: ["Audio", "Communication"],
    website: "https://krisp.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "60 minutes per day"
      },
      plans: [
        {
          name: "Pro",
          price: 8,
          billing: "monthly",
          features: ["Unlimited usage", "Advanced features", "Priority support", "Team features"]
        },
        {
          name: "Business",
          price: 12,
          billing: "monthly",
          features: ["Team management", "Admin controls", "Advanced analytics", "Custom deployment"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: true,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Audio"],
      output_formats: ["Audio"]
    },
    technical: {
      model_type: "Proprietary Audio AI",
      processing: "Local + Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Zoom", "Teams", "Slack", "Discord", "Skype"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.7,
      features: 4.5,
      value: 4.6,
      support: 4.4,
      total_reviews: 12500
    },
    pros: ["Noise removal", "Easy to use", "Works everywhere", "Good quality"],
    cons: ["Limited free tier", "Subscription required", "System resources"],
    best_for: ["Noise removal", "Remote work", "Professional calls", "Audio quality"],
    launch_date: "2017-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "26",
    name: "Leonardo.ai",
    slug: "leonardo-ai",
    logo_url: "https://leonardo.ai/favicon.ico",
    company: "Leonardo",
    tagline: "AI image generation platform for game assets and creative content",
    description: "Leonardo.ai is an AI image generation platform specifically designed for creating game assets, characters, and creative content. It offers specialized models for different art styles and use cases, making it popular among game developers and digital artists.",
    category: ["Image Generation", "Game Assets"],
    website: "https://leonardo.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "150 tokens per day"
      },
      plans: [
        {
          name: "Apprentice",
          price: 12,
          billing: "monthly",
          features: ["8,500 tokens/month", "Standard models", "Commercial license"]
        },
        {
          name: "Artisan",
          price: 30,
          billing: "monthly",
          features: ["25,000 tokens/month", "Premium models", "API access", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 20,
      input_types: ["Text", "Images"],
      output_formats: ["PNG", "JPG"]
    },
    technical: {
      model_type: "Proprietary Diffusion Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["API", "Discord", "Slack"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.4,
      features: 4.6,
      value: 4.4,
      support: 4.3,
      total_reviews: 9800
    },
    pros: ["Game assets", "Specialized models", "Good quality", "Creative focus"],
    cons: ["Limited free tier", "Learning curve", "Subscription required"],
    best_for: ["Game assets", "Digital art", "Character design", "Creative projects"],
    launch_date: "2022-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "27",
    name: "Looka",
    slug: "looka",
    logo_url: "https://looka.com/favicon.ico",
    company: "Looka",
    tagline: "AI-powered logo design and branding platform",
    description: "Looka is an AI-powered logo design platform that helps businesses create professional logos and branding materials. It uses machine learning to understand design preferences and generates custom logos, business cards, and brand kits.",
    category: ["Branding", "Logo Design"],
    website: "https://looka.com",
    pricing: {
      model: "Pay-per-project",
      free_tier: {
        available: true,
        limits: "Preview only, watermarked"
      },
      plans: [
        {
          name: "Basic Logo",
          price: 20,
          billing: "one-time",
          features: ["High-res logo", "Multiple formats", "Commercial license"]
        },
        {
          name: "Brand Kit",
          price: 96,
          billing: "one-time",
          features: ["Full brand kit", "Business cards", "Social media kit", "Unlimited revisions"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: false,
      custom_training: false,
      languages_supported: 10,
      input_types: ["Text", "Preferences"],
      output_formats: ["PNG", "JPG", "SVG", "PDF"]
    },
    technical: {
      model_type: "Proprietary Design AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Social Media", "Print Services"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.5,
      support: 4.4,
      total_reviews: 15200
    },
    pros: ["Logo design", "Easy to use", "Professional results", "Good value"],
    cons: ["Limited customization", "One-time purchase", "No subscription option"],
    best_for: ["Logo design", "Small businesses", "Startups", "Brand identity"],
    launch_date: "2016-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "28",
    name: "Luma AI",
    slug: "luma-ai",
    logo_url: "https://lumalabs.ai/favicon.ico",
    company: "Luma Labs",
    tagline: "AI-powered 3D capture and generation platform",
    description: "Luma AI is a platform that uses AI to capture and generate 3D models from photos and videos. It's designed for creators, developers, and businesses who need high-quality 3D content for various applications including gaming, AR/VR, and marketing.",
    category: ["3D Generation", "AR/VR"],
    website: "https://lumalabs.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic 3D capture, limited exports"
      },
      plans: [
        {
          name: "Pro",
          price: 30,
          billing: "monthly",
          features: ["Unlimited captures", "High-res exports", "Advanced features", "API access"]
        },
        {
          name: "Enterprise",
          price: 0,
          billing: "monthly",
          features: ["Custom pricing", "Enterprise features", "Dedicated support", "Custom training"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 15,
      input_types: ["Images", "Video"],
      output_formats: ["OBJ", "FBX", "GLB", "USDZ"]
    },
    technical: {
      model_type: "Proprietary 3D AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Unity", "Unreal Engine", "Blender", "API"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.5,
      features: 4.3,
      value: 4.4,
      support: 4.2,
      total_reviews: 4200
    },
    pros: ["3D modeling", "Easy capture", "Good quality", "AR/VR ready"],
    cons: ["Limited free tier", "Learning curve", "Subscription required"],
    best_for: ["3D modeling", "AR/VR content", "Game development", "Creative projects"],
    launch_date: "2021-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "29",
    name: "Mem",
    slug: "mem",
    logo_url: "https://mem.ai/favicon.ico",
    company: "Mem",
    tagline: "AI-powered knowledge management and note-taking platform",
    description: "Mem is an AI-powered knowledge management platform that helps users capture, organize, and retrieve information. It uses AI to automatically tag, link, and surface relevant information when needed, making knowledge management effortless.",
    category: ["Productivity", "Knowledge Management"],
    website: "https://mem.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic features, limited storage"
      },
      plans: [
        {
          name: "Pro",
          price: 10,
          billing: "monthly",
          features: ["Unlimited storage", "Advanced AI", "Team features", "Priority support"]
        },
        {
          name: "Team",
          price: 10,
          billing: "monthly",
          features: ["Team collaboration", "Admin controls", "Advanced analytics", "Custom integrations"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text", "Images", "Audio"],
      output_formats: ["Text", "PDF", "Markdown"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Slack", "Google Drive", "Notion", "API"],
    ratings: {
      overall: 4.2,
      ease_of_use: 4.3,
      features: 4.1,
      value: 4.2,
      support: 4.0,
      total_reviews: 3200
    },
    pros: ["Knowledge mgmt", "AI-powered", "Easy organization", "Good search"],
    cons: ["Limited free features", "Learning curve", "Newer platform"],
    best_for: ["Knowledge mgmt", "Note-taking", "Research", "Team collaboration"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "30",
    name: "Murf AI",
    slug: "murf-ai",
    logo_url: "https://murf.ai/favicon.ico",
    company: "Murf",
    tagline: "AI voice generation platform for professional voice-overs",
    description: "Murf AI is a comprehensive voice generation platform that creates natural-sounding voice-overs from text. It offers a wide variety of voices in multiple languages and accents, making it ideal for content creators, marketers, and businesses.",
    category: ["Audio & Voice", "Voice Generation"],
    website: "https://murf.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "10 minutes per month"
      },
      plans: [
        {
          name: "Basic",
          price: 19,
          billing: "monthly",
          features: ["60 minutes/month", "Standard voices", "Commercial license"]
        },
        {
          name: "Pro",
          price: 26,
          billing: "monthly",
          features: ["120 minutes/month", "Premium voices", "API access", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text"],
      output_formats: ["MP3", "WAV", "M4A"]
    },
    technical: {
      model_type: "Proprietary Voice AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "Zapier", "Slack"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.5,
      support: 4.3,
      total_reviews: 6800
    },
    pros: ["Voice-overs", "Multiple languages", "Good quality", "Easy to use"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Voice-overs", "Content creation", "Marketing videos", "Audiobooks"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "31",
    name: "Notion AI",
    slug: "notion-ai",
    logo_url: "https://www.notion.so/favicon.ico",
    company: "Notion",
    tagline: "AI-powered note-taking and workspace platform",
    description: "Notion AI integrates artificial intelligence into the popular workspace platform, offering features like AI writing assistance, content generation, and intelligent organization. It helps users create, organize, and manage their work more efficiently.",
    category: ["Productivity", "Note-taking"],
    website: "https://www.notion.so",
    pricing: {
      model: "Add-on",
      free_tier: {
        available: true,
        limits: "Trial period, basic features"
      },
      plans: [
        {
          name: "AI Add-on",
          price: 10,
          billing: "monthly",
          features: ["Unlimited AI requests", "Advanced features", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text", "Templates"],
      output_formats: ["Text", "Markdown", "PDF"]
    },
    technical: {
      model_type: "GPT-4 + Custom Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Slack", "Google Drive", "Zapier", "API"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.5,
      support: 4.4,
      total_reviews: 25600
    },
    pros: ["Note-taking", "AI integration", "Team collaboration", "Versatile platform"],
    cons: ["Learning curve", "Subscription required", "Complex interface"],
    best_for: ["Note-taking", "Team collaboration", "Project management", "Knowledge base"],
    launch_date: "2016-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "32",
    name: "Otter.ai",
    slug: "otter-ai",
    logo_url: "https://otter.ai/favicon.ico",
    company: "Otter.ai",
    tagline: "AI meeting transcription and note-taking platform",
    description: "Otter.ai is an AI-powered transcription service that automatically transcribes meetings, interviews, and conversations in real-time. It provides intelligent summaries, speaker identification, and searchable transcripts to improve productivity.",
    category: ["Transcription", "Meeting Assistant"],
    website: "https://otter.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "30 minutes per month"
      },
      plans: [
        {
          name: "Pro",
          price: 10,
          billing: "monthly",
          features: ["600 minutes/month", "Advanced features", "Export options", "Team collaboration"]
        },
        {
          name: "Business",
          price: 20,
          billing: "monthly",
          features: ["6,000 minutes/month", "Team management", "Advanced analytics", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 15,
      input_types: ["Audio", "Video"],
      output_formats: ["Text", "PDF", "TXT"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Zoom", "Google Meet", "Microsoft Teams", "Slack"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.5,
      support: 4.3,
      total_reviews: 18750
    },
    pros: ["Meeting notes", "Real-time transcription", "Good accuracy", "Easy to use"],
    cons: ["Limited free tier", "Subscription required", "Platform dependency"],
    best_for: ["Meeting notes", "Interviews", "Transcription", "Team collaboration"],
    launch_date: "2016-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "33",
    name: "Perplexity AI",
    slug: "perplexity-ai",
    logo_url: "https://www.perplexity.ai/favicon.ico",
    company: "Perplexity",
    tagline: "AI-powered search engine with conversational interface",
    description: "Perplexity AI is an AI-powered search engine that provides conversational answers to questions by searching the web and synthesizing information. It offers real-time information, source citations, and follow-up questions to help users get comprehensive answers.",
    category: ["Research", "Search Engine"],
    website: "https://www.perplexity.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic search, limited features"
      },
      plans: [
        {
          name: "Pro",
          price: 20,
          billing: "monthly",
          features: ["Unlimited searches", "Advanced models", "File uploads", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: false,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text", "Questions"],
      output_formats: ["Text", "Citations"]
    },
    technical: {
      model_type: "GPT-4 + Web Search",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "Chrome", "Mobile Apps"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.7,
      features: 4.5,
      value: 4.6,
      support: 4.4,
      total_reviews: 15200
    },
    pros: ["Research", "Real-time information", "Source citations", "Conversational interface"],
    cons: ["Limited free features", "Subscription required", "Dependency on web"],
    best_for: ["Research", "Information gathering", "Fact-checking", "Learning"],
    launch_date: "2022-01-01",
    last_updated: "2024-12-01"
  },
  {
    id: "34",
    name: "Pictory",
    slug: "pictory",
    logo_url: "https://pictory.ai/favicon.ico",
    company: "Pictory",
    tagline: "AI video creation from text and long-form content",
    description: "Pictory is an AI video creation platform that automatically generates videos from text content, blog posts, and long-form articles. It's designed for content creators, marketers, and businesses who need to create engaging video content quickly.",
    category: ["Video Generation", "Content Creation"],
    website: "https://pictory.ai",
    pricing: {
      model: "Subscription",
      free_tier: {
        available: true,
        limits: "Trial period, watermarked videos"
      },
      plans: [
        {
          name: "Starter",
          price: 23,
          billing: "monthly",
          features: ["30 videos/month", "Standard templates", "HD export", "Commercial license"]
        },
        {
          name: "Professional",
          price: 47,
          billing: "monthly",
          features: ["60 videos/month", "Premium templates", "Brand kit", "Priority support"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 10,
      input_types: ["Text", "Articles", "Scripts"],
      output_formats: ["MP4", "MOV"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Social Media", "YouTube", "Vimeo"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.2,
      value: 4.3,
      support: 4.2,
      total_reviews: 6800
    },
    pros: ["Marketing videos", "Easy to use", "Quick creation", "Good templates"],
    cons: ["Limited customization", "Subscription required", "Learning curve"],
    best_for: ["Marketing videos", "Content creation", "Social media", "Blog promotion"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "35",
    name: "Podcastle",
    slug: "podcastle",
    logo_url: "https://podcastle.ai/favicon.ico",
    company: "Podcastle",
    tagline: "AI-powered podcast creation and editing platform",
    description: "Podcastle is an AI-powered platform for creating, editing, and publishing podcasts. It offers features like AI voice generation, automatic transcription, noise reduction, and easy editing tools to make podcast creation accessible to everyone.",
    category: ["Podcast", "Audio Editing"],
    website: "https://podcastle.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "3 hours per month"
      },
      plans: [
        {
          name: "Creator",
          price: 12,
          billing: "monthly",
          features: ["15 hours/month", "AI voices", "Advanced editing", "Export options"]
        },
        {
          name: "Pro",
          price: 30,
          billing: "monthly",
          features: ["60 hours/month", "Premium features", "Team collaboration", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Audio", "Text", "Scripts"],
      output_formats: ["MP3", "WAV", "MP4"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Spotify", "Apple Podcasts", "Google Podcasts", "YouTube"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.5,
      features: 4.3,
      value: 4.4,
      support: 4.2,
      total_reviews: 4200
    },
    pros: ["Podcast editing", "AI voices", "Easy to use", "Good quality"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Podcast editing", "Audio content", "Voice generation", "Content creation"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "36",
    name: "Poe",
    slug: "poe",
    logo_url: "https://poe.com/favicon.ico",
    company: "Quora",
    tagline: "Multi-model AI chatbot platform with access to various AI models",
    description: "Poe is a multi-model AI chatbot platform that provides access to various AI models including GPT-4, Claude, and others. It allows users to chat with different AI models, compare responses, and choose the best model for their specific needs.",
    category: ["Chatbot Platform", "Multi-model"],
    website: "https://poe.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Limited messages per day"
      },
      plans: [
        {
          name: "Poe",
          price: 20,
          billing: "monthly",
          features: ["Unlimited messages", "Access to all models", "Priority support", "Advanced features"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: false,
      custom_training: false,
      languages_supported: 50,
      input_types: ["Text"],
      output_formats: ["Text"]
    },
    technical: {
      model_type: "Multiple AI Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "Mobile Apps", "Web"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.2,
      value: 4.3,
      support: 4.1,
      total_reviews: 9800
    },
    pros: ["Multi-model access", "Model comparison", "Easy to use", "Good variety"],
    cons: ["Limited free tier", "Subscription required", "Model dependency"],
    best_for: ["Multi-model access", "AI comparison", "General assistance", "Research"],
    launch_date: "2022-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "37",
    name: "QuillBot",
    slug: "quillbot",
    logo_url: "https://quillbot.com/favicon.ico",
    company: "QuillBot",
    tagline: "AI-powered paraphrasing and writing assistant",
    description: "QuillBot is an AI-powered paraphrasing tool that helps users rewrite, improve, and enhance their writing. It offers features like paraphrasing, grammar checking, summarization, and citation generation to improve writing quality and originality.",
    category: ["Writing Assistant", "Paraphrasing"],
    website: "https://quillbot.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "125 words per paraphrase"
      },
      plans: [
        {
          name: "Premium",
          price: 9,
          billing: "monthly",
          features: ["Unlimited words", "Advanced features", "Plagiarism checker", "Priority support"]
        },
        {
          name: "Team",
          price: 20,
          billing: "monthly",
          features: ["Team collaboration", "Admin controls", "Advanced analytics", "Custom integrations"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text"],
      output_formats: ["Text", "Citations"]
    },
    technical: {
      model_type: "Proprietary NLP",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Chrome", "Word", "Google Docs", "API"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.5,
      support: 4.3,
      total_reviews: 18750
    },
    pros: ["Paraphrasing", "Easy to use", "Good quality", "Wide integration"],
    cons: ["Limited free features", "Subscription required", "Learning curve"],
    best_for: ["Paraphrasing", "Academic writing", "Content creation", "Plagiarism prevention"],
    launch_date: "2017-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "38",
    name: "Remove.bg",
    slug: "remove-bg",
    logo_url: "https://www.remove.bg/favicon.ico",
    company: "Kaleido AI",
    tagline: "AI-powered background removal for images",
    description: "Remove.bg is an AI-powered tool that automatically removes backgrounds from images. It's designed for designers, marketers, and content creators who need clean, professional images with transparent backgrounds.",
    category: ["Image Editing", "Background Removal"],
    website: "https://www.remove.bg",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Low resolution, watermarked"
      },
      plans: [
        {
          name: "Pro",
          price: 9,
          billing: "monthly",
          features: ["High resolution", "No watermark", "Batch processing", "API access"]
        },
        {
          name: "Enterprise",
          price: 225,
          billing: "yearly",
          features: ["Unlimited processing", "Custom models", "Dedicated support", "Advanced features"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 10,
      input_types: ["Images"],
      output_formats: ["PNG", "JPG"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "Photoshop", "Figma", "Canva"],
    ratings: {
      overall: 4.7,
      ease_of_use: 4.8,
      features: 4.6,
      value: 4.7,
      support: 4.5,
      total_reviews: 25600
    },
    pros: ["Background removal", "High accuracy", "Easy to use", "Fast processing"],
    cons: ["Limited free features", "Subscription required", "File size limits"],
    best_for: ["Background removal", "Product photos", "Design work", "Marketing materials"],
    launch_date: "2017-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "39",
    name: "Runway",
    slug: "runway",
    logo_url: "https://runwayml.com/favicon.ico",
    company: "Runway AI",
    tagline: "AI-powered video editing and generation platform",
    description: "Runway is an AI-powered video editing platform that offers advanced video generation, editing, and enhancement tools. It's designed for content creators, filmmakers, and businesses who need professional video editing capabilities with AI assistance.",
    category: ["Video Editing", "Video Generation"],
    website: "https://runwayml.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Limited credits per month"
      },
      plans: [
        {
          name: "Standard",
          price: 12,
          billing: "monthly",
          features: ["125 credits/month", "Standard models", "HD export", "Commercial license"]
        },
        {
          name: "Pro",
          price: 35,
          billing: "monthly",
          features: ["625 credits/month", "Premium models", "4K export", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 15,
      input_types: ["Video", "Images", "Text"],
      output_formats: ["MP4", "MOV", "GIF"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["API", "Figma", "After Effects", "Premiere Pro"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.4,
      features: 4.6,
      value: 4.3,
      support: 4.4,
      total_reviews: 12500
    },
    pros: ["Video editing", "AI features", "Professional quality", "Good tools"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Video editing", "Content creation", "Professional work", "Creative projects"],
    launch_date: "2018-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "40",
    name: "Rytr",
    slug: "rytr",
    logo_url: "https://rytr.me/favicon.ico",
    company: "Rytr",
    tagline: "AI writing assistant for budget-conscious content creators",
    description: "Rytr is an AI writing assistant designed for budget-conscious content creators and businesses. It offers a wide range of writing templates, multiple languages, and affordable pricing to help users create high-quality content at scale.",
    category: ["Content Writing", "Budget Writing"],
    website: "https://rytr.me",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "10,000 characters per month"
      },
      plans: [
        {
          name: "Saver",
          price: 9,
          billing: "monthly",
          features: ["100,000 characters", "40+ use cases", "30+ languages", "Premium support"]
        },
        {
          name: "Unlimited",
          price: 29,
          billing: "monthly",
          features: ["Unlimited characters", "All features", "Priority support", "Custom use cases"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 30,
      input_types: ["Text", "Templates"],
      output_formats: ["Text", "HTML"]
    },
    technical: {
      model_type: "GPT-3.5 + Custom Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "Zapier", "Chrome", "WordPress"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.2,
      value: 4.5,
      support: 4.1,
      total_reviews: 15200
    },
    pros: ["Budget writing", "Affordable pricing", "Good templates", "Multiple languages"],
    cons: ["Limited free tier", "Basic features", "Learning curve"],
    best_for: ["Budget writing", "Content creation", "Small businesses", "Affordable AI"],
    launch_date: "2021-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "41",
    name: "Simplified",
    slug: "simplified",
    logo_url: "https://simplified.com/favicon.ico",
    company: "Simplified",
    tagline: "AI-powered marketing and design platform",
    description: "Simplified is an all-in-one marketing platform that combines AI-powered design, content creation, and social media management. It's designed for small businesses and marketers who need to create professional content quickly and efficiently.",
    category: ["Marketing", "Social Media"],
    website: "https://simplified.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic features, limited exports"
      },
      plans: [
        {
          name: "Pro",
          price: 12,
          billing: "monthly",
          features: ["Unlimited designs", "Advanced features", "Team collaboration", "Brand kit"]
        },
        {
          name: "Business",
          price: 30,
          billing: "monthly",
          features: ["Team management", "Advanced analytics", "Custom templates", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Text", "Images", "Templates"],
      output_formats: ["PNG", "JPG", "PDF", "MP4"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Social Media", "Google Drive", "Slack", "API"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.2,
      value: 4.3,
      support: 4.1,
      total_reviews: 6800
    },
    pros: ["Social media", "Easy to use", "Good templates", "All-in-one platform"],
    cons: ["Limited free features", "Subscription required", "Learning curve"],
    best_for: ["Social media", "Small businesses", "Marketing", "Content creation"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "42",
    name: "Soundraw",
    slug: "soundraw",
    logo_url: "https://soundraw.io/favicon.ico",
    company: "Soundraw",
    tagline: "AI music generation platform for royalty-free music",
    description: "Soundraw is an AI music generation platform that creates royalty-free music for content creators, filmmakers, and businesses. It offers customizable music generation with various genres, moods, and instruments.",
    category: ["Music", "Audio Generation"],
    website: "https://soundraw.io",
    pricing: {
      model: "Subscription",
      free_tier: {
        available: true,
        limits: "Preview only, watermarked"
      },
      plans: [
        {
          name: "Basic",
          price: 17,
          billing: "monthly",
          features: ["Unlimited downloads", "Commercial license", "High quality", "Custom length"]
        },
        {
          name: "Pro",
          price: 30,
          billing: "monthly",
          features: ["Advanced features", "Priority support", "Custom models", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 10,
      input_types: ["Text", "Preferences"],
      output_formats: ["MP3", "WAV", "MIDI"]
    },
    technical: {
      model_type: "Proprietary Music AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["API", "Video Editors", "Audio Software"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.2,
      value: 4.3,
      support: 4.1,
      total_reviews: 3200
    },
    pros: ["Royalty-free music", "Easy generation", "Good quality", "Customizable"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Royalty-free music", "Content creation", "Background music", "Video production"],
    launch_date: "2021-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "43",
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    logo_url: "https://stability.ai/favicon.ico",
    company: "Stability AI",
    tagline: "Open-source AI image generation model",
    description: "Stable Diffusion is an open-source AI image generation model that creates high-quality images from text descriptions. It's widely used by developers, artists, and businesses for creating custom images, art, and visual content.",
    category: ["Image Generation", "Open Source"],
    website: "https://stability.ai",
    pricing: {
      model: "Free/API",
      free_tier: {
        available: true,
        limits: "Open source, self-hosted"
      },
      plans: [
        {
          name: "API",
          price: 9,
          billing: "monthly",
          features: ["Cloud API access", "High resolution", "Commercial license", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: true,
      mobile_app: false,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 20,
      input_types: ["Text", "Images"],
      output_formats: ["PNG", "JPG"]
    },
    technical: {
      model_type: "Stable Diffusion",
      processing: "Local + Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "GitHub", "Docker", "Custom Applications"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.3,
      features: 4.6,
      value: 4.7,
      support: 4.2,
      total_reviews: 18750
    },
    pros: ["Custom images", "Open source", "High quality", "Flexible"],
    cons: ["Technical complexity", "Learning curve", "Hardware requirements"],
    best_for: ["Custom images", "Open source AI", "Art generation", "Research"],
    launch_date: "2022-08-01",
    last_updated: "2024-12-01"
  },
  {
    id: "44",
    name: "Synthesia",
    slug: "synthesia",
    logo_url: "https://www.synthesia.io/favicon.ico",
    company: "Synthesia",
    tagline: "AI video generation with realistic avatars for training and marketing",
    description: "Synthesia is an AI video generation platform that creates professional videos with realistic AI avatars and voices. It's designed for training, marketing, and educational content, offering multilingual support and customizable avatars.",
    category: ["Video Generation", "Training Videos"],
    website: "https://www.synthesia.io",
    pricing: {
      model: "Subscription",
      free_tier: {
        available: true,
        limits: "Demo only, watermarked"
      },
      plans: [
        {
          name: "Personal",
          price: 22,
          billing: "monthly",
          features: ["10 minutes/month", "Basic avatars", "Standard voices", "HD export"]
        },
        {
          name: "Enterprise",
          price: 67,
          billing: "monthly",
          features: ["60 minutes/month", "Premium avatars", "Custom voices", "API access"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: false,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 40,
      input_types: ["Text", "Scripts", "Images"],
      output_formats: ["MP4", "MOV"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["API", "LMS", "Video Platforms"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.7,
      features: 4.5,
      value: 4.4,
      support: 4.5,
      total_reviews: 9800
    },
    pros: ["Training videos", "Realistic avatars", "Multilingual", "Professional quality"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Training videos", "Educational content", "Marketing videos", "Corporate training"],
    launch_date: "2017-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "45",
    name: "Tabnine",
    slug: "tabnine",
    logo_url: "https://www.tabnine.com/favicon.ico",
    company: "Tabnine",
    tagline: "AI code completion with privacy-focused approach",
    description: "Tabnine is an AI code completion tool that provides intelligent code suggestions while maintaining user privacy. It offers both cloud and local models, making it suitable for developers who need code assistance without compromising their data.",
    category: ["Code Assistant", "Privacy Coding"],
    website: "https://www.tabnine.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic features, limited suggestions"
      },
      plans: [
        {
          name: "Pro",
          price: 12,
          billing: "monthly",
          features: ["Advanced models", "Unlimited suggestions", "Team features", "Priority support"]
        },
        {
          name: "Enterprise",
          price: 39,
          billing: "monthly",
          features: ["Custom models", "Advanced security", "Dedicated support", "On-premise deployment"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: true,
      mobile_app: false,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 30,
      input_types: ["Code", "Comments"],
      output_formats: ["Code"]
    },
    technical: {
      model_type: "Multiple LLMs",
      processing: "Local + Cloud",
      gdpr_compliant: true,
      data_privacy: "Very High",
      uptime: "99.9%"
    },
    integrations: ["VS Code", "JetBrains", "Vim", "Emacs", "Sublime Text"],
    ratings: {
      overall: 4.3,
      ease_of_use: 4.4,
      features: 4.2,
      value: 4.3,
      support: 4.1,
      total_reviews: 8500
    },
    pros: ["Privacy coding", "Local models", "Good performance", "Privacy-focused"],
    cons: ["Limited free features", "Subscription required", "Learning curve"],
    best_for: ["Privacy coding", "Enterprise development", "Code completion", "Data security"],
    launch_date: "2018-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "46",
    name: "Tome",
    slug: "tome",
    logo_url: "https://tome.app/favicon.ico",
    company: "Tome",
    tagline: "AI-powered presentation creation platform",
    description: "Tome is an AI-powered presentation platform that automatically creates presentations from text, images, and other content. It offers intelligent layouts, design suggestions, and collaborative features to make presentation creation effortless.",
    category: ["Presentation", "Quick Presentations"],
    website: "https://tome.app",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic features, limited exports"
      },
      plans: [
        {
          name: "Pro",
          price: 10,
          billing: "monthly",
          features: ["Unlimited presentations", "Advanced features", "Team collaboration", "Export options"]
        },
        {
          name: "Team",
          price: 20,
          billing: "monthly",
          features: ["Team management", "Admin controls", "Advanced analytics", "Custom templates"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 15,
      input_types: ["Text", "Images", "Templates"],
      output_formats: ["PDF", "PPTX", "PNG"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Google Drive", "Slack", "Microsoft Teams"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.5,
      features: 4.3,
      value: 4.4,
      support: 4.2,
      total_reviews: 4200
    },
    pros: ["Quick presentations", "AI-powered", "Easy to use", "Good templates"],
    cons: ["Limited customization", "Subscription required", "Learning curve"],
    best_for: ["Quick presentations", "Business slides", "Team collaboration", "Content creation"],
    launch_date: "2022-01-01",
    last_updated: "2024-11-25"
  },
  {
    id: "47",
    name: "Wordtune",
    slug: "wordtune",
    logo_url: "https://www.wordtune.com/favicon.ico",
    company: "AI21 Labs",
    tagline: "AI writing assistant for rewriting and improving text",
    description: "Wordtune is an AI writing assistant that helps users rewrite, improve, and enhance their writing. It offers features like sentence rewriting, tone adjustment, and style suggestions to make writing more engaging and effective.",
    category: ["Writing Assistant", "Rewriting"],
    website: "https://www.wordtune.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "10 rewrites per day"
      },
      plans: [
        {
          name: "Premium",
          price: 10,
          billing: "monthly",
          features: ["Unlimited rewrites", "Advanced features", "Tone suggestions", "Priority support"]
        },
        {
          name: "Team",
          price: 25,
          billing: "monthly",
          features: ["Team collaboration", "Admin controls", "Advanced analytics", "Custom integrations"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 15,
      input_types: ["Text"],
      output_formats: ["Text"]
    },
    technical: {
      model_type: "Proprietary NLP",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["Chrome", "Word", "Google Docs", "API"],
    ratings: {
      overall: 4.5,
      ease_of_use: 4.6,
      features: 4.4,
      value: 4.5,
      support: 4.3,
      total_reviews: 15200
    },
    pros: ["Rewriting", "Easy to use", "Good quality", "Tone adjustment"],
    cons: ["Limited free features", "Subscription required", "Learning curve"],
    best_for: ["Rewriting", "Content improvement", "Tone adjustment", "Writing enhancement"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-28"
  },
  {
    id: "48",
    name: "Writesonic",
    slug: "writesonic",
    logo_url: "https://writesonic.com/favicon.ico",
    company: "Writesonic",
    tagline: "AI content creation platform for blogs and marketing",
    description: "Writesonic is an AI content creation platform that helps users create blog posts, marketing copy, and other content. It offers features like article generation, SEO optimization, and brand voice training to create high-quality content at scale.",
    category: ["Content Writing", "Blog Posts"],
    website: "https://writesonic.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "10,000 words per month"
      },
      plans: [
        {
          name: "Pro",
          price: 16,
          billing: "monthly",
          features: ["100,000 words", "Advanced features", "SEO optimization", "Brand voice"]
        },
        {
          name: "Team",
          price: 33,
          billing: "monthly",
          features: ["Unlimited words", "Team collaboration", "Custom models", "Priority support"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: true,
      languages_supported: 25,
      input_types: ["Text", "Templates"],
      output_formats: ["Text", "HTML", "PDF"]
    },
    technical: {
      model_type: "GPT-4 + Custom Models",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["WordPress", "Shopify", "Zapier", "API"],
    ratings: {
      overall: 4.4,
      ease_of_use: 4.5,
      features: 4.3,
      value: 4.4,
      support: 4.2,
      total_reviews: 18750
    },
    pros: ["Blog posts", "SEO optimization", "Good templates", "Brand voice"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["Blog posts", "Content marketing", "SEO content", "Brand voice"],
    launch_date: "2020-01-01",
    last_updated: "2024-11-30"
  },
  {
    id: "49",
    name: "Zapier AI",
    slug: "zapier-ai",
    logo_url: "https://zapier.com/favicon.ico",
    company: "Zapier",
    tagline: "AI-powered automation platform for no-code workflows",
    description: "Zapier AI integrates artificial intelligence into the popular automation platform, offering features like AI-powered workflow suggestions, intelligent data processing, and automated decision-making to streamline business processes.",
    category: ["Automation", "No-code"],
    website: "https://zapier.com",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "5 zaps per month"
      },
      plans: [
        {
          name: "Starter",
          price: 20,
          billing: "monthly",
          features: ["20 zaps", "AI features", "Advanced filters", "Priority support"]
        },
        {
          name: "Professional",
          price: 50,
          billing: "monthly",
          features: ["Unlimited zaps", "Advanced AI", "Custom fields", "Team collaboration"]
        }
      ]
    },
    features: {
      api_access: true,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: true,
      custom_training: false,
      languages_supported: 20,
      input_types: ["Data", "Triggers", "Actions"],
      output_formats: ["Data", "Notifications", "Files"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.9%"
    },
    integrations: ["5000+ Apps", "API", "Webhooks", "Custom Apps"],
    ratings: {
      overall: 4.6,
      ease_of_use: 4.7,
      features: 4.5,
      value: 4.6,
      support: 4.4,
      total_reviews: 45600
    },
    pros: ["No-code automation", "Wide integration", "AI-powered", "Easy to use"],
    cons: ["Limited free tier", "Subscription required", "Learning curve"],
    best_for: ["No-code automation", "Business processes", "Workflow optimization", "Team efficiency"],
    launch_date: "2011-01-01",
    last_updated: "2024-12-01"
  },
  {
    id: "50",
    name: "Replika",
    slug: "replika",
    logo_url: "https://replika.ai/favicon.ico",
    company: "Luka Inc",
    tagline: "AI companion chatbot for emotional support and conversation",
    description: "Replika is an AI companion chatbot designed to provide emotional support, friendship, and meaningful conversations. It learns from interactions to become a personalized AI companion that can help with mental health, loneliness, and personal growth.",
    category: ["AI Companion", "Mental Health"],
    website: "https://replika.ai",
    pricing: {
      model: "Freemium",
      free_tier: {
        available: true,
        limits: "Basic conversations, limited features"
      },
      plans: [
        {
          name: "Pro",
          price: 20,
          billing: "monthly",
          features: ["Unlimited conversations", "Advanced features", "Custom personality", "Priority support"]
        }
      ]
    },
    features: {
      api_access: false,
      offline_mode: false,
      mobile_app: true,
      team_collaboration: false,
      custom_training: true,
      languages_supported: 20,
      input_types: ["Text"],
      output_formats: ["Text"]
    },
    technical: {
      model_type: "Proprietary AI",
      processing: "Cloud",
      gdpr_compliant: true,
      data_privacy: "High",
      uptime: "99.8%"
    },
    integrations: ["Mobile Apps", "Web"],
    ratings: {
      overall: 4.2,
      ease_of_use: 4.3,
      features: 4.1,
      value: 4.2,
      support: 4.0,
      total_reviews: 18750
    },
    pros: ["AI companion", "Emotional support", "Personalized", "Easy to use"],
    cons: ["Limited free features", "Subscription required", "Privacy concerns"],
    best_for: ["AI companion", "Emotional support", "Mental health", "Personal growth"],
    launch_date: "2017-01-01",
    last_updated: "2024-11-28"
  }
];

export const categories = [
  { name: "Content Writing", icon: "FileText", count: 12 },
  { name: "Image Generation", icon: "Image", count: 8 },
  { name: "Video", icon: "Video", count: 6 },
  { name: "Code Assistant", icon: "Code", count: 8 },
  { name: "Audio & Voice", icon: "Mic", count: 6 },
  { name: "Design", icon: "Palette", count: 7 },
  { name: "Chatbot", icon: "MessageSquare", count: 8 },
  { name: "Productivity", icon: "Zap", count: 10 },
  { name: "Research", icon: "Search", count: 6 },
  { name: "Marketing", icon: "TrendingUp", count: 8 },
  { name: "Presentation", icon: "Presentation", count: 4 },
  { name: "Meeting Assistant", icon: "Users", count: 4 },
  { name: "Transcription", icon: "FileText", count: 4 },
  { name: "Writing Assistant", icon: "Edit", count: 6 },
  { name: "AI Companion", icon: "Heart", count: 2 },
  { name: "Automation", icon: "Settings", count: 3 },
  { name: "Music", icon: "Music", count: 2 },
  { name: "3D Generation", icon: "Box", count: 2 },
  { name: "Branding", icon: "Award", count: 2 },
  { name: "ML Platform", icon: "Brain", count: 2 }
];
