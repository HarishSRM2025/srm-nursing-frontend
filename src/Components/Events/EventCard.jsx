import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const EventCard = ({ event, listMode }) => {
  return (
    <Link to={`/events/${event.id}`} className={`event-card ${listMode ? 'event-card--list' : ''}`}>
      {/* Image */}
      <div className="event-card__img-wrap">
        <img src={event.image} alt={event.title} className="event-card__img" />
        <div className="event-card__img-overlay" />
        <span className="event-card__category">{event.category}</span>
        <div className="event-card__date-badge">
          <div className="event-card__date-day">{event.day}</div>
          <div className="event-card__date-mon">{event.month}</div>
        </div>
      </div>

      {/* Body */}
      <div className="event-card__body">
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__desc">{event.description}</p>

        <div className="event-card__footer">
          <span className="event-card__read-more">
            Read More <FiArrowRight size={13} />
          </span>
          
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
