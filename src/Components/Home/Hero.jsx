import { useState, useRef } from "react";
import {
  FaShieldAlt, FaGraduationCap, FaGlobeAsia, FaChevronLeft, FaChevronRight, FaChevronDown,
  FaPaperPlane, FaPlayCircle, FaUsers, FaAward, FaMapMarkerAlt
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Img1 from '../../assets/images/Home/Slider/1.JPG'
import Img2 from '../../assets/images/Home/Slider/2.JPG'
import Img3 from '../../assets/images/Home/Slider/3.JPG'


const slides = [
  {
    img:Img1,
    bg: "linear-gradient(105deg,rgba(5, 18, 40, 0.88) 0%,rgba(10, 26, 64, 0.72) 55%,rgba(5, 18, 40, 0.40) 100%)",
    tag: "NAAC Grade A | INC Recognized",
    tagIcon: <FaShieldAlt />,
    title: <>Shape Your Future in<em>Nursing Excellence</em></>,
    desc: "Join Tamil Nadu's premier nursing institution. 28 years of excellence, world-class clinical training, and 98% placement success rate.",
  },
  
  {
    img:Img3,
    bg: "linear-gradient(105deg,rgba(5, 18, 40, 0.88) 0%,rgba(10, 26, 64, 0.72) 55%,rgba(5, 18, 40, 0.40) 100%)",
    tag: "Research & Innovation",
    tagIcon: <FaAward />,
    title: <>Learn, Research,<em>Lead & Inspire</em></>,
    desc: "250+ published research papers. A culture of inquiry where students become scholars and scholars become leaders.",
  },
  {
    img:Img2,
    bg: "linear-gradient(105deg,rgba(5, 18, 40, 0.88) 0%,rgba(10, 26, 64, 0.72) 55%,rgba(5, 18, 40, 0.40) 100%)",
    tag: "Global Placements",
    tagIcon: <FaGlobeAsia />,
    title: <>Careers That Span<em>The Entire Globe</em></>,
    desc: "Our graduates work across NHS UK, US hospitals, UAE, Australia, and Canada. Let Nightingale open the world for you.",
  },
];

const stats = [
  { num: "28+", label: "Years of Excellence" },
  { num: "98%", label: "Placement Rate" },
  { num: "5000+", label: "Alumni Worldwide" },
  { num: "500", label: "Bed Teaching Hospital" },
];

export default function Hero() {
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleAnchor = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
                  <div className="hero-slide-overlay" style={{ background: slide.bg, opacity: 0.7 }} />
                  <div className="hero-slide-content">
                    <div className="hero-slide-text">
                      <div className="hero-slide-tag">
                        {slide.tagIcon} {slide.tag}
                      </div>
                      <h1 className="hero-slide-title">{slide.title}</h1>
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
