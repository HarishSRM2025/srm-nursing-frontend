import { useEffect, useRef } from "react";
import {
  FaCheckCircle, FaHospitalUser, FaBuilding, FaUniversity,
  FaStar, FaGlobeAsia, FaMicroscope, FaArrowRight
} from "react-icons/fa";
import Img from '../../assets/images/Home/About/1.JPG'

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAnchor = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-img-main">
              <img src={Img} alt=""  />

              <div className="about-badge">
                <div className="about-badge-num">8</div>
                <div className="about-badge-text">Years of<br />Excellence</div>
              </div>
            </div>
          </div>

          <div className="about-text reveal reveal-delay-1">
            <div className="about-eyebrow">About Us</div>
            <h2 className="about-title">
              Shaping <span>Compassionate</span> and Competent Nursing Professionals
            </h2>
            <p className="about-desc">SRM Trichy College of Nursing is a constituent institution of the SRM Group of
              Institutions. The institution functions under the SRM Institute of Science and Technology
              Trust. The Trust was founded by Dr. T. R. Paarivendhar, an academician and educationist,
              with the aim of promoting quality education. <br /><br />
              College of Nursing was started in the year 2018 in the month of October. It is located at
              SRM Nagar, Near Samayapuram in a spacious and green ambience with exclusive building to
              learn the road spectrum of Nursing Education, practice &amp; Research. Here students are
              encouraged to take part in curricular, Co-Curricular &amp; extra-Curricular activities. These
              motivate the students to develop themselves to be globally competitive Nursing professionals. <br /><br />
              We train competent nurses with humanity &amp; global standards in nursing profession.
              The teaching methods adopted are lecture, symposium, case study discussions,
              demonstrations, panel discussion, debates, seminars etc., classes are made lively by adopting
              multimedia projectors. We adopt mentoring system to mould the students into highly
              confident &amp; motivated persons, endow with the unique qualities of leadership.
            </p>
           
            <br />
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); handleAnchor("#contact"); }}>
              <FaArrowRight /> Get Admission Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
