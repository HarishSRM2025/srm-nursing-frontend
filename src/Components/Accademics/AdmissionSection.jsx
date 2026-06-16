import { FiDownload, FiCheckCircle, FiClipboard, FiMonitor, FiUserCheck } from 'react-icons/fi';
import { MdHowToReg } from 'react-icons/md';
import Img from "../../assets/images/Academics/Admission/1.JPG"

const STEPS = [
  {
    num: '01',
    title: 'Visit the Official Portal',
    desc: 'Access our online admission portal and create your applicant account.',
  },
  {
    num: '02',
    title: 'Fill Application Form',
    desc: 'Complete the application form with personal, academic, and contact details.',
  },
  {
    num: '03',
    title: 'Upload Documents',
    desc: 'Submit scanned copies of mark sheets, ID proof, and passport-size photos.',
  },
  {
    num: '04',
    title: 'Confirmation & Enrollment',
    desc: 'Receive your admission letter and complete the enrollment process.',
  },
];

export default function AdmissionSection() {
  return (
    <section className="academic-admission">
      <div className="academic-container">
        <div className="academic-admission-grid">
          <div className="academic-admission-image">
            <img
              src={Img}
              alt="Admission process"
            />
            <div className="academic-admission-image-badge">
              <div className="academic-admission-image-badge-icon">
                <MdHowToReg />
              </div>
              <div className="academic-admission-image-badge-text">
                <strong>100%</strong>
                <span>Online Applications</span>
              </div>
            </div>
          </div>

          <div>
            <div className="academic-section-label">Admissions Open</div>
            <h2 className="academic-section-title">
              Simple &amp; Seamless<br />
              <span>Admission Process</span>
            </h2>
            <p className="academic-section-subtitle">
              Application forms for both College and Hostel are available through our convenient
              online submission portal. Join us and take the first step toward a rewarding nursing career.
            </p>

            <div className="academic-admission-steps">
              {STEPS.map((step, i) => (
                <div className="academic-admission-step" key={i}>
                  <div className="academic-admission-step-num">{step.num}</div>
                  <div className="academic-admission-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
              <a href="#" className="academic-btn academic-btn-primary">
                <FiDownload size={16} />
                Download Details
              </a>
              <a href="#" className="academic-btn academic-btn-outline">
                <FiClipboard size={16} />
                Apply Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
