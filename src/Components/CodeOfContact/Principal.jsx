import { FaGlobe, FaChartLine, FaRegStar, FaMicroscope, FaRunning, FaRegLightbulb, FaSeedling,FaFlask,FaUniversity, FaRegBuilding, FaStar } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import Img from "../../assets/images/CodeOfConduct/COCForPrincipal/1.jpeg"

export default function Principal(){
  const rules = [
    [<FaGlobe />, "Recognise common institutional objectives and lead with vision."],
    [<FaUsers />, "Treat all employees equally and without bias or favouritism."],
    [<FaChartLine />, "Promote personal financial transparency and accountability."],
    [<FaRegStar />, "Promote professional behaviour and lead by personal example."],
    [<MdSchool />, "Encourage faculty conferences, workshops and staff development."],
    [<FaMicroscope />, "Encourage research publications and academic contributions."],
    [<FaRunning />, "Support extracurricular activities for holistic student development."],
    [<FaRegLightbulb />, "Promote decentralisation of authority and collaborative decisions."],
    [<FaSeedling />, "Maintain a healthy, inclusive, and inspiring academic atmosphere."],
  ];
  const pillars = [
    { icon: <FaHandshake />, title: "Equality & Fairness", desc: "Every stakeholder receives equal treatment regardless of background, position or seniority.", c: "var(--teal-light)" },
    { icon: <FaFlask />, title: "Innovation & Research", desc: "Foster a culture of continuous learning, innovation and evidence-based academic practice.", c: "#a29bfe" },
    { icon: <FaStar />, title: "Academic Excellence", desc: "Uphold and continuously improve the standards that have defined SRM since 1996.", c: "#fd79a8" },
    { icon: <FaSeedling />, title: "Healthy Environment", desc: "Sustain a positive, inclusive atmosphere that supports growth for every member.", c: "#55efc4" },
  ];

  return (
    <section id="principal" className="coc-principal-section">
    <div className="coc-principal-container">

      <div className="coc-principal-banner">
        <img
          src={Img}
          alt="Institution"
          className="coc-principal-banner-img"
        />

        <div className="coc-principal-banner-overlay" />

        <div className="coc-principal-banner-content">
          <div>
            <div className={`section-chip white`}><FaRegBuilding style={{ fontSize: 12 }} /> Leadership Standards</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,4vw,42px)", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: 10 }}>
              Code of Conduct<br /><span style={{ color: "var(--teal-light)" }}>for the Principal</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(12px,1.6vw,15px)", maxWidth: 480, lineHeight: 1.7 }}>
              The Principal sets the tone for institutional culture. These guidelines govern leadership conduct at the highest level of our organisation.
            </p>
          </div>
        </div>
      </div>

      <div className="coc-principal-grid">

        <div className="coc-principal-rules-card">
          <div className="coc-principal-rules-header">
            <div className="coc-principal-rules-icon">
              <FaUniversity />
            </div>

            <div>
              <h3 className="coc-principal-rules-title">
                Principal's Responsibilities
              </h3>

              <p className="coc-principal-rules-count">
                {rules.length} guiding leadership principles
              </p>
            </div>
          </div>

          <div className="coc-principal-rules-list">
            {rules.map(([icon, text], i) => (
              <div key={i} className="coc-principal-rule-item">
                <div className="coc-principal-rule-icon">
                  <span>{icon}</span>
                </div>

                <span className="coc-principal-rule-text">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="coc-principal-pillars">
          {pillars.map((p, i) => (
            <div key={i} className="coc-principal-pillar-card">
              <div className="coc-principal-pillar-icon">
                <span style={{ color: p.c }}>{p.icon}</span>
              </div>

              <div>
                <h4
                  className="coc-principal-pillar-title"
                  style={{ color: p.c }}
                >
                  {p.title}
                </h4>

                <p className="coc-principal-pillar-desc">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
    
  );
};
