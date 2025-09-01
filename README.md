# Anglish Wordbook

An interactive digital dictionary for Anglish - English with Germanic vocabulary, inspired by and aligned with [wordbook.anglish.org](https://wordbook.anglish.org/). This project helps explore authentic Germanic alternatives to Latin and Greek loanwords in English.

## ✨ Features

- **Authentic Anglish Standards**: Follows official Anglish community terminology and classifications
- **Advanced Search**: Fuzzy search with Fuse.js across words, meanings, etymology, and grammatical information  
- **Rich Etymology**: Detailed Old English, Proto-Germanic roots, cognates, and historical attestation levels
- **Dual View Modes**: Choose between detailed cards or scholarly table view (like the original wordbook)
- **Grammatical Classification**: Proper linguistic categories (N, V, AJ, AV, etc.) following academic standards
- **Attestation Levels**: Clear indication of historical attestation, reconstruction, or modern neologism status
- **Interactive Favorites**: Save and manage your favorite word entries with local storage
- **Data Export**: Export the entire word database as JSON for research or backup
- **Mobile Responsive**: Beautiful interface optimized for all devices

## 📚 Attestation Levels

Following established Anglish community standards:

- **Attested** 🛡️: Words found in historical Old/Middle English texts
- **Reconstructed** 📖: Linguistically reconstructed from Proto-Germanic roots
- **Neologism** 🌐: Modern Anglish creations following Germanic patterns
- **Proposed** 🏷️: Community suggestions under consideration

## 🏛️ Grammatical Categories

Using standard linguistic abbreviations:

- **N**: Noun - *house*, *water*, *reckoner* (computer)
- **V**: Verb - *understand*, *shape* (create), *fordo* (destroy)  
- **AJ**: Adjective - *fair* (beautiful), *wise* (intelligent)
- **AV**: Adverb - modifying verbs, adjectives, or other adverbs
- **PREP**: Preposition - *at*, *by*, *through*
- **CONJ**: Conjunction - *and*, *but*, *if*
- **PRO**: Pronoun - *he*, *they*, *which*
- **Plus**: PART (particles), PREF (prefixes), SUFF (suffixes), PHR (phrases)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository (if applicable)
cd Wordbook

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Development

### Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom Gothic/Medieval theme
- **Search**: Fuse.js for fuzzy search capabilities
- **Icons**: Lucide React
- **Build**: Vite
- **Fonts**: Cinzel (serif) and UnifrakturMaguntia (gothic)

### Project Structure

```
src/
├── components/         # React components
│   ├── SearchBar.tsx  # Search and filtering interface
│   └── WordCard.tsx   # Individual word entry display
├── data/              # Data layer
│   └── wordEntries.ts # Word database and categories
├── hooks/             # Custom React hooks
│   ├── useSearch.ts   # Search functionality
│   ├── useFavorites.ts # Favorites management
│   └── useLocalStorage.ts # Local storage utilities
├── types/             # TypeScript type definitions
│   └── index.ts       # Word entry and UI types
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and animations
```

### Adding New Words

Words are stored in `src/data/wordEntries.ts`. Each entry follows the `WordEntry` interface:

```typescript
{
  id: string;                    // Unique identifier
  word: string;                  // Original English word
  origin: string;                // Etymology and language origin
  anglish: string[];             // Germanic alternatives
  category: WordCategory;        // Classification
  etymology?: EtymologyInfo;     // Detailed linguistic data
  usage?: UsageInfo;             // Examples and frequency
  tags?: string[];               // Searchable tags
  isAuthentic?: boolean;         // Already Germanic
  isConstructed?: boolean;       // New coinage
  dateAdded?: string;            // Addition date
}
```

## 🎨 Design Philosophy

The interface uses a "neo-archaic" aesthetic combining:
- **Gothic Typography**: UnifrakturMaguntia for headers, Cinzel for body text
- **Holographic Elements**: Animated background effects and scanning lines
- **Medieval Color Palette**: Deep purples, teals, and emerald greens
- **Mystical UI**: Decorative corners, glow effects, and archaic language

## 📚 About Anglish

Anglish is a form of English that aims to use vocabulary derived from Germanic roots instead of Latin, Greek, and French loanwords. This project serves as both:

1. **Educational Tool**: Learn about English etymology and Germanic linguistic heritage
2. **Creative Resource**: Explore alternatives for fiction writing, especially fantasy/historical settings
3. **Linguistic Experiment**: See what English might look like with different historical influences

## 🤝 Contributing

Contributions are welcome! Areas for improvement:

- **Expanded Vocabulary**: Add more word entries across all categories
- **Audio Pronunciation**: IPA transcriptions and audio files
- **Advanced Etymology**: More detailed linguistic reconstructions
- **Export Formats**: CSV, XML, or other dictionary formats
- **Search Enhancements**: Phonetic search, advanced filters
- **Mobile Improvements**: Touch gestures, offline support

## 📜 License

MIT License - Feel free to use, modify, and distribute.

## 🏗️ Future Enhancements

- **Pronunciation Guide**: Audio recordings and IPA notation
- **Word Relationships**: Show related terms and word families
- **Historical Context**: Timeline of word borrowings and changes
- **Comparative View**: Side-by-side with other Germanic languages
- **Customizable Themes**: Different visual styles and time periods
- **API Integration**: Connect with online etymology databases

---

*"ℌ𝔞𝔳𝔢 𝔥𝔢𝔯𝔢 𝞞 𝔠𝔬𝔪𝔭𝔞𝔫𝔦𝔞 𝔬𝔣 𝔞𝔫𝔦𝔞𝔫𝔱 𝔚𝔦𝔰𝔡𝔬𝔪"* - Have here a compendium of ancient Wisdom