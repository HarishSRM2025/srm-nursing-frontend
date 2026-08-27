import React from 'react';
import { FiHome, FiChevronRight, FiAward, FiUsers, FiBookOpen, FiStar } from 'react-icons/fi';

const FacHero = () => {
  return (
    <section className="fac-hero">
      <div className="fac-hero__bg-pattern" />
      <div className="fac-hero__grid-overlay" />
      <div className="fac-hero__shape1" />
      <div className="fac-hero__shape2" />

      <div className="fac-hero__content">
        <div className="fac-hero__badge">
          <FiAward />
          TNNMC Approved · Green Campus Certified
        </div>

        <h1 className="fac-hero__title">
          World-Class<br />
          <span>Campus Facilities</span>
        </h1>

        <p className="fac-hero__subtitle">
          SRM Trichy College of Nursing provides state-of-the-art infrastructure
          to nurture the next generation of compassionate healthcare professionals.
        </p>

        <nav className="fac-hero__breadcrumb" aria-label="breadcrumb">
          <FiHome size={13} />
          <a href="#">Home</a>
          <FiChevronRight />
          <span>Facilities</span>
        </nav>

        <div className="fac-hero__stats">
          <div className="fac-hero__stat-item">
            <div className="fac-hero__stat-number">9<span>+</span></div>
            <div className="fac-hero__stat-label">Facility Types</div>
          </div>
          <div className="fac-hero__stat-item">
            <div className="fac-hero__stat-number">26<span>+</span></div>
            <div className="fac-hero__stat-label">Years Excellence</div>
          </div>
          <div className="fac-hero__stat-item">
            <div className="fac-hero__stat-number">500<span>+</span></div>
            <div className="fac-hero__stat-label">Students Enrolled</div>
          </div>
          <div className="fac-hero__stat-item">
            <div className="fac-hero__stat-number">4<span>★</span></div>
            <div className="fac-hero__stat-label">NAAC Accredited</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacHero;
