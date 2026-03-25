import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Copy, Check, Feather } from 'lucide-react';
import { authentikWordEntries } from '../data/authenticWordEntries';

// ---------------------------------------------------------------------------
// Native Germanic word set — words NOT in the wordbook that are green.
// ---------------------------------------------------------------------------
const NATIVE_GERMANIC: Set<string> = new Set([
  'i','you','he','she','we','they','the','a','an','is','are','was','were','be',
  'been','have','has','had','do','does','did','will','would','can','could',
  'shall','should','may','might','must','and','or','but','if','then','so','yet',
  'nor','for','of','in','on','at','to','by','up','as','it','its','this','that',
  'these','those','my','your','his','her','our','their','me','him','us','them',
  'who','what','which','when','where','how','not','no','yes','all','some','any',
  'one','two','three','more','most','much','many','few','good','well','great',
  'new','old','here','there','now','then','get','go','come','see','say','know',
  'think','make','take','give','look','find','tell','ask','work','seem','feel',
  'try','leave','call','keep','let','put','mean','become','show','turn','start',
  'play','run','move','live','hold','stand','bring','happen','write','sit','lose',
  'pay','meet','fall','win','need','own','open','walk','send','buy','wait','stop',
  'cut','set','pull','help','talk','hand','kind','time','way','day','man','men',
  'woman','women','child','thing','place','eye','head','face','house','home',
  'water','fire','earth','land','air','night','light','word','life','world',
  'off','out','over','under','with','from','about','into','through','upon',
  'after','before','between','down','back','away','still','just','only','even',
  'also','too','very','always','never','often','both','each','such','same','own',
  'first','last','long','little','high','small','big','true','real','hard',
  'right','left','whole','clean','dark','dead','deep','dry','early','east',
  'west','north','south','fast','far','free','full','heavy','hot','cold','bare',
  'bright','clear','fair','fresh','green','loud','low','narrow','plain','quick',
  'rough','sharp','short','sick','slow','soft','sweet','thick','thin','wide',
  'wild','wise','young','what','were','get','been','has','its','them',
  // Common contractions stripped forms
  "it's","don't","doesn't","didn't","can't","won't","isn't","aren't","wasn't",
  "weren't","haven't","hasn't","hadn't","wouldn't","couldn't","shouldn't",
  "i'm","i've","i'll","i'd","you're","you've","you'll","you'd","he's","he'll",
  "he'd","she's","she'll","she'd","we're","we've","we'll","we'd","they're",
  "they've","they'll","they'd","that's","there's","here's","who's","what's",
  "let's","'s"
]);

// ---------------------------------------------------------------------------
// Build a lookup map from the wordbook: lowercase word → anglish alternatives
// ---------------------------------------------------------------------------
const WORDBOOK_MAP: Map<string, string[]> = new Map(
  authentikWordEntries.map(entry => [entry.word.toLowerCase(), entry.anglish])
);

// ---------------------------------------------------------------------------
// Token types
// ---------------------------------------------------------------------------
type TokenKind = 'word' | 'punct';

interface Token {
  id: number;
  kind: TokenKind;
  /** The text as it appears (original casing for words) */
  text: string;
  /** For words: 'red' | 'green' | 'gray' */
  status?: 'red' | 'green' | 'gray';
  /** Anglish alternatives (only for red tokens) */
  alternatives?: string[];
  /** Whether this word was replaced (turns it green) */
  replaced?: boolean;
}

