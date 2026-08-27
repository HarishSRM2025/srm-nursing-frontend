import { FiSearch, FiGrid, FiList } from 'react-icons/fi';


const EventSearchBar = ({ searchQuery, setSearchQuery, viewMode, setViewMode, resultCount, onMobileFilter }) => {
  return (
    <div className="event-searchbar">
      <div className="event-searchbar__inner">
        {/* Mobile filter toggle */}
        <button className="event-mobile-filter-toggle" onClick={onMobileFilter}>
          <FiSearch size={15} />
          Filters
        </button>

        {/* Search Input */}
        <div className="event-searchbar__input-wrap">
          <FiSearch className="event-searchbar__icon" />
          <input
            type="text"
            className="event-searchbar__input"
            placeholder="Search events, workshops, seminars..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Result count */}
        <span className="event-searchbar__count">
          <strong>{resultCount}</strong> events found
        </span>

        {/* View toggle */}
        <div className="event-searchbar__view-toggle">
          <button
            className={`event-searchbar__view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Grid view"
          >
            <FiGrid />
          </button>
          <button
            className={`event-searchbar__view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            title="List view"
          >
            <FiList />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSearchBar;
