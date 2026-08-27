import {  FaRegClock, FaRegCheckCircle, FaRegIdCard, FaStethoscope, FaUserGraduate, FaShieldAlt, FaRegBuilding, FaRegHospital } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsPersonBadge } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import Img1 from "../../assets/images/CodeOfConduct/Student/1.JPG"
import Img2 from "../../assets/images/CodeOfConduct/Student/2.JPG"
import Img3 from "../../assets/images/CodeOfConduct/Student/3.JPG"

// ─── STUDENTS SECTION ──────────────────────────────────────────
export default function Students() {
  const values = [
    { icon: <FaShieldAlt />, title: "Respect & Integrity", desc: "Treat every individual with dignity and uphold ethical standards in all interactions inside and outside campus." },
    { icon: <FaBookOpen />, title: "Academic Excellence", desc: "Commit to punctuality, regular attendance and continuous learning throughout the academic journey." },
    { icon: <FaStethoscope />, title: "Professional Conduct", desc: "Maintain the highest professional standards in both clinical and academic environments at all times." },
    { icon: <MdSecurity />, title: "Zero Tolerance Policy", desc: "Strict no-ragging, no-harassment environment enforced across all institutional premises round the clock." },
    { icon: <FaRegCheckCircle />, title: "Attendance & Compliance", desc: "Students are required to maintain required attendance and follow all institutional norms diligently." },
    { icon: <FaRegIdCard />, title: "Identity & Access", desc: "Always carry valid identity cards and follow access protocols for college and clinical areas." },
  ];
  const rules = [
    [<FaRegCheckCircle />, "Sign an undertaking to uphold institutional codes at the time of admission."],
    [<FaRegIdCard />, "Carry valid identity cards to college and clinical areas at all times."],
    [<BsPersonBadge />, "Students without ID cards will not be allowed on campus premises."],
    [<FaHandshake />, "Behave courteously and fairly with everyone, inside and outside the college."],
    [<FaRegClock />, "Arrive in the classroom five minutes before each session begins."],
    [<FaBan />, "Ragging in any form is banned across college, hostel, clinical and sports areas."],
    [<FaTshirt />, "Follow the dress code and uniform regulations at all times on campus."],
    [<FaGraduationCap />, "Respect faculty and act as a good role model to junior students."],
    [<FaRegBuilding />, "Maintain silence in class, library and corridors during academic sessions."],
    [<FaRegHospital />, "Take care of college and hospital property; damages must be compensated."],
    [<FaMobileAlt />, "Use of mobile phones is strictly prohibited during class hours."],
    [<FaCalendarCheck />, "Attend classes and clinical areas regularly; maintain required attendance."],
    [<FaLock />, "No leave without prior approval of HOD or relevant authority."],
    [<FaMapMarkerAlt />, "Changes in address must be reported to the principal immediately."],
    [<FaUsers />, "Cannot arrange meetings or excursions without prior principal approval."],
    [<FaMicroscope />, "Actively participate in academic, clinical and extracurricular activities."],
  ];

  return (
    <section id="students" style={{ padding: "clamp(60px,8vw,100px) 0", background: "var(--off-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 4vw, 44px)"}}>
        {/* Header row */}
        <div className="grid-2col" style={{ alignItems: "center", marginBottom: "clamp(40px,5vw,72px)", gap: "clamp(28px,5vw,60px)" }}>
          <div className="fade-up">
            <div className={`section-chip`}><FaUserGraduate style={{ fontSize: 12 }} /> Student Guidelines</div>
           <h2 style={{
    fontFamily: "var(--font-display)",
    fontSize: "clamp(24px, 3.5vw, 42px)",
    fontWeight: 900,
    color:  "var(--primary-dark)",
    lineHeight: 1.18, marginBottom: 12,
  }}>Code of Conduct<br /><span style={{ color: "var(--accent)" }}>for Students</span></h2>
            <p style={{
    fontFamily: "var(--font-body)",
    fontSize: "clamp(14px, 1.2vw, 16px)",
    color: "var(--text-light)",
    maxWidth: 560, marginBottom: 28,
  }}>Every student at SRM Trichy College of Nursing signs an undertaking to uphold these codes throughout their academic journey — building discipline, integrity, and professional excellence.</p>
            <div style={{ display: "flex", gap: "clamp(16px,3vw,20px)", marginTop: 28, flexWrap: "wrap" }}>
              {[["16+", "Conduct Rules", "var(--primary)"], ["100%", "Compliance", "var(--accent)"], ["24/7", "Monitoring", "var(--primary)"]].map(([n, l, c], i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,3vw,28px)", fontWeight: 900, color: c }}>{n}</div>
                  <div style={{ fontSize: 11, color: "var(--text-light)", fontFamily: "var(--font-display)", fontWeight: 600 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Image mosaic — hidden on mobile */}
          <div className="student-mosaic" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "220px 220px", gap: 14 }}>
            <style>{`@media(max-width:768px){.student-mosaic{display:none!important}}`}</style>
            <div className="img-card" style={{ gridColumn: "1/3" }}>
              <img src={Img1} alt="Nursing students in class" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(47,27,92,0.7) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: 18, left: 20 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "white" }}>Classroom Excellence</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>Discipline starts in the classroom</div>
              </div>
            </div>
            <div className="img-card">
              <img src={Img2} alt="Student ID" />
            </div>
            <div className="img-card">
              <img src={Img3} alt="Clinical area" />
            </div>
          </div>
        </div>

        {/* Value cards */}
        <div className="grid-3col" style={{ marginBottom: "clamp(32px,4vw,56px)" }}>
          {values.map((v, i) => (
            <div key={i} className="feature-card" style={{ padding: "clamp(18px,2.5vw,28px) clamp(16px,2vw,26px)" }}>
              <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--primary-light), var(--primary))", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                <span style={{ color: "white", fontSize: 20 }}>{v.icon}</span>
              </div>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(13px,1.6vw,15px)", fontWeight: 800, color: "var(--primary-dark)", marginBottom: 7 }}>{v.title}</h4>
              <p style={{ fontSize: "clamp(12px,1.4vw,13px)", color: "var(--text-light)", lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div style={{ background: "white", borderRadius: "var(--radius-lg)", padding: "clamp(24px,3vw,40px) clamp(20px,3vw,44px)", boxShadow: "var(--shadow-sm)", borderLeft: "4px solid var(--primary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--primary-light), var(--primary))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <FaClipboardList style={{ color: "white", fontSize: 20 }} />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px,2vw,18px)", fontWeight: 800, color: "var(--primary-dark)" }}>General Conduct Rules</h3>
              <p style={{ fontSize: 12.5, color: "var(--text-light)" }}>All {rules.length} rules are binding for every enrolled student</p>
            </div>
          </div>
          <div className="grid-2col" style={{ gap: "clamp(8px,1.5vw,10px) clamp(16px,3vw,40px)" }}>
            {rules.map(([icon, text], i) => <div className="rule-pill" key={i}>
    <div className="icon-box" style={{ background: "rgba(75,46,131,0.1)" }}>
      <span style={{ color:  "var(--primary)", fontSize: 13 }}>{icon}</span>
    </div>
    <span style={{ fontSize: "clamp(12px,1.6vw,13.5px)", color: "var(--text-light)", lineHeight: 1.6 }}>{text}</span>
  </div> )}
          </div>
        </div>
      </div>
    </section>
  );
};