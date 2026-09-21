import { FaShieldAlt } from 'react-icons/fa';
import CampusImg from '../../assets/images/Home/Slider/1.JPG';
import sections from './conductContent.json';

export default function DisciplinaryCommittee() {
  const general   = sections.find(s => s.id === 'general-rules');
  const committee = sections.find(s => s.id === 'disciplinary-committee');

  const badge = pos => {
    const p = pos.toLowerCase();
    if (p.includes('principal') && !p.includes('vice')) return 'coc-badge--principal';
    if (p.includes('vice principal')) return 'coc-badge--vp';
    if (p.includes('student')) return 'coc-badge--student';
    return 'coc-badge--prof';
  };

  return (
    <section id="disciplinary-committee" className="coc-section" style={{ background: 'white' }}>
      <div className="coc-container">

        {/* Full-width Image Hero — uniform with all other sections */}
        <div className="coc-hero">
          <img src={CampusImg} alt="SRM Trichy College of Nursing Campus" />
          <div
            className="coc-hero__overlay"
            style={{ background: 'linear-gradient(to right, rgba(47,27,92,0.92) 0%, rgba(75,46,131,0.6) 55%, transparent 100%)' }}
          />
          <div className="coc-hero__content">
            <div className="section-chip white"><FaShieldAlt style={{ fontSize: 12 }}/> Disciplinary Committee</div>
            <h2 className="coc-hero__title">
              DISCIPLINARY COMMITTEE <span>MEMBERS</span>
            </h2>
            <p className="coc-hero__subtitle">{general.paragraphs[0]}</p>
          </div>
        </div>

        {/* Institutional Header */}
        <div className="coc-inst-header">
          <div className="coc-inst-name">{general.institution}</div>
          <div className="coc-inst-address">{general.address}</div>
        </div>

        {/* Committee Members Table */}
        <div className="coc-table-wrap">
          <table className="coc-table">
            <thead>
              <tr>
                <th style={{ width: '10%' }}>S.NO</th>
                <th style={{ width: '55%' }}>NAME</th>
                <th style={{ width: '35%' }}>POSITION</th>
              </tr>
            </thead>
            <tbody>
              {committee.table.map(row => (
                <tr key={row.sno}>
                  <td className="sno">{row.sno}</td>
                  <td className="name">{row.name}</td>
                  <td><span className={`coc-badge ${badge(row.position)}`}>{row.position}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
