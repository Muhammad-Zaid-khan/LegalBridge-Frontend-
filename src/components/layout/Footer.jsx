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

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light />
            <p>
              Making the path to legal support a little clearer, one
              conversation at a time.
            </p>
            <div className="footer-loc">
              <MapPin size={15} /> Rawalpindi & Islamabad, Pakistan
            </div>
          </div>
          <div>
            <h4>EXPLORE</h4>
            <Link to="/lawyers">Find a lawyer</Link>
            <Link to="/practice-areas">Practice areas</Link>
            <Link to="/packages">Legal packages</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/assistant">Legal assistant</Link>
          </div>
          <div>
            <h4>LEGALBRIDGE</h4>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/dashboard">My dashboard</Link>
            <Link to="/faq">FAQs</Link>
          </div>
          <div>
            <h4>GET IN TOUCH</h4>
            <p>Questions? We're here to help.</p>
            <a href="mailto:support@legalbridgerwp.pk">
              support@legalbridgerwp.pk
            </a>
            <a href="tel:+92518442100">+92 51 8442100</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} LegalBridgeRWP. FYP demonstration.
          </span>
          <span>General legal information, not legal advice.</span>
        </div>
      </div>
    </footer>
  );
}
