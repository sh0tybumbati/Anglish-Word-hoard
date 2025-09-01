import { useLocalStorage } from './useLocalStorage';

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('anglish-wordbook-favorites', []);

  const addToFavorites = (wordId: string) => {
    setFavorites(prev => [...prev.filter(id => id !== wordId), wordId]);
  };

  const removeFromFavorites = (wordId: string) => {
    setFavorites(prev => prev.filter(id => id !== wordId));
  };

  const toggleFavorite = (wordId: string) => {
    if (favorites.includes(wordId)) {
      removeFromFavorites(wordId);
    } else {
      addToFavorites(wordId);
    }
  };

  const isFavorite = (wordId: string) => {
    return favorites.includes(wordId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    favoriteCount: favorites.length
  };
};