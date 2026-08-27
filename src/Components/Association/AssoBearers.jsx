import React from 'react';
import { FaUserTie, FaClipboardList, FaWallet, FaBullhorn } from 'react-icons/fa';

const bearers = [
  {
    icon: <FaUserTie />,
    role: 'Leadership',
    title: 'Vice President',
    duties: [
      'Preside meetings and supervise committees',
      'Organise SNA programmes',
      'Represent students without bias',
      'Coordinate with advisor and president',
    ],
  },
  {
    icon: <FaClipboardList />,
    role: 'Administration',
    title: 'Secretary',
    duties: [
      'Assist Vice President',
      'Manage meetings and records',
      'Organise events',
      'Report activities to advisor',
    ],
  },
  {
    icon: <FaWallet />,
    role: 'Finance',
    title: 'Treasurer',
    duties: [
      'Manage funds and accounts',
      'Conduct fundraising',
      'Maintain financial records',
      'Present audited reports',
    ],
  },
];

const AssoBearers = () => {
  return (
    <section className="asso-bearers" id="bearers">
      <div className="asso-container">
        <div className="asso-section-header">
          <div className="asso-section-badge">SNA Leadership</div>
          <h2 className="asso-section-title" style={{ color: 'var(--asso-white)' }}>
            Office Bearers <span>Responsibilities</span>
          </h2>
          <p className="asso-section-sub">
            Dedicated student leaders who drive the association forward with
            commitment, accountability, and vision.
          </p>
        </div>

        <div className="asso-bearers__cards">
          {bearers.map((b, i) => (
            <div className="asso-bearer-card" key={i}>
              <div className="asso-bearer-card__icon-wrap">
                <div className="asso-bearer-card__icon-bg">{b.icon}</div>
              </div>
              <div className="asso-bearer-card__role">{b.role}</div>
              <h3 className="asso-bearer-card__title">{b.title}</h3>
              <ul className="asso-bearer-card__duties">
                {b.duties.map((d, j) => (
                  <li key={j} className="asso-bearer-card__duty">
                    <span className="asso-bearer-card__duty-dot" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssoBearers;
