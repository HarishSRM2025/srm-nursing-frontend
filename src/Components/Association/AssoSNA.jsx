import React from 'react';
import { FaUserNurse, FaCheckCircle, FaHandsHelping, FaTrophy, FaUsers } from 'react-icons/fa';

const objectives = [
  'Uphold dignity and honor of the nursing profession',
  'Promote participation in community activities',
  'Encourage intercollegiate cultural and sports activities',
  'Build collaborative healthcare relationships',
  'Develop leadership and confidence',
  'Enhance professional and social growth',
];

const AssoSNA = () => {
  return (
    <section className="asso-sna" id="sna">
      <div className="asso-container">
        <div className="asso-sna__grid">

          {/* Image Mosaic */}
          <div className="asso-sna__image-mosaic">
            <div className="asso-sna__img-wrap asso-sna__img-wrap--large">
              <img
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&q=80"
                alt="SNA members meeting"
              />
            </div>
            <div className="asso-sna__img-wrap asso-sna__img-wrap--small">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80"
                alt="Student nurses association activity"
              />
            </div>
            <div className="asso-sna__floating-card">
              <div className="asso-sna__floating-card-icon">
                <FaUsers />
              </div>
              <div className="asso-sna__floating-card-text">
                <strong>Nationwide Network</strong>
                <span>TNAI Affiliated • Est. 2018</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="asso-sna__content">
            <div className="asso-section-badge">Student Nurses Association</div>
            <h2 className="asso-section-title">
              Building Tomorrow's <span>Healthcare Leaders</span>
            </h2>

            <p className="asso-sna__intro">
              The Student Nurses Association (SNA) is a nationwide organization formed
              by TNAI to support nursing students in their professional and personal
              development. Established in 2018 at SRMTCON under the guidance of
              Dr. Suja Suresh, the SNA unit promotes student participation in
              academic, social, cultural, and professional activities.
            </p>

            <div className="asso-sna__aims-box">
              <div className="asso-sna__aims-label">Our Aim</div>
              <p className="asso-sna__aims-text">
                To support the holistic development of nursing students and prepare
                them for professional roles through active engagement and leadership.
              </p>
            </div>

            <h4 className="asso-sna__objectives-title">Key Objectives</h4>
            <ul className="asso-sna__obj-list">
              {objectives.map((obj, i) => (
                <li key={i} className="asso-sna__obj-item">
                  <span className="asso-sna__obj-icon"><FaCheckCircle /></span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AssoSNA;
