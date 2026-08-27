import {
  RiEqualizerLine,
  RiCalendarLine,
  RiUserLine,
  RiCloseLine,
} from 'react-icons/ri';

/* ─── Shared filter content used in both sidebar and modal ─── */
function FilterContent({ years, allAuthors, yearFilter, onYearFilter, authorFilter, onAuthorFilter }) {
  const toggleAuthor = (name) => {
    onAuthorFilter(
      authorFilter.includes(name)
        ? authorFilter.filter(a => a !== name)
        : [...authorFilter, name]
    );
  };

  return (
    <>
      {/* Year filter */}
      <div className="research-filter-group">
        <div className="research-filter-group__label">
          <RiCalendarLine /> Filter by Year
        </div>
        <div className="research-year-pills">
          <button
            className={`research-year-pill${yearFilter === 'all' ? ' active' : ''}`}
            onClick={() => onYearFilter('all')}
          >
            All
          </button>
          {years.map(y => (
            <button
              key={y}
              className={`research-year-pill${yearFilter === y ? ' active' : ''}`}
              onClick={() => onYearFilter(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="research-sidebar__divider" />

      {/* Author filter */}
      <div className="research-filter-group">
        <div className="research-filter-group__label">
          <RiUserLine /> Filter by Author
        </div>
        <div className="research-author-list">
          {allAuthors.map(({ name, count }) => (
            <label
              key={name}
              className={`research-author-item${authorFilter.includes(name) ? ' checked' : ''}`}
            >
              <input
                type="checkbox"
                checked={authorFilter.includes(name)}
                onChange={() => toggleAuthor(name)}
              />
              <span className="research-author-item__name">{name}</span>
              <span className="research-author-item__count">{count}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Desktop Sidebar ─── */
export function ResearchSidebar({ years, allAuthors, yearFilter, onYearFilter, authorFilter, onAuthorFilter, filtered, total, onClear }) {
  const activeCount = (yearFilter !== 'all' ? 1 : 0) + authorFilter.length;

  return (
    <aside className="research-sidebar">
      <div className="research-sidebar__card">
        <div className="research-sidebar__header">
          <div className="research-sidebar__header-title">
            <RiEqualizerLine /> Filters
            {activeCount > 0 && (
              <span className="research-sidebar__active-badge">{activeCount}</span>
            )}
          </div>
          {activeCount > 0 && (
            <button className="research-sidebar__clear-btn" onClick={onClear}>
              Clear all
            </button>
          )}
        </div>
        <div className="research-sidebar__body">
          {/* Stats */}
          <div className="research-sidebar__stats">
            <div className="research-sidebar__stat">
              <div className="research-sidebar__stat-num">{filtered}</div>
              <div className="research-sidebar__stat-lbl">Showing</div>
            </div>
            <div className="research-sidebar__stat">
              <div className="research-sidebar__stat-num">{total}</div>
              <div className="research-sidebar__stat-lbl">Total</div>
            </div>
          </div>

          <div className="research-sidebar__divider" />

          <FilterContent
            years={years}
            allAuthors={allAuthors}
            yearFilter={yearFilter}
            onYearFilter={onYearFilter}
            authorFilter={authorFilter}
            onAuthorFilter={onAuthorFilter}
          />
        </div>
      </div>
    </aside>
  );
}

/* ─── Mobile Filter Modal ─── */
export function ResearchFilterModal({ open, onClose, years, allAuthors, yearFilter, onYearFilter, authorFilter, onAuthorFilter, filtered, onClear }) {
  const activeCount = (yearFilter !== 'all' ? 1 : 0) + authorFilter.length;

  return (
    <div
      className={`research-filter-modal__overlay${open ? ' open' : ''}`}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="research-filter-modal__sheet">
        <div className="research-filter-modal__handle-row">
          <div className="research-filter-modal__handle" />
        </div>

        <div className="research-filter-modal__header">
          <div className="research-filter-modal__title">
            <RiEqualizerLine /> Filters
            {activeCount > 0 && (
              <span className="research-filter-modal__title-badge">{activeCount} active</span>
            )}
          </div>
          <div className="research-filter-modal__header-actions">
            {activeCount > 0 && (
              <button className="research-filter-modal__clear-btn" onClick={onClear}>
                Clear all
              </button>
            )}
            <button className="research-filter-modal__close-btn" onClick={onClose}>
              <RiCloseLine />
            </button>
          </div>
        </div>

        <div className="research-filter-modal__body">
          <FilterContent
            years={years}
            allAuthors={allAuthors}
            yearFilter={yearFilter}
            onYearFilter={onYearFilter}
            authorFilter={authorFilter}
            onAuthorFilter={onAuthorFilter}
          />
        </div>

        <button className="research-filter-modal__apply-btn" onClick={onClose}>
          Apply Filters · {filtered} result{filtered !== 1 ? 's' : ''}
        </button>
      </div>
    </div>
  );
}
