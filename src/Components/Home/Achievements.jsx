import { useEffect, useRef } from "react";
import { 
  FaTrophy, FaGlobeAsia, FaFileMedical, FaHandsHelping, FaBriefcase, FaRunning 
} from "react-icons/fa";
/* ─── ACHIEVEMENTS ─── */
const statCells = [
  { num: "98", suffix: "%", label: "Placement Rate" },
  { num: "250", suffix: "+", label: "Research Papers" },
  { num: "45", suffix: "+", label: "State Rank Holders" },
  { num: "15", suffix: "+", label: "International Placements" },
];

const achievements = [
  { icon: <FaTrophy />, title: "University Rank Holders — 3 State Toppers", desc: "Three of our final year B.Sc Nursing students secured university-level ranks in the TNDMGRU examinations.", year: "2023–24" },
  { icon: <FaGlobeAsia />, title: "International Nursing Olympiad — Gold Medal", desc: "Team NightingaleNCN won the Gold Medal at the International Nursing Olympiad held in Singapore.", year: "2024" },
  { icon: <FaFileMedical />, title: "Best Research Project Award — INC National Conference", desc: "Our M.Sc Nursing students won Best Research Paper award at the Indian Nursing Council National Research Conference.", year: "2023" },
  { icon: <FaHandsHelping />, title: "NSS Best Unit Award — State Level", desc: "Our NSS Unit was awarded the Best NSS Programme Award by the Government of Tamil Nadu.", year: "2023" },
  { icon: <FaBriefcase />, title: "Mass Recruitment — NHS United Kingdom", desc: "52 graduates from our 2024 batch were directly recruited by NHS partner hospitals across England and Scotland.", year: "2024" },
  { icon: <FaRunning />, title: "State Sports Champions — Volleyball & Athletics", desc: "Our student sports teams won gold in volleyball and three medals in state-level athletics championships.", year: "2023–24" },
];

export function Achievements() {
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
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">Student Achievements</div>
          <h2 className="section-title">Our Students Excel Everywhere</h2>
          <p className="section-desc">A culture of achievement that goes beyond the classroom — our students win at every stage.</p>
        </div>
        <div className="stats-bar reveal">
          {statCells.map((s) => (
            <div key={s.label} className="stat-cell">
              <div className="stat-cell-num">{s.num}<span>{s.suffix}</span></div>
              <div className="stat-cell-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="achieve-grid">
          {achievements.map((a, i) => (
            <div key={a.title} className={`achieve-card reveal${i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""}`}>
              <div className="achieve-icon">{a.icon}</div>
              <div className="achieve-content">
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
                <span className="achieve-year">{a.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
