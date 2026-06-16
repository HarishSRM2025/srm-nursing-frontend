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
                <div className="about-badge-num">28+</div>
                <div className="about-badge-text">Years of<br />Excellence</div>
              </div>
            </div>
          </div>

          <div className="about-text reveal reveal-delay-1">
            <div className="about-eyebrow">About Us</div>
            <h2 className="about-title">
              Shaping <span>Compassionate</span> and Competent Nursing Professionals
            </h2>
            <p className="about-desc">SRM Trichy College of Nursing is a member of SRMIST Trust. College of Nursing was started in the year 2018.  It is located at Trichy-Chennai highways, SRM Nagar, near Samayapuram  in a spacious and green ambience with exclusive building to learn the road spectrum of nursing education, practice and research. Here Students have an opportunity to participate in curricular, co-curricular and extracurricular activities. This motivate the students to develop themselves to be globally competitive nursing professionals. 
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
