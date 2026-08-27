import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCircle,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TopBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`topbar${hidden ? " hidden" : ""}`}>
      <div className="topbar-inner">
        <div className="topbar-left">
          <a href="tel:+914312456789" className="topbar-item">
            <FaPhoneAlt /> +91 431 245 6789
          </a>
          <div className="topbar-divider" />
          <a href="mailto:admissions@nightingalecollege.edu.in" className="topbar-item">
            <FaEnvelope /> admissions@nightingalecollege.edu.in
          </a>
          <div className="topbar-divider" />
          <span className="topbar-item">
            <FaClock /> Mon – Sat: 9 AM – 5 PM
          </span>
        </div>

        <div className="topbar-notice">
          <FaCircle /> Admissions Open 2024–25 — Apply Now
        </div>

        <div className="topbar-right">
          <div className="topbar-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
