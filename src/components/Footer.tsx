import { Link } from "react-router-dom";
import { Sparkles, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Tool Finder
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Discover, compare, and find the perfect AI tools for your needs. Powered by KAYAHA.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/browse" className="text-muted-foreground hover:text-foreground transition-colors">Browse Tools</Link></li>
              <li><Link to="/compare" className="text-muted-foreground hover:text-foreground transition-colors">Compare</Link></li>
              <li><Link to="/recommendations" className="text-muted-foreground hover:text-foreground transition-colors">Recommendations</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API Docs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 AI Tool Finder by KAYAHA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
