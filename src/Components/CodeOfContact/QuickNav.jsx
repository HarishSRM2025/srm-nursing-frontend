import { FaShieldAlt, FaUserGraduate, FaTshirt, FaBan, FaRegBuilding, FaChalkboardTeacher, FaTools, FaHome } from 'react-icons/fa';

const tabs = [
  { icon: <FaShieldAlt />,         label: 'Disciplinary Committee', href: '#disciplinary-committee' },
  { icon: <FaUserGraduate />,       label: 'Students',              href: '#students' },
  { icon: <FaTshirt />,             label: 'Dress Code',            href: '#dress' },
  { icon: <FaBan />,                label: 'Anti-Ragging',          href: '#ragging' },
  { icon: <FaRegBuilding />,        label: 'Principal',             href: '#principal' },
  { icon: <FaChalkboardTeacher />,  label: 'Faculty',               href: '#faculty' },
  { icon: <FaTools />,              label: 'Support Staff',         href: '#support' },
  { icon: <FaHome />,               label: 'Hostel',                href: '#hostel' },
];

export default function QuickNav() {
  return (
    <div style={{
      background: 'white',
      borderBottom: '1.5px solid var(--light-gray)',
      position: 'sticky',
      top: '68px',
      zIndex: 900,
      boxShadow: '0 4px 20px rgba(75,46,131,0.08)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 4vw, 44px)' }}>
        <div className="quicknav-scroll">
          {tabs.map((t, i) => (
            <a
              key={i}
              href={t.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 5,
                padding: 'clamp(12px, 1.8vw, 17px) clamp(14px, 2.5vw, 26px)',
                textDecoration: 'none',
                color: 'var(--text-light)',
                fontSize: 'clamp(10.5px, 1.2vw, 12px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                letterSpacing: '0.3px',
                borderBottom: '3px solid transparent',
                transition: 'var(--transition)',
                flex: '1 0 auto',
                minWidth: 'fit-content',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.borderBottomColor = 'var(--primary)';
                e.currentTarget.style.background = 'rgba(75,46,131,0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-light)';
                e.currentTarget.style.borderBottomColor = 'transparent';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>{t.icon}</span>
              {t.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}