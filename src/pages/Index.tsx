import { useState, useMemo, useCallback } from "react";
import Navbar from "@/components/medglobe/Navbar";
import FlatMapView from "@/components/medglobe/FlatMapView";
import CountryModal from "@/components/medglobe/CountryModal";
import CountryCard from "@/components/medglobe/CountryCard";
import Legend from "@/components/medglobe/Legend";
import Footer from "@/components/medglobe/Footer";
import { countries, CountryData, REGIONS, LANGUAGE_FAMILIES } from "@/data/countries";
import { regionalCulturalData, regionKey } from "@/data/regionalCulturalData";
import { regionalLanguages } from "@/data/languageMap";
import { useFavorites } from "@/hooks/useFavorites";
import { motion } from "framer-motion";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"globe" | "list">("globe");
  const [regionFilter, setRegionFilter] = useState("");
  const [languageFamilyFilter, setLanguageFamilyFilter] = useState("");
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const filteredCountries = useMemo(() => {
    let result = countries;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.languages.some((l) => l.toLowerCase().includes(q)) ||
          c.religions.some((r) => r.toLowerCase().includes(q)) ||
          c.region.toLowerCase().includes(q) ||
          c.primaryLanguageFamily.toLowerCase().includes(q)
      );
    }
    if (regionFilter) result = result.filter((c) => c.region === regionFilter);
    if (languageFamilyFilter) result = result.filter((c) => c.primaryLanguageFamily === languageFamilyFilter);
    return result;
  }, [searchQuery, regionFilter, languageFamilyFilter]);

  const focusCountry = useMemo(() => {
    if (filteredCountries.length === 1) return filteredCountries[0];
    return null;
  }, [filteredCountries]);

  const handleCountryClick = useCallback(
    (isoCode: string) => {
      const c = countries.find((c) => c.isoCode === isoCode);
      if (c) {
        setSelectedCountry(c);
        setSelectedRegion(null);
      }
    },
    []
  );

  const handleRegionClick = useCallback(
    (isoCode: string, regionName: string) => {
      const c = countries.find((c) => c.isoCode === isoCode);
      if (c) {
        setSelectedCountry(c);
        // Check if we have regional cultural data
        const key = regionKey(isoCode, regionName);
        if (regionalCulturalData[key]) {
          setSelectedRegion(regionName);
        } else {
          // Find matching region from regionalLanguages to get region info for display
          const regions = regionalLanguages[isoCode];
          const matchedRegion = regions?.find(r => r.region === regionName);
          if (matchedRegion) {
            setSelectedRegion(regionName);
          } else {
            setSelectedRegion(null);
          }
        }
      }
    },
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar
        onSearch={setSearchQuery}
        onToggleView={() => setViewMode((v) => (v === "globe" ? "list" : "globe"))}
        viewMode={viewMode}
      />

      <main className="flex-1 pt-16">
        {viewMode === "globe" ? (
          <div className="relative flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
            {/* Globe area */}
            <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <FlatMapView
71:                   focusLat={focusCountry?.lat}
                  focusLng={focusCountry?.lng}
                  selectedCountry={focusCountry?.isoCode ?? null}
                  onCountryClick={handleCountryClick}
                  onRegionClick={handleRegionClick}
                />
              </motion.div>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 hidden md:block">
                <Legend />
              </div>
            </div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-80 xl:w-96 border-t lg:border-t-0 lg:border-l border-border bg-card/50 p-4 overflow-y-auto max-h-[50vh] lg:max-h-[calc(100vh-4rem)]"
            >
              {/* Filters */}
              <div className="flex gap-2 mb-4">
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="flex-1 text-xs rounded-lg border border-input bg-background px-2 py-1.5 text-foreground outline-none"
                  aria-label="Filter by region"
                >
                  <option value="">All Regions</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <select
                  value={languageFamilyFilter}
                  onChange={(e) => setLanguageFamilyFilter(e.target.value)}
                  className="flex-1 text-xs rounded-lg border border-input bg-background px-2 py-1.5 text-foreground outline-none"
                  aria-label="Filter by language"
                >
                  <option value="">All Languages</option>
                  {LANGUAGE_FAMILIES.map((lf) => (
                    <option key={lf.key} value={lf.key}>{lf.label}</option>
                  ))}
                </select>
              </div>

              <p className="text-xs text-muted-foreground mb-3">
                {filteredCountries.length} {filteredCountries.length === 1 ? "country" : "countries"} found
              </p>

              <div className="space-y-2">
                {filteredCountries.map((c, i) => (
                  <motion.div
                    key={c.isoCode}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <CountryCard
                      country={c}
                      onClick={() => setSelectedCountry(c)}
                      isFavorite={isFavorite(c.isoCode)}
                      onToggleFavorite={toggleFavorite}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
        ) : (
          /* List view */
          <div className="mx-auto max-w-screen-lg px-4 py-8">
            <div className="flex gap-2 mb-6">
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="text-sm rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none"
                aria-label="Filter by region"
              >
                <option value="">All Regions</option>
                {REGIONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <select
                value={languageFamilyFilter}
                onChange={(e) => setLanguageFamilyFilter(e.target.value)}
                className="text-sm rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none"
                aria-label="Filter by language"
              >
                <option value="">All Languages</option>
                {LANGUAGE_FAMILIES.map((lf) => (
                  <option key={lf.key} value={lf.key}>{lf.label}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCountries.map((c, i) => (
                <motion.div
                  key={c.isoCode}
                  initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                >
                  <CountryCard
                    country={c}
                    onClick={() => setSelectedCountry(c)}
                    isFavorite={isFavorite(c.isoCode)}
                    onToggleFavorite={toggleFavorite}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Modal */}
      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          regionName={selectedRegion}
          onClose={() => { setSelectedCountry(null); setSelectedRegion(null); }}
          isFavorite={isFavorite(selectedCountry.isoCode)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
