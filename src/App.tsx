import React from 'react';
import { Crown, Zap, BookOpen, Download, Grid, List, Shield, Globe2, Tag } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WordCard } from './components/WordCard';
import { TableView } from './components/TableView';
import { useSearch } from './hooks/useSearch';
import { useFavorites } from './hooks/useFavorites';
import { authentikWordEntries } from './data/authenticWordEntries';

function App() {
  const {
    filteredWords,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    resultsCount,
    totalCount
  } = useSearch({ data: authentikWordEntries });

  const { toggleFavorite, isFavorite } = useFavorites();

  const [showOnlyFavorites, setShowOnlyFavorites] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<'cards' | 'table'>('cards');

  // Filter by favorites if enabled
  const displayedWords = React.useMemo(() => {
    if (showOnlyFavorites) {
      return filteredWords.filter(word => isFavorite(word.id));
    }
    return filteredWords;
  }, [filteredWords, showOnlyFavorites, isFavorite]);

  const exportData = () => {
    const dataStr = JSON.stringify(authentikWordEntries, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'anglish-wordbook-export.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-teal-950 relative overflow-hidden">
      {/* Holographic Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '20px 20px'
           }}>
      </div>

      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30"
             style={{ top: '20%', animation: 'scan 4s linear infinite' }}></div>
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"
             style={{ top: '60%', animation: 'scan 6s linear infinite reverse' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 lg:p-8">
        {/* Main Container with Holographic Border */}
        <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl border border-teal-400/30 shadow-2xl shadow-purple-500/20 p-4 lg:p-8 relative overflow-hidden">
          
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-purple-400/5 to-cyan-400/5 rounded-2xl"></div>
          
          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-teal-400/60"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/60"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/60"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-teal-400/60"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="flex items-center justify-center gap-2 lg:gap-4 mb-4 lg:mb-6">
                <Crown className="w-8 h-8 lg:w-10 lg:h-10 text-teal-300" />
                <div className="relative">
                  <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent tracking-wide font-chomsky">
                    Anglish Wordbook
                  </h1>
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 to-purple-400/20 blur-xl rounded-lg"></div>
                </div>
                <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-purple-300" />
              </div>
              <div className="text-teal-200 text-base lg:text-lg max-w-3xl mx-auto font-medium leading-relaxed px-4">
                A comprehensive dictionary exploring Germanic alternatives to Latin and Greek loanwords in English.
                Discover the true Anglo-Saxon heritage behind our modern vocabulary.
              </div>
              <div className="text-purple-200 text-sm lg:text-base mt-2 italic">
                ~ Inspired by the Anglish Community ~
              </div>
            </div>

            {/* View Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                    viewMode === 'cards' 
                      ? 'bg-teal-600/30 text-teal-200 border border-teal-400/40' 
                      : 'bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 text-sm ${
                    viewMode === 'table' 
                      ? 'bg-teal-600/30 text-teal-200 border border-teal-400/40' 
                      : 'bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">Table</span>
                </button>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={exportData}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 text-sm"
                  title="Export word database"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                </button>
              </div>
            </div>

            {/* Search and Filter Controls */}
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              showOnlyFavorites={showOnlyFavorites}
              onToggleFavorites={() => setShowOnlyFavorites(!showOnlyFavorites)}
              resultsCount={showOnlyFavorites ? displayedWords.length : resultsCount}
              totalCount={totalCount}
            />

            {/* Word Entries Display */}
            <div className="mt-8 lg:mt-10">
              {displayedWords.length > 0 ? (
                viewMode === 'cards' ? (
                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {displayedWords.map((entry) => (
                      <WordCard
                        key={entry.id}
                        entry={entry}
                        isFavorite={isFavorite(entry.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                ) : (
                  <TableView words={displayedWords} />
                )
              ) : (
                <div className="text-center py-16">
                  <BookOpen className="w-20 h-20 text-slate-400 mx-auto mb-6 opacity-50" />
                  <p className="text-slate-300 text-xl mb-2">No entries found</p>
                  <p className="text-slate-400">
                    {showOnlyFavorites 
                      ? 'You haven\'t added any words to your favorites yet.'
                      : 'Try adjusting your search terms or filters...'
                    }
                  </p>
                  {showOnlyFavorites && (
                    <button
                      onClick={() => setShowOnlyFavorites(false)}
                      className="mt-4 px-4 py-2 bg-teal-600/20 hover:bg-teal-600/30 text-teal-200 rounded-lg transition-colors duration-300"
                    >
                      Show All Words
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-gradient-to-r from-teal-400/30 to-purple-400/30">
              <div className="text-center text-sm text-slate-300 space-y-3">
                <p className="text-lg font-semibold text-teal-200">
                  ⚔ <strong>Anglish</strong> - English with Germanic Heritage ⚔
                </p>
                <div className="flex justify-center items-center gap-4 flex-wrap text-xs lg:text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>Attested (Historical)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span>Reconstructed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-cyan-400" />
                    <span>Modern Neologism</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-amber-400" />
                    <span>Community Proposal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;