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
        return <Shield className="w-3 h-3 text-emerald-400" />;
      case 'reconstructed':
        return <BookOpen className="w-3 h-3 text-blue-400" />;
      case 'neologism':
        return <Globe2 className="w-3 h-3 text-cyan-400" />;
      case 'proposed':
        return <Tag className="w-3 h-3 text-amber-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl border border-slate-600/30 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700/50 border-b border-slate-600/30">
              <th className="text-left py-3 px-4 font-semibold text-slate-200">Word</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-200">Meaning</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-200">Kind</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-200">Anglish</th>
              <th className="text-center py-3 px-4 font-semibold text-slate-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {words.map((entry, index) => (
              <tr 
                key={entry.id} 
                className={`border-b border-slate-600/20 hover:bg-slate-700/30 transition-colors ${
                  index % 2 === 0 ? 'bg-slate-800/30' : 'bg-slate-800/10'
                }`}
              >
                <td className="py-3 px-4">
                  <div className="font-medium text-white">{entry.word}</div>
                  {entry.etymology?.oldEnglish && (
                    <div className="text-xs text-slate-400 font-mono mt-1">
                      OE: {entry.etymology.oldEnglish}
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 text-slate-300 leading-relaxed max-w-xs">
                  {entry.meaning}
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-block bg-slate-600/50 text-slate-200 text-xs px-2 py-1 rounded font-mono">
                    {entry.kind}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-1">
                    {entry.anglish.slice(0, 3).map((alt, i) => (
                      <span 
                        key={i} 
                        className="inline-block bg-purple-500/20 text-purple-200 text-xs px-2 py-1 rounded border border-purple-400/30"
                      >
                        {alt}
                      </span>
                    ))}
                    {entry.anglish.length > 3 && (
                      <span className="text-slate-400 text-xs">
                        +{entry.anglish.length - 3} more
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {getAttestationIcon(entry.attestation)}
                    <span className="text-xs text-slate-300 capitalize">
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
        <div className="text-center py-12 text-slate-400">
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No entries found</p>
        </div>
      )}
    </div>
  );
};