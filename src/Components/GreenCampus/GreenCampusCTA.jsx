import React from 'react';
import { FaSeedling, FaPhoneAlt } from 'react-icons/fa';


const GreenCampusCTA = () => {
  return (
    <section className="gc-cta" id="gc-cta">
      <div className="green-campus-container gc-cta-inner">
        <FaSeedling className="gc-cta-icon" />
        <h2 className="green-campus-title">Building A Sustainable Tomorrow, Together</h2>
        <p className="gc-cta-sub">
          Our green campus initiatives reflect a strong institutional
          commitment to environmental stewardship — one that every student,
          faculty member, and visitor helps carry forward.
        </p>
        <div className="gc-cta-btns">
          <a href="/contact-us" className="green-campus-btn green-campus-btn--primary">
            <FaPhoneAlt /> Get In Touch
          </a>
          <a href="/about" className="green-campus-btn green-campus-btn--ghost">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GreenCampusCTA;
