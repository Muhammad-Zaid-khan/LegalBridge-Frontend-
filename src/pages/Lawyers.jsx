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

export default function Lawyers() {
  const loc = useLocation();
  const initial = new URLSearchParams(loc.search).get("area") || "All";
  const [area, setArea] = useState(initial);
  const [city, setCity] = useState(
    new URLSearchParams(loc.search).get("city") || "All",
  );
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("recommended");
  useEffect(() => {
    const params = new URLSearchParams(loc.search);
    setArea(params.get("area") || "All");
    setCity(params.get("city") || "All");
  }, [loc.search]);
  let filtered = lawyers.filter(
    (l) =>
      (area === "All" || l.area === area) &&
      (city === "All" || l.city === city) &&
      `${l.name} ${l.area}`.toLowerCase().includes(q.toLowerCase()),
  );
  filtered = [...filtered].sort((a, b) => {
    if (sort === "fee-low") return a.fee - b.fee;
    if (sort === "experience") return b.experience - a.experience;
    if (sort === "name") return a.name.localeCompare(b.name);
    return 0;
  });
  const resetFilters = () => {
    setQ("");
    setArea("All");
    setCity("All");
    setSort("recommended");
  };
  return (
    <>
      <PageHero
        eyebrow="YOUR SEARCH STARTS HERE"
        title={
          <>
            Find the right <em>advocate.</em>
          </>
        }
        desc="Browse sample profiles, compare experience and find the right fit for your legal matter."
      />
      <div className="container page-content">
        <div className="filter-bar">
          <label className="search-box">
            <Search size={18} />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name or practice area"
            />
          </label>
          <label>
            <span className="sr-only">Practice area</span>
            <select value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="All">All practice areas</option>
              {areas.map((a) => (
                <option key={a.slug}>{a.name}</option>
              ))}
            </select>
          </label>
          <label>
            <span className="sr-only">City</span>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="All">All cities</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
            </select>
          </label>
        </div>
        <div className="results-heading">
          <div>
            <h2>Our advocates</h2>
            <p>
              {filtered.length} sample{" "}
              {filtered.length === 1 ? "profile" : "profiles"} found
            </p>
          </div>
          <label className="sort-control">
            <SlidersHorizontal size={16} />
            <span className="sr-only">Sort results</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="recommended">Sort: Featured</option>
              <option value="fee-low">Fee: Low to high</option>
              <option value="experience">Most experience</option>
              <option value="name">Name: A to Z</option>
            </select>
          </label>
        </div>
        <div className="lawyers-grid">
          {filtered.map((l) => (
            <LawyerCard key={l.id} lawyer={l} />
          ))}
        </div>
        {!filtered.length && (
          <div className="empty">
            No profiles match those filters. Try a different search. <br />
            <button className="reset-filters" onClick={resetFilters}>
              Clear all filters
            </button>
          </div>
        )}
        <p className="demo-note">
          <Info size={15} /> These are fictional profiles and ratings. No actual
          credential verification is performed by this demo. Portraits are
          AI-generated.
        </p>
      </div>
    </>
  );
}
