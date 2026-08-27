import React from 'react';
import {
  BookOpen,
  Languages,
  Newspaper,
  Stethoscope,
  Palette,
  HeartHandshake,
  HeartPulse,
  Cross,
  ShieldAlert,
  Globe,
  Check,
  Target,
  Crosshair,
} from 'lucide-react';
import clubsData from '../Data/clubs';
import '../Styles/ClubsPage.css';

// Club images
import BookClubImg from '../assets/images/Clubs/book-club.jpg';
import LinguisticImg from '../assets/images/Clubs/linguistic-club.jpg';
import JournalImg from '../assets/images/Clubs/journal-club.png';
import SNAImg from '../assets/images/Clubs/sna.jpg';
import CulturalImg from '../assets/images/Clubs/cultural-club.png';
import WomenEmpImg from '../assets/images/Clubs/women-empowerment.png';
import WellnessImg from '../assets/images/Clubs/student-wellness-club.png';
import YRCImg from '../assets/images/Clubs/yrc.png';
import AntiRaggingImg from '../assets/images/Clubs/anti-ragging.png';
import SDGImg from '../assets/images/Clubs/sdg.png';
import Breadcrum from '../Components/Common/Breadcrum';
import AssoYRC from '../Components/Association/AssoYRC';

// Maps the "icon" string in clubs.json to an actual icon component.
const ICONS = {
  'book-open': BookOpen,
  languages: Languages,
  newspaper: Newspaper,
  stethoscope: Stethoscope,
  palette: Palette,
  'heart-handshake': HeartHandshake,
  'heart-pulse': HeartPulse,
  cross: Cross,
  'shield-alert': ShieldAlert,
  globe: Globe,
};

// Maps club ID to its image
const CLUB_IMAGES = {
  'book-club': BookClubImg,
  'linguistic-club': LinguisticImg,
  'journal-club': JournalImg,
  'student-nurses-association': SNAImg,
  'cultural-club': CulturalImg,
  'women-empowerment-club': WomenEmpImg,
  'student-wellness-club': WellnessImg,
  'Youth Red Cross (YRC) Club': YRCImg,
  'Anti-Ragging Committee': AntiRaggingImg,
  'Sustainable Development Goals (SDG) Cell': SDGImg,
};

function ClubSection({ club, index }) {
  const Icon = ICONS[club.icon] || BookOpen;
  const isEven = index % 2 === 0;
  const clubImage = CLUB_IMAGES[club.id];

  return (
    <section className={`club-section ${isEven ? 'club-section--left' : 'club-section--right'}`} data-color={club.color}>
      {/* Decorative background number */}
      <span className="club-section__bg-number" aria-hidden="true">{club.code}</span>

      <div className="club-section__container">
        {/* Section Header */}
        <div className="club-section__header">
          <div className="club-section__icon-wrap">
            <Icon size={28} strokeWidth={2} />
          </div>
          <div className="club-section__title-group">
            <span className="club-section__eyebrow">Club {club.code}</span>
            <h2 className="club-section__name">{club.name}</h2>
            <p className="club-section__tagline">{club.tagline}</p>
          </div>
        </div>

        {/* Content Grid: Image + Aim + Objectives */}
        <div className="club-section__content">
          {/* Club Image */}
          <div className="club-section__image-card">
            <div className="club-section__image-wrap">
              <img
                src={clubImage}
                alt={club.name}
                className="club-section__image"
                loading="lazy"
              />
              <div className="club-section__image-overlay">
                <Icon size={32} strokeWidth={1.5} />
              </div>
            </div>
            <div className="club-section__image-caption">
              <span>{club.shortName}</span>
            </div>
          </div>

          {/* Details Column: Aim + Objectives stacked */}
          <div className="club-section__details">
            {/* AIM Card */}
            <div className="club-section__aim-card">
              <div className="club-section__card-label">
                <Target size={16} strokeWidth={2.5} />
                <span>Aim</span>
              </div>
              <ul className="club-section__aim-list">
                {club.aim
                  .split(/(?<=\.)\s+/)
                  .filter((s) => s.trim().length > 0)
                  .map((point, i) => (
                    <li key={i}>
                      <span className="club-section__aim-bullet" aria-hidden="true" />
                      <span>{point.trim()}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* OBJECTIVES Card */}
            <div className="club-section__obj-card">
              <div className="club-section__card-label">
                <Crosshair size={16} strokeWidth={2.5} />
                <span>Objectives</span>
              </div>
              <ol className="club-section__obj-list">
                {club.objectives.map((objective, i) => (
                  <li key={i}>
                    <span className="club-section__obj-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="club-section__obj-text">
                      <Check size={14} strokeWidth={3} className="club-section__check-icon" />
                      {objective}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ClubsPage() {
  return (
    <div className="clubs-page">
      {/* ───── Hero ───── */}
      <Breadcrum title="Clubs" />


      {/* ───── Intro ───── */}
      <section className="clubs-intro">
        <div className="clubs-intro-eyebrow">— Student Organisations —</div>
        <h2>Explore Our Clubs</h2>
        <p>
          Each club runs on its own charter of aims and objectives. Scroll
          through to see what each one stands for and what it commits to
          delivering every year.
        </p>
      </section>

      {/* ───── One section per club ───── */}
      {clubsData.map((club, index) => (
        <ClubSection key={club.id} club={club} index={index} />
      ))}

      <AssoYRC/>
    </div>
  );
}
