import { FiArrowRight, FiMail } from 'react-icons/fi';

export default function CTASection() {
  return (
    <section className="academic-cta">
      <div className="academic-container">
        <div className="academic-cta-inner">
          <div className="academic-cta-content">
            <h2>Ready to Begin Your Nursing Journey?</h2>
            <p>
              Applications are now open for the 2025–26 academic year. Limited seats available.
              Join SRM Trichy College of Nursing and shape a career that truly makes a difference.
            </p>
          </div>
          <div className="academic-cta-actions">
            <a href="#" className="academic-cta-btn-white">
              Apply Now
              <FiArrowRight size={16} />
            </a>
            <a href="#" className="academic-cta-btn-outline-white">
              <FiMail size={16} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
