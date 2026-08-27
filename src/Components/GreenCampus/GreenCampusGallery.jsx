import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Img1 from '../../assets/images/GreenCampus/Gallery/1.jpg'
import Img2 from '../../assets/images/GreenCampus/Gallery/2.jpg'
import Img3 from '../../assets/images/GreenCampus/Gallery/3.jpg'
import Img4 from '../../assets/images/GreenCampus/Gallery/4.jpg'

const IMAGES = [
  { src: Img1, alt: 'Campus greenery and tree-lined road' },
  { src: Img2, alt: 'Waste segregation bins close-up' },
  { src: Img3, alt: 'Solar panels on rooftop' },
  { src: Img4, alt: 'Students on a cleanliness drive' },
];

const GreenCampusGallery = () => {
  return (
    <section className="gc-gallery">
      <div className="green-campus-container">
        <div className="gc-gallery-head">
          <div>
            <span className="green-campus-eyebrow">In Pictures</span>
            <h2 className="green-campus-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: 0 }}>
              Green Campus, Captured
            </h2>
          </div>
          
        </div>
        <div className="gc-gallery-grid">
          {IMAGES.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenCampusGallery;
