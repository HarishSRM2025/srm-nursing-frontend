import { useState, useMemo, useEffect } from 'react';
import "../Styles/research.css";
import { publications as defaultPublications, getUniqueYears, getAuthorsWithCount } from '../Data/publications';
import ResearchTopBar from '../Components/Research/ResearchTopBar';
import { ResearchSidebar, ResearchFilterModal } from '../Components/Research/ResearchSidebar';
import ResearchGrid from '../Components/Research/ResearchGrid';
import ResearchPagination from '../Components/Research/ResearchPagination';
import Breadcrum from '../Components/Common/Breadcrum';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ITEMS_PER_PAGE = 9;

export default function ResearchPage() {
  const [data, setData] = useState(defaultPublications);
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [authorFilter, setAuthorFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch publications from backend API
  useEffect(() => {
    const fetchPubs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/publication?status=active`);
        if (res.ok) {
          const json = await res.json();
          if (json && json.publications && json.publications.length > 0) {
            setData(json.publications);
          } else if (Array.isArray(json) && json.length > 0) {
            setData(json);
          }
        }
      } catch (err) {
        console.warn('Using local publication dataset:', err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPubs();
  }, []);

  const years = useMemo(() => getUniqueYears(data), [data]);
  const allAuthors = useMemo(() => getAuthorsWithCount(data), [data]);

  const filtered = useMemo(() => {
    let list = data;
    if (yearFilter !== 'all') {
      list = list.filter(p => Number(p.year) === Number(yearFilter));
    }
    if (authorFilter.length) {
      list = list.filter(p => {
        const author = p.faculty_name || p.published_by || '';
        return authorFilter.some(a => author.toLowerCase().includes(a.toLowerCase()));
      });
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => {
        const title = (p.title || p.publication_details || '').toLowerCase();
        const author = (p.faculty_name || p.published_by || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        return title.includes(q) || author.includes(q) || desc.includes(q);
      });
    }
    return list;
  }, [data, search, yearFilter, authorFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleSearch = v => { setSearch(v); setPage(1); };
  const handleYearFilter = v => { setYearFilter(v); setPage(1); };
  const handleAuthorFilter = v => { setAuthorFilter(v); setPage(1); };
  const clearAll = () => { setYearFilter('all'); setAuthorFilter([]); setPage(1); };

  const activeFilterCount = (yearFilter !== 'all' ? 1 : 0) + authorFilter.length;

  return (
    <div className="research-page">
      <Breadcrum title="Research"/>
      <ResearchTopBar
        search={search}
        onSearch={handleSearch}
        onOpenFilter={() => setModalOpen(true)}
        activeFilterCount={activeFilterCount}
        total={data.length}
        filtered={filtered.length}
      />

      <div className="research-page__layout">
        
        {/* Right: Desktop sidebar */}
        <ResearchSidebar
          years={years}
          allAuthors={allAuthors}
          yearFilter={yearFilter}
          onYearFilter={handleYearFilter}
          authorFilter={authorFilter}
          onAuthorFilter={handleAuthorFilter}
          filtered={filtered.length}
          total={data.length}
          onClear={clearAll}
        />
        {/* Left: Cards grid */}
        <main className="research-page__main">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-light)' }}>
              Loading publications...
            </div>
          ) : (
            <>
              <ResearchGrid publications={paginated} />
              <ResearchPagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
                totalItems={filtered.length}
                itemsPerPage={ITEMS_PER_PAGE}
              />
            </>
          )}
        </main>

      </div>

      {/* Mobile: filter modal */}
      <ResearchFilterModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        years={years}
        allAuthors={allAuthors}
        yearFilter={yearFilter}
        onYearFilter={handleYearFilter}
        authorFilter={authorFilter}
        onAuthorFilter={handleAuthorFilter}
        filtered={filtered.length}
        onClear={clearAll}
      />

      <footer className="research-page__footer">
        © 2026 <strong>Department of Nursing</strong> · All publications reserved
      </footer>
    </div>
  );
}
