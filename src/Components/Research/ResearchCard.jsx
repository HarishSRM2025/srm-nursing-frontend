import { RiCalendarLine } from 'react-icons/ri';

export default function ResearchCard({ pub }) {
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
                <RiCalendarLine /> {pub.year}
              </span>
            </div>
          </div>
        </div>

        <h3 className="research-card__title">{title}</h3>
        {pub.researcher_name && <p className="research-card__authors">{pub.researcher_name}</p>}
        {pub.institution && <p className="research-card__description">{pub.institution}</p>}
        <div className="research-card__divider" />
        <p className="research-card__description">{pub.description}</p>
      </div>

    </div>
  );
}
