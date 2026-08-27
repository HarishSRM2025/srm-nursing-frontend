import { FaFlask, FaChevronDown } from 'react-icons/fa';
import '../departments.css';

export default function DepartmentsHero() {
  return (
    <section className="depart-hero">
      <div className="depart-hero-overlay" />
      <div className="depart-hero-content">
        <span className="depart-hero-eyebrow">
          <FaFlask className="depart-hero-icon" />
          Academic Departments
        </span>
        <h1 className="depart-hero-title">
          Excellence Across <br />
          <span className="depart-hero-accent">Every Nursing Discipline</span>
        </h1>
        <p className="depart-hero-sub">
          Six specialized departments, one mission — shaping compassionate, competent
          nurses ready to serve communities worldwide.
        </p>
        <a href="#depart-list" className="depart-hero-scroll">
          <FaChevronDown />
        </a>
      </div>
    </section>
  );
}
