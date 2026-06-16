import { useEffect, useRef } from "react";
import {
  FaHospital, FaGlobeAsia, FaVrCardboard, FaChalkboardTeacher,
  FaMedal, FaHome, FaRupeeSign, FaMicroscope
} from "react-icons/fa";


const whyCards = [
  { icon: <FaHospital />, title: "500-Bed Teaching Hospital", desc: "Direct clinical training in our own hospital gives students unparalleled hands-on patient care experience from day one." },
  { icon: <FaGlobeAsia />, title: "Global Placement Network", desc: "Partnerships with hospitals in UK, USA, UAE, Canada, and Australia open international career doors for our graduates." },
  { icon: <FaVrCardboard />, title: "Advanced Simulation Lab", desc: "State-of-the-art patient simulation mannequins and virtual reality labs for realistic clinical skill training." },
  { icon: <FaChalkboardTeacher />, title: "Expert Faculty", desc: "120+ Ph.D qualified faculty with clinical expertise, research publications, and international academic exposure." },
  { icon: <FaMedal />, title: "NAAC Grade A Institution", desc: "Nationally accredited for academic quality, infrastructure, and student outcomes — a mark of true excellence." },
  { icon: <FaHome />, title: "Safe Campus Living", desc: "Secure, comfortable, and fully equipped hostel facilities for outstation students with 24/7 security and medical care." },
  { icon: <FaRupeeSign />, title: "Scholarship Support", desc: "Merit-based and need-based scholarships available. Government and management quota seats with fee concessions." },
  { icon: <FaMicroscope />, title: "Active Research Culture", desc: "Dedicated research cell, funded projects, and international publications encourage a culture of inquiry and discovery." },
];

export function WhyUs() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="why-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">Why Choose Us</div>
          <h2 className="section-title">The SRM Nursing Advantage</h2>
          <p className="section-desc">What sets us apart from other nursing institutions and why thousands of students choose us every year.</p>
        </div>
        <div className="why-grid">
          {whyCards.map((card, i) => (
            <div key={card.title} className={`why-card reveal${i % 4 === 1 ? " reveal-delay-1" : i % 4 === 2 ? " reveal-delay-2" : i % 4 === 3 ? " reveal-delay-3" : ""}`}>
              <div className="why-icon">{card.icon}</div>
              <div className="why-title">{card.title}</div>
              <p className="why-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}