import React from 'react';
import { FiArrowRight, FiPhone } from 'react-icons/fi';

const FacCTA = () => {
  return (
    <section className="fac-cta">
      <div className="fac-cta__inner">
        <span className="fac-cta__label">Admissions Open 2025</span>
        <h2 className="fac-cta__title">
          Ready to Experience Our<br />
          <em>World-Class Campus?</em>
        </h2>
        <p className="fac-cta__desc">
          Visit SRM Trichy College of Nursing and see how our facilities create
          the perfect environment for your nursing journey. Limited seats available.
        </p>
        <div className="fac-cta__buttons">
          <button className="fac-btn-primary">
            Apply Now <FiArrowRight />
          </button>
          <button className="fac-btn-outline">
            <FiPhone /> Schedule a Campus Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacCTA;
