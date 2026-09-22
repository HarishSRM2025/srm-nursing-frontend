import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const EventPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;
  const page = Math.min(Math.max(1, currentPage), totalPages);
  const pages = [...new Set([1, page - 1, page, page + 1, totalPages])]
    .filter(p => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b)
    .flatMap((p, index, values) => index > 0 && p - values[index - 1] > 1 ? [`gap-${p}`, p] : [p]);

  return (
    <nav className="event-pagination" aria-label="Events pagination">
      <button
        type="button"
        aria-label="Previous page"
        className="event-pagination__btn nav"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        <FiChevronLeft />
      </button>

      {pages.map(p => typeof p === 'string' ? <span key={p} aria-hidden="true">…</span> : (
        <button
          type="button"
          aria-label={`Page ${p}`}
          aria-current={page === p ? 'page' : undefined}
          key={p}
          className={`event-pagination__btn ${page === p ? 'active' : ''}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        className="event-pagination__btn nav"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        <FiChevronRight />
      </button>
    </nav>
  );
};

export default EventPagination;
