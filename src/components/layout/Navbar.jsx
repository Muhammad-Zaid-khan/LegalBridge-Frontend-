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

import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="announcement">
        <div className="container">
          <span>
            <MapPin size={13} /> Serving Rawalpindi & Islamabad
          </span>
          <span>
            Thoughtful legal support, closer to home <ArrowRight size={13} />
          </span>
        </div>
      </div>
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <button
            className="mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="primary-navigation"
            className={open ? "nav-links open" : "nav-links"}
            onClick={() => setOpen(false)}
          >
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/lawyers">Find a lawyer</NavLink>
            <NavLink to="/practice-areas">Practice areas</NavLink>
            <NavLink to="/packages">Legal packages</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/appointments">Appointments</NavLink>
            <Link className="mobile-link" to="/dashboard">
              Dashboard
            </Link>
          </nav>
          <div className="nav-actions">
            <Link className="nav-login" to="/dashboard">
              Dashboard
            </Link>
            <Link className="btn btn-dark small" to="/lawyers">
              Find a lawyer <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
