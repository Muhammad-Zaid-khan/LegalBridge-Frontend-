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
import { areas, lawyers, packages, formatFee } from "../../data.js";

export default function Logo({ light = false }) {
  return (
    <Link className={"logo " + (light ? "logo-light" : "")} to="/">
      <span className="logo-icon">
        <Scale size={21} />
      </span>
      <span>
        <strong>
          LegalBridge<span>RWP</span>
        </strong>
        <small>YOUR BRIDGE TO JUSTICE</small>
      </span>
    </Link>
  );
}
