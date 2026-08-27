import { FiUsers } from 'react-icons/fi';

const DistinguishedSpeakers = ({ event }) => {
  const getMockSpeakers = () => {
    if (event.category === 'Workshop' || event.tags?.includes('Workshop')) {
      return [
        {
          name: "Dr. R. Shalini, Ph.D. (Nursing)",
          title: "Professor & Head of Medical Surgical Nursing",
          org: "SRM Trichy College of Nursing",
          avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
        },
        {
          name: "Mr. Abraham Thomas, M.Sc (N)",
          title: "Chief Emergency Care Specialist",
          org: "Lifeline Hospitals & Trauma Care Center",
          avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80"
        }
      ];
    } else if (event.tags?.includes('Awareness') || event.tags?.includes('Health')) {
      return [
        {
          name: "Dr. K. Jayachandran, MBBS, MD (Oncology)",
          title: "Senior Consultant Oncologist",
          org: "Harsham Cancer Foundation & Research Institute",
          avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&q=80"
        },
        {
          name: "Dr. S. Premalatha, M.Sc (N), Ph.D.",
          title: "Vice Principal & Community Health Lead",
          org: "SRM Trichy College of Nursing",
          avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&q=80"
        }
      ];
    } else {
      return [
        {
          name: "Prof. Dr. M. Devaki, M.Sc (N), Ph.D.",
          title: "Principal & Academic Advisory Committee Chair",
          org: "SRM Trichy College of Nursing",
          avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?w=150&q=80"
        },
        {
          name: "Mrs. G. Priya, M.Sc (N)",
          title: "YRC Program Officer & Assistant Professor",
          org: "SRM Trichy College of Nursing",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
        }
      ];
    }
  };

  const speakers = getMockSpeakers();

  return (
    <section className="event-detail-card">
      <h2 className="event-detail-section-title">
        <FiUsers className="event-detail-section-title__icon" /> Distinguished Guest Speakers
      </h2>
      <div className="event-detail-speakers">
        {speakers.map((speaker, index) => (
          <div key={index} className="event-detail-speaker-card">
            <img src={speaker.avatar} alt={speaker.name} className="event-detail-speaker-avatar" />
            <div className="event-detail-speaker-info">
              <span className="event-detail-speaker-name">{speaker.name}</span>
              <span className="event-detail-speaker-title">{speaker.title}</span>
              <span className="event-detail-speaker-org">{speaker.org}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DistinguishedSpeakers;
