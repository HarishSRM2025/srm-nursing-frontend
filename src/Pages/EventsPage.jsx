import { useState, useEffect } from 'react';
import axios from 'axios';
import EventSearchBar from '../Components/Events/EventSearchBar';
import EventSidebar from '../Components/Events/EventSidebar';
import EventGrid from '../Components/Events/EventGrid';
import EventPagination from '../Components/Events/EventPagination';

import '../Styles/events.css';
import Breadcrum from '../Components/Common/Breadcrum';

const ITEMS_PER_PAGE = 6;
const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:5000';

const EventsPage = ({ scope = 'events' }) => {
  const pageTitle = scope === 'cne' ? 'CNE' : 'Events';
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeYear, setActiveYear] = useState('');
  const [activeMonth, setActiveMonth] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 1 });
  const [filters, setFilters] = useState({ categories: [], years: [], total: 0 });
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError('');
    const fetchEvents = async () => {
      try {
        const res = await axios.get(API_URL + '/api/events/get-all-events', {
          signal: controller.signal,
          params: { scope, page: currentPage, limit: ITEMS_PER_PAGE, search: searchQuery,
            category: activeCategory === 'all' ? '' : activeCategory, year: activeYear,
            month: activeMonth, tags: activeTags.join(','), activeOnly: 'true', includeFilters: 'true' }
        });
        if (controller.signal.aborted) return;
        setPagination(res.data.pagination);
        setFilters(res.data.filters);
        if (res.data && Array.isArray(res.data.events)) {
          // Map backend events to match properties expected by frontend components
          const mapped = res.data.events
            .filter(ev => ev.isActive !== "INACTIVE")
            .map(ev => {
              const startDateObj = ev.startDate ? new Date(ev.startDate) : new Date();
              const day = startDateObj.toLocaleString('en-GB', { day: '2-digit', timeZone: 'Asia/Kolkata' });
              const month = startDateObj.toLocaleString('en-US', { month: 'short', timeZone: 'Asia/Kolkata' });
              const year = startDateObj.toLocaleString('en-GB', { year: 'numeric', timeZone: 'Asia/Kolkata' });

              let imgSource = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80";
              if (ev.image && ev.image.length > 0) {
                const normalizedPath = ev.image[0].replace(/\\/g, '/');
                imgSource = normalizedPath.startsWith('http') ? normalizedPath : `${API_URL}/${normalizedPath}`;
              }

              return {
                id: ev._id,
                title: ev.title || "",
                category: ev.category || "Uncategorized",
                date: `${day} ${month} ${year}`,
                day,
                month,
                year,
                image: imgSource,
                description: ev.description || "",
                tags: Array.isArray(ev.tags) ? ev.tags : [],
                venue: ev.venue || "SRM Campus, Trichy",
                registrationFee: ev.registrationFee || "Free",
                registrationLink: ev.registrationLink || "",
                status: ev.status || "Upcoming",
                isActive: ev.isActive || "ACTIVE"
              };
            });
          setEvents(mapped);
        } else {
          setEvents([]);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setEvents([]);
          setError(err.response?.data?.message || 'Unable to load events. Please try again.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    const timer = setTimeout(fetchEvents, 250);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [scope, currentPage, searchQuery, activeCategory, activeYear, activeMonth, activeTags, retry]);

  const totalPages = pagination.totalPages;
  const page = pagination.page;

  const handleClearAll = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setActiveYear('');
    setActiveMonth('');
    setActiveTags([]);
    setCurrentPage(1);
  };


  return (
    <div>
      <Breadcrum title={pageTitle} subtitle={`Home / ${pageTitle}`} />
      {/* Sticky search bar */}
      <EventSearchBar
        searchQuery={searchQuery}
        setSearchQuery={(value) => { setSearchQuery(value); setCurrentPage(1); }}
        viewMode={viewMode}
        setViewMode={setViewMode}
        resultCount={pagination.total}
        onMobileFilter={() => setMobileSidebarOpen(p => !p)}
      />

      {/* Main Layout */}
      <div className="event-layout">
        {/* Sidebar */}
        <EventSidebar
          activeCategory={activeCategory}
          setActiveCategory={(val) => { setActiveCategory(val); setCurrentPage(1); }}
          activeYear={activeYear}
          setActiveYear={(val) => { setActiveYear(val); setCurrentPage(1); }}
          activeMonth={activeMonth}
          setActiveMonth={(val) => { setActiveMonth(val); setCurrentPage(1); }}
          activeTags={activeTags}
          setActiveTags={(value) => { setActiveTags(value); setCurrentPage(1); }}
          onClearAll={handleClearAll}
          filters={filters}
          allLabel={scope === 'cne' ? 'All CNE' : 'All Events'}
          events={events}
          className={mobileSidebarOpen ? 'mobile-open' : ''}
        />

        {/* Main content */}
        <main className="event-main">
          {/* Main Grid */}
          {loading ? <p role="status">Loading events...</p> : error ? <div role="alert"><p>{error}</p><button onClick={() => setRetry(value => value + 1)}>Retry</button></div> : <EventGrid
            events={events}
            viewMode={viewMode}
            sectionTitle={searchQuery || activeCategory !== 'all' || activeYear || activeMonth || activeTags.length > 0
              ? 'Search Results'
              : `All ${pageTitle}`}
            eyebrow={searchQuery || activeCategory !== 'all' || activeYear || activeMonth || activeTags.length > 0
              ? `${pagination.total} found`
              : 'Browse'}
          />}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <EventPagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(p) => { setCurrentPage(p); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default EventsPage;
