import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/AuthModal";
import { UserMenu } from "@/components/UserMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, Menu, LogIn } from "lucide-react";

export const Navbar = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 blur-xl bg-primary/20 group-hover:bg-primary/40 transition-colors" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Tool Finder
              </span>
              <span className="text-xs text-muted-foreground">by KAYAHA</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link to="/browse" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Browse Tools
              </Link>
              <Link to="/compare" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Compare
              </Link>
              <Link to="/recommendations" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Get Recommendations
              </Link>
              <Link to="/categories" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Categories
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              {user ? (
                <UserMenu />
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hidden md:flex gap-2"
                  onClick={() => setAuthModalOpen(true)}
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Button>
              )}
                    <Link to="/submit">
                      <Button size="sm" className="gradient-primary">
                        Submit Tool
                      </Button>
                    </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
};
