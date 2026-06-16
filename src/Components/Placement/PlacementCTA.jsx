import { FiArrowRight, FiPhone } from 'react-icons/fi';

export default function PlacementCTA() {
  return (
    <section className="placement-cta">
      <div className="placement-cta__bg" aria-hidden="true" />
      <div className="placement-cta__container">
        <div className="placement-cta__content">
          <h2>
            Ready to Start Your<br />
            <span>Nursing Career?</span>
          </h2>
          <p>
            Join SRM Trichy College of Nursing and become part of a legacy of compassionate, skilled nurses placed at India's top hospitals and global healthcare institutions.
          </p>
        </div>
        <div className="placement-cta__actions">
          <a href="#apply" className="placement-btn-primary">
            Apply Now <FiArrowRight size={16} />
          </a>
          <a href="tel:04312518809" className="placement-btn-secondary">
            <FiPhone size={16} /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
