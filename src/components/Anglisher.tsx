import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Copy, Check, Feather, Trash2 } from 'lucide-react';
import { authentikWordEntries } from '../data/authenticWordEntries';
import { latinGreekMorphemes, oeAffixes } from '../data/morphemes';
import { useLocalStorage } from '../hooks/useLocalStorage';

// ---------------------------------------------------------------------------
// Unknown word queue — persisted to localStorage
// ---------------------------------------------------------------------------
interface UnknownEntry {
  word: string;
  count: number;
  firstSeen: string; // ISO date
}

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
  // Common inflected/derived forms of native words
  'became','become','becomes','becoming',
  'born','borne','bearing','bears',
  'raised','raise','raises','raising',
  'spent','spend','spends','spending',
  'called','call','calls','calling',
  'days','weeks','months','years','nights',
  'town','towns','township',
  'playground','playgrounds','playmate','playmates',
  'furthermore','nevertheless','nonetheless','meanwhile','thereafter','whereby',
  'one','ones',"one's",
  // Common contractions stripped forms
  "it's","don't","doesn't","didn't","can't","won't","isn't","aren't","wasn't",
  "weren't","haven't","hasn't","hadn't","wouldn't","couldn't","shouldn't",
  "i'm","i've","i'll","i'd","you're","you've","you'll","you'd","he's","he'll",
  "he'd","she's","she'll","she'd","we're","we've","we'll","we'd","they're",
  "they've","they'll","they'd","that's","there's","here's","who's","what's",
  "let's","'s"
]);

// ---------------------------------------------------------------------------
// Build lookup maps from the wordbook
// ---------------------------------------------------------------------------
// Primary: lowercase word → anglish alternatives
const WORDBOOK_MAP: Map<string, string[]> = new Map(
  authentikWordEntries.map(entry => [entry.word.toLowerCase(), entry.anglish])
);

