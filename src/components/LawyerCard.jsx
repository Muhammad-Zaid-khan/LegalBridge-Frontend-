import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, ShieldCheck, Star } from "lucide-react";
import { formatFee } from "../data";

export default function LawyerCard({ lawyer }) {
  return (
    <Link className="lawyer-card" to={"/lawyers/" + lawyer.id}>
      <div className={"lawyer-portrait " + lawyer.tone}>
        <img
          className="lawyer-photo"
          src={`/${lawyer.id}.jpg`}
          alt={`Portrait of Adv. ${lawyer.name}`}
          loading="lazy"
        />
        <span className="verified">
          <ShieldCheck size={13} /> Fictional profile
        </span>
      </div>
      <div className="lawyer-body">
        <div className="lawyer-card-top">
          <span className="law-area">{lawyer.area}</span>
          <span className="rating">
            <Star size={13} fill="currentColor" /> {lawyer.rating}
          </span>
        </div>
        <h3>Adv. {lawyer.name}</h3>
        <p>
          <MapPin size={14} />
          {lawyer.city} <span className="bullet">•</span> {lawyer.experience}{" "}
          years exp.
        </p>
        <div className="lawyer-bottom">
          <span>
            Consultation <strong>{formatFee(lawyer.fee)}</strong>
          </span>
          <span className="round-arrow">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}