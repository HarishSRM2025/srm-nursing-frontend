import { FiArrowRight, FiActivity, FiHeart, FiUser, FiBriefcase, FiUsers } from 'react-icons/fi';
import { MdMedicalServices } from 'react-icons/md';
import Img1 from "../../assets/images/Academics/MSC/1.png"
import Img2 from "../../assets/images/Academics/MSC/2.JPG"


const SPECIALITIES = [
  { name: 'Medical Surgical Nursing', seats: '8 Seats', icon: <MdMedicalServices /> },
  { name: 'Obstetric & Gynaecological Nursing', seats: '6 Seats', icon: <FiHeart /> },
  { name: 'Paediatric (Child Health) Nursing', seats: '9 Seats', icon: <FiUser /> },
  { name: 'Psychiatric (Mental Health) Nursing', seats: '9 Seats', icon: <FiActivity /> },
  { name: 'Community Health Nursing', seats: '2 Seats', icon: <FiUsers /> },
];

const CRITERIA = [
  'Candidate should be a Registered Nurse and Registered Midwife or equivalent.',
  'Minimum qualification: B.Sc Nursing / B.Sc Hons Nursing / Post Basic B.Sc Nursing with minimum 55% aggregate.',
  'Minimum one year work experience required.',
];

export default function MScNursingSection() {
  return (
    <section className="academic-msc">
      <div className="academic-container">
        <div className="academic-msc-grid">
          <div className="academic-msc-image">
            <div className="academic-msc-img-main">
              <img
                src={Img1}
                alt="MSc Nursing"
              />
            </div>
            <div className="academic-msc-img-float">
              <img
                src={Img2}
                alt="MSc Research"
              />
            </div>
          </div>

          <div>
            <div className="academic-section-label">Postgraduate Programme</div>
            <h2 className="academic-section-title">
              M.Sc. Nursing — <span>Clinical</span><br />Specialisations
            </h2>
            <p className="academic-section-subtitle">
              Our 2-year postgraduate programme offers advanced specializations in key nursing
              disciplines, combining rigorous academic training with intensive clinical practice
              for experienced nursing professionals.
            </p>

            <div className="academic-specialities">
              {SPECIALITIES.map((sp, i) => (
                <div className="academic-speciality-item" key={i}>
                  <div className="academic-speciality-name">
                    {sp.icon}
                    {sp.name}
                  </div>
                  <span className="academic-speciality-seats">{sp.seats}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '28px',
                background: 'var(--off-white)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  marginBottom: '12px',
                }}
              >
                Admission Criteria
              </div>
              {CRITERIA.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '8px',
                    fontSize: '13px',
                    color: 'var(--text-light)',
                    lineHeight: '1.6',
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent)',
                      fontWeight: '700',
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}.
                  </span>
                  {c}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#" className="academic-btn academic-btn-primary">
                Apply Now
                <FiArrowRight size={16} />
              </a>
              <a href="#" className="academic-btn academic-btn-outline">
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
