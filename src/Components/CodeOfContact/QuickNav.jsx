import { FaUserGraduate, FaTshirt, FaBan, FaRegBuilding, FaChalkboardTeacher, FaTools, FaHome } from "react-icons/fa";

export default function QuickNav() {
  const tabs = [
    { icon: <FaUserGraduate />, label: "Students", href: "#students" },
    { icon: <FaTshirt />, label: "Dress Code", href: "#dress" },
    { icon: <FaBan />, label: "Anti-Ragging", href: "#ragging" },
    { icon: <FaRegBuilding />, label: "Principal", href: "#principal" },
    { icon: <FaChalkboardTeacher />, label: "Faculty", href: "#faculty" },
    { icon: <FaTools />, label: "Support Staff", href: "#support" },
    { icon: <FaHome />, label: "Hostel", href: "#hostel" },
  ];
  return (
    <div style={{ background: "white", borderBottom: "1px solid var(--light-gray)", position: "sticky", top: '68px', zIndex: 900, boxShadow: "0 2px 16px rgba(75,46,131,0.07)" }}>
     <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 4vw, 44px)"}}>
        <div className="quicknav-scroll">
          {tabs.map((t, i) => (
            <a key={i} href={t.href}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "clamp(10px,2vw,16px) clamp(12px,2.5vw,22px)", textDecoration: "none", color: "var(--text-light)", fontSize: "clamp(10px,1.4vw,11.5px)", fontFamily: "var(--font-display)", fontWeight: 600, borderBottom: "3px solid transparent", transition: "var(--transition)", flex: "1 0 auto", minWidth: "fit-content" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.borderBottomColor = "var(--primary)"; e.currentTarget.style.background = "var(--off-white)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-light)"; e.currentTarget.style.borderBottomColor = "transparent"; e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ fontSize: "clamp(16px,2.5vw,20px)" }}>{t.icon}</span>
              {t.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};