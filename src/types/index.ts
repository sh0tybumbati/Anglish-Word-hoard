export interface WordEntry {
  id: string;
  word: string;
  meaning: string;
  kind: WordKind; // N, V, AJ, etc.
  anglish: string[];
  etymology?: EtymologyInfo;
  pronunciation?: PronunciationInfo;
  usage?: UsageInfo;
  related?: string[];
  attestation?: AttestationLevel;
  category?: WordCategory;
  dateAdded?: string;
  notes?: string;
  // Future: conjugations/inflections for stemmer matching (not displayed in UI)
  // forms?: string[]; // e.g. ['uses', 'used', 'using', 'user'] for 'use'
}

export interface EtymologyInfo {
  protoGermanic?: string;
  oldEnglish?: string;
  middleEnglish?: string;
  cognates?: string[];
  reconstruction?: string;
}

export interface PronunciationInfo {
  ipa?: string;
  audio?: string;
  alternativeSpellings?: string[];
}

export interface UsageInfo {
  examples?: Example[];
  notes?: string;
  frequency?: 'common' | 'uncommon' | 'archaic' | 'neologism';
  register?: 'formal' | 'informal' | 'technical' | 'poetic';
}

export interface Example {
  sentence: string;
  translation?: string;
  source?: string;
}

export type WordKind = 
  | 'N'      // Noun
  | 'V'      // Verb  
  | 'AJ'     // Adjective
  | 'AV'     // Adverb
  | 'PRO'    // Pronoun
  | 'PREP'   // Preposition
  | 'CONJ'   // Conjunction
  | 'INT'    // Interjection
  | 'ART'    // Article
  | 'NUM'    // Number
  | 'PART'   // Particle
  | 'PREF'   // Prefix
  | 'SUFF'   // Suffix
  | 'PHR';   // Phrase

export type AttestationLevel =
  | 'attested'     // Found in historical texts
  | 'reconstructed' // Linguistically reconstructed
  | 'neologism'    // Modern creation
  | 'proposed';    // Community suggestion

export type WordCategory = 
  | 'all'
  | 'authentic'
  | 'general'
  | 'academic'
  | 'professional'
  | 'technical'
  | 'materials'
  | 'newalbion'
  | 'military'
  | 'nature'
  | 'social'
  | 'religious'
  | 'culinary'
  | 'artistic';

export interface SearchFilters {
  category: WordCategory;
  searchTerm: string;
  searchFields: SearchField[];
  showOnlyFavorites: boolean;
}

export type SearchField = 'word' | 'anglish' | 'origin' | 'category' | 'tags';

export interface UserPreferences {
  favoriteWords: string[];
  recentSearches: string[];
  preferredCategories: WordCategory[];
  displayMode: 'card' | 'list' | 'compact';
}