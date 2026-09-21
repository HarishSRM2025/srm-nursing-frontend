import { FaBan } from 'react-icons/fa';
import Img from '../../assets/images/CodeOfConduct/Anti-Raging/1.png';
import sections from './conductContent.json';
import RuleCard from './RuleCard';

export default function AntiRagging() {
  const data = sections.find(s => s.id === 'ragging');

  return (
    <section id="ragging" className="coc-section coc-section--alt">
      <div className="coc-container">

        {/* Full-width Image Hero */}
        <div className="coc-hero">
          <img src={Img} alt="Anti-ragging safe campus" />
          <div className="coc-hero__overlay"
            style={{ background: 'linear-gradient(to right, rgba(150,30,30,0.9) 0%, rgba(47,27,92,0.6) 55%, transparent 100%)' }}
          />
          <div className="coc-hero__content">
            <div className="section-chip red"><FaBan style={{ fontSize: 12 }}/> Zero Tolerance</div>
            <h2 className="coc-hero__title">{data.title}</h2>
            <p className="coc-hero__subtitle">{data.subtitle}</p>
          </div>
        </div>

        {/* Uniform 2-Column Rules Grid (Numbered properly 1 to 6) */}
        <div className="coc-rules-grid">
          {data.rules.map(rule => {
            let fullText;
            if (rule.punishments) {
              fullText = rule.punishments.map(p => p.text).join('; ') + '.';
            } else if (rule.subAppeals) {
              fullText = rule.subAppeals.map(a => a.replace(/^\d+\.\s*/, '')).join('; ') + '.';
            }

            return (
              <RuleCard
                key={rule.num}
                num={rule.num}
                text={rule.text}
                fullText={fullText}
                numClass="red"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}