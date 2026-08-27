import React, { useState } from 'react';
import { FiImage, FiZoomIn } from 'react-icons/fi';

const allImages = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', label: 'Smart Classroom', cat: 'Academic', wide: true },
  { src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', label: 'Clinical Lab', cat: 'Labs', tall: true },
  { src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80', label: 'Library', cat: 'Academic' },
  { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80', label: 'College Bus', cat: 'Transport' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', label: 'Multi Purpose Hall', cat: 'Events' },
  { src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80', label: 'Canteen', cat: 'Dining' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', label: 'Sports Ground', cat: 'Sports', wide: true },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', label: 'Cultural Event', cat: 'Cultural' },
  { src: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80', label: 'Hostel', cat: 'Hostel' },
  
];

const tabs = ['All', 'Academic', 'Labs', 'Events', 'Sports', 'Cultural', 'Hostel'];

const FacGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? allImages
    : allImages.filter(img => img.cat === activeTab);

  return (
    <section className="fac-gallery">
      <div className="fac-gallery__inner">
        <div className="fac-gallery__header">
          <span className="fac-section-label">Visual Tour</span>
          <h2 className="fac-section-title">Campus Gallery</h2>
          <p className="fac-section-desc">
            Take a visual walk through our vibrant campus, labs, events, and student life moments.
          </p>
        </div>

        <div className="fac-gallery__tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`fac-gallery__tab${activeTab === tab ? ' fac-gallery__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <FiImage size={12} />
              {tab}
            </button>
          ))}
        </div>

        <div className="fac-gallery__grid">
          {filtered.map((img, i) => (
            <div
              key={i}
              className={`fac-gallery__item${img.wide ? ' fac-gallery__item--wide' : ''}${img.tall ? ' fac-gallery__item--tall' : ''}`}
            >
              <img src={img.src} alt={img.label} />
              <div className="fac-gallery__item-overlay">
                <span className="fac-gallery__item-label">
                  <FiZoomIn />
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacGallery;
