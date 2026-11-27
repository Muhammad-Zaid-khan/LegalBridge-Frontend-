import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  ArrowRight,
  Scale,
  CalendarDays,
  FileText,
  MessageSquare,
  LayoutDashboard,
  FolderOpen,
  ChevronRight,
  Info,
  Plus,
} from "lucide-react";
import { readBookings, writeBookings } from "../lib/bookings";

const sideLinks = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/appointments", label: "Appointments", icon: CalendarDays },
  { to: "/dashboard/cases", label: "My cases", icon: FolderOpen },
  { to: "/dashboard/documents", label: "Documents", icon: FileText },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
];

const names = {
  overview: "Your overview",
  appointments: "Your appointments",
  cases: "Your cases",
  documents: "Your documents",
  messages: "Your messages",
};

export default function Dashboard() {
  const { section } = useParams();
  const active = section || "overview";

  // Safe read: returns [] if storage is empty, corrupted or blocked
  const [bookings, setBookings] = useState(readBookings);

  function cancel(id) {
    const next = bookings.filter((x) => x.id !== id);
    setBookings(next);
    try {
      writeBookings(next);
    } catch {
      // storage unavailable: the request is still removed from the screen
    }
  }

  return (
    <>
      <div className="dashboard-banner">
        <div className="container">
          <span>
            <Info size={16} /> DEMO WORKSPACE
          </span>{" "}
          Sample data and locally saved requests only. No login, secure storage
          or backend is connected.
        </div>
      </div>

      <div className="container dashboard">
        <aside className="dash-side">
          <div className="dash-user">
            <div className="user-avatar">AR</div>
            <div>
              <strong>Ahmed Raza Khan</strong>
              <small>Sample client account</small>
            </div>
          </div>
          <div className="dash-label">YOUR WORKSPACE</div>
          {sideLinks.map(({ to, label, icon: Icon }) => (
            <NavLink end={to === "/dashboard"} key={to} to={to}>
              <Icon size={17} />
              {label}
              <ChevronRight size={15} />
            </NavLink>
          ))}
          <div className="dash-help">
            <strong>Need a little guidance?</strong>
            <p>Explore the right area for your needs.</p>
            <Link to="/assistant">
              Try the assistant <ArrowRight size={14} />
            </Link>
          </div>
        </aside>

        <main className="dash-main">
          <div className="dash-heading">
            <div>
              <div className="eyebrow">
                <span></span> YOUR LEGALBRIDGE SPACE
              </div>
              <h1>{names[active] || "Your overview"}</h1>
              <p>Everything you need for your next step, in one place.</p>
            </div>
            <Link className="btn btn-dark small" to="/lawyers">
              <Plus size={16} /> Find a lawyer
            </Link>
          </div>

          {active === "overview" && (
            <>
              <div className="dashboard-welcome">
                <div>
                  <span>WELCOME BACK, AHMED</span>
                  <h2>A little more clarity, every day.</h2>
                  <p>Your legal journey, organized in one thoughtful space.</p>
                  <Link to="/dashboard/cases">
                    View your cases <ArrowRight size={15} />
                  </Link>
                </div>
                <Scale size={95} />
              </div>

              <div className="metric-grid">
                <div>
                  <CalendarDays />
                  <span>DEMO REQUESTS</span>
                  <strong>{bookings.length}</strong>
                  <small>Stored in this browser</small>
                </div>
                <div>
                  <FolderOpen />
                  <span>ACTIVE CASES</span>
                  <strong>01</strong>
                  <small>Sample case</small>
                </div>
                <div>
                  <MessageSquare />
                  <span>MESSAGES</span>
                  <strong>01</strong>
                  <small>Sample conversation</small>
                </div>
              </div>

              <div className="dash-panels">
                <div className="content-card">
                  <div className="panel-title">
                    <div>
                      <h3>Recent activity</h3>
                      <p>An overview of your demo workspace.</p>
                    </div>
                    <Link to="/dashboard/cases">
                      View cases <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="activity">
                    <span className="area-icon">
                      <FolderOpen size={18} />
                    </span>
                    <div>
                      <strong>Property transfer matter</strong>
                      <p>Sample case · Hearing scheduled</p>
                    </div>
                    <span className="tag">SAMPLE</span>
                  </div>
                  <div className="activity">
                    <span className="area-icon">
                      <MessageSquare size={18} />
                    </span>
                    <div>
                      <strong>Message from your advocate</strong>
                      <p>Sample conversation · Read the latest update</p>
                    </div>
                  </div>
                </div>

                <div className="content-card">
                  <h3>Helpful next steps</h3>
                  <p>Explore tools that can help you feel prepared.</p>
                  <Link className="quick-link" to="/practice-areas">
                    Explore practice areas <ArrowRight size={15} />
                  </Link>
                  <Link className="quick-link" to="/packages">
                    Browse legal packages <ArrowRight size={15} />
                  </Link>
                  <Link className="quick-link" to="/assistant">
                    Try the legal assistant <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </>
          )}

          {active === "appointments" && (
            <div className="content-card">
              <div className="panel-title">
                <div>
                  <h3>Consultation requests</h3>
                  <p>
                    Requests are stored only in this browser and are not sent to
                    a lawyer.
                  </p>
                </div>
              </div>
              {bookings.length ? (
                bookings.map((b) => (
                  <div className="booking-item" key={b.id}>
                    <div>
                      <span className="tag">DEMO REQUEST</span>
                      <h3>Adv. {b.lawyer}</h3>
                      <p>
                        {b.area} · {b.date} at {b.slot}
                      </p>
                      <p>Subject: {b.subject}</p>
                    </div>
                    <button className="cancel-btn" onClick={() => cancel(b.id)}>
                      Remove request
                    </button>
                  </div>
                ))
              ) : (
                <div className="empty">
                  <CalendarDays size={28} />
                  <h3>No demo requests yet</h3>
                  <p>
                    Explore a profile to create a sample consultation request.
                  </p>
                  <Link className="btn btn-dark small" to="/lawyers">
                    Browse lawyers <ArrowRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          )}

          {active === "cases" && (
            <div className="content-card case-card">
              <div className="panel-title">
                <div>
                  <span className="tag">FICTIONAL SAMPLE CASE</span>
                  <h3>Property transfer matter</h3>
                  <p>LBR-2026-0001 · Property & Real Estate</p>
                </div>
                <span className="status">Hearing scheduled</span>
              </div>
              <div className="case-info">
                <div>
                  <small>ASSIGNED ADVOCATE</small>
                  <strong>Adv. Tariq Mahmood Qureshi</strong>
                </div>
                <div>
                  <small>COURT / FORUM</small>
                  <strong>Civil Court, Islamabad</strong>
                </div>
                <div>
                  <small>TRACKING</small>
                  <strong>Manual sample record</strong>
                </div>
              </div>
              <h3>Case timeline</h3>
              <div className="timeline">
                <div>
                  <span></span>
                  <strong>Case file opened</strong>
                  <p>Sample title verification documents organized.</p>
                </div>
                <div>
                  <span></span>
                  <strong>Hearing scheduled</strong>
                  <p>Sample hearing record added for demonstration.</p>
                </div>
              </div>
              <div className="notice">
                <Info size={18} />
                <p>
                  This is static sample data, not a court database or an active
                  reminder service.
                </p>
              </div>
            </div>
          )}

          {active === "documents" && (
            <div className="content-card">
              <h3>Document vault</h3>
              <p>
                This interface illustrates where documents could be listed in a
                complete application.
              </p>
              <div className="activity">
                <span className="area-icon">
                  <FileText size={20} />
                </span>
                <div>
                  <strong>Rent Agreement Draft</strong>
                  <p>Sample document entry · Draft review required</p>
                </div>
                <span className="tag">SAMPLE ONLY</span>
              </div>
              <div className="notice">
                <Info size={18} />
                <p>
                  No document upload, download or secure document storage is
                  connected in this demo.
                </p>
              </div>
            </div>
          )}

          {active === "messages" && (
            <div className="content-card">
              <h3>Messages</h3>
              <p>Example conversation for interface demonstration.</p>
              <div className="activity">
                <span className="user-avatar">TQ</span>
                <div>
                  <strong>Adv. Tariq Mahmood Qureshi</strong>
                  <p>
                    Sample message: Please bring relevant documents to your
                    consultation.
                  </p>
                </div>
                <span className="tag">SAMPLE</span>
              </div>
              <div className="notice">
                <Info size={18} />
                <p>
                  Live or secure messaging is not available in this prototype.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}