import { useState, useEffect } from 'react';
import { FaHeartbeat, FaUserMd, FaUsers, FaBaby, FaBrain, FaFemale } from 'react-icons/fa';

const TABS = [
  { id: 'fundamentals',  label: 'Fundamentals',   icon: FaHeartbeat },
  { id: 'adult-health',  label: 'Adult Health',    icon: FaUserMd    },
  { id: 'community',     label: 'Community',       icon: FaUsers     },
  { id: 'child-health',  label: 'Child Health',    icon: FaBaby      },
  { id: 'mental-health', label: 'Mental Health',   icon: FaBrain     },
  { id: 'midwifery',     label: 'Midwifery & OBG', icon: FaFemale    },
];

export default function DepartmentsNav({ activeId }) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`depart-nav${stuck ? ' depart-nav--stuck' : ''}`}>
      <div className="depart-nav-inner">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`depart-nav-tab${activeId === id ? ' depart-nav-tab--active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            <Icon className="depart-nav-tab-icon" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
