import EventCard from './EventCard';
import { FiInbox } from 'react-icons/fi';


const EventGrid = ({ events, viewMode, sectionTitle, eyebrow }) => {

  if (events.length === 0) {
    return (
      <div className="event-no-results">
        <div className="event-no-results__icon"><FiInbox /></div>
        <h3 className="event-no-results__title">No events found</h3>
        <p className="event-no-results__sub">Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div>
      {(sectionTitle || eyebrow) && (
        <div className="event-section-header">
          <div className="event-section-header__left">
            {eyebrow && <span className="event-section-header__eyebrow">{eyebrow}</span>}
            {sectionTitle && <h2 className="event-section-header__title">{sectionTitle}</h2>}
          </div>
        </div>
      )}

      <div className={`event-grid ${viewMode === 'list' ? 'event-grid--list' : ''}`}>
        {events.map(event => (
          <EventCard key={event.id} event={event} listMode={viewMode === 'list'} />
        ))}
      </div>
    </div>
  );
};

export default EventGrid;
