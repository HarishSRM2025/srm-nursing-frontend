import React from 'react';
import {
  FaUserGraduate, FaNetworkWired, FaHandshake, FaStar,
  FaCheckCircle, FaCalendarAlt, FaHeart
} from 'react-icons/fa';

const objectives = [
  { icon: <FaNetworkWired />, text: 'Strengthen alumni relationships' },
  { icon: <FaHandshake />, text: 'Encourage networking and mentorship' },
  { icon: <FaStar />, text: 'Support institutional development' },
  { icon: <FaUserGraduate />, text: 'Recognize distinguished alumni' },
];

const rules = [
  'Membership open to all graduates',
  'Maintain discipline and professionalism',
  'Participate in meetings and activities',
  'Maintain proper financial records',
  'Follow ethical communication practices',
];

const AssoAlumni = () => {
  return (
    <section className="asso-alumni" id="alumni">
      <div className="asso-container">
        <div className="asso-alumni__grid">
          {/* Content */}
          <div className="asso-alumni__content">
            <div className="asso-section-badge">Alumni Association</div>
            <h2 className="asso-section-title">
              Lifelong <span>Bonds</span>,<br />Enduring Legacy
            </h2>

            <div className="asso-alumni__aims-card">
              <div className="asso-alumni__aims-label">Our Aim</div>
              <p className="asso-alumni__aims-text">
                To maintain lifelong relationships and support institutional growth
                by connecting graduates across generations.
              </p>
            </div>

            <div className="asso-alumni__obj-grid">
              {objectives.map((obj, i) => (
                <div key={i} className="asso-alumni__obj-card">
                  <div className="asso-alumni__obj-card-icon">{obj.icon}</div>
                  <span className="asso-alumni__obj-card-text">{obj.text}</span>
                </div>
              ))}
            </div>

            <div className="asso-alumni__rules-box">
              <h4 className="asso-alumni__rules-title">
                <FaCheckCircle style={{ color: 'var(--asso-accent)' }} />
                Rules &amp; Regulations
              </h4>
              <ul className="asso-alumni__rules-list">
                {rules.map((r, i) => (
                  <li key={i} className="asso-alumni__rules-item">
                    <FaCheckCircle className="asso-alumni__rules-check" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual */}
          <div className="asso-alumni__visual">
            <div className="asso-alumni__img-top">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                alt="Alumni networking event"
              />
            </div>
            {/* <div className="asso-alumni__img-bottom">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80"
                alt="Alumni meet"
              />
            </div> */}
            <div className="asso-alumni__event-card">
              <div className="asso-alumni__event-card-icon">
                <FaCalendarAlt />
              </div>
              <strong>Annual Alumni Meet</strong>
              <span>Leadership &amp; Networking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssoAlumni;
