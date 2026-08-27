import { FiArrowRight, FiRefreshCw, FiTarget, FiStar } from 'react-icons/fi';
import { MdCastForEducation, MdGroups } from 'react-icons/md';
import Img1 from "../../assets/images/Academics/CNE/1.JPG"
import Img2 from "../../assets/images/Academics/CNE/2.JPG"
import Img3 from "../../assets/images/Academics/CNE/3.JPG"

const CNE_CARDS = [
  {
    title: 'Skill Enhancement Workshops',
    desc: 'Hands-on workshops covering advanced clinical procedures, equipment handling, and patient management techniques for practicing nurses.',
    icon: <FiTarget />,
    image: Img1,
  },
  {
    title: 'Academic Conferences & Seminars',
    desc: 'Regular seminars featuring leading healthcare professionals, covering emerging trends, research findings, and best practices in nursing.',
    icon: <MdGroups />,
    image: Img2,
  },
  {
    title: 'Certification Programmes',
    desc: 'Nationally accredited short-term certification courses that keep nursing professionals at the forefront of modern healthcare delivery.',
    icon: <FiStar />,
    image: Img3,
  },
];

export default function CNESection() {
  return (
    <section className="academic-cne">
      <div className="academic-container">
        <div className="academic-cne-header">
          <div className="academic-section-label">Continuing Education</div>
          <h2 className="academic-section-title">
            CNE — <span>Continuing Nursing Education</span>
          </h2>
          <p className="academic-section-subtitle" style={{ margin: '0 auto' }}>
            We conduct Continuing Nursing Education programmes regularly to update healthcare professionals
            with the latest advances in clinical practice, research, and patient care.
          </p>
        </div>

        <div className="academic-cne-grid">
          {CNE_CARDS.map((card, i) => (
            <div className="academic-cne-card" key={i}>
              <div className="academic-cne-card-image">
                <img src={card.image} alt={card.title} />
                <div className="academic-cne-card-image-overlay">{card.icon}</div>
              </div>
              <div className="academic-cne-card-body">
                <h3 className="academic-cne-card-title">{card.title}</h3>
                <p className="academic-cne-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="academic-cne-banner" style={{ marginTop: '40px' }}>
          <div className="academic-cne-banner-text">
            <h3>Stay Updated. Stay Ahead.</h3>
            <p>Register for upcoming CNE programmes and advance your professional credentials.</p>
          </div>
          <a href="#" className="academic-cne-btn-white">
            <FiRefreshCw size={16} />
            Register for CNE
          </a>
        </div>
      </div>
    </section>
  );
}
