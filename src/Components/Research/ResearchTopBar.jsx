import { RiSearchLine, RiEqualizerLine } from 'react-icons/ri';

export default function ResearchTopBar({ search, onSearch, onOpenFilter, activeFilterCount, total, filtered }) {
  return (
    <div className="research-topbar">
      <div className="research-topbar__inner">
        <div className="research-topbar__search-wrap">
          <span className="research-topbar__search-icon">
            <RiSearchLine />
          </span>
          <input
            className="research-topbar__search"
            type="text"
            placeholder="Search by title, author..."
            value={search}
            onChange={e => onSearch(e.target.value)}
          />
        </div>

        {/* Mobile filter toggle */}
        <button className="research-topbar__filter-btn" onClick={onOpenFilter}>
          <RiEqualizerLine /> Filters
          {activeFilterCount > 0 && (
            <span className="research-topbar__filter-badge">{activeFilterCount}</span>
          )}
        </button>

        <div className="research-topbar__count">
          Showing <strong>{filtered}</strong> of {total}
        </div>
      </div>
    </div>
  );
}
