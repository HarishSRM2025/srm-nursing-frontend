import { useState, useMemo, useEffect } from 'react';
import "../Styles/research.css";
import { publications as defaultPublications, getUniqueYears, getResearchersWithCount } from '../Data/publications';
import ResearchTopBar from '../Components/Research/ResearchTopBar';
import { ResearchSidebar, ResearchFilterModal } from '../Components/Research/ResearchSidebar';
import ResearchGrid from '../Components/Research/ResearchGrid';
import ResearchPagination from '../Components/Research/ResearchPagination';
import Breadcrum from '../Components/Common/Breadcrum';

import { normalizeResearch } from '../Data/normalizeResearch';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ITEMS_PER_PAGE = 9;

export default function ResearchPage() {
  const [data, setData] = useState(() => defaultPublications.map(normalizeResearch));
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [researcherFilter, setResearcherFilter] = useState([]);
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
          if (json && Array.isArray(json.publications)) {
            setData(json.publications.map(normalizeResearch));
          } else if (Array.isArray(json)) {
            setData(json.map(normalizeResearch));
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

  const researchers = useMemo(() => getResearchersWithCount(data), [data]);

  const filtered = useMemo(() => {
    let list = data;
    if (yearFilter !== 'all') {
      list = list.filter(p => Number(p.year) === Number(yearFilter));
    }
    if (researcherFilter.length) {
      list = list.filter(p => researcherFilter.includes((p.researcher_name || '').trim()));
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(p => {
        const title = (p.title || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        return (p.researcher_name || '').toLowerCase().includes(q) || title.includes(q) || desc.includes(q);
      });
    }
    return list;
  }, [data, search, yearFilter, researcherFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE) || 1;
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleSearch = v => { setSearch(v); setPage(1); };
  const handleYearFilter = v => { setYearFilter(v); setPage(1); };
  const handleResearcherFilter = v => { setResearcherFilter(v); setPage(1); };
  const clearAll = () => { setYearFilter('all'); setResearcherFilter([]); setPage(1); };

  const activeFilterCount = (yearFilter !== 'all' ? 1 : 0) + researcherFilter.length;

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
          researchers={researchers}
          researcherFilter={researcherFilter}
          onResearcherFilter={handleResearcherFilter}
          yearFilter={yearFilter}
          onYearFilter={handleYearFilter}
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
                currentPage={currentPage}
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
          researchers={researchers}
          researcherFilter={researcherFilter}
          onResearcherFilter={handleResearcherFilter}
        yearFilter={yearFilter}
        onYearFilter={handleYearFilter}
        filtered={filtered.length}
        onClear={clearAll}
      />

      <footer className="research-page__footer">
        © 2026 <strong>Department of Nursing</strong> · All publications reserved
      </footer>
    </div>
  );
}
