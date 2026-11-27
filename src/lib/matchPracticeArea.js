// Keywords per practice area. English words match whole tokens;
// Urdu words match as substrings because Urdu tokenization is different.
const RULES = {
  "family-law": ["khula", "divorce", "custody", "family", "maintenance", "nikah", "خلع", "طلاق"],
  "tenancy-and-rent": ["rent", "tenant", "landlord", "lease", "eviction", "deposit", "کرایہ"],
  "property-law": ["property", "plot", "land", "transfer", "registry", "mutation", "جائیداد", "پلاٹ"],
  "criminal-law": ["fir", "police", "bail", "arrest", "fraud", "cheque", "ضمانت", "پولیس"],
  "labour-and-employment": ["job", "salary", "employer", "employment", "termination", "wages", "تنخواہ"],
  "corporate-and-business": ["business", "company", "partnership", "shareholder", "contract", "کاروبار"],
  "tax-and-inheritance": ["tax", "fbr", "inheritance", "succession", "estate", "وراثت"],
  "civil-litigation": ["recovery", "debt", "loan", "civil", "notice", "قرض"],
};

const isAscii = (word) => /^[\x00-\x7F]+$/.test(word);

export function matchPracticeArea(text) {
  const lower = text.toLowerCase();
  const tokens = new Set(lower.split(/[^\p{L}\p{N}]+/u).filter(Boolean));

  const ranked = Object.entries(RULES)
    .map(([slug, words]) => {
      const hits = words.filter((w) => (isAscii(w) ? tokens.has(w) : lower.includes(w)));
      return { slug, hits, score: hits.length };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  return ranked[0] ?? null; // { slug, hits, score } or null
}