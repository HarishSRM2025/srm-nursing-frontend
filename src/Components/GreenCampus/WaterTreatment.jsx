import React from 'react';
import { FaWater, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/9.jpg'

const WaterTreatment = () => {
  return (
    <GreenCampusBlock
      number="09"
      icon={<FaWater />}
      image={Img}
      imageAlt="Students walking past the water treatment facility on campus"
      title="Water Monitoring & Wastewater Treatment"
      text="The campus is equipped with advanced facilities supporting effective water conservation and management, including a Reverse Osmosis (RO) plant with UV treatment to ensure water quality meets high institutional standards."
      points={[
        { icon: <FaCheckCircle />, label: 'Sewage treatment plants process wastewater from college and hostels' },
        { icon: <FaCheckCircle />, label: 'Treated water reused for flushing via a dual-pipe system' },
        { icon: <FaCheckCircle />, label: 'Promotes efficient, sustainable water resource management' },
      ]}
    />
  );
};

export default WaterTreatment;
