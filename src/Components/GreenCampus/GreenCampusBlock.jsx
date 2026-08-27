import React from 'react';


/**
 * Reusable alternating image/content block.
 * Every "initiative" section component composes this so the
 * page reads consistently while each section still owns its own copy.
 */
const GreenCampusBlock = ({
  reverse = false,
  number,
  icon,
  image,
  imageAlt,
  title,
  text,
  points = [],
  metric,
}) => {
  return (
    <section className={`gc-block`}>
      <div className="green-campus-container">
        <div className={`gc-block-grid ${reverse ? 'gc-reverse' : ''}`}>
          <div className="gc-block-media">
            {number && <span className="gc-block-num">{number}</span>}
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
          <div className="gc-block-copy">
            {icon && <div className="gc-block-icon">{icon}</div>}
            <h3 className="gc-block-title">{title}</h3>
            <p className="gc-block-text">{text}</p>
            {points.length > 0 && (
              <ul className="gc-block-points">
                {points.map((p, i) => (
                  <li key={i}>{p.icon}{p.label}</li>
                ))}
              </ul>
            )}
            {metric && (
              <div className="gc-block-metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenCampusBlock;
