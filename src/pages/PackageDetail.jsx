import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Info,
} from "lucide-react";
import { packages, formatFee } from "../data";
import { packageDetails, packageSlug } from "../data/packageDetails";
import NotFound from "./NotFound";

export default function PackageDetail() {
  const { slug } = useParams();
  const pkg = packages.find((item) => packageSlug(item.name) === slug);
  const details = packageDetails[slug];
  if (!pkg || !details) return <NotFound />;
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span /> {pkg.category} · DEMO PACKAGE
          </div>
          <h1>{pkg.name}</h1>
          <p>{details.purpose}</p>
        </div>
      </div>
      <div className="container page-content">
        <Link className="back-link" to="/packages">
          <ArrowLeft size={15} /> All legal packages
        </Link>
        <div className="detail-grid">
          <div className="content-card package-detail">
            <div className="eyebrow">
              <span /> ABOUT THIS PACKAGE
            </div>
            <h2>A useful starting point, not a finished document.</h2>
            <p>
              {pkg.desc} {details.note}
            </p>
            <h3>Information to discuss with an advocate</h3>
            <ul className="check-list">
              {details.fields.map((field) => (
                <li key={field}>
                  <CheckCircle2 size={17} />
                  {field}
                </li>
              ))}
            </ul>
            <div className="notice">
              <Info size={18} />
              <p>
                This is an illustrative package page. No form, document
                generation, purchase or payment is connected. A qualified
                Pakistani advocate must review any draft before formal use.
              </p>
            </div>
          </div>
          <aside className="content-card aside-card package-summary">
            <span className="area-icon">
              <FileText size={21} />
            </span>
            <h3>Package overview</h3>
            <p>Illustrative price</p>
            <strong>{formatFee(pkg.price)}</strong>
            <p>Demo only · No payment processed</p>
            <Link className="btn btn-dark" to="/contact">
              Contact the team <ArrowRight size={16} />
            </Link>
            <Link className="text-link" to="/lawyers">
              Find a lawyer instead <ArrowRight size={15} />
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
