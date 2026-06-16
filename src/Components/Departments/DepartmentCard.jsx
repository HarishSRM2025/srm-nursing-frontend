import { FaArrowRight } from 'react-icons/fa';

/**
 * DepartmentCard
 * Props:
 *   id          – anchor id
 *   eyebrow     – short label above title
 *   title       – department name
 *   image       – image URL
 *   imageAlt    – alt text
 *   icon        – React icon component
 *   color       – accent hex
 *   reversed    – boolean, flips columns
 *   description – string or string[]
 *   highlights  – [{ icon, text }]
 */
export default function DepartmentCard({
  id, eyebrow, title, image, imageAlt, icon: Icon,
  color = 'var(--accent)', reversed = false, description, highlights = [],
}) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section id={id} className={`depart-card${reversed ? ' depart-card--rev' : ''}`}>
      <div className="depart-card-inner">

        {/* Image column */}
        <div className="depart-card-img-wrap">
          <img src={image} alt={imageAlt || title} className="depart-card-img" />
          <div
            className="depart-card-img-badge"
            style={{ background: color }}
          >
            {Icon && <Icon />}
          </div>
        </div>

        {/* Text column */}
        <div className="depart-card-body">
          <span className="depart-card-eyebrow" style={{ color }}>{eyebrow}</span>
          <h2 className="depart-card-title">{title}</h2>
          <div className="depart-card-divider" style={{ background: color }} />

          {paragraphs.map((p, i) => (
            <p key={i} className="depart-card-para">{p}</p>
          ))}

          {highlights.length > 0 && (
            <ul className="depart-card-highlights">
              {highlights.map(({ icon: HIcon, text }, i) => (
                <li key={i} className="depart-card-hl-item">
                  <span
                    className="depart-card-hl-dot"
                    style={{ background: color }}
                  >
                    {HIcon ? <HIcon /> : <FaArrowRight />}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}
