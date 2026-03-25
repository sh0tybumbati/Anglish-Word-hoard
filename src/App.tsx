import React from 'react';
import { Crown, BookOpen, Download, Grid, List, Shield, Globe2, Tag, Feather } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WordCard } from './components/WordCard';
import { TableView } from './components/TableView';
import { Anglisher } from './components/Anglisher';
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
    selectedAttestation,
    setSelectedAttestation,
    sortAlphabetically,
    setSortAlphabetically,
    resultsCount,
    totalCount
  } = useSearch({ data: authentikWordEntries });

  const { toggleFavorite, isFavorite } = useFavorites();

  const [showOnlyFavorites, setShowOnlyFavorites] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<'cards' | 'table'>('cards');
  const [mainTab, setMainTab] = React.useState<'wordbook' | 'anglisher'>('wordbook');

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
    <div className="min-h-screen parchment-bg relative overflow-hidden">
      {/* Parchment texture and aged paper effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage: `
               radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
               radial-gradient(circle at 80% 70%, rgba(139, 30, 63, 0.06) 0%, transparent 50%),
               radial-gradient(circle at 50% 50%, rgba(139, 111, 71, 0.04) 0%, transparent 70%)
             `
           }}>
      </div>

      {/* Subtle paper grain texture */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
           style={{
             backgroundImage: `
               repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(139, 111, 71, 0.1) 1px, rgba(139, 111, 71, 0.1) 2px),
               repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(139, 111, 71, 0.1) 1px, rgba(139, 111, 71, 0.1) 2px)
             `,
             backgroundSize: '3px 3px'
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 lg:p-8">
        {/* Main Container - Medieval Manuscript Style */}
        <div className="bg-gradient-to-br from-amber-50/95 via-orange-50/95 to-amber-50/95 rounded-lg border-4 border-double border-amber-900/80 shadow-2xl shadow-amber-900/30 p-4 lg:p-8 relative overflow-hidden"
             style={{
               boxShadow: '0 10px 40px rgba(139, 30, 63, 0.3), inset 0 1px 0 rgba(245, 238, 215, 0.5)'
             }}>

          {/* Parchment inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/40 via-transparent to-orange-50/30 rounded-lg"></div>

          {/* Decorative Corner Flourishes - Medieval Style */}
          <div className="absolute top-2 left-2 w-12 h-12 border-l-3 border-t-3 border-amber-900/70"
               style={{ borderWidth: '3px' }}>
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-burgundy-600 rounded-full" style={{ backgroundColor: '#8B1E3F' }}></div>
          </div>
          <div className="absolute top-2 right-2 w-12 h-12 border-r-3 border-t-3 border-amber-900/70"
               style={{ borderWidth: '3px' }}>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-burgundy-600 rounded-full" style={{ backgroundColor: '#8B1E3F' }}></div>
          </div>
          <div className="absolute bottom-2 left-2 w-12 h-12 border-l-3 border-b-3 border-amber-900/70"
               style={{ borderWidth: '3px' }}>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-burgundy-600 rounded-full" style={{ backgroundColor: '#8B1E3F' }}></div>
          </div>
          <div className="absolute bottom-2 right-2 w-12 h-12 border-r-3 border-b-3 border-amber-900/70"
               style={{ borderWidth: '3px' }}>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-burgundy-600 rounded-full" style={{ backgroundColor: '#8B1E3F' }}></div>
          </div>

          <div className="relative z-10">
            {/* Header - Medieval Illuminated Style */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="flex items-center justify-center gap-2 lg:gap-4 mb-4 lg:mb-6">
                <Crown className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: '#D4AF37' }} />
                <div className="relative">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-wide font-blackletter"
                      style={{
                        color: '#8B1E3F',
                        textShadow: '2px 2px 0px #D4AF37, 4px 4px 8px rgba(139, 30, 63, 0.3)'
                      }}>
                    Anglish Wordbook
                  </h1>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
                </div>
                <BookOpen className="w-8 h-8 lg:w-10 lg:h-10" style={{ color: '#D4AF37' }} />
              </div>
              <div className="text-base lg:text-lg max-w-3xl mx-auto font-medium leading-relaxed px-4"
                   style={{ color: '#3D2817' }}>
                A comprehensive dictionary exploring Germanic alternatives to Latin and Greek loanwords in English.
                Discover the true Anglo-Saxon heritage behind our modern vocabulary.
              </div>
              <div className="text-sm lg:text-base mt-3 italic font-medieval-title"
                   style={{ color: '#8B1E3F' }}>
                ~ Inspired by the Anglish Community ~
              </div>
            </div>

            {/* Main Tab Switcher */}
            <div className="flex items-center gap-2 mb-6 border-b-2 pb-4" style={{ borderColor: '#8B6F47' }}>
              <button
                onClick={() => setMainTab('wordbook')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 text-sm border-2 ${
                  mainTab === 'wordbook'
                    ? 'border-amber-800 shadow-md'
                    : 'border-amber-700/40 hover:border-amber-700 hover:bg-amber-100/30'
                }`}
                style={{
                  backgroundColor: mainTab === 'wordbook' ? '#8B1E3F' : '#F0E6D2',
                  color: mainTab === 'wordbook' ? '#F5EED7' : '#4A3728',
                }}
              >
                <BookOpen className="w-4 h-4" />
                Wordbook
              </button>
              <button
                onClick={() => setMainTab('anglisher')}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 text-sm border-2 ${
                  mainTab === 'anglisher'
                    ? 'border-amber-800 shadow-md'
                    : 'border-amber-700/40 hover:border-amber-700 hover:bg-amber-100/30'
                }`}
                style={{
                  backgroundColor: mainTab === 'anglisher' ? '#8B1E3F' : '#F0E6D2',
                  color: mainTab === 'anglisher' ? '#F5EED7' : '#4A3728',
                }}
              >
                <Feather className="w-4 h-4" />
                Anglisher
              </button>
            </div>

            {/* View Controls - Medieval Button Style */}
            {mainTab === 'wordbook' && (<div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-all duration-300 text-sm border-2 ${
                    viewMode === 'cards'
                      ? 'border-amber-800 text-amber-50 shadow-md'
                      : 'border-amber-700/40 hover:border-amber-700 hover:bg-amber-100/30'
                  }`}
                  style={{
                    backgroundColor: viewMode === 'cards' ? '#8B1E3F' : '#F0E6D2',
                    color: viewMode === 'cards' ? '#F5EED7' : '#4A3728'
                  }}
                >
                  <Grid className="w-4 h-4" />
                  <span className="hidden sm:inline">Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-all duration-300 text-sm border-2 ${
                    viewMode === 'table'
                      ? 'border-amber-800 text-amber-50 shadow-md'
                      : 'border-amber-700/40 hover:border-amber-700 hover:bg-amber-100/30'
                  }`}
                  style={{
                    backgroundColor: viewMode === 'table' ? '#8B1E3F' : '#F0E6D2',
                    color: viewMode === 'table' ? '#F5EED7' : '#4A3728'
                  }}
                >
                  <List className="w-4 h-4" />
                  <span className="hidden sm:inline">Table</span>
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={exportData}
                  className="flex items-center gap-2 px-3 py-2 rounded transition-all duration-300 text-sm border-2 border-amber-700/40 hover:border-amber-700 hover:bg-amber-100/30"
                  style={{ backgroundColor: '#F0E6D2', color: '#4A3728' }}
                  title="Export word database"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Export</span>
                </button>
              </div>
            </div>)}

            {/* Anglisher Tab */}
            {mainTab === 'anglisher' && <Anglisher />}

            {/* Search and Filter Controls — Wordbook only */}
            {mainTab === 'wordbook' && (
              <>
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  selectedAttestation={selectedAttestation}
                  onAttestationChange={setSelectedAttestation}
                  showOnlyFavorites={showOnlyFavorites}
                  onToggleFavorites={() => setShowOnlyFavorites(!showOnlyFavorites)}
                  sortAlphabetically={sortAlphabetically}
                  onToggleSort={() => setSortAlphabetically(!sortAlphabetically)}
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
                      <BookOpen className="w-20 h-20 mx-auto mb-6 opacity-50" style={{ color: '#8B6F47' }} />
                      <p className="text-xl mb-2" style={{ color: '#3D2817' }}>No entries found</p>
                      <p style={{ color: '#8B6F47' }}>
                        {showOnlyFavorites
                          ? 'You haven\'t added any words to your favorites yet.'
                          : 'Try adjusting your search terms or filters...'
                        }
                      </p>
                      {showOnlyFavorites && (
                        <button
                          onClick={() => setShowOnlyFavorites(false)}
                          className="mt-4 px-4 py-2 rounded border-2 border-amber-700 transition-colors duration-300"
                          style={{
                            backgroundColor: '#8B1E3F',
                            color: '#F5EED7'
                          }}
                        >
                          Show All Words
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}

            {/* Footer - Medieval Style */}
            <div className="mt-16 pt-8 border-t-2" style={{ borderColor: '#8B6F47' }}>
              <div className="text-center text-sm space-y-3" style={{ color: '#4A3728' }}>
                <p className="text-lg font-semibold font-medieval-title" style={{ color: '#8B1E3F' }}>
                  <strong>Anglish</strong> - English with Germanic Heritage
                </p>
                <div className="flex justify-center items-center gap-4 flex-wrap text-xs lg:text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" style={{ color: '#4A5D4A' }} />
                    <span>Attested (Historical)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" style={{ color: '#2B4162' }} />
                    <span>Reconstructed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4" style={{ color: '#2B4162' }} />
                    <span>Modern Neologism</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" style={{ color: '#CC5500' }} />
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