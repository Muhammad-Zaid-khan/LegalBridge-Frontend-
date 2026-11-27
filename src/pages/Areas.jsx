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

export default function Areas() {
  return (
    <>
      <PageHero
        eyebrow="EXPERTISE FOR EVERY STEP"
        title={
          <>
            Explore our practice <em>areas.</em>
          </>
        }
        desc="Understand your options and find the right kind of legal support for your situation."
      />
      <div className="container page-content">
        <div className="areas-grid">
          {areas.map((a, i) => (
            <AreaCard key={a.slug} area={a} index={i} />
          ))}
        </div>
        <div className="help-strip">
          <Sparkles />
          <div>
            <strong>Not sure which area fits?</strong>
            <p>Try our demo legal assistant for a possible starting point.</p>
          </div>
          <Link to="/assistant" className="btn btn-dark">
            Explore assistant <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
