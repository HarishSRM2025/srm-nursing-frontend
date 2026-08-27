// components/ClubAim.jsx
import {
  FaHeartbeat, FaBookOpen, FaHandsHelping, FaMicroscope,
  FaLightbulb, FaPalette, FaMusic, FaTheaterMasks,
  FaRunning, FaBrain, FaHandshake, FaHospital, FaChild, FaLeaf
} from 'react-icons/fa';

const iconMap = {
  FaHeartbeat, FaBookOpen, FaHandsHelping, FaMicroscope,
  FaLightbulb, FaPalette, FaMusic, FaTheaterMasks,
  FaRunning, FaBrain, FaHandshake, FaHospital, FaChild, FaLeaf
};

export default function ClubAim({ aim }) {
  return (
    <section className="club-details-section club-details-section--alt">
      <div className="club-details-container">
        <div className="club-details-aim__grid">
          {/* Content */}
          <div className="club-details-aim__content">
            <span className="club-details-section-label">Our Aim</span>
            <h2 className="club-details-section-title">
              What We <span>Strive</span> For
            </h2>
            <blockquote className="club-details-aim__statement">
              {aim.statement}
            </blockquote>
            <div className="club-details-aim__pillars">
              {aim.pillars.map((pillar, i) => {
                const Icon = iconMap[pillar.icon] || FaHeartbeat;
                return (
                  <div className="club-details-aim__pillar" key={i}>
                    <div className="club-details-aim__pillar-icon">
                      <Icon />
                    </div>
                    <div>
                      <div className="club-details-aim__pillar-title">{pillar.title}</div>
                      <div className="club-details-aim__pillar-desc">{pillar.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="club-details-aim__image-wrap">
            <img
              src={aim.image}
              alt="Club Aim"
              className="club-details-aim__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
