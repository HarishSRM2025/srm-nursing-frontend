import { FiMapPin, FiHeart } from 'react-icons/fi';

const partners = [
  { name: 'TSRMMCH & RC', location: 'Trichy', students: '60+ Students' },
  { name: 'Ramachandra Hospital', location: 'Chennai', students: '21 Students' },
  { name: 'PSG Hospital', location: 'Coimbatore', students: '9 Students' },
  { name: 'KMC Hospital', location: 'Trichy & Chennai', students: '21+ Students' },
  { name: 'Apollo Hospitals', location: 'Chennai', students: '11 Students' },
  { name: 'SRM Hospital', location: 'Chennai', students: '7+ Students' },
  { name: 'Sri Ramakrishna Hospital', location: 'Coimbatore', students: '7 Students' },
  { name: 'Meenakshi Hospital', location: 'Chennai & Tanjore', students: '11+ Students' },
  { name: 'GVN Hospital', location: 'Trichy', students: '8 Students' },
  { name: 'Tagore Medical College', location: 'Chennai', students: '5 Students' },
  { name: 'MGM Healthcare', location: 'Chennai', students: '7 Students' },
  { name: 'Kamatchi Hospital', location: 'Trichy', students: '4 Students' },
];

export default function PlacementPartners() {
  return (
    <section className="placement-partners">
      <div className="placement-partners__container">
        <div className="placement-partners__header">
          <div className="placement-section-label">Our Network</div>
          <h2 className="placement-section-title">
            Trusted <span>Hospital Partners</span>
          </h2>
          <p className="placement-section-desc">
            We maintain strong partnerships with leading hospitals and healthcare institutions, ensuring our graduates access the finest placements across India.
          </p>
        </div>

        <div className="placement-partners__scroll">
          {partners.map((p, i) => (
            <div className="placement-partner-card" key={i}>
              <div className="placement-partner-card__icon">
                <FiHeart />
              </div>
              <div className="placement-partner-card__name">{p.name}</div>
              <div className="placement-partner-card__location">
                <FiMapPin size={11} />
                {p.location}
              </div>
              <span className="placement-partner-card__students">{p.students}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
