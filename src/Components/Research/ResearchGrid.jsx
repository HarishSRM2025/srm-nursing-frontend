import ResearchCard from './ResearchCard';
import { RiFileSearchLine } from 'react-icons/ri';

export default function ResearchGrid({ publications }) {
  if (publications.length === 0) {
    return (
      <div className="research-grid">
        <div className="research-grid__empty">
          <div className="research-grid__empty-icon"><RiFileSearchLine /></div>
          <div className="research-grid__empty-title">No publications found</div>
          <p className="research-grid__empty-text">Try adjusting your search or filter criteria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="research-grid">
      {publications.map(pub => (
        <ResearchCard key={pub.sno} pub={pub} />
      ))}
    </div>
  );
}
