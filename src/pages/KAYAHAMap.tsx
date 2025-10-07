import { useMemo, useState } from "react";
import { tools } from "@/data/tools";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type HQ = { city?: string; country?: string; lat: number; lng: number };

// Map categories to neon colors
const categoryNeonColor: Record<string, string> = {
  "Productivity": "#39ff14",
  "Writing": "#00e5ff",
  "Web Development": "#ff00e5",
  "Image Generation": "#ffea00",
  "Video": "#ff6ec7",
  "Code Assistant": "#7df9ff",
  "Audio & Voice": "#bfff00",
  "SEO": "#ff4dff",
  "Design Suite": "#00ffbf",
  "Branding": "#ff9d00",
  "Data Analysis": "#8aff00",
  "Developer Tools": "#00ffd5",
  "Customer Support": "#ff4d4d",
  "Marketing": "#ff66ff",
  "Search": "#9d00ff",
  "Music": "#00ff99",
  "Presentation": "#ffcc00",
  "E-commerce": "#66ff66",
  "Note-taking": "#66ffff",
  "Image Editing": "#ff33cc",
  "Video Editing": "#33ffcc",
  "Image Enhancement": "#ffccff",
  "Creative Writing": "#cc66ff",
  "Video Generation": "#ff6699",
  "UI/UX Design": "#00ffcc",
  "Chatbot & Sales": "#ff3366",
};

