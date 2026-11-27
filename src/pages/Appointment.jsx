import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Info,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { lawyers, formatFee } from "../data";
import NotFound from "./NotFound";

const times = [
  "09:30 AM",
  "10:30 AM",
  "11:30 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];
const todayPKT = () =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

export default function Appointment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(id || "");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    setSelected(id || "");
  }, [id]);
  if (id && !lawyers.some((lawyer) => lawyer.id === id)) return <NotFound />;
  const lawyer = lawyers.find((person) => person.id === selected);

  function submit(event) {
    event.preventDefault();
    if (!lawyer || !date || !slot || !subject.trim()) {
      setError(
        "Please select an advocate, date and time, and enter a short general subject.",
      );
      return;
    }
    if (date < todayPKT()) {
      setError("Please choose today or a future date.");
      return;
    }
    try {
      const stored = JSON.parse(
        localStorage.getItem("lbr_demo_bookings") || "[]",
      );
      if (!Array.isArray(stored)) throw new Error("Invalid local data");
      stored.push({
        id: Date.now(),
        lawyer: lawyer.name,
        date,
        slot,
        subject: subject.trim(),
        area: lawyer.area,
        status: "Demo request",
      });
      localStorage.setItem("lbr_demo_bookings", JSON.stringify(stored));
      navigate("/dashboard/appointments");
    } catch {
      setError(
        "Could not save this demo request in your browser. Check that browser storage is enabled.",
      );
    }
  }
  return (
    <>
      <section className="appointment-hero">
        <div className="container">
          <div className="eyebrow light">
            <span /> A THOUGHTFUL FIRST STEP
          </div>
          <h1>
            Make room for <em>clarity.</em>
          </h1>
          <p>
            Explore what booking a consultation could look like. Select a sample
            advocate and create a demo request.
          </p>
        </div>
      </section>
      <div className="container appointment-page">
        <Link className="back-link" to={id ? `/lawyers/${id}` : "/lawyers"}>
          <ArrowLeft size={15} />{" "}
          {id ? "Back to advocate profile" : "Browse all advocates"}
        </Link>
        <div className="appointment-notice">
          <Info size={19} />
          <p>
            <strong>Demo only:</strong> No real appointment is booked or sent.
            Times do not reflect availability; no payment is processed. Avoid
            entering confidential or personal case information.
          </p>
        </div>
        <div className="appointment-layout">
          <form className="content-card appointment-form" onSubmit={submit}>
            <div className="appointment-section-head">
              <span className="area-icon">
                <CalendarDays size={20} />
              </span>
              <div>
                <div className="eyebrow">YOUR CONSULTATION</div>
                <h2>Request an appointment</h2>
                <p>
                  Complete the details below to save a sample request in this
                  browser.
                </p>
              </div>
            </div>
            <label>
              Choose an advocate
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                required
              >
                <option value="">Select a sample advocate</option>
                {lawyers.map((person) => (
                  <option key={person.id} value={person.id}>
                    Adv. {person.name} · {person.area}
                  </option>
                ))}
              </select>
            </label>
            <div className="appointment-fields">
              <label>
                Preferred date
                <input
                  type="date"
                  min={todayPKT()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </label>
              <label>
                Preferred time (PKT)
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  required
                >
                  <option value="">Select a time</option>
                  {times.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              General subject
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                maxLength={100}
                placeholder="For example: Property consultation"
                required
              />
              <small>
                Use a general description only; do not include sensitive
                details.
              </small>
            </label>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button className="btn btn-dark" type="submit">
              Save demo request <ArrowRight size={16} />
            </button>
            <p className="appointment-privacy">
              <ShieldCheck size={15} /> Saved in this browser only. This is not
              secure storage.
            </p>
          </form>
          <aside className="appointment-aside">
            <div className="appointment-summary">
              <div className="eyebrow">YOUR SELECTED ADVOCATE</div>
              {lawyer ? (
                <>
                  <div className="appointment-lawyer">
                    <img src={"/" + lawyer.id + ".jpg"} alt="" />
                    <div>
                      <span>FICTIONAL SAMPLE</span>
                      <h3>Adv. {lawyer.name}</h3>
                      <p>{lawyer.area}</p>
                      <p>
                        <MapPin size={13} />
                        {lawyer.city}
                      </p>
                    </div>
                  </div>
                  <div className="appointment-summary-row">
                    <span>Experience</span>
                    <strong>{lawyer.experience} years · sample</strong>
                  </div>
                  <div className="appointment-summary-row">
                    <span>Consultation fee</span>
                    <strong>{formatFee(lawyer.fee)} · demo</strong>
                  </div>
                  <Link className="text-link" to={"/lawyers/" + lawyer.id}>
                    View full profile <ArrowRight size={15} />
                  </Link>
                  <small>
                    AI-generated portrait; credentials are not verified.
                  </small>
                </>
              ) : (
                <div className="appointment-placeholder">
                  <CalendarDays size={28} />
                  <p>Choose an advocate to see a summary here.</p>
                </div>
              )}
            </div>
            <div className="appointment-help">
              <Clock3 size={20} />
              <div>
                <strong>What happens next?</strong>
                <p>
                  Your demo request appears in the sample dashboard. It is not
                  an actual booking.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
