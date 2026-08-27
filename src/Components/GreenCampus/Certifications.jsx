import React from 'react';
import { FaAward, FaCertificate, FaGlobeAsia, FaShieldAlt } from 'react-icons/fa';

const CERTS = [
  { icon: <FaAward />, title: 'NAAC Accredited', desc: 'Recognized for institutional quality, compliance and excellence.' },
  { icon: <FaCertificate />, title: 'Swachh Bharat Partner', desc: 'Active participant in national cleanliness mission programs.' },
  { icon: <FaGlobeAsia />, title: 'Green Campus Pledge', desc: 'Committed to renewable energy and sustainable practices.' },
  { icon: <FaShieldAlt />, title: 'Pollution Control Compliant', desc: 'Meets state norms for waste and water management.' },
];

const Certifications = () => {
  return (
    <section className="gc-certs">
      <div className="green-campus-container">
        <div className="gc-certs-head">
          <span className="green-campus-eyebrow">Recognition</span>
          <h2 className="green-campus-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
            Our Green Commitment, Acknowledged
          </h2>
        </div>
        <div className="gc-certs-grid">
          {CERTS.map((c, i) => (
            <div className="gc-cert-card" key={i}>
              <div className="gc-cert-icon">{c.icon}</div>
              <h4 className="gc-cert-title">{c.title}</h4>
              <p className="gc-cert-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
