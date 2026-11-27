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

const faqs = [
  [
    "How do I find a lawyer?",
    "Browse the lawyer directory, filter by practice area and city, then open a profile to learn more. All profiles in this prototype are fictional.",
  ],
  [
    "Are payments real?",
    "No. This is a frontend demonstration. No real payments are processed.",
  ],
  [
    "Are the legal drafts ready to file?",
    "No. Any future generated document must be reviewed and customized by a qualified advocate before formal use.",
  ],
  [
    "Does the case tracker connect to courts?",
    "No. This demo does not connect to Pakistani court databases and does not provide live case updates.",
  ],
  [
    "Is the legal assistant a substitute for a lawyer?",
    "No. It provides simple category suggestions only and is not legal advice.",
  ],
];
export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="HERE TO HELP"
        title={
          <>
            Questions? Start <em>here.</em>
          </>
        }
        desc="A few helpful answers about the LegalBridgeRWP demo."
      />
      <div className="container page-content faq-list">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <ChevronDown size={18} />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
