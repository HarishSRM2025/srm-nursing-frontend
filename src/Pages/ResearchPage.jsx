import { useState, useMemo } from 'react';
import "../Styles/research.css";
import { publications, getUniqueYears, getAuthorsWithCount } from '../Data/publications';
import ResearchTopBar from '../Components/Research/ResearchTopBar';
import { ResearchSidebar, ResearchFilterModal } from '../Components/Research/ResearchSidebar';
import ResearchGrid from '../Components/Research/ResearchGrid';
import ResearchPagination from '../Components/Research/ResearchPagination';
import Breadcrum from '../Components/Common/Breadcrum';

const ITEMS_PER_PAGE = 9;

export default function ResearchPage() {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [authorFilter, setAuthorFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);

  const years = useMemo(() => getUniqueYears(), []);
  const allAuthors = useMemo(() => getAuthorsWithCount(), []);

  const filtered = useMemo(() => {
    let list = publications;
    if (yearFilter !== 'all') list = list.filter(p => p.year === Number(yearFilter));
    if (authorFilter.length) list = list.filter(p => authorFilter.some(a => p.published_by.includes(a)));
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.publication_details.toLowerCase().includes(q) ||
        p.published_by.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, yearFilter, authorFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleSearch = v => { setSearch(v); setPage(1); };
  const handleYearFilter = v => { setYearFilter(v); setPage(1); };
  const handleAuthorFilter = v => { setAuthorFilter(v); setPage(1); };
  const clearAll = () => { setYearFilter('all'); setAuthorFilter([]); setPage(1); };

  const activeFilterCount = (yearFilter !== 'all' ? 1 : 0) + authorFilter.length;
  const yearSpan = Math.max(...years) - Math.min(...years) + 1;

  return (
    <div className="research-page">
      <Breadcrum title="Research"/>
      <ResearchTopBar
        search={search}
        onSearch={handleSearch}
        onOpenFilter={() => setModalOpen(true)}
        activeFilterCount={activeFilterCount}
        total={publications.length}
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
          total={publications.length}
          onClear={clearAll}
        />
        {/* Left: Cards grid */}
        <main className="research-page__main">
          <ResearchGrid publications={paginated} />
          <ResearchPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            totalItems={filtered.length}
            itemsPerPage={ITEMS_PER_PAGE}
          />
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
