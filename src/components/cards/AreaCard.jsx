import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function AreaCard({ area, index }) {
  const Icon = area.icon;

  // Feeds the cursor position to CSS so a soft light follows the mouse
  function trackPointer(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Link
      className="area-card spotlight"
      to={"/practice-areas/" + area.slug}
      onPointerMove={trackPointer}
    >
      <div className="area-top">
        <span className="area-icon">
          <Icon size={22} strokeWidth={1.6} />
        </span>
        <ArrowUpRight size={18} className="card-arrow" />
      </div>
      <h3>{area.name}</h3>
      <p>{area.description}</p>
      <div className="area-bottom">
        <span>{area.urdu}</span>
        <span>0{index + 1}</span>
      </div>
    </Link>
  );
}