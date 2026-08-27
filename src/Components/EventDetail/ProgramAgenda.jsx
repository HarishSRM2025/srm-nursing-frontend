import { FiActivity } from 'react-icons/fi';

const ProgramAgenda = () => {
  const getMockAgenda = () => {
    return [
      {
        time: "09:30 AM - 10:00 AM",
        title: "Registration & Morning Tea",
        desc: "All participants arrive, collect delegation kits, and take their seats in the venue."
      },
      {
        time: "10:00 AM - 10:30 AM",
        title: "Inaugural Ceremony & Lighting the Lamp",
        desc: "Formal introduction, invocation song, presidential address by Principal and guest welcome speech."
      },
      {
        time: "10:30 AM - 12:00 PM",
        title: "Session 1: Conceptual Framework & Core Presentation",
        desc: "Keynote presentation by the primary guest speaker, addressing core insights, statistics, and techniques."
      },
      {
        time: "12:00 PM - 01:00 PM",
        title: "Interactive Q&A Session & Panel Discussion",
        desc: "Open floor for delegates, students, and practitioners to discuss challenges and query specialists."
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Networking Lunch Break",
        desc: "Buffet lunch served at the college dining hall. Networking opportunity for students and invitees."
      },
      {
        time: "02:00 PM - 03:30 PM",
        title: "Session 2: Hands-on / Practical Demonstration",
        desc: "Live demonstration of clinical/practical skills, skit presentation, or workshop simulation depending on event theme."
      },
      {
        time: "03:30 PM - 04:00 PM",
        title: "Valedictory Ceremony & Certificate Distribution",
        desc: "Feedback collection, vote of thanks by YRC program coordinator, and distribution of participation certificates."
      }
    ];
  };

  const agenda = getMockAgenda();

  return (
    <section className="event-detail-card">
      <h2 className="event-detail-section-title">
        <FiActivity className="event-detail-section-title__icon" /> Program Schedule & Agenda
      </h2>
      <div className="event-detail-agenda">
        {agenda.map((item, index) => (
          <div key={index} className="event-detail-agenda-item">
            <div className="event-detail-agenda-dot" />
            <div className="event-detail-agenda-header">
              <span className="event-detail-agenda-time">{item.time}</span>
              <h3 className="event-detail-agenda-item-title">{item.title}</h3>
            </div>
            <p className="event-detail-agenda-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramAgenda;
