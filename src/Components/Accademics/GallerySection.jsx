import { FiZoomIn } from 'react-icons/fi';

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600&q=80',
    alt: 'Nursing lab',
  },
  {
    src: 'https://images.unsplash.com/photo-1576765608269-964ad9f7a14d?w=400&q=80',
    alt: 'Clinical training',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
    alt: 'Lecture hall',
  },
  {
    src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=80',
    alt: 'Hospital ward',
  },
  {
    src: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80',
    alt: 'Nursing students',
  },
  {
    src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
    alt: 'Community camp',
  },
  {
    src: 'https://images.unsplash.com/photo-1543333995-a78aea2eee50?w=400&q=80',
    alt: 'Anatomy class',
  },
];

export default function GallerySection() {
  return (
    <section className="academic-gallery">
      <div className="academic-container">
        <div className="academic-gallery-header">
          <div className="academic-section-label">Campus Life</div>
          <h2 className="academic-section-title">
            Life at <span>SRM Trichy</span>
          </h2>
          <p className="academic-section-subtitle" style={{ margin: '0 auto' }}>
            A glimpse into our vibrant campus life, state-of-the-art facilities, and the dedicated
            students and faculty that make SRM Trichy College of Nursing a special place.
          </p>
        </div>

        <div className="academic-gallery-masonry">
          {GALLERY_IMAGES.map((img, i) => (
            <div className="academic-gallery-item" key={i}>
              <img src={img.src} alt={img.alt} />
              <div className="academic-gallery-item-overlay">
                {/* <div className="academic-gallery-item-overlay-icon">
                  <FiZoomIn />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
