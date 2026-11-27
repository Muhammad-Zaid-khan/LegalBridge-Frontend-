import { useMemo, useState } from "react";
import { Landmark, Phone, Search, Info } from "lucide-react";
import { PageHero } from "../components/Shared";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";
import { courts, caseJourney, glossary, emergencyContacts } from "../data/resources";

export default function Resources() {
  const [term, setTerm] = useState("");

  const terms = useMemo(() => {
    const q = term.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter(
      (g) =>
        g.en.toLowerCase().includes(q) ||
        g.meaning.toLowerCase().includes(q) ||
        g.ur.includes(term.trim()),
    );
  }, [term]);

  return (
    <>
      <PageHero
        eyebrow="KNOW BEFORE YOU GO"
        title={
          <>
            A plain-language <em>guide.</em>
          </>
        }
        desc="Where matters are heard, how they usually move, and the words you will hear along the way."
      />

      <div className="container page-content">
        <section className="res-section">
          <Reveal>
            <div className="eyebrow"><span /> WHERE MATTERS ARE HEARD</div>
            <h2>The courts you may encounter</h2>
          </Reveal>
          <Stagger className="courts-grid" gap={0.08}>
            {courts.map((c) => (
              <StaggerItem key={c.name} className="content-card court-card">
                <Landmark size={20} />
                <h3>{c.name}</h3>
                <small>{c.seat}</small>
                <p>{c.role}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className="res-section">
          <Reveal>
            <div className="eyebrow"><span /> HOW A MATTER USUALLY MOVES</div>
            <h2>A general six-step journey</h2>
            <p className="demo-note"><Info size={15} /> Real timelines vary widely by court and case.</p>
          </Reveal>
          <Stagger as="ol" className="journey" gap={0.12}>
            {caseJourney.map((s, i) => (
              <StaggerItem as="li" key={s.step}>
                <small>0{i + 1}</small>
                <h3>{s.step}</h3>
                <p>{s.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section className="res-section">
          <Reveal>
            <div className="eyebrow"><span /> KEY TERMS</div>
            <h2>A glossary in English and Urdu</h2>
          </Reveal>
          <label className="search-box glossary-search">
            <Search size={16} />
            <span className="sr-only">Search the glossary</span>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search English or Urdu, for example khula or خلع"
            />
          </label>
          <div className="glossary-grid">
            {terms.map((g) => (
              <div className="term" key={g.en}>
                <div>
                  <strong>{g.en}</strong>
                  <span lang="ur" dir="rtl" className="term-ur">{g.ur}</span>
                </div>
                <p>{g.meaning}</p>
              </div>
            ))}
          </div>
          {!terms.length && <p className="demo-note">No matching term yet. Try another word.</p>}
        </section>

        <section className="res-section">
          <div className="notice">
            <Phone size={18} />
            <p>
              <strong>In an emergency, call first.</strong> Do not wait for a
              consultation if someone is in danger.
            </p>
          </div>
          <div className="emergency-grid">
            {emergencyContacts.map((c) => (
              <div className="content-card" key={c.number}>
                <small>{c.label}</small>
                <strong>{c.number}</strong>
                <p>{c.note}</p>
              </div>
            ))}
          </div>
          <p className="demo-note">
            <Info size={15} /> Verify these numbers locally before relying on them. Article 10-A
            of the Constitution of Pakistan recognizes the right to a fair trial and due process.
          </p>
        </section>
      </div>
    </>
  );
}