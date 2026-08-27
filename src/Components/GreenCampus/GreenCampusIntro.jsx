import React from 'react';
import { FaSeedling, FaWater, FaBolt, FaBan, FaShuttleVan, FaRoad } from 'react-icons/fa';


const TAGS = [
  { icon: <FaSeedling />, label: 'Clean & Green Campus' },
  { icon: <FaBan />, label: 'Plastic-Free Zone' },
  { icon: <FaBolt />, label: 'Solar & LED Powered' },
  { icon: <FaShuttleVan />, label: 'E-Vehicle Mobility' },
  { icon: <FaWater />, label: 'Water Conservation' },
  { icon: <FaRoad />, label: 'Pedestrian Friendly' },
];

const GreenCampusIntro = () => {
  return (
    <section className="gc-intro" id="gc-initiatives">
      <div className="green-campus-container gc-intro-head">
        <span className="green-campus-eyebrow">Why It Matters</span>
        <h2 className="green-campus-title">
          Sustainability Woven Into Everyday Campus Life
        </h2>
        <p className="green-campus-lede">
          SRM Trichy College of Nursing actively integrates eco-friendly
          practices and sustainability education into its campus culture.
          Students, faculty, and staff collectively participate in
          maintaining a green and clean environment — from the energy that
          lights our buildings to the water that waters our gardens.
        </p>
        <div className="gc-intro-tags">
          {TAGS.map((t, i) => (
            <span className="gc-intro-tag" key={i}>
              {t.icon} {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenCampusIntro;
