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
  FaTwitter,
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
          <a href="tel:+919585228600" className="topbar-item">
            <FaPhoneAlt /> +91 9585228600
          </a>
          <a href="tel:04312258501" className="topbar-item">
            <FaPhoneAlt /> 04312258501/02/03
          </a>
          <div className="topbar-divider" />
          <a href="mailto:principal@nc.srmtrichy.edu.in" className="topbar-item">
            <FaEnvelope /> principal@nc.srmtrichy.edu.in
          </a>
          <div className="topbar-divider" />
          <span className="topbar-item">
            <FaClock /> Mon – Fri: 9 AM – 5 PM & Sat: 9 AM – 3 PM
          </span>
        </div>

        <div className="topbar-notice">
          <FaCircle /> Admissions Open 2024–25 — Apply Now
        </div>

        <div className="topbar-right">
          <div className="topbar-social">
            <a href="https://www.facebook.com/SRM-Trichy-College-of-Nursing-114885406585842/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/srmtrichynursing/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/channel/UC8X5X5X5X5X5X5X5X5X5X5" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://www.linkedin.com/school/srm-trichy-college-of-nursing/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com/srmtrichynursing" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
