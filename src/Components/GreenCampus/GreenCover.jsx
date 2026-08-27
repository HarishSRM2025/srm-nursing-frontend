import React from 'react';
import { FaTree, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/4.jpg'
const GreenCover = () => {
  return (
    <GreenCampusBlock
      reverse
      number="04"
      icon={<FaTree />}
      image={Img}
      imageAlt="Tree-lined avenue and landscaped greenery across campus"
      title="Green Cover & Landscaping"
      text="The institution promotes a green campus initiative aimed at creating a sustainable and climate-friendly environment, supporting renewable energy practices, energy-efficient measures, recycling, composting, and eco-friendly landscaping throughout the grounds."
      points={[
        { icon: <FaCheckCircle />, label: 'Smart irrigation uses sensors and weather data to optimise watering' },
        { icon: <FaCheckCircle />, label: 'Healthy campus greenery maintained year-round' },
        { icon: <FaCheckCircle />, label: 'Composting supports natural soil enrichment' },
      ]}
      metric={{ value: '425+', label: 'Trees planted across campus' }}
    />
  );
};

export default GreenCover;
