import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Info } from "lucide-react";
import { areas } from "../data";
import { PageHero } from "../components/Shared";
import { matchPracticeArea } from "../lib/matchPracticeArea";

export default function Assistant() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  function classify(e) {
    e.preventDefault();
    const match = matchPracticeArea(query);
    const area = match ? areas.find((a) => a.slug === match.slug) : null;
    setResult(area ? { ...area, hits: match.hits } : "unknown");
  }

  return (
    <>
      <PageHero
        eyebrow="A HELPFUL FIRST STEP"
        title={
          <>
            Find a little <em>clarity.</em>
          </>
        }
        desc="Describe your situation in a few words and explore a possible practice area."
      />
      <div className="container page-content assistant-layout">
        <div className="content-card">
          <div className="notice">
            <Info size={20} />
            <p>
              This simple keyword-based demo is not AI legal advice and can be
              wrong. Do not include sensitive personal or case details. For
              urgent matters, contact a qualified lawyer directly.
            </p>
          </div>

          <form onSubmit={classify}>
            <label className="field-label" htmlFor="query">
              What kind of help are you looking for?
            </label>
            <textarea
              id="query"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="For example: I have a question about a rent agreement."
              rows="5"
            />
            <button className="btn btn-dark">
              <Sparkles size={16} /> Explore a practice area
            </button>
          </form>

          {result && (
            <div className="assistant-result">
              {result === "unknown" ? (
                <>
                  <h3>We're not sure yet.</h3>
                  <p>Try using another keyword or browse all practice areas.</p>
                  <Link className="text-link" to="/practice-areas">
                    Browse all areas <ArrowRight size={16} />
                  </Link>
                </>
              ) : (
                <>
                  <span className="tag">POSSIBLE STARTING POINT</span>
                  <h3>{result.name}</h3>
                  <p>
                    {result.detail} This suggestion is not a diagnosis or legal
                    advice.
                  </p>
                  <p className="matched-on">
                    Matched on: {result.hits.join(", ")}
                  </p>
                  <Link
                    className="text-link"
                    to={"/practice-areas/" + result.slug}
                  >
                    Explore this area <ArrowRight size={16} />
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        <aside className="content-card">
          <h3>Private by design?</h3>
          <p>
            This prototype runs the keyword match in your browser, but is not a
            secure legal service. Please avoid submitting confidential details.
          </p>
          <Link className="text-link" to="/faq">
            Common questions <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </>
  );
}