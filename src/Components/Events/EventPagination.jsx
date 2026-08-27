import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const EventPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="event-pagination">
      <button
        className="event-pagination__btn nav"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <FiChevronLeft />
      </button>

      {pages.map(p => (
        <button
          key={p}
          className={`event-pagination__btn ${currentPage === p ? 'active' : ''}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        className="event-pagination__btn nav"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

export default EventPagination;
