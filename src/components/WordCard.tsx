import React from 'react';
import { Globe2, Languages, Heart, Clock, Tag, BookOpen, Shield } from 'lucide-react';
import { WordEntry } from '../types';
import { wordKindLabels, attestationLabels } from '../data/authenticWordEntries';

interface WordCardProps {
  entry: WordEntry;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const WordCard: React.FC<WordCardProps> = ({
  entry,
  isFavorite,
  onToggleFavorite
}) => {
  const getCardStyles = () => {
    if (entry.attestation === 'attested' || entry.category === 'authentic') {
      return 'bg-gradient-to-br from-emerald-900/60 to-green-800/60 border-emerald-400/50 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-400/20';
    }
    if (entry.attestation === 'neologism' || entry.attestation === 'reconstructed') {
      return 'bg-gradient-to-br from-blue-900/60 to-indigo-800/60 border-blue-400/50 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-400/20';
    }
    if (entry.attestation === 'proposed') {
      return 'bg-gradient-to-br from-amber-900/60 to-orange-800/60 border-amber-400/50 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-400/20';
    }
    return 'bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-400/50 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-400/20';
  };

  const getTagStyles = () => {
    if (entry.attestation === 'attested' || entry.category === 'authentic') {
      return 'bg-emerald-400/20 text-emerald-100 border border-emerald-400/40 shadow-lg shadow-emerald-400/10';
    }
    if (entry.attestation === 'neologism' || entry.attestation === 'reconstructed') {
      return 'bg-blue-400/20 text-blue-100 border border-blue-400/40 shadow-lg shadow-blue-400/10';
    }
    if (entry.attestation === 'proposed') {
      return 'bg-amber-400/20 text-amber-100 border border-amber-400/40 shadow-lg shadow-amber-400/10';
    }
    return 'bg-slate-400/20 text-slate-100 border border-slate-400/40 shadow-lg shadow-slate-400/10';
  };

  const getAttestationIcon = () => {
    switch (entry.attestation) {
      case 'attested':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'reconstructed':
        return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'neologism':
        return <Globe2 className="w-4 h-4 text-cyan-400" />;
      case 'proposed':
        return <Tag className="w-4 h-4 text-amber-400" />;
      default:
        return <Globe2 className="w-4 h-4 text-slate-400" />;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm relative overflow-hidden group ${getCardStyles()}`}>
      
      {/* Card Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{entry.word}</h3>
              <span className="text-sm font-mono px-2 py-1 bg-slate-700/50 text-slate-200 rounded border border-slate-500/30">
                {entry.kind}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{entry.meaning}</p>
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            {/* Favorite Button */}
            <button
              onClick={() => onToggleFavorite(entry.id)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isFavorite 
                  ? 'text-pink-400 hover:text-pink-300' 
                  : 'text-slate-400 hover:text-pink-400'
              }`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Attestation Badge */}
            <div className="flex items-center gap-1">
              {getAttestationIcon()}
              {entry.attestation && (
                <span className="text-xs text-slate-300 capitalize">
                  {entry.attestation}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Anglish Alternatives */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-200 mb-3">
            {entry.category === 'authentic' ? "Already Anglish:" : "Anglish Alternatives:"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {entry.anglish.map((alt, i) => (
              <span key={i} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${getTagStyles()}`}>
                {alt}
              </span>
            ))}
          </div>
        </div>

        {/* Etymology */}
        {entry.etymology && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Languages className="w-4 h-4 text-cyan-300" />
              <span className="text-sm font-semibold text-cyan-200">Etymology:</span>
            </div>
            <div className="bg-black/20 p-3 rounded-lg border border-white/10 space-y-2">
              {entry.etymology.oldEnglish && (
                <div className="text-xs">
                  <span className="text-slate-400">Old English:</span> 
                  <span className="text-slate-300 ml-2 font-mono">{entry.etymology.oldEnglish}</span>
                </div>
              )}
              {entry.etymology.protoGermanic && (
                <div className="text-xs">
                  <span className="text-slate-400">Proto-Germanic:</span> 
                  <span className="text-slate-300 ml-2 font-mono">{entry.etymology.protoGermanic}</span>
                </div>
              )}
              {entry.etymology.cognates && entry.etymology.cognates.length > 0 && (
                <div className="text-xs">
                  <span className="text-slate-400">Cognates:</span> 
                  <span className="text-slate-300 ml-2">{entry.etymology.cognates.join(', ')}</span>
                </div>
              )}
              {entry.etymology.reconstruction && (
                <div className="text-xs">
                  <span className="text-slate-400">Notes:</span> 
                  <span className="text-slate-300 ml-2 italic">{entry.etymology.reconstruction}</span>
                </div>
              )}
            </div>
          </div>
        )}


        {/* Usage Examples */}
        {entry.usage?.examples && entry.usage.examples.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-purple-200 mb-2">Examples:</h4>
            <div className="space-y-2">
              {entry.usage.examples.slice(0, 2).map((example, i) => (
                <div key={i} className="text-xs bg-black/10 p-2 rounded border border-white/5">
                  <div className="text-slate-300 italic">"{example.sentence}"</div>
                  {example.translation && (
                    <div className="text-slate-400 mt-1">→ {example.translation}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        {entry.notes && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span className="text-xs font-semibold text-amber-400">Notes:</span>
            </div>
            <p className="text-xs text-slate-300 bg-amber-900/10 p-2 rounded border border-amber-400/20 italic">
              {entry.notes}
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10">
          <div className="flex items-center gap-4">
            {entry.attestation && (
              <div className="flex items-center gap-1">
                {getAttestationIcon()}
                <span className="capitalize">{attestationLabels[entry.attestation] || entry.attestation}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              <span>{wordKindLabels[entry.kind]}</span>
            </div>
          </div>
          {entry.dateAdded && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{formatDate(entry.dateAdded)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};