import { FiSend, FiMapPin, FiHeart } from 'react-icons/fi';
import { FaGlobeAmericas } from "react-icons/fa";

const internationalPlacements = [
  {
    name: 'Ms. Pastinal M',
    role: 'Nursing Specialist',
    hospital: 'Al Baraya Hospital, Abha',
    country: 'Saudi Arabia',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    name: 'Ms. Ananthi S',
    role: 'Nursing Specialist',
    hospital: 'Dr. Erfan & Bagedo Hospital',
    country: 'Saudi Arabia',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  },
  {
    name: 'Ms. Nisha K',
    role: 'Nursing Specialist',
    hospital: 'Asthar Sanad Hospital',
    country: 'Saudi Arabia',
    img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80',
  },
];

const destinations = [
  { label: '🇸🇦 Saudi Arabia', count: '3 Placed' },
  { label: '🇦🇪 UAE', count: 'Upcoming' },
  { label: '🇬🇧 UK', count: 'In Progress' },
];

export default function PlacementInternational() {
  return (
    <section className="placement-international">
      <div className="placement-international__container">
        <div className="placement-section-label">Global Opportunities</div>
        <h2 className="placement-section-title">
          International <span>Placements</span>
        </h2>
        <p className="placement-section-desc">
          Our nursing graduates are achieving global career milestones, serving in prestigious hospitals across the Middle East and beyond.
        </p>

        {/* World banner */}
        <div className="placement-international__worldmap">
          <div className="placement-international__worldmap-dots" aria-hidden="true" />
          <div className="placement-international__worldmap-content">
            <h3><FaGlobeAmericas /> Global Placement Network</h3>
            <p>Building nursing careers that transcend borders</p>
            <div className="placement-international__destinations">
              {destinations.map((d, i) => (
                <div className="placement-dest-tag" key={i}>
                  <FiMapPin size={13} />
                  {d.label} — <strong>{d.count}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="placement-international__grid">
          {internationalPlacements.map((p, i) => (
            <div className="placement-intl-card" key={i}>
              <div className="placement-intl-card__image-wrap">
                <img src={p.img} alt={p.name} />
                <div className="placement-intl-card__country-badge">
                  <FiMapPin size={11} />
                  {p.country}
                </div>
                <div className="placement-intl-card__plane-icon">
                  <FiSend size={18} />
                </div>
              </div>
              <div className="placement-intl-card__body">
                <div className="placement-intl-card__name">{p.name}</div>
                <div className="placement-intl-card__role">{p.role}</div>
                <div className="placement-intl-card__hospital">
                  <FiHeart size={13} className="placement-intl-card__hospital-icon" />
                  {p.hospital}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
