import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaChevronRight, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaHospitalUser } from "react-icons/fa";
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
            <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); handleAnchor("#hero"); }}>
              <div className="nav-logo-icon"><FaHospitalUser /></div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">Nightingale College</span>
                <span className="nav-logo-sub">of Nursing Excellence</span>
              </div>
            </a>
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