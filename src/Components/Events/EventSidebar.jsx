import { FiFilter, FiTag, FiCalendar, FiRefreshCw, FiStar } from 'react-icons/fi';
import { MdOutlineCategory } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { categories, years, months, allTags } from '../../Data/eventsData.js';


const EventSidebar = ({
  activeCategory, setActiveCategory,
  activeYear, setActiveYear,
  activeMonth, setActiveMonth,
  activeTags, setActiveTags,
  onClearAll,
  featuredEvent,
  events = []
}) => {

  const toggleTag = (tag) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

const displayCategories = [
  {
    id: "all",
    label: "All Events",
    count: events.length,
  },
  ...Array.from(new Set(events.map(event => event.category)))
    .filter(Boolean)
    .map(category => ({
      id: category,
      label: category,
      count: events.filter(event => event.category === category).length,
    })),
];

const displayYears = Array.from(
  new Set(
    events
      .map(event => {
        const date = event.startDate || event.date;
        return date ? new Date(date).getFullYear().toString() : null;
      })
      .filter(Boolean)
  )
).sort((a, b) => b - a);
  return (
    <aside className="event-sidebar">

      {/* Featured Event */}
      {/* {featuredEvent && (
        <div className="event-sidebar__card" style={{ padding: 0 }}>
          <Link to={`/events/${featuredEvent.id}`} className="event-sidebar__featured" style={{ display: 'block' }}>
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="event-sidebar__featured-img"
            />
            <div className="event-sidebar__featured-overlay" />
            <div className="event-sidebar__featured-info">
              <span className="event-sidebar__featured-badge">
                <FiStar size={9} style={{ marginRight: 4 }} />
                Featured
              </span>
              <div className="event-sidebar__featured-title">{featuredEvent.title}</div>
            </div>
          </Link>
        </div>
      )} */}

      {/* Category Filter */}
      <div className="event-sidebar__card">
        <h3 className="event-sidebar__title">
          <MdOutlineCategory className="event-sidebar__title-icon" />
          Categories
        </h3>
        <div className="event-sidebar__cats">
          {displayCategories.map(cat => (
            <button
              key={cat.id}
              className={`event-sidebar__cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              <span className="event-sidebar__cat-count">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="event-sidebar__card">
        <h3 className="event-sidebar__title">
          <FiCalendar className="event-sidebar__title-icon" />
          Filter by Year
        </h3>

        <div className="event-sidebar__years">
          {displayYears.map(year => (
            <button
              key={year}
              className={`event-sidebar__year-btn ${
                activeYear === year ? "active" : ""
              }`}
              onClick={() =>
                setActiveYear(activeYear === year ? "" : year)
              }
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Month Filter */}
      <div className="event-sidebar__card">
        <h3 className="event-sidebar__title">
          <FiCalendar className="event-sidebar__title-icon" />
          Filter by Month
        </h3>
        <div className="event-sidebar__months">
          {months.map(mon => (
            <button
              key={mon}
              className={`event-sidebar__month-btn ${activeMonth === mon ? 'active' : ''}`}
              onClick={() => setActiveMonth(activeMonth === mon ? '' : mon)}
            >
              {mon}
            </button>
          ))}
        </div>
      </div>


      {/* Clear */}
      <button className="event-sidebar__clear" onClick={onClearAll}>
        <FiRefreshCw size={13} />
        Clear All Filters
      </button>
    </aside>
  );
};

export default EventSidebar;
