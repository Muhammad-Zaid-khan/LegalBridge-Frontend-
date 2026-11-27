import React, { useState, useEffect } from "react";
import {
  Link,
  NavLink,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Scale,
  Menu,
  X,
  MapPin,
  Search,
  ShieldCheck,
  Clock3,
  Star,
  ChevronRight,
  ChevronDown,
  CalendarDays,
  FileText,
  MessageSquare,
  LayoutDashboard,
  FolderOpen,
  Sparkles,
  Phone,
  Mail,
  ArrowLeft,
  CircleCheck,
  Info,
  UserRound,
  Plus,
  SlidersHorizontal,
} from "lucide-react";
import { areas, lawyers, packages, formatFee } from "../data";
import {
  SectionHead,
  AreaCard,
  LawyerCard,
  PageHero,
} from "../components/Shared";
import NotFound from "./NotFound";

export default function LawyerDetail() {
  const { id } = useParams();
  const l = lawyers.find((x) => x.id === id);
  if (!l) return <NotFound />;
  return (
    <div className="container page-content">
      <Link className="back-link" to="/lawyers">
        <ArrowLeft size={15} /> Back to lawyers
      </Link>
      <div className="profile-header">
        <div className={"profile-avatar " + l.tone}>
          <img src={`/` + l.id + `.jpg`} alt="" />
        </div>
        <div className="profile-intro">
          <span className="tag">
            <ShieldCheck size={14} /> Fictional sample profile
          </span>
          <h1>Adv. {l.name}</h1>
          <p>
            {l.area} <span className="bullet">•</span> {l.city}
          </p>
          <div className="profile-meta">
            <span>
              <Star size={15} fill="currentColor" /> {l.rating} sample rating
            </span>
            <span>
              <Clock3 size={15} />
              {l.experience} years experience
            </span>
          </div>
        </div>
        <div className="profile-fee">
          <small>CONSULTATION FEE</small>
          <strong>{formatFee(l.fee)}</strong>
          <span>Demo pricing</span>
        </div>
      </div>
      <div className="detail-grid profile-grid">
        <div className="content-card">
          <div className="eyebrow">
            <span></span> GET TO KNOW YOUR ADVOCATE
          </div>
          <h2>About the advocate</h2>
          <p>{l.bio}</p>
          <div className="info-grid">
            <div>
              <small>PRIMARY PRACTICE</small>
              <strong>{l.area}</strong>
            </div>
            <div>
              <small>LOCATION</small>
              <strong>{l.city}</strong>
            </div>
            <div>
              <small>LANGUAGES</small>
              <strong>{l.languages}</strong>
            </div>
            <div>
              <small>EXPERIENCE</small>
              <strong>{l.experience} years</strong>
            </div>
          </div>
          <p className="fine-print">
            This is a fictional sample profile. Credentials and availability
            have not been verified. The portrait is AI-generated.
          </p>
        </div>
        <aside className="content-card profile-booking-card">
          <span className="area-icon">
            <CalendarDays size={22} />
          </span>
          <h3>Plan a consultation</h3>
          <p>Choose a preferred date and time on our appointment page.</p>
          <Link className="btn btn-dark" to={"/appointments/" + l.id}>
            Request an appointment <ArrowRight size={16} />
          </Link>
          <small>Demo only. No real booking or payment is made.</small>
        </aside>
      </div>
      <div className="related-section">
        <SectionHead
          eyebrow="KEEP EXPLORING"
          title="More sample advocates"
          desc="Compare other profiles to find the right starting point."
          link="View all lawyers"
          to="/lawyers"
        />
        <div className="lawyers-grid">
          {lawyers
            .filter((person) => person.id !== l.id)
            .slice(0, 4)
            .map((person) => (
              <LawyerCard key={person.id} lawyer={person} />
            ))}
        </div>
        <p className="demo-note">
          <Info size={15} /> All profiles and credentials are fictional, and
          portraits are AI-generated.
        </p>
      </div>
    </div>
  );
}
