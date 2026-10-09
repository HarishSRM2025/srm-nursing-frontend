import { useEffect, useRef } from "react";
import {
  FaEye,
  FaBullseye,
  FaFlask,
  FaGraduationCap,
  FaHandsHelping,
  FaGlobeAsia,
} from "react-icons/fa";

const missionPoints = [
  "To promote high quality education to develop professionalism with a global outlook.",
  "To promote learning that stimulates learners to reach their full potential throughout their life.",
  "To foster innovative research that will benefit the humanity and improve the nursing standards.",
  "To create, empowered, committed, compassionate and skillful healthcare providers who make a difference in building a healthy family, community and nation.",
  "To enhance the individual student to become a good leader and self-motivator in professional practice of nursing.",
];


const pillars = [
  { title: "Quality Education", icon: FaGlobeAsia },
  { title: "Lifelong Learning", icon: FaGraduationCap },
  { title: "Innovative Research", icon: FaFlask },
  { title: "Compassionate Care", icon: FaHandsHelping },
  { title: "Nursing Leadership", icon: FaBullseye },
];

export default function VisionMission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vision" className="vision-section" ref={sectionRef}>
      <div className="container">
        {/* ── Section Header ── */}
        <div className="section-header reveal">
          <div className="section-eyebrow">Our Foundation</div>
          <h2 className="section-title">Vision, Mission & Values</h2>
          <p className="section-desc">
            The principles that guide every decision, every lesson, and every
            graduate we send into the world.
          </p>
        </div>

        {/* ── Vision & Mission Cards ── */}
        <div className="vm-grid reveal">
          {/* Vision Card */}
          <div className="vm-card vision" aria-labelledby="our-vision-title">
            <div className="vm-card-glow" aria-hidden="true"></div>
            <div className="vm-card-content">
              <div className="vm-card-icon-wrap">
                <div className="vm-card-icon">
                  <FaEye aria-hidden="true" />
                </div>
                <span className="vm-card-label">Our Vision</span>
              </div>
              <h3 id="our-vision-title">Shaping the Future of Healthcare</h3>
              <p>
                To prepare the students of our Nursing college to become
                Empathetic, Dedicated and Compassionate health care providers and
                to make our institution known for its research skills and
                transform the lives of people who are part of our ecosystem.
              </p>
              <div className="vm-card-accent-line"></div>
            </div>
          </div>

          <div className="vm-pillars" aria-labelledby="vm-pillars-title">
            <div className="vm-pillars-heading">
              <div className="section-eyebrow">Our Mission</div>
              <h3 id="vm-pillars-title">Five Pillars of Purpose</h3>
            </div>
            <ol className="vm-pillars-grid">
              {pillars.map(({ title, icon: Icon }, i) => (
                <li key={title} className="vm-pillar-card">
                  <div className="vm-pillar-top">
                    <span className="vm-pillar-icon"><Icon aria-hidden="true" /></span>
                    <span className="vm-pillar-number" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4>{title}</h4>
                  <p>{missionPoints[i]}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        
      </div>
    </section>
  );
}
