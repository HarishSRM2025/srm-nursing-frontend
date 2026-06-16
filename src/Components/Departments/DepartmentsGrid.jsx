import { FaHeartbeat, FaUserMd, FaUsers, FaBaby, FaBrain, FaFemale, FaArrowRight } from 'react-icons/fa';

const DEPARTMENTS = [
  { id: 'fundamentals', label: 'Fundamentals of Nursing',    icon: FaHeartbeat, color: '#4b2e83' },
  { id: 'adult-health', label: 'Adult Health Nursing',        icon: FaUserMd,    color: '#0f8ca6' },
  { id: 'community',    label: 'Community Health Nursing',    icon: FaUsers,     color: '#0f7a5a' },
  { id: 'child-health', label: 'Child Health Nursing',        icon: FaBaby,      color: '#c2760c' },
  { id: 'mental-health',label: 'Mental Health Nursing',       icon: FaBrain,     color: '#7c3aed' },
  { id: 'midwifery',    label: 'Midwifery & OBG Nursing',     icon: FaFemale,    color: '#b5456a' },
];

export default function DepartmentsGrid() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="depart-list" className="depart-grid-section">
      <div className="depart-grid-inner">
        <div className="depart-grid-header">
          <span className="depart-grid-eyebrow">Our Departments</span>
          <h2 className="depart-grid-heading">Six Pillars of Nursing Education</h2>
          <p className="depart-grid-sub">
            Each department is equipped with dedicated faculty, simulation labs, and clinical
            placements — building nurses who excel in theory and practice.
          </p>
        </div>

        <div className="depart-grid-cards">
          {DEPARTMENTS.map(({ id, label, icon: Icon, color }, i) => (
            <button
              key={id}
              className="depart-grid-tile"
              style={{ '--tile-color': color }}
              onClick={() => scrollTo(id)}
            >
              <span className="depart-grid-tile-num">0{i + 1}</span>
              <span className="depart-grid-tile-icon-wrap"><Icon /></span>
              <span className="depart-grid-tile-label">{label}</span>
              <span className="depart-grid-tile-arrow"><FaArrowRight /></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
