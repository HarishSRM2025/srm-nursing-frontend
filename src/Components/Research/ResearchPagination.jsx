import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function ResearchPagination({ currentPage, totalPages, onPageChange, totalItems, itemsPerPage }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="research-pagination">
      <div className="research-pagination__buttons">
        <button
          className="research-pagination__btn"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <RiArrowLeftSLine /> Prev
        </button>

        {pages.map((p, i) =>
          p === '...'
            ? <span key={`dots-${i}`} className="research-pagination__dots">···</span>
            : <button
                key={p}
                className={`research-pagination__btn${currentPage === p ? ' active' : ''}`}
                onClick={() => onPageChange(p)}
              >
                {p}
              </button>
        )}

        <button
          className="research-pagination__btn"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next <RiArrowRightSLine />
        </button>
      </div>
      <div className="research-pagination__info">
        Showing {start}–{end} of {totalItems} results
      </div>
    </div>
  );
}
