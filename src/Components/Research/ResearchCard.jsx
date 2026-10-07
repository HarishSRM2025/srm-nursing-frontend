import { RiCalendarLine } from 'react-icons/ri';

export default function ResearchCard({ pub }) {
  const title = pub.title || pub.publication_details;

  return (
    <div className="research-card">
      <div className="research-card__bar" />
      <div className="research-card__body">
        <div className="research-card__header">
          <div className="research-card__meta">
            <div className="research-card__badges">
              {pub.sno && <span className="research-card__sno">#{pub.sno}</span>}
              <span className="research-card__year">
                <RiCalendarLine /> {pub.year}
              </span>
            </div>
          </div>
        </div>

        <h3 className="research-card__title">{title}</h3>
        <div className="research-card__divider" />
        <p className="research-card__description">{pub.description}</p>
      </div>

    </div>
  );
}
