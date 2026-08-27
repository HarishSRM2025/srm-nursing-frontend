import { FiDownload, FiCalendar } from 'react-icons/fi';
import { MdCalendarToday } from 'react-icons/md';
import Img from "../../assets/images/Academics/AccademicCalender/1.JPG"

const EVENTS = [
  { month: 'JUN', day: '15', title: 'New Batch Orientation', desc: 'Welcome ceremony for new students' },
  { month: 'JUL', day: '01', title: 'Clinical Posting Begins', desc: 'First year clinical rotations start' },
  { month: 'AUG', day: '22', title: 'Annual Health Camp', desc: 'Community outreach programme' },
  { month: 'SEP', day: '05', title: "Teachers' Day Celebration", desc: 'Honouring our faculty members' },
  { month: 'NOV', day: '10', title: 'Research Symposium', desc: 'Annual nursing research presentations' },
];

export default function AcademicCalendarSection() {
  return (
    <section className="academic-calendar">
      <div className="academic-container">
        <div className="academic-calendar-inner">
          <div className="academic-calendar-content">
            <div className="academic-section-label">
              <MdCalendarToday size={14} />
              Academic Year 2025–26
            </div>
            <h2 className="academic-section-title">
              Academic <span>Calendar</span>
            </h2>
            <p className="academic-section-subtitle">
              Stay informed about key academic events, clinical postings, examinations, and
              celebrations throughout the year.
            </p>

            <div className="academic-calendar-events">
              {EVENTS.map((event, i) => (
                <div className="academic-calendar-event" key={i}>
                  <div className="academic-calendar-event-date">
                    <div className="academic-calendar-event-date-month">{event.month}</div>
                    <div className="academic-calendar-event-date-day">{event.day}</div>
                  </div>
                  <div className="academic-calendar-event-info">
                    <h4>{event.title}</h4>
                    <p>{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="academic-calendar-image-side">
            <div className="academic-calendar-img">
              <img
                src={Img}
                alt="Academic Calendar"
              />
            </div>
            <div className="academic-calendar-download-card">
              <div className="academic-calendar-download-card-text">
                <strong>Download Full Calendar</strong>
                <span>Academic Year 2025–26 PDF</span>
              </div>
              <a href="#" className="academic-btn academic-btn-primary" style={{ padding: '12px 20px' }}>
                <FiDownload size={16} />
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
