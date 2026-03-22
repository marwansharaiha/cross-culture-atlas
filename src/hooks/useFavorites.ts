import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("medglobe-favorites") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("medglobe-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (isoCode: string) => {
    setFavorites((prev) =>
      prev.includes(isoCode) ? prev.filter((c) => c !== isoCode) : [...prev, isoCode]
    );
  };

  const isFavorite = (isoCode: string) => favorites.includes(isoCode);

  return { favorites, toggleFavorite, isFavorite };
}
