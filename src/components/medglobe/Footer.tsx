import { ExternalLink, Globe2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-6 px-4">
      <div className="mx-auto max-w-screen-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Globe2 className="h-4 w-4 text-primary" />
          <span>MedGlobe — Built with open-source tools</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="https://github.com/topojson/world-atlas" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-1">
            World Atlas Data <ExternalLink className="h-3 w-3" />
          </a>
          <a href="https://flagcdn.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-1">
            FlagCDN <ExternalLink className="h-3 w-3" />
          </a>
          <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-1">
            WHO <ExternalLink className="h-3 w-3" />
          </a>
          <a href="https://ethnomed.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-1">
            EthnoMed <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
