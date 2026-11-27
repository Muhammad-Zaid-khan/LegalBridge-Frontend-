import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AppointmentBanner() {
  return (
    <section className="container appointment-banner-wrap">
      <div className="appointment-banner">
        <div className="appointment-banner-copy">
          <div className="eyebrow light">
            <span /> YOUR NEXT STEP STARTS HERE
          </div>
          <h2>
            Book a consultation.
            <br />
            <em>Find your way forward.</em>
          </h2>
          <p>
            Explore our sample advocates and see how a consultation request
            works.
          </p>
          <Link className="btn btn-gold" to="/appointments">
            Request an appointment <ArrowRight size={16} />
          </Link>
        </div>
        <div className="appointment-banner-art">
          <div className="appointment-banner-orbit" />
          <img
            src="/appointment-cutout.png"
            alt="An advocate welcoming a client"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}