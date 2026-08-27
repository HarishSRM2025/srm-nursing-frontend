import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertTriangle } from 'react-icons/fi';
import axios from 'axios';
import { eventsData as fallbackEvents } from '../Data/eventsData';

// Import Section Components
import EventDetailHero from '../Components/EventDetail/EventDetailHero';
import AboutEvent from '../Components/EventDetail/AboutEvent';
import RegistrationSidebar from '../Components/EventDetail/RegistrationSidebar';

import '../Styles/event-detail.css';
import Breadcrum from '../Components/Common/Breadcrum';
import RelatedEvents from '../Components/EventDetail/RelatedEvents';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:5000';

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when page loaded or ID changed
    window.scrollTo(0, 0);

    const fetchEventDetail = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/api/events/get-event-by-id/${id}`);
        if (res.data && res.data.event) {
          const ev = res.data.event;
          const startDateObj = ev.startDate ? new Date(ev.startDate) : new Date();
          const day = String(startDateObj.getDate()).padStart(2, '0');
          const month = startDateObj.toLocaleString('en-US', { month: 'short' });
          const year = String(startDateObj.getFullYear());

          // Get all images
          const images = Array.isArray(ev.image) && ev.image.length > 0
            ? ev.image.map(img => {
                const normalizedPath = img.replace(/\\/g, '/');
                return normalizedPath.startsWith('http') ? normalizedPath : `${API_URL}/${normalizedPath}`;
              })
            : ["https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"];

          setEvent({
            id: ev._id,
            title: ev.title || "",
            category: ev.category || "Events",
            date: `${day} ${month} ${year}`,
            day,
            month,
            year,
            image: images[0],
            images: images,
            description: ev.description || "",
            tags: Array.isArray(ev.tags) ? ev.tags : [],
            venue: ev.venue || "SRM Campus, Trichy",
            registrationFee: ev.registrationFee || "Free",
            registrationLink: ev.registrationLink || "",
            status: ev.status || "Upcoming",
            isActive: ev.isActive || "ACTIVE"
          });
        } else {
          throw new Error('Event not found');
        }
      } catch (err) {
        console.error("Backend fetch failed, searching in fallback events:", err);
        const foundEvent = fallbackEvents.find(e => String(e.id) === String(id));
        if (foundEvent) {
          setEvent({
            ...foundEvent,
            id: String(foundEvent.id),
            images: [foundEvent.image],
            venue: "SRM Campus, Trichy",
            registrationFee: "Free",
            registrationLink: ""
          });
        } else {
          setEvent(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="event-detail-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div style={{ color: 'var(--primary)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem' }}>Loading Event Details...</div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="event-detail-error">
          <div className="event-detail-error__icon"><FiAlertTriangle /></div>
          <h2 className="event-detail-error__title">Event Not Found</h2>
          <p className="event-detail-error__desc">The event you are looking for does not exist or may have been removed.</p>
          <Link to="/events" className="event-detail-back-btn" style={{ justifyContent: 'center' }}>
            <FiArrowLeft /> Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      <Breadcrum title={event.title} />

      {/* Hero Header Area (Swiper Component) */}
      <EventDetailHero event={event} />

      {/* Main Grid: Left Column (Details) vs Right Column (Sidebar Action) */}
      <div className="event-detail-layout">
        
        {/* Left Column */}
        <main className="event-detail-main">
          {/* About Event */}
          <AboutEvent description={event.description} />
        </main>

        {/* Right Column (Sidebar Action) */}
        <RegistrationSidebar event={event} />

      </div>
    </div>
  );
};

export default EventDetailPage;
