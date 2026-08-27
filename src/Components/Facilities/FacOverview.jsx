import React from 'react';
import {
  FiWifi, FiMonitor, FiBook, FiShield,
  FiTruck, FiSun, FiCoffee, FiUsers
} from 'react-icons/fi';

const highlights = [
  { icon: <FiWifi />, text: 'High-Speed Internet Campus-Wide' },
  { icon: <FiMonitor />, text: 'Smart Classrooms & AV Systems' },
  { icon: <FiBook />, text: 'Digital Library Resources' },
  { icon: <FiShield />, text: '24×7 Security & CCTV Surveillance' },
  { icon: <FiSun />, text: 'Green Campus Certification' },
  { icon: <FiUsers />, text: 'Dedicated Student Welfare Cell' },
];

const FacOverview = () => {
  return (
    <section className="fac-overview">
      <div className="fac-overview__inner">
        <div className="fac-overview__layout">
          <div className="fac-overview__text">
            <span className="fac-section-label">About Our Campus</span>
            <h2 className="fac-section-title">
              Designed to Inspire,<br />
              <em>Built to Empower</em>
            </h2>
            <p className="fac-overview__text-body">
              At SRM Trichy College of Nursing, every facility is thoughtfully designed
              to create an environment where students can thrive academically, physically,
              and personally. Our campus integrates modern infrastructure with a warm,
              supportive community atmosphere.
            </p>
            <p className="fac-overview__text-body">
              From cutting-edge clinical labs to a vibrant hostel life, we ensure
              every student has access to the resources they need to become compassionate,
              competent healthcare professionals ready to transform lives.
            </p>

            <div className="fac-overview__highlights">
              {highlights.map((item, i) => (
                <div className="fac-overview__highlight-item" key={i}>
                  <div className="fac-overview__highlight-icon">{item.icon}</div>
                  <span className="fac-overview__highlight-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fac-overview__visual">
            <div className="fac-overview__image-grid">
              <div className="fac-overview__img-main">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                  alt="Campus Overview"
                />
              </div>
              <div className="fac-overview__img-sm">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
                  alt="Lab Facility"
                />
                <div className="fac-overview__badge-float">
                  <div className="fac-overview__badge-float-icon"><FiShield /></div>
                  <div className="fac-overview__badge-float-text">
                    <strong>NAAC</strong>
                    <span>Accredited</span>
                  </div>
                </div>
              </div>
              <div className="fac-overview__img-sm">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"
                  alt="Campus Life"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacOverview;
