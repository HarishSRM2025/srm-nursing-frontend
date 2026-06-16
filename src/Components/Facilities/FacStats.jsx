import React from 'react';
import {
  FiGrid, FiUsers, FiAward, FiCalendar
} from 'react-icons/fi';

const stats = [
  { icon: <FiGrid />, number: '9', suffix: '+', label: 'World-Class Facilities' },
  { icon: <FiUsers />, number: '500', suffix: '+', label: 'Students Benefiting' },
  { icon: <FiAward />, number: '26', suffix: '+', label: 'Years of Excellence' },
  { icon: <FiCalendar />, number: '100', suffix: '%', label: 'Campus Placement Support' },
];

const FacStats = () => {
  return (
    <section className="fac-stats">
      <div className="fac-stats__inner">
        <div className="fac-stats__grid">
          {stats.map((stat, i) => (
            <div className="fac-stats__item" key={i}>
              <div className="fac-stats__icon">{stat.icon}</div>
              <div className="fac-stats__number">
                {stat.number}<span>{stat.suffix}</span>
              </div>
              <div className="fac-stats__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacStats;
