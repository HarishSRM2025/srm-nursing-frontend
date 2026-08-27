import { FiAward } from 'react-icons/fi';

const EventHighlights = () => {
  return (
    <section className="event-detail-card">
      <h2 className="event-detail-section-title">
        <FiAward className="event-detail-section-title__icon" /> Key Highlights & Objectives
      </h2>
      <div className="event-detail-text">
        <p>Participants attending this program will achieve the following learnings and milestones:</p>
        <ul className="event-detail-bullets">
          <li>Acquire comprehensive insight into clinical concepts, disease prevention, and recovery pathways.</li>
          <li>Understand the practical standards and ethics of emergency care workflows.</li>
          <li>Obtain hands-on exposure to life-saving measures through live simulation models.</li>
          <li>Participate in peer group projects and discussions to review complex case studies.</li>
          <li>Earn a recognized certificate of participation certified by SRM Trichy College of Nursing.</li>
        </ul>
      </div>
    </section>
  );
};

export default EventHighlights;
