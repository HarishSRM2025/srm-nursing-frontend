import { useState } from 'react';
import { RiUserLine, RiArrowRightLine, RiBookmarkLine, RiBookmarkFill, RiCalendarLine } from 'react-icons/ri';

export default function ResearchCard({ pub }) {
  const [bookmarked, setBookmarked] = useState(false);
  const authorName = pub.faculty_name || pub.published_by || 'Faculty Member';
  const title = pub.title || pub.publication_details;
  const avatarUrl = pub.profile_image || `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName.split(',')[0].trim())}&background=4b2e83&color=fff&size=100`;

  return (
    <div className="research-card">
      <div className="research-card__bar" />
      <div className="research-card__body">
        <div className="research-card__header">
          <img
            className="research-card__avatar"
            src={avatarUrl}
            alt={authorName}
            onError={e => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName.split(',')[0].trim())}&background=4b2e83&color=fff`;
            }}
          />
          <div className="research-card__meta">
            <div className="research-card__badges">
              {pub.sno && <span className="research-card__sno">#{pub.sno}</span>}
              <span className="research-card__year">
                <RiCalendarLine /> {pub.year}
              </span>
            </div>
            <div className="research-card__authors">
              <RiUserLine />
              <span>{authorName}</span>
            </div>
          </div>
        </div>

        <h3 className="research-card__title">{title}</h3>
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
