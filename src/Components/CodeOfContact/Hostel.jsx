import { FaHome } from 'react-icons/fa';
import Img from '../../assets/images/CodeOfConduct/Hostel/1.JPG';
import sections from './conductContent.json';
import RuleCard from './RuleCard';

export default function Hostel() {
  const data = sections.find(s => s.id === 'hostel');

  return (
    <section id="hostel" className="coc-section coc-section--alt">
      <div className="coc-container">

        {/* Full-width Image Hero */}
        <div className="coc-hero">
          <img src={Img} alt="Hostel building and premises" />
          <div
            className="coc-hero__overlay"
            style={{ background: 'linear-gradient(to right, rgba(47,27,92,0.9) 0%, rgba(75,46,131,0.55) 50%, rgba(15,140,166,0.2) 100%)' }}
          />
          <div className="coc-hero__content">
            <div className="section-chip white"><FaHome style={{ fontSize: 12 }}/> Hostel</div>
            <h2 className="coc-hero__title">{data.title}</h2>
            <p className="coc-hero__subtitle">All residents must adhere to the following hostel regulations for a safe, disciplined, and comfortable stay.</p>
          </div>
        </div>

        {/* Uniform 2-Column Rules Grid (1 to 30) */}
        <div className="coc-rules-grid">
          {data.rules.map(rule => (
            <RuleCard
              key={rule.num}
              num={rule.num}
              text={rule.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
