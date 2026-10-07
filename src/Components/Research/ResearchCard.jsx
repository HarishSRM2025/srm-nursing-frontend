import { RiCalendarLine, RiUserLine } from 'react-icons/ri';

import { normalizeResearch } from '../../Data/normalizeResearch';

export default function ResearchCard({ pub }) {
  pub = normalizeResearch(pub);
  const title = pub.title;

  return (
    <div className="research-card">
      <div className="research-card__bar" />
      <div className="research-card__body">
        <div className="research-card__header">
          <div className="research-card__meta">
            <div className="research-card__badges">
              {pub.sno > 0 && <span className="research-card__sno">#{pub.sno}</span>}
              <span className="research-card__year">
                <RiCalendarLine /> {pub.year || "Year not provided"}
              </span>
            </div>
          </div>
        </div>

        <h3 className="research-card__title">{title}</h3>
        <p className="research-card__authors"><RiUserLine aria-hidden="true" /><span>{pub.researcher_name || "Researcher name not provided"}</span></p>
        {pub.institution && <p className="research-card__institution">{pub.institution}</p>}
        <div className="research-card__divider" />
        {pub.description && <p className="research-card__description">{pub.description}</p>}
      </div>

    </div>
  );
}
