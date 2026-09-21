import { FaRegBuilding } from 'react-icons/fa';
import Img from '../../assets/images/CodeOfConduct/COCForPrincipal/1.jpeg';
import sections from './conductContent.json';
import RuleCard from './RuleCard';

export default function Principal() {
  const data = sections.find(s => s.id === 'principal');

  return (
    <section id="principal" className="coc-section" style={{ background: 'white' }}>
      <div className="coc-container">

        {/* Full-width Image Hero */}
        <div className="coc-hero">
          <img src={Img} alt="Principal leadership and governance" />
          <div className="coc-hero__overlay"
            style={{ background: 'linear-gradient(to right, rgba(47,27,92,0.92) 0%, rgba(75,46,131,0.55) 55%, transparent 100%)' }}
          />
          <div className="coc-hero__content">
            <div className="section-chip white"><FaRegBuilding style={{ fontSize: 12 }}/> Principal</div>
            <h2 className="coc-hero__title">Code of Conduct<br/><span>for the Principal</span></h2>
            <p className="coc-hero__subtitle">{data.intro}</p>
          </div>
        </div>

        {/* Uniform 2-Column Rules Grid (1 to 10) */}
        <div className="coc-rules-grid">
          {data.rules.map(rule => (
            <RuleCard
              key={rule.num}
              num={rule.num}
              text={rule.text}
              numClass="teal"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
