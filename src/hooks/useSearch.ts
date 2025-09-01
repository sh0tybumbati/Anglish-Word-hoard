import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { WordEntry, SearchFilters, WordCategory } from '../types';

interface UseSearchProps {
  data: WordEntry[];
}

interface UseSearchReturn {
  filteredWords: WordEntry[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: WordCategory;
  setSelectedCategory: (category: WordCategory) => void;
  searchFilters: SearchFilters;
  setSearchFilters: (filters: Partial<SearchFilters>) => void;
  resultsCount: number;
  totalCount: number;
}

export const useSearch = ({ data }: UseSearchProps): UseSearchReturn => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<WordCategory>('all');
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    category: 'all',
    searchTerm: '',
    searchFields: ['word', 'anglish', 'origin', 'tags'],
    showOnlyFavorites: false,
  });

  // Create Fuse instance for fuzzy search
  const fuse = useMemo(() => {
    const options = {
      includeScore: true,
      threshold: 0.4, // Adjust for fuzziness (0 = exact match, 1 = match anything)
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 2,
      keys: [
        { name: 'word', weight: 0.25 },
        { name: 'anglish', weight: 0.25 },
        { name: 'meaning', weight: 0.2 },
        { name: 'kind', weight: 0.1 },
        { name: 'etymology.oldEnglish', weight: 0.1 },
        { name: 'etymology.protoGermanic', weight: 0.05 },
        { name: 'notes', weight: 0.05 }
      ]
    };
    return new Fuse(data, options);
  }, [data]);

  // Advanced filtering with fuzzy search
  const filteredWords = useMemo(() => {
    let results = data;

    // Category filtering
    if (selectedCategory !== 'all') {
      results = results.filter(entry => entry.category === selectedCategory);
    }

    // Text search with fuzzy matching
    if (searchTerm.trim()) {
      if (searchTerm.length >= 2) {
        // Use Fuse.js for fuzzy search on longer terms
        const fuseResults = fuse.search(searchTerm);
        const matchingIds = new Set(fuseResults.map(result => result.item.id));
        results = results.filter(entry => matchingIds.has(entry.id));
        
        // Sort by relevance score
        results.sort((a, b) => {
          const scoreA = fuseResults.find(r => r.item.id === a.id)?.score ?? 1;
          const scoreB = fuseResults.find(r => r.item.id === b.id)?.score ?? 1;
          return scoreA - scoreB;
        });
      } else {
        // Simple string matching for short terms
        const searchLower = searchTerm.toLowerCase();
        results = results.filter(entry => {
          return entry.word.toLowerCase().includes(searchLower) ||
                 entry.meaning.toLowerCase().includes(searchLower) ||
                 entry.anglish.some(alt => alt.toLowerCase().includes(searchLower)) ||
                 entry.kind.toLowerCase().includes(searchLower);
        });
      }
    }

    // Additional filters
    if (searchFilters.showOnlyFavorites) {
      // This would require user preferences to be implemented
      // For now, we'll skip this filter
    }

    return results;
  }, [data, searchTerm, selectedCategory, searchFilters, fuse]);

  // Update search filters when basic filters change
  useMemo(() => {
    setSearchFilters(prev => ({
      ...prev,
      searchTerm,
      category: selectedCategory
    }));
  }, [searchTerm, selectedCategory]);

  return {
    filteredWords,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    searchFilters,
    setSearchFilters: (filters: Partial<SearchFilters>) => {
      setSearchFilters(prev => ({ ...prev, ...filters }));
    },
    resultsCount: filteredWords.length,
    totalCount: data.length
  };
};