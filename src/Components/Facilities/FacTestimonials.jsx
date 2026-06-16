import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ImQuotesLeft } from "react-icons/im";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: 'The laboratories at SRM Trichy are exceptional. I had hands-on training that felt like a real hospital environment. The simulation rooms gave me the confidence I needed before my clinical postings.',
    name: 'Priya Lakshmi', role: 'B.Sc Nursing, 3rd Year', initials: 'PL', stars: 5,
  },
  {
    text: 'The library resources are incredible — both physical and digital. Having access to international nursing journals helped me tremendously in my research project. The librarians are always helpful.',
    name: 'Ramesh Kumar', role: 'Post Graduate Student', initials: 'RK', stars: 5,
  },
  {
    text: 'Living in the hostel has been one of the best decisions I made. The environment is safe, the community is warm, and the facility keeps us motivated. The transport service is also very punctual.',
    name: 'Anitha Selvam', role: 'B.Sc Nursing, 2nd Year', initials: 'AS', stars: 5,
  },
  {
    text: 'The laboratories at SRM Trichy are exceptional. I had hands-on training that felt like a real hospital environment. The simulation rooms gave me the confidence I needed before my clinical postings.',
    name: 'Priya Lakshmi', role: 'B.Sc Nursing, 3rd Year', initials: 'PL', stars: 5,
  },
  {
    text: 'The library resources are incredible — both physical and digital. Having access to international nursing journals helped me tremendously in my research project. The librarians are always helpful.',
    name: 'Ramesh Kumar', role: 'Post Graduate Student', initials: 'RK', stars: 5,
  },
  {
    text: 'Living in the hostel has been one of the best decisions I made. The environment is safe, the community is warm, and the facility keeps us motivated. The transport service is also very punctual.',
    name: 'Anitha Selvam', role: 'B.Sc Nursing, 2nd Year', initials: 'AS', stars: 5,
  },
];

const FacTestimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' },
      autoplay: { delay: 4000, disableOnInteraction: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    return () => swiper.destroy();
  }, []);

  return (
    <section className="fac-testimonials">
      <div className="fac-testimonials__inner">
        <div className="fac-testimonials__header">
          <span className="fac-section-label">Student Voices</span>
          <h2 className="fac-section-title">
            What Students Say About<br /><em>Our Facilities</em>
          </h2>
          <p className="fac-section-desc">
            Hear from the students who experience these facilities every day.
          </p>
        </div>

        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            {testimonials.map((t, i) => (
              <div className="swiper-slide" key={i}>
                <div className="fac-tcard">
                  <div className="fac-tcard__quote-icon"><ImQuotesLeft /></div>
                  <p className="fac-tcard__text">{t.text}</p>
                  <div className="fac-tcard__author">
                    <div className="fac-tcard__avatar">{t.initials}</div>
                    <div>
                      <div className="fac-tcard__name">{t.name}</div>
                      <div className="fac-tcard__role">{t.role}</div>
                      <div className="fac-tcard__stars">
                        {Array(t.stars).fill('★').join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default FacTestimonials;