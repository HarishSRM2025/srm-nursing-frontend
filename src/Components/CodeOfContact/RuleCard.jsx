import { useState } from 'react';

const CHAR_LIMIT = 160;

/**
 * Helper to truncate text cleanly at a word boundary
 */
function truncateText(text, limit = 145) {
  if (!text || text.length <= limit) return text;
  const sub = text.slice(0, limit);
  const lastSpace = sub.lastIndexOf(' ');
  return (lastSpace > 70 ? sub.slice(0, lastSpace) : sub).trim() + '...';
}

/**
 * Uniform Rule Card with single-point display and inline Read More / Read Less toggle.
 *
 * Props:
 *  num        – sequential rule number
 *  text       – main rule text / lead sentence
 *  fullText   – optional expanded text for compound rules
 *  numClass   – CSS suffix for number badge color ('teal' | 'red' | '')
 */
export default function RuleCard({
  num,
  text = '',
  fullText,
  numClass = '',
}) {
  const [open, setOpen] = useState(false);

  // Big point check: either explicit continuation or length > CHAR_LIMIT
  const isBig = Boolean(fullText) || text.length > CHAR_LIMIT;

  const numBoxClass = ['coc-rule__num', numClass ? `coc-rule__num--${numClass}` : ''].filter(Boolean).join(' ');

  let content;
  if (!isBig) {
    content = <p className="coc-rule__text">{text}</p>;
  } else if (open) {
    content = (
      <p className="coc-rule__text">
        {text}
        {fullText ? ` ${fullText}` : ''}
      </p>
    );
  } else {
    const preview = fullText ? text : truncateText(text, 145);
    content = <p className="coc-rule__text">{preview}</p>;
  }

  return (
    <div className="coc-rule">
      <div className={numBoxClass}>{num}</div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {content}
        </div>

        {isBig && (
          <div style={{ marginTop: 8 }}>
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-display, inherit)',
                fontSize: '12px',
                fontWeight: 800,
                color: numClass === 'red'
                  ? '#dc2626'
                  : numClass === 'teal'
                  ? 'var(--accent, #0f8ca6)'
                  : 'var(--primary, #2f1b5c)',
                letterSpacing: '0.3px',
                padding: '2px 0',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {open ? '▲ Read Less' : '▼ Read More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
