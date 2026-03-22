import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { countries } from "@/data/countries";
import { useFavorites } from "@/hooks/useFavorites";
import CountryCard from "@/components/medglobe/CountryCard";
import CountryModal from "@/components/medglobe/CountryModal";
import Navbar from "@/components/medglobe/Navbar";
import Footer from "@/components/medglobe/Footer";
import { motion } from "framer-motion";
import { CountryData } from "@/data/countries";

export default function Favorites() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

  const favoriteCountries = countries.filter((c) => favorites.includes(c.isoCode));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="mx-auto max-w-screen-lg px-4 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Globe
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground text-balance">Your Favorites</h1>
          </div>

          {favoriteCountries.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Heart className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground">No favorites yet. Click the heart icon on any country to save it here.</p>
              <Link to="/" className="mt-4 inline-block text-sm text-primary hover:underline">
                Explore countries →
              </Link>
            </motion.div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {favoriteCountries.map((c, i) => (
                <motion.div
                  key={c.isoCode}
                  initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
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
          )}
        </div>
      </main>

      <Footer />

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          isFavorite={isFavorite(selectedCountry.isoCode)}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
}
