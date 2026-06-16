// components/ClubOverview.jsx
import {
  FaCalendarAlt, FaUsers, FaTrophy, FaStar,
  FaHeartbeat, FaBookOpen, FaHandsHelping, FaMicroscope,
  FaLightbulb, FaPalette, FaMusic, FaTheaterMasks,
  FaRunning, FaBrain, FaHandshake, FaHospital, FaChild, FaLeaf
} from 'react-icons/fa';

const iconMap = {
  FaCalendarAlt, FaUsers, FaTrophy, FaStar,
  FaHeartbeat, FaBookOpen, FaHandsHelping, FaMicroscope,
  FaLightbulb, FaPalette, FaMusic, FaTheaterMasks,
  FaRunning, FaBrain, FaHandshake, FaHospital, FaChild, FaLeaf
};

export default function ClubOverview({ overview, clubName }) {
  return (
    <section className="club-details-section">
      <div className="club-details-container">
        <div className="club-details-overview__grid">
          {/* Image */}
          <div className="club-details-overview__image-wrap">
            <img
              src={overview.image}
              alt={`${clubName} overview`}
              className="club-details-overview__image"
            />
            <div className="club-details-overview__image-badge">
              <FaUsers />
              {clubName}
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="club-details-section-label">Overview</span>
            <h2 className="club-details-section-title">
              {overview.title}
            </h2>
            <p className="club-details-section-desc">{overview.description}</p>

            <div className="club-details-overview__highlights">
              {overview.highlights.map((h, i) => {
                const Icon = iconMap[h.icon] || FaStar;
                return (
                  <div className="club-details-overview__highlight" key={i}>
                    <div className="club-details-overview__highlight-icon">
                      <Icon />
                    </div>
                    <div>
                      <div className="club-details-overview__highlight-value">{h.value}</div>
                      <div className="club-details-overview__highlight-label">{h.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
