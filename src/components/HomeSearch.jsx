import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Search, MapPin, Scale } from "lucide-react";
import { areas } from "../data";

export default function HomeSearch() {
  const navigate = useNavigate();
  const [area, setArea] = useState("All");
  const [city, setCity] = useState("All");

  function onSubmit(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (area !== "All") params.set("area", area);
    if (city !== "All") params.set("city", city);
    navigate(`/lawyers${params.size ? `?${params}` : ""}`);
  }

  return (
    <form className="home-search" onSubmit={onSubmit}>
      <div className="home-search-intro">
        <span>
          <Search size={19} />
        </span>
        <div>
          <strong>Find the right support</strong>
          <small>Start your search here</small>
        </div>
      </div>
      <label>
        <span>LEGAL MATTER</span>
        <div>
          <Scale size={16} />
          <select
            aria-label="Choose a practice area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="All">All practice areas</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label>
        <span>LOCATION</span>
        <div>
          <MapPin size={16} />
          <select
            aria-label="Choose a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="All">Both cities</option>
            <option>Islamabad</option>
            <option>Rawalpindi</option>
          </select>
        </div>
      </label>
      <button className="btn btn-dark" type="submit">
        Search lawyers <ArrowRight size={16} />
      </button>
    </form>
  );
}
