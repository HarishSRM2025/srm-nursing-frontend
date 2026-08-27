import { useEffect, useRef, useState } from "react";
import { FaTrophy, FaMedal, FaStar, FaAward } from "react-icons/fa";
import { MdSchool, MdSportsScore, MdGroups, MdScience, MdEmojiEvents } from "react-icons/md";

const API_URL = import.meta.env.VITE_BACKEND_API_URL || import.meta.env.VITE_API_URL || "http://localhost:5000";

const CATEGORY_CONFIG = {
  Academic:  { icon: <MdSchool />,      bg: "rgba(37,99,235,0.1)",   color: "#2563eb",  label: "Academic"   },
  Sports:    { icon: <MdSportsScore />, bg: "rgba(5,150,105,0.1)",   color: "#059669",  label: "Sports"     },
  Cultural:  { icon: <FaStar />,        bg: "rgba(219,39,119,0.1)",  color: "#db2777",  label: "Cultural"   },
  Research:  { icon: <MdScience />,     bg: "rgba(124,58,237,0.1)",  color: "#7c3aed",  label: "Research"   },
  Community: { icon: <MdGroups />,      bg: "rgba(217,119,6,0.1)",   color: "#d97706",  label: "Community"  },
  General:   { icon: <FaAward />,       bg: "rgba(100,116,139,0.1)", color: "#64748b",  label: "General"    },
};

const YEAR_COLORS = [
  { bg: "rgba(75,46,131,0.08)", border: "rgba(75,46,131,0.2)", accent: "var(--primary)" },
  { bg: "rgba(37,99,235,0.08)", border: "rgba(37,99,235,0.2)", accent: "#2563eb" },
  { bg: "rgba(5,150,105,0.08)", border: "rgba(5,150,105,0.2)", accent: "#059669" },
];

export function Achievements() {
  const sectionRef = useRef(null);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/achievement?status=active`);
        if (res.ok) {
          const json = await res.json();
          if (json.achievements && json.achievements.length > 0) {
            setAchievements(json.achievements);
          }
        }
      } catch (err) {
        console.warn("Using fallback achievements data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [achievements]);

  const categories = ["All", ...new Set(achievements.map(a => a.category))];
  const filtered = activeCategory === "All" ? achievements : achievements.filter(a => a.category === activeCategory);

  // Group by year for timeline display
  const byYear = filtered.reduce((acc, a) => {
    const yr = a.year;
    if (!acc[yr]) acc[yr] = [];
    acc[yr].push(a);
    return acc;
  }, {});
  const sortedYears = Object.keys(byYear).sort((a, b) => b - a);

  const totalByCategory = {};
  categories.filter(c => c !== "All").forEach(c => {
    totalByCategory[c] = achievements.filter(a => a.category === c).length;
  });

  return (
    <section id="achievements" className="achievements-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-eyebrow">Student Awards & Achievements</div>
          <h2 className="section-title">Our Students Excel Everywhere</h2>
          <p className="section-desc">
            Recognizing the dedication and brilliance of SRM Trichy College of Nursing students — from academic toppers to sports champions.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar reveal">
          <div className="stat-cell">
            <div className="stat-cell-num">{achievements.length}<span>+</span></div>
            <div className="stat-cell-label">Total Awards</div>
          </div>
          <div className="stat-cell">
            <div className="stat-cell-num">{achievements.filter(a => a.category === "Academic").length}<span>+</span></div>
            <div className="stat-cell-label">Academic Merits</div>
          </div>
          <div className="stat-cell">
            <div className="stat-cell-num">{achievements.filter(a => a.category === "Sports").length}<span>+</span></div>
            <div className="stat-cell-label">Sports Awards</div>
          </div>
          <div className="stat-cell">
            <div className="stat-cell-num">{[...new Set(achievements.map(a => a.year))].length}<span>+</span></div>
            <div className="stat-cell-label">Years of Excellence</div>
          </div>
        </div>

        {/* Category Filter Pills */}
        {!loading && categories.length > 1 && (
          <div className="reveal" style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 40,
          }}>
            {categories.map(cat => {
              const cfg = cat === "All" ? null : CATEGORY_CONFIG[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "8px 20px",
                    borderRadius: 50,
                    fontWeight: 700,
                    fontSize: 13,
                    border: isActive
                      ? `2px solid ${cfg ? cfg.color : "var(--primary)"}`
                      : "2px solid var(--border-light)",
                    background: isActive
                      ? (cfg ? cfg.bg : "rgba(75,46,131,0.08)")
                      : "white",
                    color: isActive
                      ? (cfg ? cfg.color : "var(--primary)")
                      : "var(--text-muted)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cfg && <span style={{ fontSize: 14 }}>{cfg.icon}</span>}
                  {cat}
                  {cat !== "All" && (
                    <span style={{
                      background: isActive ? (cfg ? cfg.color : "var(--primary)") : "var(--border-light)",
                      color: isActive ? "white" : "var(--text-muted)",
                      borderRadius: 50,
                      fontSize: 10,
                      fontWeight: 800,
                      padding: "1px 7px",
                    }}>
                      {totalByCategory[cat] || 0}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-muted)" }}>
            Loading achievements...
          </div>
        ) : (
          /* Year-Grouped Timeline */
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {sortedYears.map((year, yi) => {
              const palette = YEAR_COLORS[yi % YEAR_COLORS.length];
              const yearAwards = byYear[year];
              return (
                <div key={year} className="reveal">
                  {/* Year Badge */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 20,
                  }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: palette.bg,
                      border: `1.5px solid ${palette.border}`,
                      borderRadius: 50,
                      padding: "6px 20px",
                      fontWeight: 800,
                      fontSize: 16,
                      color: palette.accent,
                    }}>
                      <FaTrophy style={{ fontSize: 14 }} />
                      {year}
                    </div>
                    <div style={{ flex: 1, height: 1, background: palette.border }} />
                    <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>
                      {yearAwards.length} award{yearAwards.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Cards Grid */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: 16,
                  }}>
                    {yearAwards.map((a, i) => {
                      const cfg = CATEGORY_CONFIG[a.category] || CATEGORY_CONFIG.General;
                      return (
                        <div
                          key={a._id || i}
                          style={{
                            background: "white",
                            borderRadius: 16,
                            padding: "20px 22px",
                            border: `1px solid var(--border-light)`,
                            boxShadow: "var(--shadow-sm)",
                            borderLeft: `4px solid ${cfg.color}`,
                            transition: "transform 0.2s, box-shadow 0.2s",
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "var(--shadow-md)";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = "";
                            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                          }}
                        >
                          {/* Category pill + icon */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <span style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                              background: cfg.bg,
                              color: cfg.color,
                              borderRadius: 50,
                              padding: "3px 12px",
                              fontSize: 11,
                              fontWeight: 700,
                            }}>
                              {cfg.icon} {a.category}
                            </span>
                            <div style={{
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              background: cfg.bg,
                              color: cfg.color,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: 18,
                            }}>
                              <FaMedal />
                            </div>
                          </div>

                          {/* Student/Batch */}
                          <div style={{
                            fontSize: 12,
                            fontWeight: 700,
                            color: cfg.color,
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                          }}>
                            {a.student_or_batch}
                          </div>

                          {/* Award Title */}
                          <h4 style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            lineHeight: 1.4,
                            margin: 0,
                          }}>
                            {a.award_or_title}
                          </h4>

                          {/* Description */}
                          {a.description && (
                            <p style={{
                              fontSize: 12,
                              color: "var(--text-secondary)",
                              lineHeight: 1.5,
                              margin: 0,
                            }}>
                              {a.description}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
