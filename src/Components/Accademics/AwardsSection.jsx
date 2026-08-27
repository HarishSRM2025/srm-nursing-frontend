import { FiAward, FiStar, FiUserCheck } from 'react-icons/fi';
import { MdEmojiEvents } from 'react-icons/md';
import Img from "../../assets/images/Academics/Awards/1.JPG"

const LEFT_AWARDS = [
  {
    icon: <MdEmojiEvents />,
    iconClass: 'gold',
    title: 'College Awards',
    desc: 'Recognizing institutional excellence and academic achievements',
  },
  {
    icon: <FiAward />,
    iconClass: 'silver',
    title: 'Faculty Awards',
    desc: 'Honouring outstanding teaching, research, and mentorship',
  },
  {
    icon: <FiStar />,
    iconClass: 'teal',
    title: 'Student Awards',
    desc: 'Celebrating academic brilliance and clinical excellence',
  },
];

const RIGHT_AWARDS = [
  {
    icon: <FiUserCheck />,
    iconClass: 'teal',
    title: 'Best Nurse Award',
    desc: 'Awarded to the top-performing student nurse each year',
  },
  {
    icon: <FiAward />,
    iconClass: 'gold',
    title: 'Research Excellence',
    desc: 'For outstanding contributions to nursing research',
  },
  {
    icon: <FiStar />,
    iconClass: 'silver',
    title: 'Community Service',
    desc: 'Recognising dedicated service to the local community',
  },
];

export default function AwardsSection() {
  return (
    <section className="academic-awards">
      <div className="academic-container">
        <div className="academic-awards-header">
          <div className="academic-section-label">Recognition &amp; Honours</div>
          <h2 className="academic-section-title">
            Awards &amp; <span>Achievements</span>
          </h2>
          <p className="academic-section-subtitle" style={{ margin: '0 auto' }}>
            We celebrate excellence at every level — from institutional milestones to individual
            student achievements that reflect our commitment to outstanding nursing education.
          </p>
        </div>

        <div className="academic-awards-grid">
          <div className="academic-awards-cards">
            {LEFT_AWARDS.map((award, i) => (
              <div className="academic-award-card" key={i}>
                <div className={`academic-award-card-icon ${award.iconClass}`}>{award.icon}</div>
                <div>
                  <div className="academic-award-card-title">{award.title}</div>
                  <div className="academic-award-card-desc">{award.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="academic-awards-center-image">
            <img
              src={Img}
              alt="Awards Ceremony"
            />
            <div className="academic-awards-center-image-overlay">
              <h3>A Culture of Excellence</h3>
              <p>Celebrating outstanding achievements in nursing education and patient care.</p>
            </div>
          </div>

          <div className="academic-awards-cards">
            {RIGHT_AWARDS.map((award, i) => (
              <div className="academic-award-card" key={i}>
                <div className={`academic-award-card-icon ${award.iconClass}`}>{award.icon}</div>
                <div>
                  <div className="academic-award-card-title">{award.title}</div>
                  <div className="academic-award-card-desc">{award.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#" className="academic-btn academic-btn-primary">
            <MdEmojiEvents size={18} />
            Details Sent via Mail
          </a>
        </div>
      </div>
    </section>
  );
}
