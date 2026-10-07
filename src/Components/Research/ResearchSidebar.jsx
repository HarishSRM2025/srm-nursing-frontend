import {
  RiEqualizerLine,
  RiCalendarLine,
  RiUserLine,
  RiCloseLine,
} from 'react-icons/ri';

/* ─── Shared filter content used in both sidebar and modal ─── */
function FilterContent({ years, yearFilter, onYearFilter, researchers, researcherFilter, onResearcherFilter }) {

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
              className={`research-year-pill${String(yearFilter) === String(y) ? ' active' : ''}`}
              onClick={() => onYearFilter(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="research-sidebar__divider" />
      <div className="research-filter-group">
        <div className="research-filter-group__label"><RiUserLine /> Filter by Researcher</div>
        <div className="research-author-list">
          {researchers.map(({ name, count }) => (
            <label key={name} className="research-author-item">
              <input type="checkbox" checked={researcherFilter.includes(name)}
                onChange={() => onResearcherFilter(researcherFilter.includes(name)
                  ? researcherFilter.filter(value => value !== name)
                  : [...researcherFilter, name])} />
              <span className="research-author-item__name">{name}</span>
              <span className="research-author-item__count">{count}</span>
            </label>
          ))}
          {!researchers.length && <p>No researchers listed.</p>}
        </div>
      </div>
    </>
  );
}

/* ─── Desktop Sidebar ─── */
export function ResearchSidebar({ years, yearFilter, onYearFilter, researchers, researcherFilter, onResearcherFilter, filtered, total, onClear }) {
  const activeCount = (yearFilter !== 'all' ? 1 : 0) + researcherFilter.length;

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
            researchers={researchers}
            researcherFilter={researcherFilter}
            onResearcherFilter={onResearcherFilter}
            yearFilter={yearFilter}
            onYearFilter={onYearFilter}
          />
        </div>
      </div>
    </aside>
  );
}

/* ─── Mobile Filter Modal ─── */
export function ResearchFilterModal({ open, onClose, years, yearFilter, onYearFilter, researchers, researcherFilter, onResearcherFilter, filtered, onClear }) {
  const activeCount = (yearFilter !== 'all' ? 1 : 0) + researcherFilter.length;

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
            researchers={researchers}
            researcherFilter={researcherFilter}
            onResearcherFilter={onResearcherFilter}
            yearFilter={yearFilter}
            onYearFilter={onYearFilter}
          />
        </div>

        <button className="research-filter-modal__apply-btn" onClick={onClose}>
          Apply Filters · {filtered} result{filtered !== 1 ? 's' : ''}
        </button>
      </div>
    </div>
  );
}
