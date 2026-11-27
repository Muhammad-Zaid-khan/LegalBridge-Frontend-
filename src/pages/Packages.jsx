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
import { packageSlug } from "../data/packageDetails";
import {
  SectionHead,
  AreaCard,
  LawyerCard,
  PageHero,
} from "../components/Shared";

export default function Packages() {
  return (
    <>
      <PageHero
        eyebrow="A PRACTICAL STARTING POINT"
        title={
          <>
            Legal documents, <em>simplified.</em>
          </>
        }
        desc="Explore preliminary document packages designed to help you prepare for a conversation with an advocate."
      />
      <div className="container page-content">
        <div className="notice">
          <Info size={20} />
          <p>
            <strong>Drafts require professional review.</strong> These are demo
            package descriptions, not ready-to-file documents. Consult a
            qualified Pakistani advocate before signing or submitting anything.
          </p>
        </div>
        <div className="package-grid">
          {packages.map((p) => (
            <div className="content-card package-card" key={p.name}>
              <span className="area-icon">
                <FileText size={21} />
              </span>
              <div className="eyebrow">{p.category}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="package-bottom">
                <div>
                  <small>DEMO PRICE</small>
                  <strong>{formatFee(p.price)}</strong>
                </div>
                <Link
                  to={"/packages/" + packageSlug(p.name)}
                  className="round-arrow"
                  aria-label={"View details for " + p.name}
                >
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
