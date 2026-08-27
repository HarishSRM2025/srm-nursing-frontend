import { FiUsers, FiGlobe, FiHome, FiTrendingUp } from 'react-icons/fi';

const stats = [
  {
    icon: <FiUsers />,
    number: '208',
    suffix: '+',
    label: 'Total Students Placed',
  },
  {
    icon: <FiHome />,
    number: '40',
    suffix: '+',
    label: 'Hospital Partners',
  },
  {
    icon: <FiGlobe />,
    number: '3',
    suffix: '',
    label: 'Countries (International)',
  },
  {
    icon: <FiTrendingUp />,
    number: '98',
    suffix: '%',
    label: 'Placement Success Rate',
  },
];

export default function PlacementStats() {
  return (
    <section className="placement-stats">
      <div className="placement-stats__bg" aria-hidden="true" />
      <div className="placement-stats__container">
        <div className="placement-stats__header">
          <div className="placement-section-label">Our Track Record</div>
          <h2 className="placement-section-title">
            Numbers That <span>Speak Volumes</span>
          </h2>
          <p className="placement-section-desc">
            Consistently delivering exceptional career outcomes for our nursing graduates since 2018.
          </p>
        </div>

        <div className="placement-stats__grid">
          {stats.map((s, i) => (
            <div className="placement-stat-card" key={i}>
              <div className="placement-stat-card__icon">{s.icon}</div>
              <div className="placement-stat-card__number">
                {s.number}<span>{s.suffix}</span>
              </div>
              <div className="placement-stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
