import { BsCardChecklist } from "react-icons/bs";
import { FaTools,FaHandshake,FaUsers,FaCalendarCheck,FaLock,FaBan,FaRegClock,FaRegEye,FaRegCheckCircle,FaShieldAlt,FaBalanceScale,FaSeedling } from "react-icons/fa";
import Img1 from "../../assets/images/CodeOfConduct/COCForSupportStaffs/1.JPG"
import Img2 from "../../assets/images/CodeOfConduct/COCForSupportStaffs/2.png"


export default function SupportStaff(){
  const rules = [
    [<BsCardChecklist />, "Follow all institutional policies and directives diligently."],
    [<FaCalendarCheck />, "Inform authorities before taking any leave of absence."],
    [<FaLock />, "Do not engage in other work during official duty hours."],
    [<FaBan />, "Avoid political activities on campus at all times."],
    [<FaHandshake />, "Treat everyone with respect and professional courtesy."],
    [<FaRegClock />, "Maintain punctuality in all duties and responsibilities."],
    [<FaTools />, "Handle all equipment carefully and responsibly."],
    [<FaBan />, "Avoid use of drugs, tobacco, or alcohol."],
    [<FaLock />, "Maintain confidentiality of all sensitive information."],
    [<FaRegEye />, "Do not falsify any documents or records."],
    [<FaRegCheckCircle />, "Maintain honesty and transparency at all times."],
    [<FaShieldAlt />, "Avoid emotional relations with students."],
    [<FaBalanceScale />, "Respect management decisions without prejudice."],
    [<FaHandshake />, "Resolve conflicts seriously and amicably."],
    [<FaSeedling />, "Maintain harmony within the campus community."],
  ];
  const keyValues = [
    { icon: <FaLock />, title: "Confidentiality First", desc: "Safeguard all institutional and personal information entrusted to your care.", c: "var(--primary)" },
    { icon: <FaRegClock />, title: "Punctuality", desc: "Dedicate duty hours entirely to your institutional responsibilities.", c: "var(--accent)" },
    { icon: <FaHandshake />, title: "Respectful Relations", desc: "Maintain professional boundaries with all members of the institution.", c: "var(--primary-light)" },
    { icon: <FaSeedling />, title: "Campus Harmony", desc: "Contribute positively and resolve conflicts in a peaceful manner.", c: "var(--teal)" },
  ];

  return (
    
<section id="support" className="coc-section">
  <div className="coc-container">
 
    {/* Header Row */}
    <div className="grid-2col coc-header-row" style={{ alignItems: "center" }}>
      <div>
        <div className="section-chip teal">
          <FaTools style={{ fontSize: 12 }} /> Support Staff Guidelines
        </div>
        <h2 className="coc-heading">
          Code of Conduct for<br />
          <span className="coc-heading-accent">Support Staff</span>
        </h2>
        <p className="coc-description">
          Support staff are essential to the smooth functioning of our institution.
          These standards ensure a respectful, professional, and efficient work
          environment at all times.
        </p>
      </div>
      <div className="grid-2col coc-img-grid">
        <div className="img-card">
          <img src={Img1} alt="Support team" />
        </div>
        <div className="img-card">
          <img src={Img2} alt="Teamwork" />
        </div>
      </div>
    </div>
 
    {/* Content Grid */}
    <div className="grid-2col coc-content-grid">
      <div className="coc-inner-grid grid-2col">
 
        {/* Rules Card */}
        <div className="coc-rules-card">
          <div className="coc-rules-header">
            <div className="coc-rules-icon-box">
              <FaTools className="coc-rules-icon" />
            </div>
            <div>
              <div className="coc-rules-title">Support Staff Responsibilities</div>
              <div className="coc-rules-count">{rules.length} professional conduct standards</div>
            </div>
          </div>
          <div className="grid-2col coc-rules-list">
            {rules.map(([icon, text], i) => (
              <div className="rule-pill" key={i}>
                <div className="icon-box coc-rule-pill-icon-box">
                  <span className="coc-rule-pill-icon">{icon}</span>
                </div>
                <span className="coc-rule-pill-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
 
        {/* Key Values */}
        <div className="coc-values-col">
          {keyValues.map((v, i) => (
            <div
              key={i}
              className="coc-value-card"
              style={{ borderLeft: `3px solid ${v.c}` }}
            >
              <div className="coc-value-card-header">
                <span style={{ color: v.c, fontSize: 16 }}>{v.icon}</span>
                <h4 className="coc-value-card-title">{v.title}</h4>
              </div>
              <p className="coc-value-card-desc">{v.desc}</p>
            </div>
          ))}
        </div>
 
      </div>
    </div>
 
  </div>
</section>
  );
};