import { FaUserGraduate } from 'react-icons/fa';
import Img1 from '../../assets/images/CodeOfConduct/Student/1.JPG';
import sections from './conductContent.json';
import RuleCard from './RuleCard';

export default function Students() {
  const data = sections.find(s => s.id === 'students');

  return (
    <section id="students" className="coc-section coc-section--alt">
      <div className="coc-container">

        {/* Full-width Image Hero */}
        <div className="coc-hero">
          <img src={Img1} alt="Students adhering to code of conduct" />
          <div className="coc-hero__overlay"
            style={{ background: 'linear-gradient(to right, rgba(47,27,92,0.88) 0%, rgba(75,46,131,0.5) 55%, rgba(15,140,166,0.2) 100%)' }}
          />
          <div className="coc-hero__content">
            <div className="section-chip white"><FaUserGraduate style={{ fontSize: 12 }}/> Students</div>
            <h2 className="coc-hero__title">{data.institutionHeader}</h2>
            <p className="coc-hero__subtitle">{data.intro}</p>
          </div>
        </div>

        {/* Uniform 2-Column Rules Grid (1 to 15) */}
        <div className="coc-rules-grid">
          {data.rules.map(rule => {
            const fullText = rule.subClauses ? rule.subClauses.join(' ') : undefined;
            return (
              <RuleCard
                key={rule.num}
                num={rule.num}
                text={rule.text}
                fullText={fullText}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
