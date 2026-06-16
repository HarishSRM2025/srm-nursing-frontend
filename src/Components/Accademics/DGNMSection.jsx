import { FiCalendar, FiUser, FiBook, FiCheckSquare } from 'react-icons/fi';
import { MdFemale } from 'react-icons/md';
import Img1 from "../../assets/images/Academics/DGNM/1.JPG"
import Img2 from "../../assets/images/Academics/DGNM/2.png"

const INFO_CARDS = [
  {
    icon: <FiCalendar />,
    title: 'Programme Duration',
    value: '3 Years Programme',
  },
  {
    icon: <MdFemale />,
    title: 'Gender Eligibility',
    value: 'Only Females',
  },
  {
    icon: <FiBook />,
    title: 'Minimum Qualification',
    value: '10+2 with English & 40% Marks',
  },
  {
    icon: <FiUser />,
    title: 'Age Requirement',
    value: '17 yrs on or before Dec 31',
  },
];

export default function DGNMSection() {
  return (
    <section className="academic-dgnm">
      <div className="academic-container">
        <div className="academic-dgnm-grid">
          <div className="academic-dgnm-content">
            <div className="academic-section-label">Diploma Programme</div>
            <h2 className="academic-section-title">
              DGNM — <span>Diploma in General</span><br />Nursing &amp; Midwifery
            </h2>
            <p className="academic-section-subtitle">
              Our DGNM programme is a nationally recognized three-year diploma that trains female candidates
              in the core principles of nursing and midwifery. Students gain extensive hands-on clinical
              experience in our affiliated hospitals.
            </p>

            <div className="academic-dgnm-info-cards">
              {INFO_CARDS.map((card, i) => (
                <div className="academic-dgnm-info-card" key={i}>
                  <div className="academic-dgnm-info-card-icon">{card.icon}</div>
                  <div className="academic-dgnm-info-card-title">{card.title}</div>
                  <div className="academic-dgnm-info-card-value">{card.value}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#" className="academic-btn academic-btn-accent">
                Apply for DGNM
                <FiCheckSquare size={16} />
              </a>
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  alignSelf: 'center',
                  transition: 'var(--transition)',
                }}
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div className="academic-dgnm-image-stack">
            <div className="academic-dgnm-img-main">
              <img
                src={Img1}
                alt="DGNM Students"
              />
            </div>
            <div className="academic-dgnm-img-secondary">
              <img
                src={Img2}
                alt="DGNM Lab"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
