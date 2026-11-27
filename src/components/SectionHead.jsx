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

export default function SectionHead({ eyebrow, title, desc, link, to }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">
          <span></span>
          {eyebrow}
        </div>
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
      {link && (
        <Link className="text-link" to={to}>
          {link} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
