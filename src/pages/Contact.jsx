import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CircleHelp,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Search,
} from "lucide-react";
import { PageHero } from "../components/Shared";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="WE’RE HERE TO HELP"
        title={
          <>
            Let’s start a <em>conversation.</em>
          </>
        }
        desc="Have a question about the project? Here are a few ways to explore and get in touch."
      />
      <div className="container page-content">
        <div className="contact-intro-grid">
          <div className="contact-visual">
            <img
              src="/contact-legal.jpg"
              alt="AI-generated illustration of a fictional advocate speaking with a client"
            />
            <span>AI-GENERATED DEMO VISUAL</span>
          </div>
          <div className="contact-intro">
            <div className="eyebrow">
              <span /> GET IN TOUCH
            </div>
            <h2>We’re just a conversation away.</h2>
            <p>
              Legal questions can be difficult to navigate. Explore our sample
              practice areas and advocates, or use the project contact details
              below.
            </p>
            <div className="contact-demo-note">
              <strong>Please note:</strong> These are sample FYP contact details
              and are not verified as active. Do not share confidential case
              information through them.
            </div>
            <div className="contact-row">
              <span className="area-icon">
                <Mail size={20} />
              </span>
              <div>
                <small>EMAIL · SAMPLE</small>
                <a href="mailto:support@legalbridgerwp.pk">
                  support@legalbridgerwp.pk
                </a>
              </div>
            </div>
            <div className="contact-row">
              <span className="area-icon">
                <Phone size={20} />
              </span>
              <div>
                <small>PHONE · SAMPLE</small>
                <a href="tel:+92518442100">+92 51 8442100</a>
              </div>
            </div>
            <div className="contact-row">
              <span className="area-icon">
                <MapPin size={20} />
              </span>
              <div>
                <small>LOCATIONS · SAMPLE</small>
                <strong>
                  Blue Area, Islamabad
                  <br />
                  Katchery Road, Rawalpindi
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-paths-heading">
          <div className="eyebrow">
            <span /> FIND YOUR NEXT STEP
          </div>
          <h2>How can we help you begin?</h2>
          <p>Explore the demo in the way that works for you.</p>
        </div>
        <div className="contact-paths">
          <Link to="/lawyers" className="contact-path">
            <span className="area-icon">
              <Search size={21} />
            </span>
            <h3>Find an advocate</h3>
            <p>Browse fictional sample profiles by city and practice area.</p>
            <span className="contact-path-link">
              Explore lawyers <ArrowRight size={15} />
            </span>
          </Link>
          <Link to="/practice-areas" className="contact-path">
            <span className="area-icon">
              <MessageSquare size={21} />
            </span>
            <h3>Explore practice areas</h3>
            <p>Learn what different legal specializations generally cover.</p>
            <span className="contact-path-link">
              Explore areas <ArrowRight size={15} />
            </span>
          </Link>
          <Link to="/faq" className="contact-path">
            <span className="area-icon">
              <CircleHelp size={21} />
            </span>
            <h3>Common questions</h3>
            <p>Get answers about the features and limits of this demo.</p>
            <span className="contact-path-link">
              View FAQs <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
