import React from 'react';
import { FaVoteYea, FaCalendarCheck } from 'react-icons/fa';

const electionData = [
  { sno: 1, position: 'Vice President', member: 'Ms. Neeana D', year: 2026 },
  { sno: 2, position: 'Secretary',      member: 'Ms. Dharani V', year: 2026 },
  { sno: 3, position: 'Treasurer',      member: 'Mr. Adil Abdurohman', year: 2026 },
  { sno: 4, position: 'Joint Secretary',member: 'Ms. Bharathi S', year: 2026 },
];

const AssoElection = () => {
  return (
    <section className="asso-election" id="election">
      <div className="asso-container">
        <div className="asso-section-header">
          <div className="asso-section-badge">Democratic Governance</div>
          <h2 className="asso-section-title">
            SNA Election — <span>2026</span>
          </h2>
        </div>

        <div className="asso-election__inner">
          {/* Left */}
          <div className="asso-election__info">
            <div className="asso-election__year-badge">
              <FaCalendarCheck /> 2026 Elected Body
            </div>
            <p>
              Elections are conducted annually through a transparent democratic process
              empowering students to lead and shape the future of the Student Nurses
              Association at SRMTCON.
            </p>
            <p>
              The newly elected office bearers are responsible for fostering student
              development, community engagement, and professional growth throughout
              their term.
            </p>
            <div className="asso-election__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                alt="SNA election event"
              />
            </div>
          </div>

          {/* Table */}
          <div className="asso-election__table-wrap">
            <div className="asso-election__table-head">
              <h3><FaVoteYea style={{ marginRight: 8 }} />Elected Representatives</h3>
            </div>
            <table className="asso-election__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Position</th>
                  <th>Member</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {electionData.map((row) => (
                  <tr key={row.sno}>
                    <td>{row.sno}</td>
                    <td>{row.position}</td>
                    <td>{row.member}</td>
                    <td>{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssoElection;
