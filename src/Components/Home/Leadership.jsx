import { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  FaUserTie,
  FaGraduationCap,
  FaStar,
  FaUniversity,
  FaChevronDown,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

import ChairmanImg from "../../assets/images/leaders/chairman.jpg"
import PrincipalImg from "../../assets/images/leaders/principal.jpeg"
import VicePrincipalImg from "../../assets/images/leaders/vp.png"

const CHAR_LIMIT = 220;

const gradients = [
  "linear-gradient(135deg, #1a3a4a, #0f5e56)",
  "linear-gradient(135deg, #1a2a4a, #2a3a6a)",
  "linear-gradient(135deg, #2a1a4a, #4a2a7a)"
];

const getRoleIcon = (designation = "") => {
  const desc = designation.toLowerCase();
  if (desc.includes("chairman")) return <FaGraduationCap />;
  if (desc.includes("principal") && !desc.includes("vice")) return <FaUserTie />;
  return <FaUniversity />;
};

const getInitials = (name = "") => {
  const cleanName = name.replace(/^(Dr\.|Prof\.|Mrs\.|Mr\.)\s+/i, '');
  const parts = cleanName.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'L';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const getLeaderImage = (imgName) => {
  if (!imgName) return null;
  if (imgName === "chairman.jpg") return ChairmanImg;
  if (imgName === "principal.jpeg" || imgName === "principal.jpg") return PrincipalImg;
  if (imgName === "vp.png" || imgName === "vp.jpg" || imgName === "vice_principal.png") return VicePrincipalImg;
  return `${import.meta.env.VITE_BACKEND_API_URL}/uploads/${imgName}`;
};

function LeaderCard({ leader, index, onReadMore }) {
  const needsTruncate = leader.Message && leader.Message.length > CHAR_LIMIT;
  const displayText = needsTruncate
    ? leader.Message.slice(0, CHAR_LIMIT).replace(/\s+\S*$/, "") + "…"
    : leader.Message || "";

  const initials = getInitials(leader.Name);
  const gradient = gradients[index % gradients.length];
  const roleIcon = getRoleIcon(leader.Designation);
  const imgUrl = getLeaderImage(leader.ProfileImage);

  return (
    <div
      className={`leader-card reveal featured`}
    >
      <div className="lc-photo">
        <div className="lc-photo-bg" style={{ background: gradient }}>
          <div className="lc-photo-pattern" />
          {imgUrl ? (
            <img
              src={imgUrl}
              alt={leader.Name}
              className="lc-photo-img"
            />
          ) : (
            <div className="lc-initials-ring">
              <span className="lc-initials">{initials}</span>
            </div>
          )}
          <div className="lc-badge">{leader.Designation}</div>
          <div className="lc-quote-icon">&ldquo;</div>
        </div>
      </div>

      <div className="lc-info">
        <div className="lc-role-tag">
          {roleIcon} {leader.Designation}
        </div>
        <div className="lc-name">{leader.Name}</div>
        {leader.Degree && (
          <div className="lc-qual">
            <FaGraduationCap /> {leader.Degree}
          </div>
        )}
        <div className="lc-divider" />

        <div className="lc-desc-wrap">
          <p className="lc-desc">{displayText}</p>
        </div>

        {needsTruncate && (
          <button
            className="lc-read-more"
            onClick={() => onReadMore(leader)}
          >
            <span>Read More</span>
            <FaArrowRight className="lc-rm-icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Leadership() {
  const sectionRef = useRef(null);
  const [activeLeader, setActiveLeader] = useState(null);
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/leadership/get`);
        if (response.data && Array.isArray(response.data.leadership)) {
          setLeaders(response.data.leadership.filter(l => l.Status === "active"));
        } else {
          setLeaders([]);
        }
      } catch (err) {
        console.error("Error fetching leadership data:", err);
        setError("Failed to load leadership data.");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaders();
  }, []);

  useEffect(() => {
    if (leaders.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 }
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [leaders]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (activeLeader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeLeader]);

  if (loading) {
    return (
      <section id="leadership" className="leadership-section" style={{ minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "var(--white)", opacity: 0.8 }}>Loading Visionary Leaders...</div>
      </section>
    );
  }

  if (leaders.length === 0) {
    return null; // hide section if no active leaders
  }

  return (
    <section id="leadership" className="leadership-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">Our Leadership</div>
          <h2 className="section-title">Guided by Visionaries</h2>
          <p className="section-desc">
            Our leadership team brings decades of expertise in nursing
            education, clinical practice, and institutional management.
          </p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, i) => (
            <LeaderCard
              key={leader._id || leader.Name}
              leader={leader}
              index={i}
              onReadMore={setActiveLeader}
            />
          ))}
        </div>
      </div>

      {/* Leader Modal Dialog Overlay */}
      {activeLeader && (
        <div
          className="leader-modal-overlay"
          onClick={() => setActiveLeader(null)}
        >
          <div
            className="leader-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="leader-modal-close"
              onClick={() => setActiveLeader(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className="leader-modal-grid">
              <div
                className="leader-modal-photo-side"
                style={{ background: gradients[leaders.indexOf(activeLeader) % gradients.length] }}
              >
                <div className="leader-modal-photo-pattern" />
                {getLeaderImage(activeLeader.ProfileImage) ? (
                  <img
                    src={getLeaderImage(activeLeader.ProfileImage)}
                    alt={activeLeader.Name}
                    className="leader-modal-img"
                  />
                ) : (
                  <div className="leader-modal-initials-ring">
                    <span className="leader-modal-initials">{getInitials(activeLeader.Name)}</span>
                  </div>
                )}
                <div className="leader-modal-badge">{activeLeader.Designation}</div>
                <div className="leader-modal-quote-icon">&ldquo;</div>
              </div>

              <div className="leader-modal-info-side">
                <div className="lc-role-tag">
                  {getRoleIcon(activeLeader.Designation)} {activeLeader.Designation}
                </div>
                <h3 className="leader-modal-name">{activeLeader.Name}</h3>
                {activeLeader.Degree && (
                  <div className="lc-qual">
                    <FaGraduationCap /> {activeLeader.Degree}
                  </div>
                )}
                <div className="lc-divider" />
                <div className="leader-modal-scroll-desc">
                  {activeLeader.Message && activeLeader.Message.split("\n\n").map((para, idx) => (
                    <p key={idx} className="leader-modal-para">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
