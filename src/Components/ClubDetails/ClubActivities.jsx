// components/ClubActivities.jsx
import { FaCalendarAlt } from 'react-icons/fa';

export default function ClubActivities({ activities }) {
  return (
    <section className="clubDetail-blue" >
      <div className="club-details-container">
        <div className="club-details-activities__header">
          <div>
            <span className="club-details-section-label">Activities</span>
            <h2 className="club-details-section-title"style={{color:"#fff"}}>
              What We <span >Do</span>
            </h2>
            <p className="club-details-section-desc" style={{color:"#fff"}}>
              From workshops and competitions to outreach camps — here's a look at the rich calendar of activities our club runs throughout the year.
            </p>
          </div>
        </div>

        <div className="club-details-activities__grid">
          {activities.map((act, i) => (
            <div className="club-details-activities__card" key={i}>
              <div className="club-details-activities__img-wrap">
                <img
                  src={act.image}
                  alt={act.title}
                  className="club-details-activities__img"
                  loading="lazy"
                />
                <span className="club-details-activities__category">{act.category}</span>
                <span className="club-details-activities__date">
                  <FaCalendarAlt />
                  {act.date}
                </span>
              </div>
              <div className="club-details-activities__body">
                <h3 className="club-details-activities__name">{act.title}</h3>
                <p className="club-details-activities__desc">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
