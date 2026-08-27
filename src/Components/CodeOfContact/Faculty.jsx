import { FaHandshake, FaRegCheckCircle, FaRegStar, FaGlobe, FaUserMd, FaFlask, FaMicroscope, FaBookOpen, FaBullhorn, FaHeartbeat, FaRegEye, FaRegHospital, FaCalendarCheck, FaBan, FaUsers } from "react-icons/fa";
import { MdSchool } from "react-icons/md"; import { FaChalkboardTeacher } from "react-icons/fa";
import Img1 from "../../assets/images/CodeOfConduct/COCForFaculty/1.JPG"
import Img2 from "../../assets/images/CodeOfConduct/COCForFaculty/2.JPG"
import Img3 from "../../assets/images/CodeOfConduct/COCForFaculty/3.JPG"
export default function Faculty() {
  const coreDuties = [
    [<MdSchool />, "Educate students and encourage a genuine love of learning."],
    [<FaUsers />, "Support weaker students with additional guidance and care."],
    [<FaHandshake />, "Accept constructive criticism from peers and administration."],
    [<FaRegCheckCircle />, "Treat all students equally and without any bias."],
    [<FaRegStar />, "Act as role models in professional and personal conduct."],
    [<FaGlobe />, "Instill civic duty and patriotism in every student."],
    [<FaUserMd />, "Promote student professional dignity and self-respect."],
    [<FaFlask />, "Ensure strong medical science foundation in curriculum delivery."],
    [<FaMicroscope />, "Stay updated with medical innovations and best practices."],
    [<FaBookOpen />, "Encourage research and evidence-based teaching methods."],
  ];
  const conduct = [
    [<FaBullhorn />, "Mentor seminars and activities for student development."],
    [<FaHeartbeat />, "Support student well-being and mental health initiatives."],
    [<FaUsers />, "Interact with parents in PTA meetings regularly."],
    [<FaRegEye />, "Follow research principles and ethical guidelines at all times."],
    [<FaRegHospital />, "Provide high quality patient care in clinical settings."],
    [<FaHandshake />, "Respect colleagues and all support staff members."],
    [<FaBan />, "Avoid conflicts with private practice during duty hours."],
    [<FaCalendarCheck />, "Maintain regularity and punctuality in attendance."],
  ];
  const highlights = [
    { icon: <FaBookOpen />, num: "18+", label: "Responsibilities" },
    { icon: <FaMicroscope />, num: "100%", label: "Research Focus" },
    { icon: <FaUsers />, num: "All", label: "Students Supported" },
    { icon: <FaCalendarCheck />, num: "Regular", label: "PTA Meetings" },
  ];

  return (
    <section id="faculty" style={{ padding: "clamp(60px,8vw,100px) 0", background: "var(--off-white)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 4vw, 44px)" }}>
        <div className="grid-2col" style={{ alignItems: "center", marginBottom: "clamp(32px,4vw,60px)", gap: "clamp(28px,5vw,60px)" }}>
          {/* Collage */}
          <div className="faculty-mosaic" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "180px 220px", gap: 14 }}>
            <style>{`@media(max-width:768px){.faculty-mosaic{display:none!important}}`}</style>
            <div className="img-card">
              <img src={Img3} alt="Lecture" />
            </div>
            <div className="img-card">
              <img src={Img2} alt="Research" />
            </div>
            <div className="img-card" style={{ gridColumn: "1/3" }}>
              <img src={Img1} alt="Faculty teaching" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(47,27,92,0.75) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 18, left: 20 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "white" }}>Dedicated Faculty</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>Shaping future healthcare professionals</div>
              </div>
            </div>
          </div>

          <div>
            <div className="section-chip" style={{ background: "rgba(75,46,131,0.08)" }}><FaChalkboardTeacher style={{ fontSize: 12 }} />Faculty Standards </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 42px)", fontWeight: 900, color: "var(--primary-dark)", lineHeight: 1.18, marginBottom: 12, }}>Code of Conduct for<br /><span style={{ color: "var(--accent)" }}>Faculty Members</span></h2>
            <p style={{ fontSize: "clamp(12px,1.5vw,14px)", color: "var(--text-light)", lineHeight: 1.7, marginBottom: "clamp(20px,3vw,36px)" }}>Faculty members are the pillars of our institution. These guidelines ensure every educator upholds the highest standards of teaching, mentorship, and professional conduct.</p>
            <div className="grid-4col" style={{ marginTop: 28 }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ background: "white", borderRadius: "var(--radius-md)", padding: "clamp(12px,1.8vw,16px) clamp(10px,1.5vw,12px)", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
                  <span style={{ color: "var(--primary)", fontSize: 18 }}>{h.icon}</span>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px,2vw,20px)", fontWeight: 900, color: "var(--primary)", marginTop: 5 }}>{h.num}</div>
                  <div style={{ fontSize: 10.5, color: "var(--text-light)", fontWeight: 600, marginTop: 2 }}>{h.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two rule cards */}
        <div className="grid-2col" style={{ gap: "clamp(18px,3vw,28px)" }}>
          <div style={{ background: "white", borderRadius: "var(--radius-lg)", padding: "clamp(20px,3vw,36px)", boxShadow: "var(--shadow-sm)", borderLeft: "4px solid var(--primary)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--primary-light), var(--primary))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FaBookOpen style={{ color: "white", fontSize: 18 }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(13px,1.8vw,15px)", fontWeight: 800, color: "var(--primary-dark)" }}>Core Teaching Duties</div>
                <div style={{ fontSize: 12, color: "var(--text-light)" }}>Academic & pedagogical responsibilities</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {coreDuties.map(([icon, text], i) => (
                <div className="rule-pill" key={i}>
                  <div className="icon-box" style={{ background: "rgba(75,46,131,0.1)" }}>
                    <span style={{ color: "var(--primary)", fontSize: 13 }}>{icon}</span>
                  </div>
                  <span style={{ fontSize: "clamp(12px,1.6vw,13.5px)", color: "var(--text-light)", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "white", borderRadius: "var(--radius-lg)", padding: "clamp(20px,3vw,36px)", boxShadow: "var(--shadow-sm)", borderLeft: "4px solid var(--accent)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 42, height: 42, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--accent-light), var(--accent))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <FaHandshake style={{ color: "white", fontSize: 18 }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(13px,1.8vw,15px)", fontWeight: 800, color: "var(--primary-dark)" }}>Professional Conduct</div>
                <div style={{ fontSize: 12, color: "var(--text-light)" }}>Interpersonal & ethical standards</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {conduct.map(([icon, text], i) => <div className="rule-pill" key={i}>
                <div className="icon-box" style={{ background: "rgba(75,46,131,0.1)" }}>
                  <span style={{ color: "var(--primary)", fontSize: 13 }}>{icon}</span>
                </div>
                <span style={{ fontSize: "clamp(12px,1.6vw,13.5px)", color: "var(--text-light)", lineHeight: 1.6 }}>{text}</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};