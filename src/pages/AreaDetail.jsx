import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Info,
  ListChecks,
  MessageCircle,
  Scale,
  Sparkles,
} from "lucide-react";
import { areas, lawyers } from "../data";
import { practiceAreaDetails } from "../data/practiceAreaDetails";
import { LawyerCard, SectionHead } from "../components/Shared";
import NotFound from "./NotFound";

export default function AreaDetail() {
  const { slug } = useParams();
  const area = areas.find((item) => item.slug === slug);
  const details = practiceAreaDetails[slug];
  if (!area || !details) return <NotFound />;
  const Icon = area.icon;
  const matches = lawyers.filter((lawyer) => lawyer.area === area.name);
  const nextAreas = areas.filter((item) => item.slug !== slug).slice(0, 3);
  return (
    <>
      <section className="area-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/practice-areas">Practice areas</Link>
            <span>/</span>
            <strong>{area.name}</strong>
          </div>
          <div className="area-hero-grid">
            <div>
              <div className="eyebrow light">
                <span /> YOUR GUIDE TO LEGAL SUPPORT
              </div>
              <h1>{area.name}</h1>
              <p>
                {area.description} Learn what this practice area covers and how
                a lawyer might help.
              </p>
              <div className="area-hero-actions">
                <Link
                  className="btn btn-gold"
                  to={"/lawyers?area=" + encodeURIComponent(area.name)}
                >
                  Find a {area.name} lawyer <ArrowRight size={16} />
                </Link>
                <a className="hero-link" href="#area-guide">
                  Explore the guide <ArrowRight size={15} />
                </a>
              </div>
            </div>
            <div className="area-hero-art">
              <div className="area-hero-icon">
                <Icon size={58} strokeWidth={1.1} />
              </div>
              <div>
                <small>LEGAL PRACTICE AREA</small>
                <strong lang="ur" dir="rtl">
                  {area.urdu}
                </strong>
                <span>Rawalpindi & Islamabad</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container area-layout" id="area-guide">
        <main className="area-main">
          <section className="area-intro">
            <div className="eyebrow">
              <span /> UNDERSTANDING THIS AREA
            </div>
            <h2>Start with a clearer picture.</h2>
            <p>{details.intro}</p>
            <div className="info-note">
              <Info size={17} />
              <span>
                This is general information, not legal advice. The right
                approach depends on your circumstances and a qualified lawyer’s
                assessment.
              </span>
            </div>
          </section>
          <section className="area-services">
            <div className="eyebrow">
              <span /> HOW AN ADVOCATE CAN HELP
            </div>
            <h2>Common matters we cover.</h2>
            <p className="section-description">
              Here are a few of the issues a lawyer in this area may help you
              understand.
            </p>
            <div className="service-list">
              {details.services.map(([title, description], i) => (
                <div className="service-row" key={title}>
                  <span className="service-number">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </div>
              ))}
            </div>
          </section>
          <section className="preparation-card">
            <div className="prep-title">
              <span className="area-icon">
                <FileText size={21} />
              </span>
              <div>
                <div className="eyebrow">BEFORE YOUR CONSULTATION</div>
                <h2>Feel a little more prepared.</h2>
              </div>
            </div>
            <div className="prep-grid">
              <div>
                <h3>Helpful records</h3>
                <p>{area.documents}</p>
                <small>
                  These are examples, not a complete checklist. Bring copies
                  only where safe and appropriate.
                </small>
              </div>
              <div>
                <h3>Questions you might ask</h3>
                <ul className="check-list">
                  {details.questions.map((q) => (
                    <li key={q}>
                      <CheckCircle2 size={17} />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section className="next-steps">
            <div className="eyebrow">
              <span /> A PRACTICAL STARTING POINT
            </div>
            <h2>Your next steps.</h2>
            <div>
              {details.steps.map((step, i) => (
                <div className="next-step" key={step}>
                  <span>0{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="area-faq">
            <div className="eyebrow">
              <span /> GOOD TO KNOW
            </div>
            <h2>A common question.</h2>
            <details>
              <summary>
                {details.faq[0]} <span>+</span>
              </summary>
              <p>{details.faq[1]}</p>
            </details>
          </section>
        </main>
        <aside className="area-aside">
          <div className="area-cta-card">
            <span className="cta-card-icon">
              <Scale size={23} />
            </span>
            <h3>Let’s find the right support.</h3>
            <p>
              Explore sample advocates who focus on {area.name.toLowerCase()}.
            </p>
            <Link
              className="btn btn-dark"
              to={"/lawyers?area=" + encodeURIComponent(area.name)}
            >
              View matching lawyers <ArrowRight size={16} />
            </Link>
            <small>Fictional profiles shown for demonstration only.</small>
          </div>
          <div className="area-aside-card">
            <div className="eyebrow">EXPLORE MORE</div>
            <h3>Other practice areas</h3>
            {nextAreas.map((item) => (
              <Link key={item.slug} to={"/practice-areas/" + item.slug}>
                {item.name}
                <ArrowRight size={14} />
              </Link>
            ))}
            <Link className="all-areas" to="/practice-areas">
              All practice areas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="area-aside-card">
            <Sparkles size={20} />
            <h3>Not sure where to start?</h3>
            <p>Our simple demo assistant suggests an area based on keywords.</p>
            <Link to="/assistant">
              Try the assistant <ArrowRight size={14} />
            </Link>
          </div>
        </aside>
      </div>
      <section className="section section-tint area-lawyers">
        <div className="container">
          <SectionHead
            eyebrow="FIND SUPPORT"
            title={
              <>
                Explore related <em>advocates.</em>
              </>
            }
            desc="Fictional sample profiles and AI-generated portraits for demonstration."
            link="View all lawyers"
            to="/lawyers"
          />
          <div className="lawyers-grid">
            {matches.map((l) => (
              <LawyerCard key={l.id} lawyer={l} />
            ))}
          </div>
          <div className="area-bottom-link">
            <Link to="/practice-areas">
              <ArrowLeft size={15} /> Back to all practice areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
