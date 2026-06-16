import { FiCheckCircle, FiAward, FiBookOpen, FiUsers } from 'react-icons/fi';

const tiles = [
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    tag: 'Clinical Training',
    label: 'Hands-on ICU & OT Exposure',
    large: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
    tag: 'Campus Drive',
    label: 'On-campus Recruitment Events',
  },
  {
    img: 'https://images.unsplash.com/photo-1631217873436-b5e6f0d85c68?w=600&q=80',
    tag: 'International',
    label: 'Gulf & Abroad Opportunities',
  },
  {
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    tag: 'Mentorship',
    label: 'Career Guidance & Interview Prep',
  },
  {
    img: 'https://images.unsplash.com/photo-1576669802818-2e75cc3f4bbd?w=600&q=80',
    tag: 'Alumni Network',
    label: 'Strong Industry Connections',
  },
];

const features = [
  {
    icon: <FiCheckCircle />,
    title: 'Pre-placement Training',
    desc: 'Mock interviews, resume workshops, and communication skill sessions.',
  },
  {
    icon: <FiAward />,
    title: 'Industry-Recognized Certifications',
    desc: 'Additional certifications that boost employability significantly.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Expert-Led Workshops',
    desc: 'Regular seminars by senior nurses and hospital administrators.',
  },
  {
    icon: <FiUsers />,
    title: 'Dedicated Placement Cell',
    desc: 'A full-time team committed to every students placement success.',
  },
];

export default function PlacementHighlights() {
  return (
    <section className="placement-highlights">
      <div className="placement-highlights__container">
        <div className="placement-highlights__header">
          <div className="placement-section-label">Life at SRM Nursing</div>
          <h2 className="placement-section-title">
            Our <span>Placement Journey</span>
          </h2>
          <p className="placement-section-desc">
            From rigorous clinical training to dedicated placement drives, we prepare every student to thrive in the healthcare workforce.
          </p>
        </div>

        <div className="placement-highlights__mosaic">
          {tiles.map((tile, i) => (
            <div
              className={`placement-highlight-tile${tile.large ? ' placement-highlight-tile--large' : ''}`}
              key={i}
            >
              <img
                src={tile.img}
                alt={tile.label}
                className="placement-highlight-tile__img"
              />
              <div className="placement-highlight-tile__overlay">
                <span className="placement-highlight-tile__tag">{tile.tag}</span>
                <span className="placement-highlight-tile__label">{tile.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="placement-highlights__features">
          {features.map((f, i) => (
            <div className="placement-feature-strip" key={i}>
              <div className="placement-feature-strip__icon">{f.icon}</div>
              <div className="placement-feature-strip__text">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
