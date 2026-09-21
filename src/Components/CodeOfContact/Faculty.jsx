import { FaChalkboardTeacher } from 'react-icons/fa';
import Img1 from '../../assets/images/CodeOfConduct/COCForFaculty/1.JPG';
import sections from './conductContent.json';
import RuleCard from './RuleCard';

export default function Faculty() {
  const data = sections.find(s => s.id === 'faculty');

  return (
    <section id="faculty" className="coc-section coc-section--alt">
      <div className="coc-container">

        {/* Full-width Image Hero */}
        <div className="coc-hero">
          <img src={Img1} alt="Faculty teaching and mentoring" />
          <div className="coc-hero__overlay"
            style={{ background: 'linear-gradient(to right, rgba(75,46,131,0.88) 0%, rgba(47,27,92,0.5) 55%, rgba(15,140,166,0.15) 100%)' }}
          />
          <div className="coc-hero__content">
            <div className="section-chip white"><FaChalkboardTeacher style={{ fontSize: 12 }}/> Faculty</div>
            <h2 className="coc-hero__title">Code of Conduct for<br/><span>Faculty Members</span></h2>
            <p className="coc-hero__subtitle">{data.rules[0].text}</p>
          </div>
        </div>

        {/* Uniform 2-Column Rules Grid (1 to 19) */}
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
