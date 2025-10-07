import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { Tool } from "@/data/tools";
import { useState } from "react";

interface ToolCardProps {
  tool: Tool;
  onCompareToggle?: (toolId: string) => void;
  isSelected?: boolean;
}

export const ToolCard = ({ tool, onCompareToggle, isSelected }: ToolCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardContent className="pt-6 relative">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 shadow-sm">
            {!imageError ? (
              <img 
                src={tool.logo_url} 
                alt={tool.name}
                className="w-12 h-12 object-contain"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="text-2xl font-bold text-primary">{tool.name[0]}</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <Link to={`/tool/${tool.slug}`} className="group/link">
              <h3 className="font-semibold text-lg mb-1 truncate group-hover/link:text-primary transition-colors">
                {tool.name}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">{tool.company}</p>
          </div>
          {onCompareToggle && (
            <button
              onClick={() => onCompareToggle(tool.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isSelected 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {tool.tagline}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="font-semibold text-sm">{tool.ratings.overall}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({tool.ratings.total_reviews.toLocaleString()} reviews)
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tool.category.slice(0, 3).map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-xs text-muted-foreground">Starting at</p>
            <p className="font-semibold">
              {tool.pricing.free_tier.available 
                ? "Free" 
                : `$${tool.pricing.plans[0]?.price}/mo`}
            </p>
          </div>
          <Badge variant={tool.pricing.model === "Freemium" ? "default" : "secondary"}>
            {tool.pricing.model}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="pt-0 relative">
        <Link to={`/tool/${tool.slug}`} className="w-full">
          <Button variant="outline" className="w-full group/btn">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