// Minimal HQ map for a subset; can be expanded later
const toolHQBySlug: Record<string, HQ> = {
  "chatgpt": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "claude": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "bing-image-creator": { city: "Redmond", country: "USA", lat: 47.673988, lng: -122.121513 },
  "openai-playground": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "framer-ai": { city: "Amsterdam", country: "Netherlands", lat: 52.3676, lng: 4.9041 },
  "phind": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "tidio": { city: "Szczecin", country: "Poland", lat: 53.4285, lng: 14.5528 },
  "topaz-labs": { city: "Dallas", country: "USA", lat: 32.7767, lng: -96.7970 },
  "surfer-seo": { city: "Wrocław", country: "Poland", lat: 51.1079, lng: 17.0385 },
  "taskade": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "writecream": { city: "Mumbai", country: "India", lat: 19.076, lng: 72.8777 },
  "you-com": { city: "Palo Alto", country: "USA", lat: 37.4419, lng: -122.1430 },
  "10web": { city: "Yerevan", country: "Armenia", lat: 40.1792, lng: 44.4991 },
  "akkio": { city: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  "anthropic-console": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "brandmark": { city: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832 },
  "claude-code": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "cleanup-pictures": { city: "Paris", country: "France", lat: 48.8566, lng: 2.3522 },
  "designs-ai": { city: "Kuala Lumpur", country: "Malaysia", lat: 3.139, lng: 101.6869 },
  "drift": { city: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  "fliki": { city: "Bengaluru", country: "India", lat: 12.9716, lng: 77.5946 },
  "frase": { city: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  "gptzero": { city: "Princeton", country: "USA", lat: 40.3573, lng: -74.6672 },
  "galileo-ai": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "gamma": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "hypotenuse-ai": { city: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198 },
  "jasper-art": { city: "Austin", country: "USA", lat: 30.2672, lng: -97.7431 },
  "julius-ai": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "kaiber": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "lavender": { city: "New York", country: "USA", lat: 40.7128, lng: -74.0060 },
  "lensa-ai": { city: "Tel Aviv", country: "Israel", lat: 32.0853, lng: 34.7818 },
  "lex": { city: "New York", country: "USA", lat: 40.7128, lng: -74.0060 },
  "lightricks": { city: "Jerusalem", country: "Israel", lat: 31.7683, lng: 35.2137 },
  "marketmuse": { city: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  "mem-ai": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "novelai": { city: "Tokyo", country: "Japan", lat: 35.6762, lng: 139.6503 },
  "opus-clip": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "originality-ai": { city: "Toronto", country: "Canada", lat: 43.6532, lng: -79.3832 },
  "reflect": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "remini": { city: "Milan", country: "Italy", lat: 45.4642, lng: 9.19 },
  "rephrase-ai": { city: "Bengaluru", country: "India", lat: 12.9716, lng: 77.5946 },
  "replit-ai": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "scribe": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "sembly-ai": { city: "London", country: "UK", lat: 51.5072, lng: -0.1276 },
  "smartwriter": { city: "Chennai", country: "India", lat: 13.0827, lng: 80.2707 },
  "speechify": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "sudowrite": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "suno-ai": { city: "Boston", country: "USA", lat: 42.3601, lng: -71.0589 },
  "tavus": { city: "San Francisco", country: "USA", lat: 37.7749, lng: -122.4194 },
  "udio": { city: "New York", country: "USA", lat: 40.7128, lng: -74.0060 },
  "unscreen": { city: "Vienna", country: "Austria", lat: 48.2082, lng: 16.3738 },
};

const KAYAHAMap = () => {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set<string>();
    tools.forEach(t => t.category.forEach(c => set.add(c)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter(t => {
      const hasHQ = toolHQBySlug[t.slug as keyof typeof toolHQBySlug];
      if (!hasHQ) return false;
      const catOk = categoryFilter === "all" || t.category.includes(categoryFilter);
      const qOk = !q || t.name.toLowerCase().includes(q) || t.company.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, categoryFilter]);

  return (
    <div className="min-h-screen w-full p-4 md:p-8" style={{ background: "#0a0a0a" }}>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#39ff14", textShadow: "0 0 12px #39ff14" }}>KAYAHA Map</h1>
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="flex-1">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools or companies..."
              className="bg-black/60 text-white border border-white/20"
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-black/60 text-white border border-white/20">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 text-white border border-white/20">
                <SelectItem value="all">All categories</SelectItem>
                {categories.map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Simple world map background (SVG) */}
        <div className="relative w-full rounded-lg overflow-hidden" style={{ height: 560, background: "radial-gradient(ellipse at center, #0f0f0f 0%, #000 100%)", boxShadow: "0 0 40px #00fff2 inset" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-contain opacity-20"
          />
          {/* Neon markers */}
          {filtered.map(t => {
            const hq = toolHQBySlug[t.slug as keyof typeof toolHQBySlug];
            if (!hq) return null;
            const primaryCategory = t.category[0] || "Productivity";
            const neon = categoryNeonColor[primaryCategory] || "#39ff14";

            // Convert lat/lng to rough x/y for the SVG image positioning (equirectangular)
            const x = ((hq.lng + 180) / 360) * 100; // percentage
            const y = ((90 - hq.lat) / 180) * 100;   // percentage

            return (
              <div key={t.id} className="group absolute" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: neon, boxShadow: `0 0 12px ${neon}, 0 0 24px ${neon}` }}
                />
                {/* Hover card */}
                <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute -translate-x-1/2 -translate-y-full mt-2" style={{ left: "50%" }}>
                  <Card className="w-72 bg-black/80 border border-white/20 backdrop-blur-xl">
                    <CardHeader>
                      <CardTitle className="text-white text-base" style={{ textShadow: `0 0 10px ${neon}` }}>
                        {t.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-white/80 text-sm mb-2">{t.company}</div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {t.category.map(c => (
                          <span key={c} className="px-2 py-0.5 rounded text-xs" style={{ color: "#000", background: categoryNeonColor[c] || "#39ff14", boxShadow: `0 0 10px ${categoryNeonColor[c] || "#39ff14"}` }}>{c}</span>
                        ))}
                      </div>
                      <div className="text-white/70 text-xs">
                        HQ: {hq.city ? `${hq.city}, ` : ""}{hq.country}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {categories.map(c => (
            <div key={c} className="flex items-center gap-2 text-sm text-white/80">
              <span className="inline-block w-3 h-3 rounded-full" style={{ background: categoryNeonColor[c] || "#39ff14", boxShadow: `0 0 10px ${categoryNeonColor[c] || "#39ff14"}` }} />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KAYAHAMap;


