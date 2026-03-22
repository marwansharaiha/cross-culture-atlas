import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Globe2, Heart, BookOpen, List, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onSearch?: (query: string) => void;
  onToggleView?: () => void;
  viewMode?: "globe" | "list";
}

export default function Navbar({ onSearch, onToggleView, viewMode }: NavbarProps) {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const location = useLocation();

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-4 px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Globe2 className="h-7 w-7 text-primary" />
          <div className="hidden sm:block">
            <span className="text-lg font-bold tracking-tight text-foreground">MedGlobe</span>
            <span className="ml-2 text-xs text-muted-foreground hidden md:inline">Cultural Compass for Global Doctors</span>
          </div>
        </Link>

        {/* Search */}
        {location.pathname === "/" && (
          <form onSubmit={handleSubmit} className="flex-1 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  onSearch?.(e.target.value);
                }}
                placeholder="Search countries, languages, religions, regions…"
                className="w-full rounded-lg border border-input bg-muted/50 py-2 pl-10 pr-4 text-sm outline-none ring-ring/30 transition-shadow focus:ring-2 focus:bg-background placeholder:text-muted-foreground"
                aria-label="Search countries"
              />
            </div>
          </form>
        )}

        {/* Actions */}
        <nav className="flex items-center gap-1 shrink-0">
          {location.pathname === "/" && onToggleView && (
            <Button variant="ghost" size="sm" onClick={onToggleView} aria-label="Toggle view">
              {viewMode === "globe" ? <List className="h-4 w-4" /> : <Globe2 className="h-4 w-4" />}
              <span className="hidden sm:inline ml-1.5 text-xs">{viewMode === "globe" ? "List" : "Globe"}</span>
            </Button>
          )}
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <Globe2 className="h-4 w-4" />
              <span className="hidden sm:inline ml-1.5 text-xs">Explore</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/favorites">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline ml-1.5 text-xs">Favorites</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" size-sm onClick={toggleDark} aria-label="Toggle dark mode">
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </nav>
      </div>
    </header>
  );
}
