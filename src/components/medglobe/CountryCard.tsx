import { Heart } from "lucide-react";
import { CountryData, getFlagUrl, getLanguageFamilyColor } from "@/data/countries";

interface CountryCardProps {
  country: CountryData;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: (isoCode: string) => void;
}

export default function CountryCard({ country, onClick, isFavorite, onToggleFavorite }: CountryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring outline-none"
      aria-label={`View cultural details for ${country.name}`}
    >
      <div className="flex items-start gap-3">
        <img
          src={getFlagUrl(country.isoCode)}
          alt={`Flag of ${country.name}`}
          className="h-8 w-11 rounded object-cover shadow-sm border border-border shrink-0 mt-0.5"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-sm text-card-foreground group-hover:text-primary transition-colors truncate">
              {country.name}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(country.isoCode);
              }}
              className="shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                className={`h-3.5 w-3.5 ${
                  isFavorite ? "fill-primary text-primary" : "text-muted-foreground"
                }`}
              />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {country.languages.slice(0, 2).join(", ")}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full shrink-0"
              style={{ backgroundColor: getLanguageFamilyColor(country.primaryLanguageFamily) }}
            />
            <span className="text-[11px] text-muted-foreground">{country.region}</span>
          </div>
        </div>
      </div>
    </button>
  );
}
