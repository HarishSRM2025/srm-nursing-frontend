import React from 'react';
import {
  FiActivity, FiCheck, FiArrowRight,
  FiBook, FiHome, FiZap
} from 'react-icons/fi';

const spotlights = [
  {
    icon: <FiActivity />,
    label: 'Clinical Training',
    title: <>Advanced <em>Clinical Labs</em> for Real-World Readiness</>,
    desc: 'Our state-of-the-art laboratories simulate real hospital environments, giving nursing students hands-on competency with clinical procedures, anatomy, and patient care protocols before they step into a hospital ward.',
    points: [
      'Anatomy & Physiology demonstration labs',
      'Fully equipped Nursing Skills & Simulation room',
      'Obstetrics & Gynecology (OBG) practical lab',
      'Community Health Nursing field exposure',
      'Modern equipment matching hospital standards',
    ],
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80',
    accent: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80',
    reverse: false,
  },
  {
    icon: <FiBook />,
    label: 'Knowledge Hub',
    title: <>A Library That <em>Fuels Curiosity</em> & Research</>,
    desc: 'Beyond physical books, our library is a dynamic knowledge hub where students access thousands of digital journals, medical databases, and e-learning resources, supported by trained library professionals.',
    points: [
      'Extensive collection of nursing & medical texts',
      'Access to PubMed, CINAHL & NMC digital databases',
      'Dedicated quiet reading rooms and group study zones',
      'Periodicals, nursing journals & reference materials',
      'Mentor-guided research assistance',
    ],
    img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=80',
    accent: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80',
    reverse: true,
  },
  {
    icon: <FiHome />,
    label: 'Student Life',
    title: <>Hostel Life — <em>Safe, Comfortable</em> & Community-Driven</>,
    desc: 'Our on-campus hostels are designed to be more than just a place to sleep — they are communities that foster friendships, discipline, and personal growth. With round-the-clock security, dedicated wardens, and all modern amenities.',
    points: [
      'Separate, secure hostels for boys and girls',
      '24×7 wardens and CCTV security coverage',
      'In-house dining with nutritious, hygienic meals',
      'Common rooms, recreation areas & study halls',
      'Regular health check-ups and welfare programs',
    ],
    img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80',
    accent: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=400&q=80',
    reverse: false,
  },
];

const FacFeatureSpotlight = () => {
  return (
    <section className="fac-spotlight">
      <div className="fac-spotlight__inner">
        <div className="fac-spotlight__header">
          <span className="fac-section-label">Deep Dive</span>
          <h2 className="fac-section-title">Spotlight on Key Facilities</h2>
          <p className="fac-section-desc">
            An in-depth look at the facilities that define the SRM Trichy College of Nursing experience.
          </p>
        </div>

        {spotlights.map((item, i) => (
          <div
            className={`fac-spotlight__row${item.reverse ? ' fac-spotlight__row--reverse' : ''}`}
            key={i}
          >
            <div className="fac-spotlight__img-wrap">
              <div className="fac-spotlight__img-decor" />
              <img
                src={item.img}
                alt={typeof item.title === 'string' ? item.title : `Spotlight ${i}`}
                className="fac-spotlight__img-main"
              />
              <img
                src={item.accent}
                alt="accent"
                className="fac-spotlight__img-accent"
              />
            </div>

            <div className="fac-spotlight__content">
              <div className="fac-spotlight__icon">{item.icon}</div>
              <div className="fac-section-label">{item.label}</div>
              <h3 className="fac-spotlight__title">{item.title}</h3>
              <p className="fac-spotlight__desc">{item.desc}</p>
              <ul className="fac-spotlight__points">
                {item.points.map((pt, j) => (
                  <li className="fac-spotlight__point" key={j}>
                    <div className="fac-spotlight__point-icon">
                      <FiCheck />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
              <button className="fac-spotlight__cta">
                Explore More <FiArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacFeatureSpotlight;
