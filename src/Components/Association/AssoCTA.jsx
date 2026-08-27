import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const AssoCTA = () => {
  return (
    <section className="asso-cta">
      <div className="asso-container">
        <div className="asso-cta__inner">
          <div className="asso-cta__text">
            <div className="asso-cta__badge">Join the Community</div>
            <h2 className="asso-cta__title">
              Ready to Be Part of<br />Something Greater?
            </h2>
            <p className="asso-cta__desc">
              Connect with the SNA, join our student clubs, and become part of a
              thriving community that's shaping the future of nursing. Applications
              are open for 2025 — limited seats available.
            </p>
          </div>
          <div className="asso-cta__actions">
            <a href="#" className="asso-cta__btn-primary">
              Apply Now <FaArrowRight />
            </a>
            <a href="tel:+914322268009" className="asso-cta__btn-outline">
              <FaPhoneAlt /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssoCTA;
