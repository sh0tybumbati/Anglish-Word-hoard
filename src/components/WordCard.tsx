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
      return {
        background: 'linear-gradient(to bottom right, #F5F0E1, #E8DCC5)',
        borderColor: '#4A5D4A',
        borderLeftColor: '#D4AF37'
      };
    }
    if (entry.attestation === 'neologism' || entry.attestation === 'reconstructed') {
      return {
        background: 'linear-gradient(to bottom right, #F5F0E1, #DFE5E8)',
        borderColor: '#2B4162',
        borderLeftColor: '#D4AF37'
      };
    }
    if (entry.attestation === 'proposed') {
      return {
        background: 'linear-gradient(to bottom right, #F5F0E1, #F0DCC5)',
        borderColor: '#CC5500',
        borderLeftColor: '#D4AF37'
      };
    }
    return {
      background: 'linear-gradient(to bottom right, #F5F0E1, #EBE1C5)',
      borderColor: '#8B6F47',
      borderLeftColor: '#D4AF37'
    };
  };

  const getTagStyles = () => {
    if (entry.attestation === 'attested' || entry.category === 'authentic') {
      return {
        backgroundColor: '#E8F5E9',
        color: '#2E4A2E',
        borderColor: '#4A5D4A'
      };
    }
    if (entry.attestation === 'neologism' || entry.attestation === 'reconstructed') {
      return {
        backgroundColor: '#E3F2FD',
        color: '#1E3A5F',
        borderColor: '#2B4162'
      };
    }
    if (entry.attestation === 'proposed') {
      return {
        backgroundColor: '#FFF3E0',
        color: '#8B4000',
        borderColor: '#CC5500'
      };
    }
    return {
      backgroundColor: '#FFF8E7',
      color: '#4A3728',
      borderColor: '#8B6F47'
    };
  };

  const getAttestationIcon = () => {
    switch (entry.attestation) {
      case 'attested':
        return <Shield className="w-4 h-4" style={{ color: '#4A5D4A' }} />;
      case 'reconstructed':
        return <BookOpen className="w-4 h-4" style={{ color: '#2B4162' }} />;
      case 'neologism':
        return <Globe2 className="w-4 h-4" style={{ color: '#2B4162' }} />;
      case 'proposed':
        return <Tag className="w-4 h-4" style={{ color: '#CC5500' }} />;
      default:
        return <Globe2 className="w-4 h-4" style={{ color: '#8B6F47' }} />;
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const cardStyles = getCardStyles();
  const tagStyles = getTagStyles();

  return (
    <div className="p-6 rounded border-2 transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
         style={{
           background: cardStyles.background,
           borderColor: cardStyles.borderColor,
           borderLeftWidth: '4px',
           borderLeftColor: cardStyles.borderLeftColor,
           boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
         }}>

      {/* Parchment texture overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded pointer-events-none"
           style={{
             backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 111, 71, 0.05) 2px, rgba(139, 111, 71, 0.05) 4px)'
           }}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold" style={{ color: '#8B1E3F' }}>{entry.word}</h3>
              <span className="text-sm font-mono px-2 py-1 rounded border"
                    style={{
                      backgroundColor: '#F0E6D2',
                      color: '#4A3728',
                      borderColor: '#8B6F47'
                    }}>
                {entry.kind}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#3D2817' }}>{entry.meaning}</p>
          </div>

          <div className="flex items-center gap-2 ml-4">
            {/* Favorite Button */}
            <button
              onClick={() => onToggleFavorite(entry.id)}
              className="p-2 rounded-full transition-all duration-300"
              style={{
                color: isFavorite ? '#8B1E3F' : '#8B6F47'
              }}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>

            {/* Attestation Badge */}
            <div className="flex items-center gap-1">
              {getAttestationIcon()}
              {entry.attestation && (
                <span className="text-xs capitalize" style={{ color: '#4A3728' }}>
                  {entry.attestation}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Anglish Alternatives */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-3" style={{ color: '#8B1E3F' }}>
            {entry.category === 'authentic' ? "Already Anglish:" : "Anglish Alternatives:"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {entry.anglish.map((alt, i) => (
              <span key={i}
                    className="px-3 py-2 rounded text-sm font-medium transition-all duration-300 border"
                    style={{
                      backgroundColor: tagStyles.backgroundColor,
                      color: tagStyles.color,
                      borderColor: tagStyles.borderColor
                    }}>
                {alt}
              </span>
            ))}
          </div>
        </div>

        {/* Etymology */}
        {entry.etymology && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Languages className="w-4 h-4" style={{ color: '#2B4162' }} />
              <span className="text-sm font-semibold" style={{ color: '#2B4162' }}>Etymology:</span>
            </div>
            <div className="p-3 rounded border space-y-2"
                 style={{
                   backgroundColor: '#F9F6F0',
                   borderColor: '#8B6F47'
                 }}>
              {entry.etymology.oldEnglish && (
                <div className="text-xs">
                  <span style={{ color: '#8B6F47' }}>Old English:</span>
                  <span className="ml-2 font-mono" style={{ color: '#3D2817' }}>{entry.etymology.oldEnglish}</span>
                </div>
              )}
              {entry.etymology.protoGermanic && (
                <div className="text-xs">
                  <span style={{ color: '#8B6F47' }}>Proto-Germanic:</span>
                  <span className="ml-2 font-mono" style={{ color: '#3D2817' }}>{entry.etymology.protoGermanic}</span>
                </div>
              )}
              {entry.etymology.cognates && entry.etymology.cognates.length > 0 && (
                <div className="text-xs">
                  <span style={{ color: '#8B6F47' }}>Cognates:</span>
                  <span className="ml-2" style={{ color: '#3D2817' }}>{entry.etymology.cognates.join(', ')}</span>
                </div>
              )}
              {entry.etymology.reconstruction && (
                <div className="text-xs">
                  <span style={{ color: '#8B6F47' }}>Notes:</span>
                  <span className="ml-2 italic" style={{ color: '#3D2817' }}>{entry.etymology.reconstruction}</span>
                </div>
              )}
            </div>
          </div>
        )}


        {/* Usage Examples */}
        {entry.usage?.examples && entry.usage.examples.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2" style={{ color: '#8B1E3F' }}>Examples:</h4>
            <div className="space-y-2">
              {entry.usage.examples.slice(0, 2).map((example, i) => (
                <div key={i} className="text-xs p-2 rounded border"
                     style={{
                       backgroundColor: '#FFF8E7',
                       borderColor: '#E0D4B8'
                     }}>
                  <div className="italic" style={{ color: '#3D2817' }}>"{example.sentence}"</div>
                  {example.translation && (
                    <div className="mt-1" style={{ color: '#8B6F47' }}>→ {example.translation}</div>
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
              <BookOpen className="w-3 h-3" style={{ color: '#CC5500' }} />
              <span className="text-xs font-semibold" style={{ color: '#CC5500' }}>Notes:</span>
            </div>
            <p className="text-xs p-2 rounded border italic"
               style={{
                 backgroundColor: '#FFF3E0',
                 borderColor: '#CC5500',
                 color: '#3D2817'
               }}>
              {entry.notes}
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="flex items-center justify-between text-xs pt-2 border-t"
             style={{
               color: '#8B6F47',
               borderColor: '#E0D4B8'
             }}>
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