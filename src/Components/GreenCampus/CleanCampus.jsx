import React from 'react';
import { FaBroom, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/1.jpg'

const CleanCampus = () => {
  return (
    <GreenCampusBlock
      number="01"
      icon={<FaBroom />}
      image={Img}
      imageAlt="Nursing students participating in a campus cleanliness drive"
      title="Clean Campus"
      text="SRM Trichy College of Nursing actively integrates eco-friendly practices and sustainability education into its campus culture. Students, faculty, and staff collectively participate in maintaining a green and clean environment through regular cleanliness drives."
      points={[
        { icon: <FaCheckCircle />, label: 'Swachh Bharat Mission programs conducted regularly' },
        { icon: <FaCheckCircle />, label: 'Students educated on hygiene and environmental responsibility' },
        { icon: <FaCheckCircle />, label: 'Cleanliness maintained across premises and surrounding areas' },
      ]}
    />
  );
};

export default CleanCampus;
