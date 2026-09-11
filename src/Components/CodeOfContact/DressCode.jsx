import { FaTshirt, FaMale, FaRegCheckCircle, FaUserTie, FaBan, FaRegStar, FaLeaf, FaChevronDown } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";
import Img1 from "../../assets/images/CodeOfConduct/DressCode/1.JPG"
import Img2 from "../../assets/images/CodeOfConduct/DressCode/2.png"
import Img3 from "../../assets/images/CodeOfConduct/DressCode/3.JPG"
export default function DressCode() {
  const boys = [
    [<FaUserTie />, "Wear formal pants and shirts at all times on campus."],
    [<FaBan />, "T-shirts and jeans are strictly not allowed."],
    [<FaRegStar />, "Wear black formal shoes only; sports shoes not permitted."],
    [<FaMale />, "Maintain neat hair and beard, well groomed at all times."],
    [<FaRegCheckCircle />, "Wear clean, ironed uniform that is compliant with dress code."],
    [<FaChevronDown />, "Shirt should always be tucked in properly."],
  ];
  const girls = [
    [<FaRegCheckCircle />, "Neatly ironed coat with clean uniform at all times."],
    [<FaFemale />, "Salwar kameez suit only; as per the approved institutional style."],
    [<FaLeaf />, "Only churidhar and salwar with dupatta allowed on campus."],
    [<FaBan />, "Jeans and short churidhar not allowed under any circumstances."],
    [<FaRegStar />, "Hair neatly tied with black clips; no loose hair allowed."],
    [<FaBan />, "Nails short; no nail polish in clinical areas."],
    [<BsShieldCheck />, "No jewellery allowed in clinical areas for safety reasons."],
    [<FaRegCheckCircle />, "Black cut shoes in clinical areas mandatory."],
    [<FaBan />, "No hair colouring of any kind is permitted."],
  ];

  return (
    <section id="dress" style={{ padding: "clamp(60px,8vw,100px) 0", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 4vw, 44px)"}}>
        {/* Header row */}
        <div className="grid-2col coc-header-row" style={{ alignItems: "center" }}>
          <div>
              <div className="section-chip teal"><FaTshirt style={{ fontSize: 13 }} /> Appearance Standards</div>
              <h2 className="coc-heading">Dress Code <span className="coc-heading-accent">Policy</span></h2>
              <p className="coc-description">
                Professional appearance reflects our commitment to nursing excellence. Uniform discipline builds confidence, hygiene awareness, and team cohesion in clinical and academic settings.
              </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
              {[
                { icon: <FaMale style={{ fontSize: 28, color: "white" }} />, label: "Boys", count: boys.length + " Rules", color: "var(--primary)" },
                { icon: <FaFemale style={{ fontSize: 28, color: "white" }} />, label: "Girls", count: girls.length + " Rules", color: "var(--teal)" },
              ].map((g, i) => (
                <div key={i} style={{ background: g.color, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "var(--radius-md)", padding: "clamp(14px,2vw,24px) clamp(18px,2.5vw,32px)", textAlign: "center" }}>
                  {g.icon}
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "white", marginTop: 8 }}>{g.label}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{g.count}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="img-card" style={{ width: "100%", height: 320 }}>
            <img src={Img1} alt="Nursing uniform" />
          </div>
        </div>

        {/* Two cards */}
        <div className="grid-2col">
          {/* Boys */}
          <div style={{ background: "var(--off-white)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <div style={{ position: "relative", height: 220 }}>
              <img src={Img2} alt="Male nurse" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(47,27,92,0.3) 0%, rgba(47,27,92,0.75) 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaMale style={{ color: "white", fontSize: 18 }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "white" }}>Boys Dress Code</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>Formal attire & grooming standards</div>
                </div>
              </div>
            </div>
            <div style={{ padding: "clamp(18px,2.5vw,28px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {boys.map(([icon, text], i) => 
                <div className="rule-pill" key={i}>
    <div className="icon-box" style={{ background: "rgba(75,46,131,0.1)" }}>
      <span style={{ color: "var(--primary)", fontSize: 13 }}>{icon}</span>
    </div>
    <span style={{ fontSize: "clamp(12px,1.6vw,13.5px)", color: "var(--text-light)", lineHeight: 1.6 }}>{text}</span>
  </div>
                )}
              </div>
            </div>
          </div>

          {/* Girls */}
          <div style={{ background: "var(--off-white)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <div style={{ position: "relative", height: 220 }}>
              <img src={Img3} alt="Female nurse" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(15,140,166,0.2) 0%, rgba(47,27,92,0.78) 100%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "var(--radius-md)", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FaFemale style={{ color: "white", fontSize: 18 }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "white" }}>Girls Dress Code</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>Uniform & appearance guidelines</div>
                </div>
              </div>
            </div>
            <div style={{ padding: "clamp(18px,2.5vw,28px)" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {girls.map(([icon, text], i) => 
                <div className="rule-pill" key={i}>
    <div className="icon-box" style={{ background: "rgba(75,46,131,0.1)" }}>
      <span style={{ color: "var(--primary)", fontSize: 13 }}>{icon}</span>
    </div>
    <span style={{ fontSize: "clamp(12px,1.6vw,13.5px)", color: "var(--text-light)", lineHeight: 1.6 }}>{text}</span>
  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
