import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Browse from "./pages/Browse";
import Compare from "./pages/Compare";
import Recommendations from "./pages/Recommendations";
import Categories from "./pages/Categories";
import ToolDetail from "./pages/ToolDetail";
import SubmitTool from "./pages/SubmitTool";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Guides from "./pages/Guides";
import APIDocs from "./pages/APIDocs";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/compare" element={<Compare />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/tool/:slug" element={<ToolDetail />} />
                    <Route path="/submit" element={<SubmitTool />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/guides" element={<Guides />} />
                    <Route path="/api-docs" element={<APIDocs />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
