import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  FaShieldAlt, FaGraduationCap, FaGlobeAsia, FaChevronLeft, FaChevronRight, FaChevronDown,
  FaPaperPlane, FaPlayCircle, FaUsers, FaAward, FaMapMarkerAlt
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";


export default function Hero() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/slider/get-slider`);
        if (response.data && Array.isArray(response.data.slider) && response.data.slider.length > 0) {
          const activeSliders = response.data.slider
            .filter(item => item.Status === "Active")
            .map(item => ({
              img: `${import.meta.env.VITE_BACKEND_API_URL}/uploads/${item.Image}`,
              bg: "linear-gradient(105deg,rgba(5, 18, 40, 0.88) 0%,rgba(10, 26, 64, 0.72) 55%,rgba(5, 18, 40, 0.40) 100%)",
              tag: item.Tag,
              title: item.Title,
              desc: item.Description,
              order: item.Order
            }));
          if (activeSliders.length > 0) {
            setSlides(activeSliders);
          }
        }
      } catch (err) {
        console.error("Error fetching slider from database, using fallback slides:", err);
      }
    };
    fetchSlides();
  }, []);

  const handleAnchor = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-swiper-wrapper">
        <Swiper
          className="hero-swiper-container"
          modules={[Autoplay, EffectFade, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={900}
          a11y={{ enabled: true }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => { setActive(swiper.realIndex); }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div className={`hero-slide${isActive ? " active" : ""}`}>
                  <div className="hero-slide-img" style={{ backgroundImage: `url(${slide.img})` }} />
                  <div className="hero-slide-overlay"  />
                  <div className="hero-slide-content">
                    <div className="hero-slide-text">
                      <div className="hero-slide-tag">
                        {slide.tag}
                      </div>
                      {typeof slide.title === 'string' ? (
                        <h1 className="hero-slide-title" dangerouslySetInnerHTML={{ __html: slide.title }} />
                      ) : (
                        <h1 className="hero-slide-title">{slide.title}</h1>
                      )}
                      <p className="hero-slide-desc">{slide.desc}</p>
                      <div className="hero-slide-btns">
                        <a
                          href="#contact"
                          className="btn-primary"
                          onClick={(e) => { e.preventDefault(); handleAnchor("#contact"); }}
                        >
                          <FaPaperPlane /> Apply Now
                        </a>
                        <a
                          href="#programs"
                          className="btn-outline"
                          onClick={(e) => { e.preventDefault(); handleAnchor("#programs"); }}
                        >
                          <FaPlayCircle /> Explore Programs
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="hero-nav-btn hero-nav-prev" onClick={() => swiperRef.current?.slidePrev()}>
          <FaChevronLeft />
        </button>
        <button className="hero-nav-btn hero-nav-next" onClick={() => swiperRef.current?.slideNext()}>
          <FaChevronRight />
        </button>

        <div className="hero-pagination">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-pag-dot${active === i ? " active" : ""}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
            />
          ))}
        </div>

      
      </div>
    </section>
  );
}
