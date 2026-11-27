import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartHandshake,
  Scale,
  Search,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { PageHero } from "../components/Shared";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="A LITTLE ABOUT US"
        title={
          <>
            Legal support that feels <em>human.</em>
          </>
        }
        desc="We're reimagining how people in the Twin Cities find and access legal support."
      />
      <div className="container page-content">
        <div className="about-layout about-layout-new">
          <div className="about-image about-legal-image">
            <img
              src="/about-legal.jpg"
              alt="AI-generated illustration of two fictional legal professionals"
            />
            <span>AI-GENERATED DEMO VISUAL</span>
          </div>
          <div className="about-copy">
            <div className="eyebrow">
              <span /> OUR PURPOSE
            </div>
            <h2>
              Clarity when you need it <em>most.</em>
            </h2>
            <p>
              LegalBridgeRWP is a final-year project concept designed to make
              the first step toward legal support feel simpler. We bring
              information about practice areas, sample advocate profiles and
              consultation requests into one approachable space.
            </p>
            <p>
              Our goal is to help people in Rawalpindi and Islamabad understand
              where to begin, prepare for a conversation and explore the kind of
              support that may fit their needs.
            </p>
            <div className="about-mission">
              <Scale size={22} />
              <div>
                <strong>Our vision</strong>
                <span>
                  A more understandable, accessible path to legal guidance.
                </span>
              </div>
            </div>
            <Link className="btn btn-dark" to="/lawyers">
              Meet sample advocates <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="about-values-head">
          <div className="eyebrow">
            <span /> WHAT GUIDES US
          </div>
          <h2>
            A better experience starts with <em>care.</em>
          </h2>
          <p>Designed around the people behind every legal question.</p>
        </div>
        <div className="about-values">
          {[
            [
              Search,
              "01",
              "Clarity",
              "Straightforward information to help you understand your options.",
            ],
            [
              HeartHandshake,
              "02",
              "Connection",
              "A simpler way to explore lawyers and legal practice areas.",
            ],
            [
              ShieldCheck,
              "03",
              "Care",
              "A thoughtful experience for sensitive legal matters.",
            ],
          ].map(([Icon, n, title, desc]) => (
            <div className="about-value-card" key={n}>
              <div className="area-icon">
                <Icon size={22} />
              </div>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <section className="about-prepare">
          <div className="about-prepare-copy">
            <div className="eyebrow">
              <span /> A MORE CONFIDENT FIRST STEP
            </div>
            <h2>Prepare for a meaningful conversation.</h2>
            <p>
              A little preparation can make it easier to discuss your situation
              with an advocate. These are general suggestions; your
              circumstances may require different steps.
            </p>
            <ul>
              <li>
                <CheckCircle2 size={17} /> Write down your main questions and
                relevant dates.
              </li>
              <li>
                <CheckCircle2 size={17} /> Gather copies of documents where safe
                and appropriate.
              </li>
              <li>
                <CheckCircle2 size={17} /> Ask about the process, fees and what
                happens next.
              </li>
            </ul>
            <Link className="text-link" to="/appointments">
              Explore a demo appointment <ArrowRight size={15} />
            </Link>
          </div>
          <div className="about-prepare-visual">
            <img
              src="/legal-preparation.jpg"
              alt="AI-generated illustration of a fictional legal consultation"
            />
            <span>AI-GENERATED DEMO VISUAL</span>
          </div>
        </section>
        <div className="about-cta">
          <div>
            <div className="eyebrow light">
              <span /> WHEN YOU’RE READY
            </div>
            <h2>Your next step can start here.</h2>
            <p>Explore a practice area or learn about a sample advocate.</p>
          </div>
          <Link className="btn btn-gold" to="/practice-areas">
            Explore practice areas <ArrowRight size={16} />
          </Link>
        </div>
        <p className="demo-note">
          LegalBridgeRWP is a frontend demonstration. No real lawyer
          verification, secure case management or appointment service is
          connected.
        </p>
      </div>
    </>
  );
}
