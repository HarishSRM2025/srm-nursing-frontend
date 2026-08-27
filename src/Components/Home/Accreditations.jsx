import { useEffect, useRef } from "react";
import {
  FaAward,
  FaUserNurse,
  FaUniversity,
  FaShieldAlt,
  FaHospital,
  FaGlobeAsia,
} from "react-icons/fa";

/* ─── ACCREDITATIONS ─── */
const accreds = [
  { icon: <FaAward />, name: "NAAC", desc: "National Assessment & Accreditation Council — Grade A" },
  { icon: <FaUserNurse />, name: "INC", desc: "Indian Nursing Council — Fully Recognized Institution" },
  { icon: <FaUniversity />, name: "TNDMGRU", desc: "Tamil Nadu Dr. MGR Medical University — Affiliated" },
  { icon: <FaShieldAlt />, name: "TNMC", desc: "Tamil Nadu Nurses & Midwives Council — Registered" },
];

const partners = [
  { icon: <FaHospital />, label: "AIIMS Delhi" },
  { icon: <FaHospital />, label: "CMC Vellore" },
  { icon: <FaHospital />, label: "Apollo Hospitals" },
  { icon: <FaHospital />, label: "JIPMER Puducherry" },
  { icon: <FaGlobeAsia />, label: "NHS UK" },
  { icon: <FaGlobeAsia />, label: "UAE Hospitals" },
];

export function Accreditations() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="accreditations" className="accreditations-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">Accreditations & Affiliations</div>
          <h2 className="section-title">Recognized by Leading Bodies</h2>
          <p className="section-desc">Our credentials reflect our commitment to quality, compliance, and excellence in nursing education.</p>
        </div>
        <div className="accred-grid">
          {accreds.map((a, i) => (
            <div key={a.name} className={`accred-card reveal${i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : i === 3 ? " reveal-delay-3" : ""}`}>
              <div className="accred-logo">{a.icon}</div>
              <div className="accred-name">{a.name}</div>
              <div className="accred-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}