import React from "react";
import LogoImg from '../../assets/images/Logo/logo.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaChevronRight, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
/* ─── FOOTER ─── */
export function Footer() {
  const handleAnchor = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={LogoImg} alt="SRM College of Nursing Excellence" className="footer-logo-img" />
            </Link>
            <p>Dedicated to shaping compassionate, competent, and ethically grounded nursing professionals since 1996. NAAC Grade A | INC Recognized.</p>
            <div className="footer-social">
              {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <a key={i} href="#"><Icon /></a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[["#about","About College"],["#programs","Programs Offered"],["#why","Why Choose Us"],["#leadership","Leadership"],["#achievements","Achievements"],["#contact","Contact Us"]].map(([href, label]) => (
                <li key={label}>
                  <a href={href} onClick={(e) => { e.preventDefault(); handleAnchor(href); }}>
                    <FaChevronRight /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Academics</h4>
            <ul>
              {["Academic Calendar","Examination Cell","Clinical Training","Research Cell","Publications","Placement Cell"].map((label) => (
                <li key={label}><a href="#"><FaChevronRight /> {label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="#"><FaMapMarkerAlt /> 45, Medical College Road, Trichy – 620 019</a></li>
              <li><a href="tel:+914312456789"><FaPhoneAlt /> +91 431 245 6789</a></li>
              <li><a href="mailto:admissions@nightingalecollege.edu.in"><FaEnvelope /> admissions@nightingalecollege.edu.in</a></li>
              <li><a href="#"><FaClock /> Mon – Sat: 9 AM – 5 PM</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Nightingale College of Nursing. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}