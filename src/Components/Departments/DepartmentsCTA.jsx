import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function DepartmentsCTA() {
  return (
    <section className="depart-cta">
      <div className="depart-cta-inner">
        <span className="depart-cta-eyebrow">Ready to Begin?</span>
        <h2 className="depart-cta-heading">Find Your Path in Nursing</h2>
        <p className="depart-cta-sub">
          Connect with our admissions team to learn which department aligns with your
          passion and career goals.
        </p>
        <div className="depart-cta-actions">
          <a href="#contact" className="depart-cta-btn depart-cta-btn--primary">
            Apply Now
          </a>
          <a href="tel:+91" className="depart-cta-btn depart-cta-btn--outline">
            <FaPhoneAlt /> Contact Us
          </a>
        </div>
        <div className="depart-cta-info">
          <span>
            <FaPhoneAlt className="depart-cta-info-icon" /> +91 431 300 0000
          </span>
          <span>
            <FaEnvelope className="depart-cta-info-icon" /> admissions@srmcollege.edu.in
          </span>
        </div>
      </div>
    </section>
  );
}
