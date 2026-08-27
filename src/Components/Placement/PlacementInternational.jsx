import { FiSend, FiMapPin, FiHeart, FiBriefcase, FiAward, FiCheckCircle } from 'react-icons/fi';
import { FaGlobeAmericas, FaHospital, FaUserGraduate } from "react-icons/fa";

const internationalPlacements = [
  {
    initials: 'PM',
    name: 'Ms. Pastinal M',
    role: 'Nursing Specialist',
    hospital: 'Al Baraya Hospital',
    location: 'Abha, Saudi Arabia',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    program: 'B.Sc Nursing Alumni',
  },
  {
    initials: 'AS',
    name: 'Ms. Ananthi S',
    role: 'Nursing Specialist',
    hospital: 'Dr. Erfan & Bagedo Hospital',
    location: 'Jeddah, Saudi Arabia',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    program: 'B.Sc Nursing Alumni',
  },
  {
    initials: 'NK',
    name: 'Ms. Nisha K',
    role: 'Nursing Specialist',
    hospital: 'Asthar Sanad Hospital',
    location: 'Riyadh, Saudi Arabia',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    program: 'B.Sc Nursing Alumni',
  },
];

const destinations = [
  { label: '🇸🇦 Saudi Arabia', count: '3 Placed' },
  { label: '🇦🇪 UAE', count: 'Upcoming' },
  { label: '🇬🇧 UK', count: 'In Progress' },
];

export default function PlacementInternational() {
  return (
    <section className="placement-international">
      <div className="placement-international__container">
        <div className="placement-section-label">Global Opportunities</div>
        <h2 className="placement-section-title">
          International <span>Placements</span>
        </h2>
        <p className="placement-section-desc">
          Our nursing graduates are achieving global career milestones, serving in prestigious hospitals across the Middle East and beyond.
        </p>

        {/* World banner */}
        <div className="placement-international__worldmap">
          <div className="placement-international__worldmap-dots" aria-hidden="true" />
          <div className="placement-international__worldmap-content">
            <h3><FaGlobeAmericas /> Global Placement Network</h3>
            <p>Building nursing careers that transcend borders</p>
            <div className="placement-international__destinations">
              {destinations.map((d, i) => (
                <div className="placement-dest-tag" key={i}>
                  <FiMapPin size={13} />
                  {d.label} — <strong>{d.count}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="placement-international__grid">
          {internationalPlacements.map((p, i) => (
            <div className="placement-intl-card" key={i}>
              <div className="placement-intl-card__header">
                <div className="placement-intl-card__avatar">
                  <span className="placement-intl-card__avatar-text">{p.initials}</span>
                  <span className="placement-intl-card__avatar-badge" title="Verified Placement">
                    <FiCheckCircle size={11} />
                  </span>
                </div>
                <div className="placement-intl-card__country-badge">
                  <span className="placement-intl-card__flag">{p.flag}</span>
                  <span>{p.country}</span>
                </div>
              </div>

              <div className="placement-intl-card__body">
                <div className="placement-intl-card__role-pill">{p.role}</div>
                <h4 className="placement-intl-card__name">{p.name}</h4>

                <div className="placement-intl-card__info-list">
                  <div className="placement-intl-card__info-item">
                    <div className="placement-intl-card__info-icon">
                      <FaHospital />
                    </div>
                    <div className="placement-intl-card__info-content">
                      <span className="placement-intl-card__info-label">Hospital</span>
                      <span className="placement-intl-card__info-value">{p.hospital}</span>
                    </div>
                  </div>

                  <div className="placement-intl-card__info-item">
                    <div className="placement-intl-card__info-icon">
                      <FiMapPin />
                    </div>
                    <div className="placement-intl-card__info-content">
                      <span className="placement-intl-card__info-label">Location</span>
                      <span className="placement-intl-card__info-value">{p.location}</span>
                    </div>
                  </div>

                  <div className="placement-intl-card__info-item">
                    <div className="placement-intl-card__info-icon">
                      <FaUserGraduate />
                    </div>
                    <div className="placement-intl-card__info-content">
                      <span className="placement-intl-card__info-label">Program</span>
                      <span className="placement-intl-card__info-value">{p.program}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="placement-intl-card__footer">
                <div className="placement-intl-card__status">
                  <span className="placement-intl-card__status-dot"></span>
                  <span className="placement-intl-card__status-text">Global Career Placement</span>
                </div>
                <FiSend className="placement-intl-card__footer-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
