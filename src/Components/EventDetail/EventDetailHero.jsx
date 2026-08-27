import { FiEye, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const EventDetailHero = ({ event }) => {
  // Get a set of gallery images for the swiper based on the event context
  const getEventImages = () => {
    if (event.images && event.images.length > 0) {
      return event.images;
    }
    const list = [event.image];
    if (event.category === 'Workshop' || event.tags?.includes('Workshop')) {
      list.push(
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
        "https://images.unsplash.com/photo-1584982751601-97dea52f738e?w=800&q=80",
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
      );
    } else {
      list.push(
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80"
      );
    }
    return list;
  };

  const images = getEventImages();

  return (
    <header className="event-detail-hero">
      <div className="event-detail-hero__card">
        <div className="event-detail-hero__img-wrap">
          <Swiper
            className="event-detail-hero__swiper"
            modules={[Autoplay, Pagination, Navigation, A11y]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            navigation={true}
            a11y={{ enabled: true }}
          >
            {images.map((imgUrl, idx) => (
              <SwiperSlide key={idx} className="event-detail-hero__swiper-slide">
                <img src={imgUrl} alt={`${event.title} slide ${idx + 1}`} className="event-detail-hero__swiper-img" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="event-detail-hero__img-overlay" style={{ zIndex: 5, pointerEvents: 'none' }} />
        </div>
        <div className="event-detail-hero__content">
          <div className="event-detail-hero__meta">
            <span className="event-detail-hero__cat">{event.category}</span>
            {/* <span className="event-detail-hero__views">
              <FiEye size={14} /> {event.views} views
            </span> */}
          </div>
          <h1 className="event-detail-hero__title">{event.title}</h1>
          <div className="event-detail-hero__info-strip">
            <div className="event-detail-hero__info-item">
              <FiCalendar className="event-detail-hero__info-icon" />
              <span>{event.date}</span>
            </div>
            <div className="event-detail-hero__info-item">
              <FiClock className="event-detail-hero__info-icon" />
              <span>09:30 AM - 04:00 PM</span>
            </div>
            <div className="event-detail-hero__info-item">
              <FiMapPin className="event-detail-hero__info-icon" />
              <span>SRM Campus, Trichy</span>
            </div>
          </div>
          {event.tags && (
            <div className="event-detail-hero__tags">
              {event.tags.map((tag, idx) => (
                <span key={idx} className="event-detail-hero__tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default EventDetailHero;
