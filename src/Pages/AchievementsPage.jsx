import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiAward, FiCalendar, FiRefreshCw } from 'react-icons/fi';
import Breadcrum from '../Components/Common/Breadcrum';
import EventSearchBar from '../Components/Events/EventSearchBar';
import EventPagination from '../Components/Events/EventPagination';
import '../Styles/events.css';
import '../Styles/achievements.css';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:5000';

export default function AchievementsPage({ type = 'student' }) {
  const title = type === 'faculty' ? 'Faculty Achievements' : 'Student Achievements';
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [year, setYear] = useState('');
  const [page, setPage] = useState(1);
  const [view, setView] = useState('grid');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);
  const [data, setData] = useState({ achievements: [], filters: { categories: [], years: [], total: 0 }, pagination: { page: 1, total: 0, totalPages: 1 } });

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`${API_URL}/api/${type}-achievements`, {
          signal: controller.signal,
          params: { search, category, year, page, limit: 6, status: 'active' },
        });
        if (!controller.signal.aborted) setData(response.data);
      } catch (err) {
        if (!controller.signal.aborted) setError(err.response?.data?.message || 'Unable to load achievements. Please try again.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [type, search, category, year, page, retry]);

  const change = setter => value => { setter(value); setPage(1); setLoading(true); };
  const clear = () => { setSearch(''); setCategory(''); setYear(''); setPage(1); };
  return (
    <div className="achievement-page">
      <Breadcrum title={title} subtitle={`Home / ${title}`} />
      <nav aria-label="Achievement type" style={{ display: 'flex', justifyContent: 'center', gap: 24, padding: 20 }}>
        <Link to="/student-achievements" aria-current={type === 'student' ? 'page' : undefined}>Student Achievements</Link>
        <Link to="/faculty-achievements" aria-current={type === 'faculty' ? 'page' : undefined}>Faculty Achievements</Link>
      </nav>
      <EventSearchBar searchQuery={search} setSearchQuery={change(setSearch)} viewMode={view} setViewMode={setView}
        resultCount={data.pagination.total} resultLabel="achievements" placeholder="Search names, awards, achievements..."
        onMobileFilter={() => setMobileOpen(value => !value)} />
      <div className="event-layout">
        <aside className={`event-sidebar ${mobileOpen ? 'mobile-open' : ''}`} aria-label="Achievement filters">
          <div className="event-sidebar__card">
            <h3 className="event-sidebar__title"><FiAward /> Categories</h3>
            <div className="event-sidebar__cats">
              {[{ name: '', count: data.filters.total }, ...data.filters.categories].map(item => (
                <button key={item.name} aria-pressed={category === item.name} className={`event-sidebar__cat-btn ${category === item.name ? 'active' : ''}`} onClick={() => change(setCategory)(item.name)}>
                  {item.name || 'All Achievements'}<span className="event-sidebar__cat-count">{item.count}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="event-sidebar__card">
            <h3 className="event-sidebar__title"><FiCalendar /> Filter by Year</h3>
            <div className="event-sidebar__years">
              {data.filters.years.map(value => <button key={value} aria-pressed={year === value} className={`event-sidebar__year-btn ${year === value ? 'active' : ''}`} onClick={() => change(setYear)(year === value ? '' : value)}>{value}</button>)}
            </div>
          </div>
          <button className="event-sidebar__clear" onClick={clear}><FiRefreshCw /> Clear All Filters</button>
        </aside>
        <main className="event-main" aria-busy={loading}>
          <h2 className="achievement-heading">{search || category || year ? 'Search Results' : `All ${title}`}</h2>
          {loading ? <p role="status">Loading achievements...</p> : error ? <div role="alert"><p>{error}</p><button className="event-sidebar__clear" onClick={() => setRetry(value => value + 1)}>Retry</button></div> : <>
            {data.achievements.length ? <div className={`achievement-results achievement-results--${view}`}>
              {data.achievements.map(item => <article className="achievement-card" key={item._id}>
                <div className="achievement-card__meta"><span><FiAward /> {item.category}</span><span>{item.year}</span></div>
                <h3>{item.award_or_title}</h3>
                <p className="achievement-card__recipient">{item.student_or_batch}</p>
                {item.description && <p className="achievement-card__description">{item.description}</p>}
                {item.institution && <p className="achievement-card__institution">{item.institution}</p>}
              </article>)}
            </div> : <div className="achievement-empty"><FiAward size={36} /><h3>No achievements found</h3><p>{search || category || year ? 'Try another search or clear the filters.' : `${title} will appear here when published.`}</p><button className="event-sidebar__clear" onClick={clear}>Clear All Filters</button></div>}
            {data.pagination.totalPages > 1 && <EventPagination currentPage={data.pagination.page} totalPages={data.pagination.totalPages} onPageChange={value => { setPage(value); setLoading(true); }} />}
          </>}
        </main>
      </div>
    </div>
  );
}
