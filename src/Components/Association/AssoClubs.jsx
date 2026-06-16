import React from 'react';
import { FaHeart, FaBook, FaLanguage, FaPenNib } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const clubs = [
  {
    icon: <FaHeart />,
    name: 'Youth Red Cross (YRC)',
    slug:"nursing-excellence-club",
    tag: 'Service',
    desc: 'Promotes humanitarian service, health awareness, and community welfare through active campaigns and outreach programs.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&q=80',
  },
  {
    icon: <FaBook />,
    name: 'Book Club',
    slug:"research-innovation-club",
    tag: 'Academics',
    desc: 'Encourages reading, critical thinking, and communication skills by exploring literature across genres and disciplines.',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&q=80',
  },
  {
    icon: <FaLanguage />,
    name: 'Linguistic Club',
    slug:"cultural-arts-club",
    tag: 'Communication',
    desc: 'Enhances communication, language proficiency, and cultural awareness through events, debates, and language workshops.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&q=80',
  },
  {
    icon: <FaPenNib />,
    name: 'Journal Club',
    slug:"sports-wellness-club",
    tag: 'Research',
    desc: 'Focuses on research analysis and evidence-based nursing practice by reviewing the latest scientific publications.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80',
  },
];

const AssoClubs = () => {
  return (
    <section className="asso-clubs" id="clubs">
      <div className="asso-container">
        <div className="asso-section-header">
          <div className="asso-section-badge">Campus Life</div>
          <h2 className="asso-section-title">
            Student <span>Clubs &amp; Activities</span>
          </h2>
          <p className="asso-section-sub">
            Diverse platforms for holistic development — from humanitarian service
            to research excellence and communication mastery.
          </p>
        </div>

        <div className="asso-clubs__grid">
          {clubs.map((club, i) => (
            <Link to={`/clubs/${club.slug}`} style={{textDecoration:"none"}} key={i} className="asso-club-card">
              <div className="asso-club-card__image">
                <img src={club.image} alt={club.name} />
                <div className="asso-club-card__image-overlay" />
                <div className="asso-club-card__icon-badge">{club.icon}</div>
                <div className="asso-club-card__img-title">{club.name}</div>
              </div>
              <div className="asso-club-card__body">
                <p className="asso-club-card__desc">{club.desc}</p>
                <span className="asso-club-card__tag">{club.tag}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssoClubs;
