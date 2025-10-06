import React from 'react';
import { Search, Filter, Heart, ArrowUpDown } from 'lucide-react';
import { WordCategory, AttestationLevel } from '../types';

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

const attestationTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'attested', label: 'Attested (Historical)' },
  { value: 'reconstructed', label: 'Reconstructed' },
  { value: 'neologism', label: 'Modern Neologism' },
  { value: 'proposed', label: 'Community Proposal' }
] as const;

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: WordCategory;
  onCategoryChange: (category: WordCategory) => void;
  selectedAttestation: AttestationLevel | 'all';
  onAttestationChange: (attestation: AttestationLevel | 'all') => void;
  showOnlyFavorites: boolean;
  onToggleFavorites: () => void;
  sortAlphabetically: boolean;
  onToggleSort: () => void;
  resultsCount: number;
  totalCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedAttestation,
  onAttestationChange,
  showOnlyFavorites,
  onToggleFavorites,
  sortAlphabetically,
  onToggleSort,
  resultsCount,
  totalCount
}) => {
  return (
    <div className="space-y-6">
      {/* Search Input - Medieval Style */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#8B1E3F' }} />
        <input
          type="text"
          placeholder="Search words, meanings, and etymology..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 border-2 rounded transition-all duration-300 text-lg shadow-inner"
          style={{
            backgroundColor: '#FFF8E7',
            borderColor: '#8B6F47',
            color: '#2C1810'
          }}
        />
        <div className="absolute inset-0 rounded opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{
               boxShadow: 'inset 0 0 10px rgba(212, 175, 55, 0.2)'
             }}></div>
      </div>

      {/* Filters Row - Medieval Style */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center flex-wrap">
        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5" style={{ color: '#8B1E3F' }} />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as WordCategory)}
            className="px-4 py-2 border-2 rounded transition-all duration-300 cursor-pointer shadow-sm"
            style={{
              backgroundColor: '#F0E6D2',
              borderColor: '#8B6F47',
              color: '#2C1810'
            }}
          >
            {categories.map((cat: any) => (
              <option key={cat.value} value={cat.value} style={{ backgroundColor: '#F0E6D2' }}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Attestation Filter */}
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5" style={{ color: '#8B1E3F' }} />
          <select
            value={selectedAttestation}
            onChange={(e) => onAttestationChange(e.target.value as AttestationLevel | 'all')}
            className="px-4 py-2 border-2 rounded transition-all duration-300 cursor-pointer shadow-sm"
            style={{
              backgroundColor: '#F0E6D2',
              borderColor: '#8B6F47',
              color: '#2C1810'
            }}
          >
            {attestationTypes.map((type) => (
              <option key={type.value} value={type.value} style={{ backgroundColor: '#F0E6D2' }}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Alphabetical Sort Button */}
        <button
          onClick={onToggleSort}
          className="flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 border-2 shadow-sm"
          style={{
            backgroundColor: sortAlphabetically ? '#D4AF37' : '#F0E6D2',
            borderColor: sortAlphabetically ? '#8B6F47' : '#C5A572',
            color: sortAlphabetically ? '#2C1810' : '#4A3728'
          }}
        >
          <ArrowUpDown className="w-4 h-4" />
          <span className="text-sm">A-Z Sort</span>
        </button>

        {/* Favorites Toggle */}
        <button
          onClick={onToggleFavorites}
          className="flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 border-2 shadow-sm"
          style={{
            backgroundColor: showOnlyFavorites ? '#8B1E3F' : '#F0E6D2',
            borderColor: showOnlyFavorites ? '#6B0F1A' : '#C5A572',
            color: showOnlyFavorites ? '#F5EED7' : '#4A3728'
          }}
        >
          <Heart className={`w-4 h-4 ${showOnlyFavorites ? 'fill-current' : ''}`} />
          <span className="text-sm">Favorites Only</span>
        </button>

        {/* Results Count */}
        <div className="flex-1 lg:text-right">
          <p className="text-lg font-medium font-medieval-title" style={{ color: '#8B1E3F' }}>
            Showing {resultsCount} of {totalCount} entries
          </p>
        </div>
      </div>
    </div>
  );
};