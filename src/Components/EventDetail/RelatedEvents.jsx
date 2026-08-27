import EventCard from '../Events/EventCard';

const RelatedEvents = ({ currentEventId, category, tags, eventsData }) => {
  // Get related events (same category or sharing tags, excluding current event)
  const relatedEvents = eventsData
    .filter(e => e.id !== currentEventId && (e.category === category || e.tags?.some(t => tags?.includes(t))))
    .slice(0, 3);

  // If we don't have enough related events, fill with others
  if (relatedEvents.length < 3) {
    const ids = relatedEvents.map(e => e.id);
    const fillers = eventsData.filter(e => e.id !== currentEventId && !ids.includes(e.id)).slice(0, 3 - relatedEvents.length);
    relatedEvents.push(...fillers);
  }

  if (relatedEvents.length === 0) return null;

  return (
    <section className="event-detail-related">
      <h2 className="event-detail-related-title">Related Events</h2>
      <div className="event-detail-related-grid">
        {relatedEvents.map(rev => (
          <EventCard key={rev.id} event={rev} listMode={false} />
        ))}
      </div>
    </section>
  );
};

export default RelatedEvents;
