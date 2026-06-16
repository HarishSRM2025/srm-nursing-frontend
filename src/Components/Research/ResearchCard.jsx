import { useState } from 'react';
import { RiUserLine, RiArrowRightLine, RiBookmarkLine, RiBookmarkFill, RiCalendarLine } from 'react-icons/ri';

export default function ResearchCard({ pub }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="research-card">
      <div className="research-card__bar" />
      <div className="research-card__body">
        <div className="research-card__header">
          <img
            className="research-card__avatar"
            src={pub.profile_image}
            alt="author"
            onError={e => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(pub.published_by.split(',')[0])}&background=4b2e83&color=fff`;
            }}
          />
          <div className="research-card__meta">
            <div className="research-card__badges">
              <span className="research-card__sno">#{pub.sno}</span>
              <span className="research-card__year">
                <RiCalendarLine /> {pub.year}
              </span>
            </div>
            <div className="research-card__authors">
              <RiUserLine />
              <span>{pub.published_by}</span>
            </div>
          </div>
        </div>

        <h3 className="research-card__title">{pub.publication_details}</h3>
        <div className="research-card__divider" />
        <p className="research-card__description">{pub.description}</p>
      </div>

      {/* <div className="research-card__footer">
        <button className="research-card__read-btn">
          Read More <RiArrowRightLine />
        </button>
        <button
          className={`research-card__bookmark-btn${bookmarked ? ' bookmarked' : ''}`}
          onClick={() => setBookmarked(b => !b)}
          aria-label="Bookmark"
        >
          {bookmarked ? <RiBookmarkFill /> : <RiBookmarkLine />}
        </button>
      </div> */}
    </div>
  );
}
