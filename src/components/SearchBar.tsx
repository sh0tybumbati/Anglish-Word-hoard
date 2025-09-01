import React from 'react';
import { Search, Filter, Heart } from 'lucide-react';
import { WordCategory } from '../types';

const categories = [
  { value: 'all', label: 'All Categories', description: 'Show all word entries' },
  { value: 'authentic', label: 'Already Anglish', description: 'Germanic words still in use' },
  { value: 'general', label: 'General Terms', description: 'Common everyday words' },
  { value: 'academic', label: 'Academic', description: 'Scholarly and educational terms' },
  { value: 'professional', label: 'Professions', description: 'Job titles and occupations' },
  { value: 'technical', label: 'Technical', description: 'Technology and engineering terms' },
  { value: 'materials', label: 'Materials', description: 'Metals, substances, and materials' },
  { value: 'military', label: 'Military', description: 'Warfare, weapons, and armor' },
  { value: 'nature', label: 'Nature', description: 'Natural world and environment' },
  { value: 'social', label: 'Social', description: 'Society, culture, and relationships' },
  { value: 'religious', label: 'Religious', description: 'Spiritual and religious terms' },
  { value: 'culinary', label: 'Food & Cooking', description: 'Culinary arts and dining' },
  { value: 'artistic', label: 'Artistic', description: 'Arts, crafts, and creativity' },
  { value: 'newalbion', label: 'New Albion Terms', description: 'Fantasy/constructed terminology' }
] as const;

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: WordCategory;
  onCategoryChange: (category: WordCategory) => void;
  showOnlyFavorites: boolean;
  onToggleFavorites: () => void;
  resultsCount: number;
  totalCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  showOnlyFavorites,
  onToggleFavorites,
  resultsCount,
  totalCount
}) => {
  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
        <input
          type="text"
          placeholder="Search words, meanings, and etymology..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-slate-800/80 border border-teal-400/40 rounded-xl text-teal-100 placeholder-teal-300/60 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 backdrop-blur-sm transition-all duration-300 text-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-purple-400" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as WordCategory)}
            className="px-4 py-2 bg-slate-800/80 border border-purple-400/40 rounded-lg text-purple-100 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            {categories.map((cat: any) => (
              <option key={cat.value} value={cat.value} className="bg-slate-800">
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Favorites Toggle */}
        <button
          onClick={onToggleFavorites}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 border ${
            showOnlyFavorites
              ? 'bg-pink-500/20 border-pink-400/40 text-pink-200'
              : 'bg-slate-800/80 border-slate-400/40 text-slate-300 hover:border-pink-400/40 hover:text-pink-200'
          }`}
        >
          <Heart className={`w-4 h-4 ${showOnlyFavorites ? 'fill-current' : ''}`} />
          <span className="text-sm">Favorites Only</span>
        </button>

        {/* Results Count */}
        <div className="flex-1 lg:text-right">
          <p className="text-cyan-200 text-lg font-medium">
            ✦ Showing {resultsCount} of {totalCount} entries ✦
          </p>
        </div>
      </div>
    </div>
  );
};