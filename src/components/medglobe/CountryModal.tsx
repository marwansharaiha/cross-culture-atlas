import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Heart, HeartOff, MessageCircle, Users, Sparkles, Stethoscope, UserCheck, CheckCircle2, XCircle } from "lucide-react";
import { CountryData, getFlagUrl } from "@/data/countries";
import { Button } from "@/components/ui/button";

interface CountryModalProps {
  country: CountryData | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (isoCode: string) => void;
}

const TABS = [
  { key: "communication", label: "Communication", icon: MessageCircle },
  { key: "family", label: "Family & Decisions", icon: Users },
  { key: "religious", label: "Religious & Spiritual", icon: Sparkles },
  { key: "health", label: "Health Beliefs", icon: Stethoscope },
  { key: "gender", label: "Gender & Contact", icon: UserCheck },
  { key: "checklist", label: "Do / Don't", icon: CheckCircle2 },
] as const;

type TabKey = typeof TABS[number]["key"];

export default function CountryModal({ country, onClose, isFavorite, onToggleFavorite }: CountryModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("communication");

  if (!country) return null;

  const sectionMap: Record<TabKey, string[]> = {
    communication: country.cultural.communication,
    family: country.cultural.familyDecisionMaking,
    religious: country.cultural.religiousSpiritual,
    health: country.cultural.healthBeliefs,
    gender: country.cultural.genderContact,
    checklist: [],
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-card shadow-2xl border border-border flex flex-col"
          initial={{ scale: 0.92, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 24 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center gap-4 p-6 pb-4 border-b border-border">
            <img
              src={getFlagUrl(country.isoCode)}
              alt={`Flag of ${country.name}`}
              className="h-10 w-14 rounded object-cover shadow-sm border border-border"
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold text-card-foreground text-balance">{country.name}</h2>
              <p className="text-sm text-muted-foreground">
                {country.languages.join(", ")} · {country.religions.slice(0, 2).join(", ")}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onToggleFavorite(country.isoCode)}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? (
                <Heart className="h-5 w-5 fill-primary text-primary" />
              ) : (
                <Heart className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close modal">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 overflow-x-auto px-4 pt-3 pb-0 scrollbar-none" role="tablist">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-t-lg px-3 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "bg-primary/10 text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "checklist" ? (
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-do-green mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" /> Do
                      </h3>
                      <ul className="space-y-2">
                        {country.cultural.doList.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-card-foreground">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-do-green mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-dont-red mb-3 flex items-center gap-1.5">
                        <XCircle className="h-4 w-4" /> Don't
                      </h3>
                      <ul className="space-y-2">
                        {country.cultural.dontList.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-card-foreground">
                            <XCircle className="h-4 w-4 shrink-0 text-dont-red mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {sectionMap[activeTab].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-card-foreground leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-border px-6 py-3 bg-muted/30">
            <p className="text-xs text-muted-foreground mb-1">Sources & Further Reading</p>
            <div className="flex flex-wrap gap-3">
              {country.sources.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                >
                  {s.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
