import { FiBookOpen } from 'react-icons/fi';

const AboutEvent = ({ description }) => {
  return (
    <section className="event-detail-card">
      <h2 className="event-detail-section-title">
        <FiBookOpen className="event-detail-section-title__icon" /> About the Event
      </h2>
      <div className="event-detail-text">
        <p>{description}</p>
      </div>
    </section>
  );
};

export default AboutEvent;
