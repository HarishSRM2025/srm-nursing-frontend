import { useEffect, useRef } from "react";
import {
  FaGraduationCap, FaUserNurse, FaCertificate,
  FaClock, FaUsers, FaCheckCircle, FaArrowRight, FaAward
} from "react-icons/fa";

const programs = [
  {
    type: "pg",
    icon: <FaGraduationCap />,
    title: "B.Sc. Nursing",
    subtitle: "Foundation nursing degrees",
    badges: [
      { icon: <FaClock />, label: "4 Year B.Sc ", cls: "ug-badge" },
    ],
    eligibility: [
      "10+2 class passed with Science (PCB) & English Core/English Elective with aggregate of 45% marks from recognized board under AISSCE/CBSE/ICSE/SSCE/HSCE or other equivalent Board",
      "Both Female and Male"
    ],
    ctaCls: "ug-cta",
  },
  {
    type: "cert",
    icon: <FaUserNurse />,
    title: "M.Sc. Nursing",
    subtitle: "Specialized advanced degrees",
    badges: [
      { icon: <FaClock />, label: "2 Year M.Sc Nursing", cls: "pg-badge" },
    ],
    speciality: [
      "Medical Surgical Nursing - 5 seats",
      "Obstetric & Gynaecological Nursing – 2",
      "Paediatric (Child Health) Nursing – 3",
      "Psychiatric (Mental Health) Nursing – 2",
      "Community Health Nursing - 2",
    ],
    ctaCls: "pg-cta",
  },
  {
    type: "ug",
    icon: <FaCertificate />,
    title: "DGNM",
    subtitle: "Diploma in General Nursing & Midwifery",
    badges: [
      { icon: <FaClock />, label: "3 Years", cls: "cert-badge" },
    ],
    eligibility: [
      "17 year on Dec 31",
      "10+2 with English and must have obtained a minimum of 40% at the qualifying examination and English individually for any recognized board.",
      "Female only"
    ],
    ctaCls: "cert-cta",
  },
];

export default function Programs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAnchor = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" className="programs-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">Academic Programs</div>
          <h2 className="section-title">Programs We Offer</h2>
          <p className="section-desc">From foundational degrees to advanced specializations — we have a program designed for every nursing aspiration.</p>
        </div>

        <div className="programs-grid">
          {programs.map((prog, i) => (
            <div
              key={prog.type}
              className={`program-card ${prog.type}-card reveal${i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : ""}`}
            >
              <div className={`program-header ${prog.type}`}>
                <div className="program-icon-wrap">{prog.icon}</div>
                <h3>{prog.title}</h3>
                <p>{prog.subtitle}</p>
              </div>
              <div className="program-body">
                <div className="program-badges">
                  {prog.badges.map((b) => (
                    <span key={b.label} className={`program-badge-item ${b.cls}`}>
                      {b.icon} {b.label}
                    </span>
                  ))}
                </div>
                <ul className="program-courses">
                  {(prog.eligibility || prog.speciality || []).map((item, idx) => (
                    <li key={idx} style={{ alignItems: "flex-start" }}>
                      <span className="course-dot" style={{ marginTop: "6px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`program-cta ${prog.ctaCls}`}
                  onClick={(e) => { e.preventDefault(); handleAnchor("#contact"); }}
                >
                  <FaArrowRight /> Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
