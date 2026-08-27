import { FiMapPin, FiHeart } from 'react-icons/fi';
import { FaHospital } from 'react-icons/fa';

const partners = [
  { name: 'TSRMMCH & RC', location: 'Trichy' },
  { name: 'Ramachandra Hospital', location: 'Chennai' },
  { name: 'PSG Hospital', location: 'Coimbatore' },
  { name: 'KMC Hospital', location: 'Trichy & Chennai' },
  { name: 'Apollo Hospitals', location: 'Chennai' },
  { name: 'SRM Hospital', location: 'Chennai' },
  { name: 'Sri Ramakrishna Hospital', location: 'Coimbatore' },
  { name: 'Meenakshi Hospital', location: 'Chennai & Tanjore' },
  { name: 'GVN Hospital', location: 'Trichy' },
  { name: 'Tagore Medical College', location: 'Chennai' },
  { name: 'MGM Healthcare', location: 'Chennai' },
  { name: 'Kamatchi Hospital', location: 'Trichy' },
];

export default function PlacementPartners() {
  return (
    <section className="placement-partners">
      <div className="placement-partners__container">
        <div className="placement-partners__header">
          <div className="placement-section-label">Our Network</div>
          <h2 className="placement-section-title">
            Our <span>Recruiters</span>
          </h2>
          <p className="placement-section-desc">
            We maintain strong partnerships with leading hospitals and healthcare institutions, ensuring our graduates access the finest career placements across India.
          </p>
        </div>

        <div className="placement-partners__scroll">
          {partners.map((p, i) => (
            <div className="placement-partner-card" key={i}>
              <div className="placement-partner-card__icon">
                <FaHospital />
              </div>
              <div className="placement-partner-card__name">{p.name}</div>
              <div className="placement-partner-card__location">
                <FiMapPin size={11} />
                {p.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
