# AI Tool Finder by KAYAHA

A comprehensive platform for discovering, comparing, and finding the perfect AI tools for your needs. Built with modern web technologies and designed for optimal user experience.

![AI Tool Finder](https://img.shields.io/badge/AI-Tool%20Finder-blue?style=for-the-badge&logo=sparkles)
![Built with React](https://img.shields.io/badge/Built%20with-React-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🌟 Features

### 🔍 **Smart Discovery**
- **50+ AI Tools**: Curated collection of the best AI tools across all categories
- **Advanced Search**: Find tools by name, company, category, or features
- **Smart Filtering**: Filter by pricing, features, ratings, and more
- **Category Browsing**: Explore tools by specific use cases

### 📊 **Comparison Engine**
- **Side-by-Side Comparison**: Compare up to 5 tools simultaneously
- **Detailed Metrics**: Features, pricing, ratings, technical specs
- **Export & Share**: Export comparisons as JSON or share with others
- **Visual Indicators**: Clear checkmarks and ratings for easy comparison

### 🎯 **Personalized Recommendations**
- **AI-Powered Suggestions**: Get personalized tool recommendations
- **Budget-Aware**: Recommendations based on your budget constraints
- **Skill-Level Matching**: Tools matched to your technical expertise
- **Use Case Focused**: Recommendations based on your specific needs

### 🔐 **User Experience**
- **Authentication**: Sign up/Sign in with persistent sessions
- **Dark Mode**: Beautiful light and dark themes with system preference detection
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile
- **Modern UI**: Built with Shadcn/UI components for premium look and feel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kayaha/ai-tool-finder.git
   cd ai-tool-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Beautiful, accessible component library
- **Lucide React** - Beautiful icon library
- **Radix UI** - Headless UI primitives

### State Management
- **React Context** - Global state management
- **Local Storage** - Persistent user preferences
- **Custom Hooks** - Reusable stateful logic

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Vite HMR** - Hot module replacement

## 📁 Project Structure

```
ai-tool-finder/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── AuthModal.tsx # Authentication modal
│   │   ├── Navbar.tsx    # Navigation bar
│   │   ├── Footer.tsx    # Footer component
│   │   └── ...
│   ├── contexts/         # React contexts
│   │   ├── AuthContext.tsx    # Authentication state
│   │   └── ThemeContext.tsx   # Theme management
│   ├── data/             # Static data
│   │   └── tools.ts      # AI tools database
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Homepage
│   │   ├── Browse.tsx    # Tool browsing
│   │   ├── Compare.tsx   # Tool comparison
│   │   ├── Categories.tsx # Category browsing
│   │   └── ...
│   ├── App.tsx           # Main app component
│   └── main.tsx          # App entry point
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Key Components

### Authentication System
- **AuthModal**: Beautiful sign-in/sign-up modal with validation
- **UserMenu**: User profile dropdown with avatar
- **AuthContext**: Global authentication state management

### Theme System
- **ThemeToggle**: Light/Dark/System theme switcher
- **ThemeContext**: Theme state management
- **CSS Variables**: Dynamic theming support

### Tool Management
- **ToolCard**: Individual tool display component
- **Comparison Table**: Side-by-side tool comparison
- **Search & Filter**: Advanced tool discovery

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific configuration:

```env
VITE_APP_NAME="AI Tool Finder by KAYAHA"
VITE_APP_VERSION="1.0.0"
```

### Customization
- **Branding**: Update company name and colors in `src/lib/utils.ts`
- **Tools Data**: Modify `src/data/tools.ts` to add/update tools
- **Styling**: Customize themes in `tailwind.config.ts`

## 📊 Data Structure

### Tool Object
```typescript
interface Tool {
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
    plans: Array<{
      name: string;
      price: number;
      billing: string;
      features: string[];
    }>;
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
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits

**Developed by KAYAHA**

- **Project Lead**: KAYAHA Development Team
- **UI/UX Design**: KAYAHA Design Team
- **Backend Integration**: KAYAHA Engineering Team

### Special Thanks
- **Shadcn/UI** for the beautiful component library
- **Radix UI** for accessible primitives
- **Vite Team** for the amazing build tool
- **React Team** for the incredible framework

## 📞 Support

- **Documentation**: [GitHub Wiki](https://github.com/kayaha/ai-tool-finder/wiki)
- **Issues**: [GitHub Issues](https://github.com/kayaha/ai-tool-finder/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kayaha/ai-tool-finder/discussions)
- **Email**: support@kayaha.ai

## 🔗 Links

- **Live Demo**: [https://ai-tool-finder.kayaha.ai](https://ai-tool-finder.kayaha.ai)
- **Documentation**: [https://docs.kayaha.ai](https://docs.kayaha.ai)
- **API Reference**: [https://api.kayaha.ai/docs](https://api.kayaha.ai/docs)

---

<div align="center">
  <p>Made with ❤️ by <strong>KAYAHA</strong></p>
  <p>© 2024 KAYAHA. All rights reserved.</p>
</div>