// Forms reverse map: inflected form → anglish alternatives of its root
// e.g. 'using' → alternatives for 'use'
const FORMS_MAP: Map<string, string[]> = new Map();
for (const entry of authentikWordEntries) {
  if (entry.forms) {
    for (const form of entry.forms) {
      if (!FORMS_MAP.has(form.toLowerCase())) {
        FORMS_MAP.set(form.toLowerCase(), entry.anglish);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Morpheme lookup maps (built from the morpheme data files)
// ---------------------------------------------------------------------------
const allMorphemes = [...latinGreekMorphemes, ...oeAffixes];

// prefix element (e.g. 'bio-') → entry
const PREFIX_MAP = new Map(
  allMorphemes.filter(m => m.kind === 'prefix').map(m => [m.element.replace(/-/g, '').toLowerCase(), m])
);
// suffix element (e.g. '-ology') → entry
const SUFFIX_MAP = new Map(
  allMorphemes.filter(m => m.kind === 'suffix').map(m => [m.element.replace(/-/g, '').toLowerCase(), m])
);
// root element → entry
const ROOT_MAP = new Map(
  allMorphemes.filter(m => m.kind === 'root').map(m => [m.element.toLowerCase(), m])
);

// Sorted longest-first so greedy matching works correctly
const PREFIXES_SORTED = [...PREFIX_MAP.keys()].sort((a, b) => b.length - a.length);
const SUFFIXES_SORTED = [...SUFFIX_MAP.keys()].sort((a, b) => b.length - a.length);
const ROOTS_SORTED = [...ROOT_MAP.keys()].sort((a, b) => b.length - a.length);

/**
 * Try to decompose a word into morpheme parts.
 * Returns an array of MorphemePart if at least one known morpheme is found, else null.
 */
function decomposeMorphemes(lower: string): MorphemePart[] | null {
  // Strip known prefixes from the front
  const parts: MorphemePart[] = [];
  let remaining = lower;

  for (const p of PREFIXES_SORTED) {
    if (remaining.startsWith(p) && remaining.length > p.length + 2) {
      const entry = PREFIX_MAP.get(p)!;
      parts.push({ text: entry.element, meaning: entry.meaning, anglish: entry.anglishEquivalent, kind: 'prefix' });
      remaining = remaining.slice(p.length);
      break;
    }
  }

  // Strip known suffixes from the back
  const suffixParts: MorphemePart[] = [];
  let suffixLoop = true;
  while (suffixLoop) {
    suffixLoop = false;
    for (const s of SUFFIXES_SORTED) {
      if (remaining.endsWith(s) && remaining.length > s.length + 2) {
        const entry = SUFFIX_MAP.get(s)!;
        suffixParts.unshift({ text: entry.element, meaning: entry.meaning, anglish: entry.anglishEquivalent, kind: 'suffix' });
        remaining = remaining.slice(0, -s.length);
        suffixLoop = true;
        break;
      }
    }
  }

  // Try to match the remaining middle as a root
  for (const r of ROOTS_SORTED) {
    if (remaining === r || remaining.startsWith(r) || remaining.endsWith(r)) {
      const entry = ROOT_MAP.get(r)!;
      const before = remaining.slice(0, remaining.indexOf(r) === -1 ? 0 : remaining.indexOf(r));
      const after = remaining.slice((remaining.indexOf(r) === -1 ? 0 : remaining.indexOf(r)) + r.length);
      if (before) parts.push({ text: before, meaning: '?', kind: 'unknown' });
      parts.push({ text: entry.element, meaning: entry.meaning, anglish: entry.anglishEquivalent, kind: 'root' });
      if (after) parts.push({ text: after, meaning: '?', kind: 'unknown' });
      remaining = '';
      break;
    }
  }

  // Anything left over is unknown
  if (remaining) {
    parts.push({ text: remaining, meaning: '?', kind: 'unknown' });
  }

  // Only return a breakdown if at least one known morpheme was identified
  const hasKnown = parts.some(p => p.kind !== 'unknown');
  if (!hasKnown) return null;

  return [...parts, ...suffixParts];
}

// ---------------------------------------------------------------------------
// Token types
// ---------------------------------------------------------------------------
type TokenKind = 'word' | 'punct';

export interface MorphemePart {
  text: string;         // the matched substring
  meaning: string;      // e.g. 'life'
  anglish?: string;     // e.g. 'life-' or '-lore'
  kind: 'prefix' | 'suffix' | 'root' | 'unknown';
}

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
  /** Morpheme breakdown for gray words */
  breakdown?: MorphemePart[];
}

// ---------------------------------------------------------------------------
// Stemmer: tries suffix-stripping rules to find a wordbook/Germanic root.
// Returns the matched root string, or null if no match found.
// ---------------------------------------------------------------------------
function findRoot(lower: string): { root: string; inWordbook: boolean; alts?: string[] } | null {
  // 1. Exact wordbook match
  if (WORDBOOK_MAP.has(lower)) return { root: lower, inWordbook: true };
  // 2. Exact Germanic match
  if (NATIVE_GERMANIC.has(lower)) return { root: lower, inWordbook: false };
  // 3. Explicit forms map (most accurate — beats stemmer)
  if (FORMS_MAP.has(lower)) return { root: lower, inWordbook: true, alts: FORMS_MAP.get(lower) };

  // Candidate stems to try, in priority order
  const candidates: string[] = [];

  // -ing stripping (running→run, making→make, using→use)
  if (lower.endsWith('ing') && lower.length > 5) {
    const base = lower.slice(0, -3);
    candidates.push(base);          // walk+ing → walk
    candidates.push(base + 'e');    // us+ing   → use
    // doubled consonant: running → runn → run
    if (base.length > 2 && base[base.length - 1] === base[base.length - 2]) {
      candidates.push(base.slice(0, -1));
    }
  }

  // -ed stripping
  if (lower.endsWith('ed') && lower.length > 4) {
    const base = lower.slice(0, -2);
    candidates.push(base);          // walked → walk
    candidates.push(base + 'e');    // used → use
    if (base.length > 2 && base[base.length - 1] === base[base.length - 2]) {
      candidates.push(base.slice(0, -1)); // planned → plan
    }
  }

  // -ies → -y  (cities→city, families→family)
  if (lower.endsWith('ies') && lower.length > 4) {
    candidates.push(lower.slice(0, -3) + 'y');
  }

  // -ied → -y  (tried→try)
  if (lower.endsWith('ied') && lower.length > 4) {
    candidates.push(lower.slice(0, -3) + 'y');
  }

  // -es stripping (processes→process, churches→church)
  if (lower.endsWith('es') && lower.length > 4) {
    candidates.push(lower.slice(0, -2));
    candidates.push(lower.slice(0, -1)); // takes→take (remove just s)
  }

  // -s stripping (runs→run, books→book)
  if (lower.endsWith('s') && lower.length > 3 && !lower.endsWith('ss')) {
    candidates.push(lower.slice(0, -1));
  }

  // -er stripping (runner→run, teacher→teach, bigger→big)
  if (lower.endsWith('er') && lower.length > 4) {
    const base = lower.slice(0, -2);
    candidates.push(base);
    candidates.push(base + 'e');
    if (base.length > 2 && base[base.length - 1] === base[base.length - 2]) {
      candidates.push(base.slice(0, -1));
    }
  }

  // -est stripping (biggest→big, latest→late)
  if (lower.endsWith('est') && lower.length > 5) {
    const base = lower.slice(0, -3);
    candidates.push(base);
    candidates.push(base + 'e');
    if (base.length > 2 && base[base.length - 1] === base[base.length - 2]) {
      candidates.push(base.slice(0, -1));
    }
  }

  // -ly stripping (quickly→quick, completely→complete)
  if (lower.endsWith('ly') && lower.length > 4) {
    candidates.push(lower.slice(0, -2));
    candidates.push(lower.slice(0, -2) + 'e');
  }

  // -ness stripping (darkness→dark, completeness→complete)
  if (lower.endsWith('ness') && lower.length > 6) {
    candidates.push(lower.slice(0, -4));
    candidates.push(lower.slice(0, -4) + 'e');
  }

  // -ful stripping (beautiful→beauty handled separately; powerful→power)
  if (lower.endsWith('ful') && lower.length > 5) {
    candidates.push(lower.slice(0, -3));
  }

  // -less stripping (powerless→power, hopeless→hope)
  if (lower.endsWith('less') && lower.length > 6) {
    candidates.push(lower.slice(0, -4));
    candidates.push(lower.slice(0, -4) + 'e');
  }

  // -able / -ible (capable→? not useful; notable→note)
  if (lower.endsWith('able') && lower.length > 6) {
    candidates.push(lower.slice(0, -4));
    candidates.push(lower.slice(0, -4) + 'e');
  }
  if (lower.endsWith('ible') && lower.length > 6) {
    candidates.push(lower.slice(0, -4));
  }

  // -ment (government→govern, movement→move)
  if (lower.endsWith('ment') && lower.length > 6) {
    candidates.push(lower.slice(0, -4));
    candidates.push(lower.slice(0, -4) + 'e');
  }

  // -tion / -sion (education→educate, production→produce)
  if (lower.endsWith('tion') && lower.length > 6) {
    candidates.push(lower.slice(0, -4));
    candidates.push(lower.slice(0, -4) + 'e');
    candidates.push(lower.slice(0, -3)); // nation → nate? skip; but action → act
  }
  if (lower.endsWith('sion') && lower.length > 6) {
    candidates.push(lower.slice(0, -4));
    candidates.push(lower.slice(0, -4) + 'e');
  }

  // -ity (activity→active, university→universe)
  if (lower.endsWith('ity') && lower.length > 5) {
    candidates.push(lower.slice(0, -3));
    candidates.push(lower.slice(0, -3) + 'e');
  }

  // Check candidates: wordbook first, then Germanic
  for (const c of candidates) {
    if (c.length < 2) continue;
    if (WORDBOOK_MAP.has(c)) return { root: c, inWordbook: true };
  }
  for (const c of candidates) {
    if (c.length < 2) continue;
    if (NATIVE_GERMANIC.has(c)) return { root: c, inWordbook: false };
  }

  return null;
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
      const match = findRoot(lower);
      if (match?.inWordbook) {
        const alts = match.alts ?? WORDBOOK_MAP.get(match.root)!;
        return { id: id++, kind: 'word', text: part, status: 'red', alternatives: alts };
      } else if (match && !match.inWordbook) {
        return { id: id++, kind: 'word', text: part, status: 'green' };
      } else {
        const breakdown = decomposeMorphemes(lower) ?? undefined;
        return { id: id++, kind: 'word', text: part, status: 'gray', breakdown };
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
      borderColor = token.breakdown ? '#7A6B5A' : '#9B8B7A';
      bgColor = token.breakdown ? 'rgba(122, 107, 90, 0.12)' : 'rgba(155, 139, 122, 0.08)';
      textColor = '#5C4F44';
      if (token.breakdown) cursorClass = 'cursor-pointer';
      break;
  }

  const handleClick = () => {
    if (effectiveStatus === 'red' || (effectiveStatus === 'gray' && token.breakdown)) {
      isOpen ? onClose() : onOpen();
    }
  };

  const kindColor = (kind: string) => {
    switch (kind) {
      case 'prefix': return '#2B4162';
      case 'suffix': return '#4A5D2A';
      case 'root':   return '#8B1E3F';
      default:       return '#9B8B7A';
    }
  };

  return (
    <span className="relative inline-block" ref={chipRef}>
      <span
        onClick={handleClick}
        className={`inline-block px-1.5 py-0.5 rounded border text-sm font-medium transition-all duration-150 select-none ${cursorClass} ${
          effectiveStatus === 'red' || (effectiveStatus === 'gray' && token.breakdown) ? 'hover:shadow-sm' : ''
        }`}
        style={{
          borderColor,
          backgroundColor: isOpen ? 'rgba(122, 107, 90, 0.18)' : bgColor,
          color: textColor,
          lineHeight: '1.5',
          borderStyle: token.breakdown && effectiveStatus === 'gray' ? 'dashed' : 'solid',
        }}
        title={
          effectiveStatus === 'red'
            ? 'Click to see Anglish alternatives'
            : effectiveStatus === 'green'
            ? replaced ? 'Replaced with Anglish word' : 'Already Germanic/Anglish'
            : token.breakdown ? 'Click to see morpheme breakdown' : 'Unknown word'
        }
      >
        {token.text}
      </span>

      {/* Red word: Anglish alternatives popout */}
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

      {/* Gray word with breakdown: morpheme popout */}
      {isOpen && !token.alternatives && token.breakdown && (
        <div
          ref={dropRef}
          className="absolute z-50 mt-1 rounded border-2 shadow-xl"
          style={{
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: '200px',
            maxWidth: '280px',
            backgroundColor: '#FDF6E3',
            borderColor: '#7A6B5A',
            boxShadow: '0 4px 16px rgba(90, 70, 50, 0.25)',
          }}
        >
          <div
            className="px-3 py-1.5 text-xs font-semibold border-b"
            style={{ color: '#5C4F44', borderColor: '#D4AF37', backgroundColor: 'rgba(212, 175, 55, 0.12)' }}
          >
            Morpheme breakdown
          </div>
          <div className="px-3 py-2 space-y-1.5">
            {token.breakdown.map((part, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <span
                  className="font-mono font-bold shrink-0 px-1 rounded"
                  style={{ color: kindColor(part.kind), backgroundColor: `${kindColor(part.kind)}15` }}
                >
                  {part.text}
                </span>
                <span style={{ color: '#4A3728' }}>
                  {part.meaning !== '?' ? part.meaning : <span style={{ color: '#9B8B7A' }}>unknown</span>}
                  {part.anglish && part.anglish !== part.text && (
                    <span style={{ color: '#4A7C59' }}> → {part.anglish}</span>
                  )}
                </span>
                <span
                  className="ml-auto shrink-0 text-xs italic"
                  style={{ color: '#9B8B7A' }}
                >
                  {part.kind}
                </span>
              </div>
            ))}
          </div>
          {/* Suggested Anglish coinage */}
          {token.breakdown.some(p => p.anglish) && (
            <div
              className="px-3 py-2 border-t text-xs"
              style={{ borderColor: '#D4AF37', backgroundColor: 'rgba(74, 124, 89, 0.06)' }}
            >
              <span style={{ color: '#4A7C59', fontWeight: 600 }}>Anglish coinage: </span>
              <span style={{ color: '#2E4A2E' }}>
                {token.breakdown.map(p => (p.anglish ?? p.text).replace(/-/g, '')).join('')}
              </span>
            </div>
          )}
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
  const [unknownQueue, setUnknownQueue] = useLocalStorage<UnknownEntry[]>('anglisher-unknown-queue', []);
  const [showQueue, setShowQueue] = useState(false);

  const logUnknownWords = useCallback((newTokens: Token[]) => {
    const unknowns = newTokens
      .filter(t => t.kind === 'word' && t.status === 'gray')
      .map(t => t.text.toLowerCase());
    if (unknowns.length === 0) return;
    setUnknownQueue(prev => {
      const map = new Map(prev.map(e => [e.word, e]));
      for (const w of unknowns) {
        const existing = map.get(w);
        if (existing) {
          map.set(w, { ...existing, count: existing.count + 1 });
        } else {
          map.set(w, { word: w, count: 1, firstSeen: new Date().toISOString() });
        }
      }
      return Array.from(map.values()).sort((a, b) => b.count - a.count);
    });
  }, [setUnknownQueue]);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    const newTokens = tokenize(inputText);
    setTokens(newTokens);
    setAnalyzed(true);
    setOpenTokenId(null);
    setCopied(false);
    logUnknownWords(newTokens);
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

      {/* Unknown word queue */}
      {unknownQueue.length > 0 && (
        <div
          className="rounded border-2 overflow-hidden"
          style={{ borderColor: '#9B8B7A', backgroundColor: 'rgba(240, 230, 210, 0.3)' }}
        >
          <button
            onClick={() => setShowQueue(q => !q)}
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors duration-150 hover:bg-amber-100/30"
            style={{ color: '#5C4F44' }}
          >
            <span className="flex items-center gap-2">
              <span
                className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
                style={{ backgroundColor: '#9B8B7A', color: '#FDF6E3' }}
              >
                {unknownQueue.length}
              </span>
              Unknown words queue
              <span className="text-xs font-normal italic" style={{ color: '#8B6F47' }}>
                — flagged for future wordbook additions
              </span>
            </span>
            <span style={{ color: '#8B6F47' }}>{showQueue ? '▲' : '▼'}</span>
          </button>

          {showQueue && (
            <div className="border-t px-4 py-3 space-y-1" style={{ borderColor: '#C4A882' }}>
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setUnknownQueue([])}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded border transition-colors duration-150 hover:bg-red-50"
                  style={{ borderColor: '#C4A882', color: '#8B6F47' }}
                >
                  <Trash2 className="w-3 h-3" />
                  Clear all
                </button>
              </div>
              <div className="max-h-48 overflow-y-auto space-y-1">
                {unknownQueue.map(entry => (
                  <div
                    key={entry.word}
                    className="flex items-center justify-between px-3 py-1.5 rounded text-sm"
                    style={{ backgroundColor: 'rgba(155,139,122,0.1)' }}
                  >
                    <span className="font-medium" style={{ color: '#3D2817' }}>{entry.word}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs" style={{ color: '#8B6F47' }}>
                        seen {entry.count}×
                      </span>
                      <span className="text-xs" style={{ color: '#9B8B7A' }}>
                        {new Date(entry.firstSeen).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => setUnknownQueue(prev => prev.filter(e => e.word !== entry.word))}
                        className="text-xs opacity-50 hover:opacity-100 transition-opacity"
                        style={{ color: '#8B1E3F' }}
                        title="Remove from queue"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
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
