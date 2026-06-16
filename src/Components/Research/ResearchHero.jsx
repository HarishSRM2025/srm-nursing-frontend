import '../styles/ResearchHero.css';
import { RiFlaskLine } from 'react-icons/ri';

export default function ResearchHero({ total, years }) {
  return (
    <section className="research-hero">
      <div className="research-hero__badge">
        <RiFlaskLine /> Department of Nursing Research
      </div>
      <h1 className="research-hero__title">
        Research &amp; <span>Publications</span>
      </h1>
      <p className="research-hero__subtitle">
        Advancing nursing science through evidence-based inquiry, innovative studies, and collaborative scholarship.
      </p>
      <div className="research-hero__stats">
        <div>
          <div className="research-hero__stat-number">{total}</div>
          <div className="research-hero__stat-label">Publications</div>
        </div>
        <div>
          <div className="research-hero__stat-number">{years}</div>
          <div className="research-hero__stat-label">Years of Research</div>
        </div>
        <div>
          <div className="research-hero__stat-number">15+</div>
          <div className="research-hero__stat-label">Faculty Authors</div>
        </div>
      </div>
    </section>
  );
}
