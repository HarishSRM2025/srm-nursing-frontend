import { useState } from 'react';
import { 
  FiCalendar, 
  FiClock, 
  FiMapPin, 
  FiAward, 
  FiCheckCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiLink
} from 'react-icons/fi';

const RegistrationSidebar = ({ event }) => {
  const [registrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [regData, setRegData] = useState({ name: '', email: '', role: 'Student' });
  const [shareToast, setShareToast] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (regData.name && regData.email) {
      setRegistered(true);
    }
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 3000);
  };

  return (
    <aside className="event-detail-sidebar">
      <div className="event-detail-sidebar-card">
        
        {/* Date Row */}
        <div className="event-detail-sidebar-row">
          <div className="event-detail-sidebar-icon-wrap">
            <FiCalendar />
          </div>
          <div className="event-detail-sidebar-info">
            <span className="event-detail-sidebar-label">Date</span>
            <span className="event-detail-sidebar-val">{event.date}</span>
          </div>
        </div>

        {/* Time Row */}
        {/* <div className="event-detail-sidebar-row">
          <div className="event-detail-sidebar-icon-wrap">
            <FiClock />
          </div>
          <div className="event-detail-sidebar-info">
            <span className="event-detail-sidebar-label">Time</span>
            <span className="event-detail-sidebar-val">09:30 AM - 04:00 PM</span>
          </div>
        </div> */}

        {/* Venue Row */}
        <div className="event-detail-sidebar-row">
          <div className="event-detail-sidebar-icon-wrap">
            <FiMapPin />
          </div>
          <div className="event-detail-sidebar-info">
            <span className="event-detail-sidebar-label">Venue</span>
            <span className="event-detail-sidebar-val">{event.venue || "Auditorium Hall, SRM Trichy College of Nursing"}</span>
          </div>
        </div>

        {/* Certification / Registration Info */}
        {event.registrationLink && (
        <div className="event-detail-sidebar-row">
          <div className="event-detail-sidebar-icon-wrap">
            <FiAward />
          </div>
          <div className="event-detail-sidebar-info">
            <span className="event-detail-sidebar-label">Registration</span>
            <span className="event-detail-sidebar-val">{event.registrationFee || "Free (Registration Required)"}</span>
          </div>
        </div>
        )}

        {/* CTA Form and Success Message */}
        {event.registrationLink && (
          <a 
            href={event.registrationLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="event-detail-register-btn"
            style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '12px 16px', borderRadius: '8px', fontWeight: 'bold' }}
          >
            Register for Event (External Link)
          </a>
        ) }


        {/* Share buttons */}
        <div style={{ marginTop: 24, borderTop: '1px solid var(--light-gray)', paddingTop: 16 }}>
          <div className="event-detail-share">
            <span className="event-detail-share-label">Share:</span>
            <button className="event-detail-share-btn" title="Share on Facebook" onClick={() => alert("Shared on Facebook!")}><FiFacebook /></button>
            <button className="event-detail-share-btn" title="Share on Twitter" onClick={() => alert("Shared on Twitter!")}><FiTwitter /></button>
            <button className="event-detail-share-btn" title="Share on LinkedIn" onClick={() => alert("Shared on LinkedIn!")}><FiLinkedin /></button>
            <button className="event-detail-share-btn" title="Copy Link" onClick={handleShareClick}><FiLink /></button>
          </div>
          {shareToast && (
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-dark)', textAlign: 'center', marginTop: 8, fontFamily: 'var(--font-body)' }}>
              Copied link to clipboard!
            </div>
          )}
        </div>

      </div>
    </aside>
  );
};

export default RegistrationSidebar;
