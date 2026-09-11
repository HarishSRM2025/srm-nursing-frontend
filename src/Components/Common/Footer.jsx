import React from "react";
import LogoImg from '../../assets/images/Logo/logo.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaChevronRight, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const socialLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/SRM-Trichy-College-of-Nursing-114885406585842/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/ncsrmtrichy/",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    href: "https://www.youtube.com/channel/UCHh3kHjTC23SBPuq48lWwTA/?guided_help_flow=5",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/company/srm-trichy-college-of-nursing/",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    href: "https://twitter.com/ncsrmtrichy",
  },
];

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
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  title={item.name}
                >
                  {item.icon}
                </a>
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
              <li><a href="#"><FaMapMarkerAlt /> SRM Trichy College of Nursing, Irungalur Village, Manachannallur Taluk, near Toll Booth, Tiruchirappalli, Tamilnadu 621105</a></li>
              <li><a href="tel:+919585228600"><FaPhoneAlt /> +91 9585228600 </a></li>
              <li><a href="mailto:principal@nc.srmtrichy.edu.in"><FaEnvelope /> principal@nc.srmtrichy.edu.in</a></li>
              <li><a href="#"><FaClock /> Mon – Fri: 9 AM – 5 PM & Sat: 9 AM – 3 PM</a></li>
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