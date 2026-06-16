import { FaHome, FaRegClock, FaBookOpen, FaRegBuilding, FaRegHospital, FaUtensils, FaUsers, FaRegIdCard, FaRunning, FaLock, FaShieldAlt, FaExclamationTriangle, FaBan, FaRegCalendarCheck, FaBed, FaMobileAlt, FaRegCheckCircle, FaRegEye, FaBalanceScale, FaSeedling, FaGraduationCap, FaHandshake, FaFlask, FaHeartbeat, FaRegStar, FaList, FaClipboardList } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import Img from "../../assets/images/CodeOfConduct/Hostel/1.JPG"
export default function Hostel() {
  const rules = [
    [<FaClipboardList />, "Submit hostel admission form at the time of joining."],
    [<FaUtensils />, "Follow mess timings strictly; no exceptions without permission."],
    [<FaBed />, "Rooms allotted will not be changed normally."],
    [<FaRegClock />, "Roll call mandatory at 7am and 7pm daily without fail."],
    [<FaHome />, "Keep rooms and surroundings clean at all times."],
    [<FaRegClock />, "Students must return to hostel before 7pm."],
    [<FaCalendarCheck />, "Weekend leave requires prior permission from warden."],
    [<FaBookOpen />, "Study hours 8:30pm to 10:30pm; strictly observed."],
    [<FaLock />, "Switch off fans and lights when leaving the room."],
    [<FaRegIdCard />, "Visitors must register in the visitor book at the gate."],
    [<FaHeartbeat />, "Sickness must be reported to warden promptly."],
    [<FaCalendarCheck />, "Students must obtain sick leave permission from warden."],
    [<FaBan />, "No overnight stay outside hostel without written permission."],
    [<FaRegIdCard />, "Visitors must have a valid visitor pass at all times."],
    [<FaBan />, "No visitors allowed inside rooms under any circumstances."],
    [<FaRunning />, "Students must leave hostel before college hours begin."],
    [<FaLock />, "No student allowed to stay during college hours."],
    [<FaShieldAlt />, "Avoid bringing valuables; institution not responsible for loss."],
    [<FaBan />, "Boys not allowed in girls hostel and vice versa."],
    [<FaExclamationTriangle />, "Ragging strictly prohibited throughout hostel premises."],
    [<FaBan />, "No celebrations or parties without prior warden permission."],
    [<FaUsers />, "Parents must bring and carry visitor pass during visits."],
    [<FaRegClock />, "Avoid late reporting beyond permitted timings."],
    [<FaRegBuilding />, "Damage to hostel property must be compensated."],
    [<FaMobileAlt />, "Avoid using cell phones after study hours."],
    [<FaBan />, "Narcotic drugs strictly prohibited on all hostel premises."],
    [<FaExclamationTriangle />, "No anti-social activities of any kind permitted."],
    [<FaLock />, "Unauthorised guests are strictly prohibited."],
    [<FaBan />, "Electrical appliances need warden permission to bring in."],
    [<FaBan />, "Immoral access and activities are not allowed."],
  ];
  const facilities = [
    { icon: <FaBed />, label: "Safe Accommodation", desc: "Secure, comfortable rooms" },
    { icon: <FaUtensils />, label: "Mess Facility", desc: "Nutritious daily meals" },
    { icon: <FaBookOpen />, label: "Study Halls", desc: "Dedicated study spaces" },
    { icon: <MdSecurity />, label: "24/7 Security", desc: "Round-the-clock monitoring" },
    { icon: <FaHeartbeat />, label: "Medical Support", desc: "On-campus health care" },
    { icon: <FaWifi />, label: "Internet Access", desc: "Connectivity for learning" },
  ];

  return (
    <section id="hostel" style={{ padding: "clamp(60px,8vw,100px) 0", background: "var(--off-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 4vw, 44px)" }}>
        {/* Image banner */}
        <div style={{ position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", height: "clamp(200px,35vw,340px)", marginBottom: "clamp(32px,4vw,56px)" }}>
          <img src={Img} alt="Hostel building" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(47,27,92,0.82) 25%, rgba(15,140,166,0.25) 75%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 clamp(20px,5vw,60px)" }}>
            <div style={{ flex: 1 }}>
                <div className="section-chip white"><FaHome style={{ fontSize: 13 }} /> Hostel Guidelines</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,4vw,42px)", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: 10 }}>
                Hostel Rules<br /><span style={{ color: "var(--teal-light)" }}>& Regulations</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(12px,1.6vw,15px)", maxWidth: 480, lineHeight: 1.72 }}>
                Our hostel provides a safe, disciplined environment. These {rules.length} rules ensure the well-being of all residents and maintain the highest standards of campus living.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="grid-3col" style={{ marginBottom: "clamp(24px,3vw,40px)" }}>
          {facilities.map((f, i) => (
            <div key={i} style={{ background: "white", borderRadius: "var(--radius-md)", padding: "clamp(14px,2vw,20px) clamp(16px,2.5vw,24px)", display: "flex", alignItems: "center", gap: 14, boxShadow: "var(--shadow-sm)", transition: "var(--transition)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}>
              <div style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--accent-light), var(--accent))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "white", fontSize: 18 }}>{f.icon}</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(12px,1.5vw,13px)", fontWeight: 700, color: "var(--primary-dark)" }}>{f.label}</div>
                <div style={{ fontSize: 11.5, color: "var(--text-light)" }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div style={{ background: "white", borderRadius: "var(--radius-lg)", padding: "clamp(24px,3vw,40px) clamp(20px,3vw,44px)", boxShadow: "var(--shadow-sm)", borderLeft: "4px solid var(--accent)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
            <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--accent-light), var(--accent-dark))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <FaHome style={{ color: "white", fontSize: 20 }} />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(15px,2vw,18px)", fontWeight: 800, color: "var(--primary-dark)" }}>Hostel Rules & Regulations</h3>
              <p style={{ fontSize: 12.5, color: "var(--text-light)" }}>All {rules.length} rules apply to every hostel resident</p>
            </div>
          </div>
          <div className="grid-2col" style={{ gap: "clamp(7px,1.2vw,10px) clamp(16px,3vw,40px)" }}>
            {rules.map(([icon, text], i) => {
                const accent = Math.random() < 0.5;

                return (
                <div className="rule-pill"  key={i}>
                    <div className="icon-box" style={{ background: accent ? "rgba(15,140,166,0.12)" : "rgba(75,46,131,0.1)" }}>
                      <span style={{ color: accent ? "var(--accent)" : "var(--primary)", fontSize: 13 }}>{icon}</span>
                    </div>
                    <span style={{ fontSize: "clamp(12px,1.6vw,13.5px)", color: "var(--text-light)", lineHeight: 1.6 }}>{text}</span>
                  </div>
                )}
                )}
          </div>
        </div>
      </div>
    </section>
  );
};
