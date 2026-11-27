import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { areas, lawyers, packages, formatFee } from "../data";
import { packageSlug } from "../data/packageDetails";

import HeroVisual from "../components/HeroVisual";
import HomeSearch from "../components/HomeSearch";
import SectionHead from "../components/SectionHead";
import AreaCard from "../components/cards/AreaCard";
import LawyerCard from "../components/LawyerCard";
import AppointmentBanner from "../components/AppointmentBanner";
import Counter from "../components/ui/Counter";
import Marquee from "../components/ui/Marquee";
import { Reveal, Stagger, StaggerItem } from "../components/ui/Reveal";

import "./Home.css";

const STEPS = [
  {
    icon: Search,
    title: "Describe your matter",
    text: "Pick a practice area or ask the legal assistant in plain language.",
  },
  {
    icon: MapPin,
    title: "Compare sample advocates",
    text: "Filter by city, area, experience and consultation fee.",
  },
  {
    icon: CalendarDays,
    title: "Request an appointment",
    text: "Choose a date and time slot. This demo stores requests on your device only.",
  },
  {
    icon: FileText,
    title: "Prepare your documents",
    text: "Use a starter checklist so your first meeting is more productive.",
  },
];

const STATS = [
  { to: areas.length, label: "Practice areas" },
  { to: lawyers.length, label: "Sample advocates" },
  { to: 2, label: "Cities served" },
  { to: packages.length, label: "Document packages" },
];

function priceText(price) {
  return typeof price === "number" ? formatFee(price) : String(price);
}

export default function Home() {
  useEffect(() => {
    document.title = "LegalBridgeRWP | Your bridge to justice";
  }, []);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <Reveal>
              <div className="eyebrow">
                <span /> RAWALPINDI &amp; ISLAMABAD
              </div>
            </Reveal>

            <Reveal delay={0.08} as="h1">
              Making legal support
              <br />
              <em>a little clearer.</em>
            </Reveal>

            <Reveal delay={0.16} as="p" className="home-hero-lead">
              Explore practice areas, meet sample advocates and see how a
              consultation request works. Simple guidance, closer to home.
            </Reveal>

            <Reveal delay={0.24} className="home-hero-actions">
              <Link className="btn btn-dark" to="/lawyers">
                Find a lawyer <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-light" to="/assistant">
                <Sparkles size={16} /> Ask the assistant
              </Link>
            </Reveal>

            <Reveal delay={0.32} className="home-hero-note">
              <ShieldCheck size={16} />
              General legal information only, not legal advice.
            </Reveal>
          </div>

          <div className="home-hero-art">
            <HeroVisual />
          </div>
        </div>

        <div className="container">
          <Reveal delay={0.1}>
            <HomeSearch />
          </Reveal>
        </div>
      </section>

      {/* ---------- Scrolling strip ---------- */}
      <Marquee items={areas.map((a) => a.name)} />

      {/* ---------- Stats ---------- */}
      <section className="container home-stats">
        <Stagger gap={0.1} className="home-stats-grid">
          {STATS.map((s) => (
            <StaggerItem key={s.label} className="home-stat">
              <strong>
                <Counter to={s.to} />
              </strong>
              <span>{s.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------- Practice areas ---------- */}
      <section className="container home-section">
        <Reveal>
          <SectionHead
            eyebrow="PRACTICE AREAS"
            title="Where do you need support?"
            desc="Each area explains common situations, useful questions and how to prepare."
            link="All practice areas"
            to="/practice-areas"
          />
        </Reveal>
        <Stagger gap={0.07} className="home-grid home-grid-4">
          {areas.map((area, i) => (
            <StaggerItem key={area.slug}>
              <AreaCard
                area={{ ...area, description: area.description ?? area.detail }}
                index={i}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="home-steps">
        <div className="container">
          <Reveal>
            <SectionHead
              eyebrow="HOW IT WORKS"
              title="From question to consultation"
              desc="Four simple steps. Nothing is sent anywhere in this demo."
            />
          </Reveal>
          <Stagger gap={0.12} className="home-grid home-grid-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title} className="home-step">
                  <span className="home-step-num">0{i + 1}</span>
                  <span className="home-step-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ---------- Lawyers ---------- */}
      <section className="container home-section">
        <Reveal>
          <SectionHead
            eyebrow="SAMPLE ADVOCATES"
            title="Meet some of our advocates"
            desc="Fictional profiles created to demonstrate how the platform works."
            link="View all advocates"
            to="/lawyers"
          />
        </Reveal>
        <Stagger gap={0.1} className="home-grid home-grid-4">
          {lawyers.slice(0, 4).map((lawyer) => (
            <StaggerItem key={lawyer.id}>
              <LawyerCard lawyer={lawyer} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------- Packages ---------- */}
      <section className="container home-section">
        <Reveal>
          <SectionHead
            eyebrow="LEGAL PACKAGES"
            title="Start with the paperwork"
            desc="Preliminary document outlines to organise your details before an advocate reviews them."
            link="All packages"
            to="/packages"
          />
        </Reveal>
        <Stagger gap={0.1} className="home-grid home-grid-3">
          {packages.slice(0, 3).map((pkg) => (
            <StaggerItem key={pkg.name}>
              <Link
                className="home-package"
                to={"/packages/" + packageSlug(pkg.name)}
              >
                <span className="home-package-cat">{pkg.category}</span>
                <h3>{pkg.name}</h3>
                <p>{pkg.desc}</p>
                <div className="home-package-bottom">
                  <strong>{priceText(pkg.price)}</strong>
                  <span className="home-package-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------- Appointment banner ---------- */}
      <AppointmentBanner />

      <p className="container home-disclaimer">
        LegalBridgeRWP is a final-year project demonstration. Profiles,
        bookings and prices are fictional, and the content is general
        information, not legal advice.
      </p>
    </>
  );
}