// ---------------------------------------------------------------------------
// Tokenizer: splits text preserving punctuation as separate tokens
// ---------------------------------------------------------------------------
function tokenize(text: string): Token[] {
  // Split on sequences of word chars (including apostrophes mid-word) vs non-word
  const parts = text.match(/[A-Za-z][A-Za-z']*|[^A-Za-z]+/g) ?? [];
  let id = 0;
  return parts.map(part => {
    // Is it a word?
    if (/^[A-Za-z]/.test(part)) {
      const lower = part.toLowerCase();
      if (WORDBOOK_MAP.has(lower)) {
        const alts = WORDBOOK_MAP.get(lower)!;
        return { id: id++, kind: 'word', text: part, status: 'red', alternatives: alts };
      } else if (NATIVE_GERMANIC.has(lower)) {
        return { id: id++, kind: 'word', text: part, status: 'green' };
      } else {
        return { id: id++, kind: 'word', text: part, status: 'gray' };
      }
    } else {
      return { id: id++, kind: 'punct', text: part };
    }
  });
}

// ---------------------------------------------------------------------------
// Preserve capitalization: if original word started with uppercase, capitalize
// the replacement's first letter.
// ---------------------------------------------------------------------------
function applyCase(original: string, replacement: string): string {
  if (original.length > 0 && original[0] === original[0].toUpperCase() && original[0] !== original[0].toLowerCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

// ---------------------------------------------------------------------------
// Chip component
// ---------------------------------------------------------------------------
interface ChipProps {
  token: Token;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (replacement: string) => void;
}

const Chip: React.FC<ChipProps> = ({ token, isOpen, onOpen, onClose, onReplace }) => {
  const chipRef = useRef<HTMLSpanElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        chipRef.current && !chipRef.current.contains(e.target as Node) &&
        dropRef.current && !dropRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen, onClose]);

  if (token.kind === 'punct') {
    return <span className="whitespace-pre-wrap" style={{ color: '#3D2817' }}>{token.text}</span>;
  }

  const { status, replaced } = token;
  const effectiveStatus = replaced ? 'green' : status;

  let borderColor: string;
  let bgColor: string;
  let textColor: string;
  let cursorClass = 'cursor-default';

  switch (effectiveStatus) {
    case 'green':
      borderColor = '#4A7C59';
      bgColor = 'rgba(74, 124, 89, 0.08)';
      textColor = '#2E4A2E';
      break;
    case 'red':
      borderColor = '#8B1E3F';
      bgColor = 'rgba(139, 30, 63, 0.07)';
      textColor = '#6B0F2A';
      cursorClass = 'cursor-pointer';
      break;
    default: // gray
      borderColor = '#9B8B7A';
      bgColor = 'rgba(155, 139, 122, 0.08)';
      textColor = '#5C4F44';
      break;
  }

  const handleClick = () => {
    if (effectiveStatus === 'red') {
      isOpen ? onClose() : onOpen();
    }
  };

  return (
    <span className="relative inline-block" ref={chipRef}>
      <span
        onClick={handleClick}
        className={`inline-block px-1.5 py-0.5 rounded border text-sm font-medium transition-all duration-150 select-none ${cursorClass} ${
          effectiveStatus === 'red' ? 'hover:shadow-sm' : ''
        }`}
        style={{
          borderColor,
          backgroundColor: isOpen ? 'rgba(139, 30, 63, 0.13)' : bgColor,
          color: textColor,
          lineHeight: '1.5',
        }}
        title={
          effectiveStatus === 'red'
            ? 'Click to see Anglish alternatives'
            : effectiveStatus === 'green'
            ? replaced ? 'Replaced with Anglish word' : 'Already Germanic/Anglish'
            : 'Unknown word'
        }
      >
        {token.text}
      </span>

      {/* Dropdown popout */}
      {isOpen && token.alternatives && (
        <div
          ref={dropRef}
          className="absolute z-50 mt-1 rounded border-2 shadow-xl"
          style={{
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: '140px',
            backgroundColor: '#FDF6E3',
            borderColor: '#8B1E3F',
            boxShadow: '0 4px 16px rgba(139, 30, 63, 0.25)',
          }}
        >
          <div
            className="px-3 py-1.5 text-xs font-semibold border-b"
            style={{ color: '#8B1E3F', borderColor: '#D4AF37', backgroundColor: 'rgba(212, 175, 55, 0.12)' }}
          >
            Anglish alternatives
          </div>
          {token.alternatives.map((alt, i) => (
            <button
              key={i}
              className="block w-full text-left px-3 py-1.5 text-sm transition-colors duration-150 hover:bg-amber-100/60"
              style={{ color: '#3D2817' }}
              onClick={() => {
                onReplace(applyCase(token.text, alt));
                onClose();
              }}
            >
              {alt}
            </button>
          ))}
        </div>
      )}
    </span>
  );
};

// ---------------------------------------------------------------------------
// Main Anglisher component
// ---------------------------------------------------------------------------
export const Anglisher: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [tokens, setTokens] = useState<Token[]>([]);
  const [analyzed, setAnalyzed] = useState(false);
  const [openTokenId, setOpenTokenId] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    setTokens(tokenize(inputText));
    setAnalyzed(true);
    setOpenTokenId(null);
    setCopied(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleAnalyze();
    }
  };

  const handleReplace = useCallback((tokenId: number, replacement: string) => {
    setTokens(prev =>
      prev.map(t =>
        t.id === tokenId
          ? { ...t, text: replacement, status: 'green', replaced: true, alternatives: t.alternatives }
          : t
      )
    );
  }, []);

  const currentSentence = tokens.map(t => t.text).join('');

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSentence).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setAnalyzed(false);
    setTokens([]);
    setInputText('');
    setOpenTokenId(null);
  };

  // Stats
  const wordTokens = tokens.filter(t => t.kind === 'word');
  const redCount = wordTokens.filter(t => !t.replaced && t.status === 'red').length;
  const greenCount = wordTokens.filter(t => t.replaced || t.status === 'green').length;
  const grayCount = wordTokens.filter(t => t.status === 'gray' && !t.replaced).length;

  return (
    <div className="space-y-6">
      {/* Input section */}
      <div
        className="rounded border-2 p-5"
        style={{ borderColor: '#8B6F47', backgroundColor: 'rgba(240, 230, 210, 0.4)' }}
      >
        <label
          className="block text-base font-semibold mb-3"
          style={{ color: '#8B1E3F' }}
        >
          <span className="flex items-center gap-2">
            <Feather className="w-4 h-4" />
            Enter your text to Anglish-ify
          </span>
        </label>
        <textarea
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type or paste a sentence here... (Ctrl+Enter to analyse)"
          rows={4}
          className="w-full rounded border-2 px-4 py-3 text-sm resize-y focus:outline-none transition-colors duration-200"
          style={{
            borderColor: '#C4A882',
            backgroundColor: '#FDF6E3',
            color: '#3D2817',
            fontFamily: 'inherit',
          }}
          onFocus={e => (e.currentTarget.style.borderColor = '#8B1E3F')}
          onBlur={e => (e.currentTarget.style.borderColor = '#C4A882')}
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={handleAnalyze}
            disabled={!inputText.trim()}
            className="px-5 py-2 rounded border-2 text-sm font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              backgroundColor: '#8B1E3F',
              borderColor: '#6B0F2A',
              color: '#F5EED7',
            }}
          >
            Analyse
          </button>
        </div>
      </div>

      {/* Results section */}
      {analyzed && tokens.length > 0 && (
        <div
          className="rounded border-2 p-5"
          style={{ borderColor: '#8B6F47', backgroundColor: 'rgba(240, 230, 210, 0.4)' }}
        >
          {/* Legend + stats */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block w-8 h-5 rounded border-2 text-center leading-4 text-xs"
                  style={{ borderColor: '#4A7C59', color: '#2E4A2E', backgroundColor: 'rgba(74,124,89,0.08)' }}
                >abc</span>
                <span style={{ color: '#4A3728' }}>Germanic/Anglish ({greenCount})</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block w-8 h-5 rounded border-2 text-center leading-4 text-xs"
                  style={{ borderColor: '#8B1E3F', color: '#6B0F2A', backgroundColor: 'rgba(139,30,63,0.07)' }}
                >abc</span>
                <span style={{ color: '#4A3728' }}>Has alternatives ({redCount})</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span
                  className="inline-block w-8 h-5 rounded border-2 text-center leading-4 text-xs"
                  style={{ borderColor: '#9B8B7A', color: '#5C4F44', backgroundColor: 'rgba(155,139,122,0.08)' }}
                >abc</span>
                <span style={{ color: '#4A3728' }}>Unknown ({grayCount})</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border-2 text-xs font-semibold transition-all duration-200"
                style={{
                  backgroundColor: copied ? '#4A7C59' : '#F0E6D2',
                  borderColor: copied ? '#2E4A2E' : '#8B6F47',
                  color: copied ? '#F5EED7' : '#4A3728',
                }}
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded border-2 text-xs font-semibold transition-all duration-200"
                style={{
                  backgroundColor: '#F0E6D2',
                  borderColor: '#8B6F47',
                  color: '#4A3728',
                }}
              >
                Reset
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t mb-4" style={{ borderColor: '#D4AF37' }} />

          {/* Token display */}
          <div
            className="leading-8 text-base p-4 rounded border"
            style={{
              backgroundColor: '#FDF6E3',
              borderColor: '#C4A882',
              minHeight: '3rem',
              lineHeight: '2.4rem',
            }}
          >
            {tokens.map(token => (
              <Chip
                key={token.id}
                token={token}
                isOpen={openTokenId === token.id}
                onOpen={() => setOpenTokenId(token.id)}
                onClose={() => setOpenTokenId(null)}
                onReplace={replacement => handleReplace(token.id, replacement)}
              />
            ))}
          </div>

          {/* Progress bar */}
          {wordTokens.length > 0 && (
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1" style={{ color: '#8B6F47' }}>
                <span>Anglish-ness</span>
                <span>{Math.round((greenCount / wordTokens.length) * 100)}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#E0D4B8' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(greenCount / wordTokens.length) * 100}%`,
                    backgroundColor: '#4A7C59',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty state hint */}
      {!analyzed && (
        <div className="text-center py-8" style={{ color: '#8B6F47' }}>
          <Feather className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p className="text-sm italic">
            Enter a sentence above and click <strong>Analyse</strong> to see which words have Anglish alternatives.
          </p>
        </div>
      )}
    </div>
  );
};
