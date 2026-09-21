import { FaTshirt, FaMale, FaFemale } from 'react-icons/fa';
import Img1 from '../../assets/images/CodeOfConduct/DressCode/1.JPG';
import Img2 from '../../assets/images/CodeOfConduct/DressCode/2.png';
import Img3 from '../../assets/images/CodeOfConduct/DressCode/3.JPG';
import sections from './conductContent.json';
import RuleCard from './RuleCard';

export default function DressCode() {
  const data = sections.find(s => s.id === 'dress');

  return (
    <section id="dress" className="coc-section" style={{ background: 'white' }}>
      <div className="coc-container">

        {/* Full-width Image Hero */}
        <div className="coc-hero">
          <img src={Img1} alt="Nursing dress code" />
          <div className="coc-hero__overlay"
            style={{ background: 'linear-gradient(to right, rgba(15,140,166,0.88) 0%, rgba(47,27,92,0.55) 55%, transparent 100%)' }}
          />
          <div className="coc-hero__content">
            <div className="section-chip white"><FaTshirt style={{ fontSize: 12 }}/> Dress Code</div>
            <h2 className="coc-hero__title">Dress Code <span>Guidelines</span></h2>
            <p className="coc-hero__subtitle">{data.intro}</p>
          </div>
        </div>

        {/* Boys & Girls side by side in balanced columns */}
        <div className="grid-2col" style={{ alignItems: 'start' }}>
          {/* Boys */}
          <div className="coc-gender-card">
            <div className="coc-gender-card__photo">
              <img src={Img2} alt="Male uniform dress code" />
              <div className="coc-gender-card__photo-overlay"
                style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(47,27,92,0.88) 100%)' }}/>
              <div className="coc-gender-card__label">
                <div className="coc-gender-card__icon"><FaMale/></div>
                <span>Boys Uniform (Rules 1–6)</span>
              </div>
            </div>
            <div className="coc-gender-card__rules">
              {data.boys.map(item => (
                <RuleCard key={item.num} num={item.num} text={item.text} />
              ))}
            </div>
          </div>

          {/* Girls */}
          <div className="coc-gender-card">
            <div className="coc-gender-card__photo">
              <img src={Img3} alt="Female uniform dress code" />
              <div className="coc-gender-card__photo-overlay"
                style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(15,140,166,0.85) 100%)' }}/>
              <div className="coc-gender-card__label">
                <div className="coc-gender-card__icon"><FaFemale/></div>
                <span>Girls Uniform (Rules 1–9)</span>
              </div>
            </div>
            <div className="coc-gender-card__rules">
              {data.girls.map(item => (
                <RuleCard key={item.num} num={item.num} text={item.text} numClass="teal" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
