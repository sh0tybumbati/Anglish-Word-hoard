import React from 'react';
import { Shield, BookOpen, Globe2, Tag } from 'lucide-react';
import { WordEntry } from '../types';

interface TableViewProps {
  words: WordEntry[];
}

export const TableView: React.FC<TableViewProps> = ({ words }) => {
  const getAttestationIcon = (attestation?: string) => {
    switch (attestation) {
      case 'attested':
        return <Shield className="w-3 h-3" style={{ color: '#4A5D4A' }} />;
      case 'reconstructed':
        return <BookOpen className="w-3 h-3" style={{ color: '#2B4162' }} />;
      case 'neologism':
        return <Globe2 className="w-3 h-3" style={{ color: '#2B4162' }} />;
      case 'proposed':
        return <Tag className="w-3 h-3" style={{ color: '#CC5500' }} />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded border-2 overflow-hidden"
         style={{
           backgroundColor: '#FFF8E7',
           borderColor: '#8B6F47'
         }}>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2"
                style={{
                  backgroundColor: '#F0E6D2',
                  borderColor: '#8B6F47'
                }}>
              <th className="text-left py-3 px-4 font-semibold" style={{ color: '#2C1810' }}>Word</th>
              <th className="text-left py-3 px-4 font-semibold" style={{ color: '#2C1810' }}>Meaning</th>
              <th className="text-center py-3 px-4 font-semibold" style={{ color: '#2C1810' }}>Kind</th>
              <th className="text-left py-3 px-4 font-semibold" style={{ color: '#2C1810' }}>Anglish</th>
              <th className="text-center py-3 px-4 font-semibold" style={{ color: '#2C1810' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {words.map((entry, index) => (
              <tr
                key={entry.id}
                className="border-b transition-colors"
                style={{
                  backgroundColor: index % 2 === 0 ? '#FEFBF3' : '#FFF8E7',
                  borderColor: '#E0D4B8'
                }}
              >
                <td className="py-3 px-4">
                  <div className="font-medium" style={{ color: '#8B1E3F' }}>{entry.word}</div>
                  {entry.etymology?.oldEnglish && (
                    <div className="text-xs font-mono mt-1" style={{ color: '#8B6F47' }}>
                      OE: {entry.etymology.oldEnglish}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 leading-relaxed max-w-xs" style={{ color: '#3D2817' }}>
                  {entry.meaning}
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-block text-xs px-2 py-1 rounded font-mono border"
                        style={{
                          backgroundColor: '#F0E6D2',
                          color: '#4A3728',
                          borderColor: '#8B6F47'
                        }}>
                    {entry.kind}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-1">
                    {entry.anglish.slice(0, 3).map((alt, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs px-2 py-1 rounded border"
                        style={{
                          backgroundColor: '#E8DCC5',
                          color: '#4A3728',
                          borderColor: '#8B6F47'
                        }}
                      >
                        {alt}
                      </span>
                    ))}
                    {entry.anglish.length > 3 && (
                      <span className="text-xs" style={{ color: '#8B6F47' }}>
                        +{entry.anglish.length - 3} more
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {getAttestationIcon(entry.attestation)}
                    <span className="text-xs capitalize" style={{ color: '#4A3728' }}>
                      {entry.attestation || 'unknown'}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {words.length === 0 && (
        <div className="text-center py-12" style={{ color: '#8B6F47' }}>
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" style={{ color: '#8B6F47' }} />
          <p>No entries found</p>
        </div>
      )}
    </div>
  );
};