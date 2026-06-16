import { FaExclamationTriangle, FaUsers, FaBookOpen, FaAward, FaBalanceScale, FaRegBuilding, FaHome, FaBan, FaLock } from "react-icons/fa";
import Img from "../../assets/images/CodeOfConduct/Anti-Raging/1.png"

export default function AntiRagging() {
  const punishments = [
    [<FaExclamationTriangle />, "Guilty students will be punished as per UGC anti-ragging regulations."],
    [<FaUsers />, "Ragging committee determines appropriate quantum of punishment."],
    [<FaBookOpen />, "Suspension from classes for a stipulated period."],
    [<FaAward />, "Withdrawal of scholarship or fellowship benefits."],
    [<FaBalanceScale />, "Debarring from examinations and academic activities."],
    [<FaRegBuilding />, "Debarring from representing the institution in any capacity."],
    [<FaHome />, "Suspension from hostel accommodation."],
    [<FaBan />, "Cancellation of admission to the institution."],
    [<FaLock />, "Rustication from the institution for a defined period."],
    [<FaExclamationTriangle />, "Expulsion from institution — permanent and irrevocable."],
  ];
  const levels = [
    { label: "Level 1", desc: "Minor verbal or psychological misconduct", color: "#e67e22", bg: "rgba(230,126,34,0.1)" },
    { label: "Level 2", desc: "Physical threats or intimidation", color: "#c0392b", bg: "rgba(192,57,43,0.1)" },
    { label: "Level 3", desc: "Severe physical abuse or assault", color: "#7b241c", bg: "rgba(123,36,28,0.12)" },
  ];

  return (
    <section id="ragging" style={{ padding: "clamp(60px,8vw,100px) 0", background: "var(--off-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 4vw, 44px)" }}>
        <div className="grid-2col" style={{ alignItems: "center", marginBottom: "clamp(32px,4vw,60px)", gap: "clamp(28px,5vw,60px)" }}>
          <div>
            <div className="section-chip red"><FaBan style={{ fontSize: 12 }} /> Zero Tolerance Policy</div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3.5vw, 42px)",
              fontWeight: 900,
              color: "var(--primary-dark)",
              lineHeight: 1.18, marginBottom: 12,
            }}>Anti-Ragging<br /><span style={{ color: "#c0392b" }}>Rules & Actions</span></h2>
            <p style={{
              fontSize: "clamp(13px, 1.2vw, 15px)",
              color: "var(--text-light)",
              lineHeight: 1.7,
              marginBottom: "clamp(20px, 2.5vw, 32px)",
              maxWidth: 580,
              fontFamily: "var(--font-body)"
            }}>SRM Trichy College of Nursing maintains a strict zero-tolerance policy against ragging in all its forms across all institutional premises — protecting every student's right to learn in safety.</p>
            <div style={{ marginTop: 24, padding: "18px 20px", background: "rgba(192,57,43,0.07)", borderRadius: "var(--radius-md)", border: "1.5px solid rgba(192,57,43,0.2)", display: "flex", alignItems: "flex-start", gap: 12 }}>
              <FaExclamationTriangle style={{ color: "#c0392b", fontSize: 24, flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800, color: "#c0392b" }}>Ragging is a Criminal Offence</div>
                <div style={{ fontSize: 12.5, color: "var(--text-light)", marginTop: 3, lineHeight: 1.6 }}>Perpetrators face disciplinary action and legal prosecution under applicable laws.</div>
              </div>
            </div>
          </div>
          <div className="img-card" style={{ height: "clamp(200px,35vw,400px)" }}>
            <img src={Img} alt="Safe campus" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(192,57,43,0.7) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: 18, left: 16 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "white" }}>Safe Campus</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>For every student</div>
            </div>
          </div>
        </div>

        {/* Severity levels */}
        <div className="grid-3col" style={{ marginBottom: 32 }}>
          {levels.map((l, i) => (
            <div key={i} style={{ background: l.bg, border: `1.5px solid ${l.color}`, borderRadius: "var(--radius-md)", padding: "clamp(14px,2vw,20px) clamp(16px,2.5vw,24px)", display: "flex", alignItems: "center", gap: 12 }}>
              <FaExclamationTriangle style={{ color: l.color, fontSize: 20, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800, color: l.color }}>{l.label}</div>
                <div style={{ fontSize: 12.5, color: "#555", marginTop: 2 }}>{l.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Punishments */}
        <div style={{ background: "white", borderRadius: "var(--radius-lg)", padding: "clamp(24px,3vw,40px) clamp(20px,3vw,44px)", boxShadow: "var(--shadow-sm)", borderLeft: "4px solid #c0392b" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, #c0392b, #922b21)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <FaBalanceScale style={{ color: "white", fontSize: 20 }} />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px,2vw,18px)", fontWeight: 800, color: "var(--primary-dark)" }}>Administrative Punishments</h3>
              <p style={{ fontSize: 12.5, color: "var(--text-light)" }}>Escalating consequences for ragging violations</p>
            </div>
          </div>
          <div className="grid-2col" style={{ gap: "clamp(8px,1.5vw,10px) clamp(16px,3vw,40px)" }}>
            {punishments.map(([icon, text], i) => 
            <div className="rule-pill" key={i}>
              <div className="icon-box" style={{ background: "rgba(15,140,166,0.12)" }}>
                <span style={{ color: "var(--accent)", fontSize: 13 }}>{icon}</span>
              </div>
              <span style={{ fontSize: "clamp(12px,1.6vw,13.5px)", color: "var(--text-light)", lineHeight: 1.6 }}>{text}</span>
            </div>)}
          </div>
        </div>
      </div>
    </section>
  );
};