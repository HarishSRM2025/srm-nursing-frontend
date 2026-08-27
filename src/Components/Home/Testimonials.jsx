import { useEffect, useRef, useState } from "react";
import { FaStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";

/* ─── TESTIMONIALS DATA ─── */
const testimonials = [
  { initials: "PL", quote: "The clinical training at Nightingale's own hospital was transformative. By the time I graduated, I had real-world skills that most of my peers from other colleges didn't have.", name: "Preethi Lakshmi", role: "B.Sc Nursing 2021 — Now at Apollo Chennai", stars: 5 },
  { initials: "AR", quote: "Getting placed in the NHS UK was my dream, and Nightingale made it happen. The placement cell, the IELTS coaching, and the international exposure were second to none.", name: "Arun Raghavan", role: "B.Sc Nursing 2022 — Staff Nurse, NHS London", stars: 5 },
  { initials: "SM", quote: "The M.Sc Nursing program gave me a deep academic foundation. My research guide supported me to publish two papers before I even finished my degree.", name: "Dr. Sangeetha Murali", role: "M.Sc Nursing 2020 — Assistant Professor, SRM", stars: 4.5 },
  { initials: "KV", quote: "From day one, the hostel, labs, and faculty support were outstanding. The simulation lab let us practice procedures repeatedly before entering a real ward.", name: "Kavitha Venkatesh", role: "B.Sc Nursing 2023 — RN, Houston Methodist Hospital", stars: 5 },
  { initials: "RP", quote: "The community health postings changed how I see nursing entirely. Working in rural camps under faculty supervision gave me empathy and resilience no classroom could teach.", name: "Ranjith Prabhu", role: "GNM 2022 — Community Health Officer, Tamil Nadu Govt.", stars: 5 },
];

/* ─── STARS ─── */
const Stars = ({ n }) => (
  <div className="testi-stars">
    {[1, 2, 3, 4, 5].map((s) =>
      s <= Math.floor(n) ? <FaStar key={s} /> : s - 0.5 <= n ? <FaStarHalfAlt key={s} /> : null
    )}
  </div>
);

/* ─── COMPONENT ─── */
export function Testimonials() {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Reveal animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prev = () => swiperRef.current?.slidePrev();
  const next = () => swiperRef.current?.slideNext();

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal">
          <div className="section-eyebrow">Testimonials</div>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-desc">
            Hear from those who have walked the halls of Nightingale and gone on to build extraordinary careers.
          </p>
        </div>

        {/* Swiper */}
        <div className="testimonials-swiper-wrapper reveal">
          <Swiper
            className="testi-swiper"
            modules={[Autoplay, A11y]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={600}
            grabCursor={true}
            a11y={{ enabled: true }}
            breakpoints={{
              600: { slidesPerView: 2, spaceBetween: 24 },
              900: { slidesPerView: 3, spaceBetween: 28 },
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => { setActiveIndex(swiper.realIndex); }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="testi-card">
                  <div className="testi-quote">&ldquo;</div>
                  <p className="testi-text">{t.quote}</p>
                  <Stars n={t.stars} />
                  <div className="testi-author">
                    <div className="testi-avatar">{t.initials}</div>
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controls */}
        <div className="testi-controls reveal">
          <button className="testi-btn" onClick={prev} aria-label="Previous">
            <FaChevronLeft />
          </button>
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testi-dot${activeIndex === i ? " active" : ""}`}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button className="testi-btn" onClick={next} aria-label="Next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}