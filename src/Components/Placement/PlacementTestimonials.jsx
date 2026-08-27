import { FiStar } from 'react-icons/fi';
import { RiDoubleQuotesL } from 'react-icons/ri';

const testimonials = [
  {
    text: "The placement cell at SRM Trichy Nursing College was incredibly supportive. They prepared us thoroughly with mock interviews and helped me land a position at TSRMMCH within weeks of graduation.",
    name: 'Priya R.',
    role: 'Staff Nurse, TSRMMCH&RC',
    initials: 'PR',
    batch: '2022 Batch',
    stars: 5,
  },
  {
    text: "I never imagined I'd be working in Saudi Arabia so soon after completing my B.Sc Nursing. The international placement support from the college made my dream a reality.",
    name: 'Ananthi S.',
    role: 'Nursing Specialist, Saudi Arabia',
    initials: 'AS',
    batch: '2023 Batch',
    stars: 5,
  },
  {
    text: "Getting placed at Apollo Hospitals was a milestone I'll cherish forever. The faculty's mentoring and the dedicated placement team ensured every student got individual attention.",
    name: 'Kavitha M.',
    role: 'Staff Nurse, Apollo Hospitals',
    initials: 'KM',
    batch: '2022 Batch',
    stars: 5,
  },
];

export default function PlacementTestimonials() {
  return (
    <section className="placement-testimonials">
      <div className="placement-testimonials__container">
        <div className="placement-testimonials__header">
          <div className="placement-section-label">Student Stories</div>
          <h2 className="placement-section-title">
            What Our <span>Graduates Say</span>
          </h2>
          <p className="placement-section-desc" style={{ margin: '0 auto' }}>
            Real stories from real nurses who found their calling through SRM Trichy Nursing College's placement programme.
          </p>
        </div>

        <div className="placement-testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="placement-testi-card" key={i}>
              <div className="placement-testi-card__quote-icon">
                <RiDoubleQuotesL />
              </div>
              <p className="placement-testi-card__text">"{t.text}"</p>
              <div className="placement-testi-card__footer">
                <div className="placement-testi-card__avatar">{t.initials}</div>
                <div className="placement-testi-card__info">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                  <div className="placement-testi-card__stars">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <FiStar key={j} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
