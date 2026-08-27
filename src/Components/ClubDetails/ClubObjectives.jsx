// components/ClubObjectives.jsx
import {
  FaBullseye, FaChalkboardTeacher, FaFlask, FaNetworkWired,
  FaGlobe, FaMedal
} from 'react-icons/fa';

const iconMap = {
  FaBullseye, FaChalkboardTeacher, FaFlask, FaNetworkWired,
  FaGlobe, FaMedal
};

export default function ClubObjectives({ objectives }) {
  return (
    <section className="club-details-section">
      <div className="club-details-container">
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
          <span className="club-details-section-label">Objectives</span>
          <h2 className="club-details-section-title">
            Our <span>Core</span> Objectives
          </h2>
          <p className="club-details-section-desc" style={{ margin: '0 auto' }}>
            Structured goals that guide every initiative, programme, and activity we undertake as a club.
          </p>
        </div>

        <div className="club-details-objectives__grid">
          {objectives.map((obj, i) => {
            const Icon = iconMap[obj.icon] || FaBullseye;
            const num = String(i + 1).padStart(2, '0');
            return (
              <div className="club-details-objectives__card" key={i}>
                <div className="club-details-objectives__num">{num}</div>
                <div className="club-details-objectives__icon">
                  <Icon />
                </div>
                <h3 className="club-details-objectives__title">{obj.title}</h3>
                <p className="club-details-objectives__desc">{obj.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
