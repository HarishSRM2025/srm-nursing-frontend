import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import EventSearchBar from '../Components/Events/EventSearchBar';
import EventSidebar from '../Components/Events/EventSidebar';
import EventGrid from '../Components/Events/EventGrid';
import EventPagination from '../Components/Events/EventPagination';
import { eventsData as fallbackEvents } from '../Data/eventsData';
import '../Styles/events.css';
import Breadcrum from '../Components/Common/Breadcrum';

const ITEMS_PER_PAGE = 6;
const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:5000';

const EventsPage = () => {
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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/events/get-all-events`);
        if (res.data && Array.isArray(res.data.events)) {
          // Map backend events to match properties expected by frontend components
          const mapped = res.data.events
            .filter(ev => ev.isActive !== "INACTIVE")
            .map(ev => {
              const startDateObj = ev.startDate ? new Date(ev.startDate) : new Date();
              const day = String(startDateObj.getDate()).padStart(2, '0');
              const month = startDateObj.toLocaleString('en-US', { month: 'short' });
              const year = String(startDateObj.getFullYear());

              let imgSource = "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80";
              if (ev.image && ev.image.length > 0) {
                const normalizedPath = ev.image[0].replace(/\\/g, '/');
                imgSource = normalizedPath.startsWith('http') ? normalizedPath : `${API_URL}/${normalizedPath}`;
              }

              return {
                id: ev._id,
                title: ev.title || "",
                category: ev.category || "Events",
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
        console.error("Error fetching events:", err);
        // Fallback mapping
        const fallbackMapped = fallbackEvents.map(ev => ({
          ...ev,
          id: String(ev.id)
        }));
        setEvents(fallbackMapped);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const featuredEvent = useMemo(() => {
    return events.find(e => e.status === 'Upcoming') || events[0] || null;
  }, [events]);

  const filteredEvents = useMemo(() => {
    return events.filter(ev => {
      const matchSearch =
        !searchQuery ||
        ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory =
        activeCategory === 'all' || ev.category === activeCategory;

      const matchYear =
        !activeYear || ev.year === activeYear;

      const matchMonth =
        !activeMonth || ev.month === activeMonth;

      const matchTags =
        activeTags.length === 0 ||
        activeTags.some(t => ev.tags?.includes(t));

      return matchSearch && matchCategory && matchYear && matchMonth && matchTags;
    });
  }, [events, searchQuery, activeCategory, activeYear, activeMonth, activeTags]);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleClearAll = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setActiveYear('');
    setActiveMonth('');
    setActiveTags([]);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div>
        <Breadcrum title="Events" subtitle="Home / Events" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh', color: 'var(--primary)', fontWeight: 'bold' }}>
          Loading events...
        </div>
      </div>
    );
  }

  return (
    <div>
      <Breadcrum title="Events" subtitle="Home / Events" />
      {/* Sticky search bar */}
      <EventSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
        resultCount={filteredEvents.length}
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
          setActiveTags={setActiveTags}
          onClearAll={handleClearAll}
          featuredEvent={featuredEvent}
          events={events}
          className={mobileSidebarOpen ? 'mobile-open' : ''}
        />

        {/* Main content */}
        <main className="event-main">
          {/* Main Grid */}
          <EventGrid
            events={paginatedEvents}
            viewMode={viewMode}
            sectionTitle={searchQuery || activeCategory !== 'all' || activeYear || activeMonth || activeTags.length > 0
              ? 'Search Results'
              : 'All Events'}
            eyebrow={searchQuery || activeCategory !== 'all' || activeYear || activeMonth || activeTags.length > 0
              ? `${filteredEvents.length} found`
              : 'Browse'}
          />

          {/* Pagination */}
          {totalPages > 1 && (
            <EventPagination
              currentPage={currentPage}
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
