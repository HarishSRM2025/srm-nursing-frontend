import React from 'react';
import { FaTint, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/8.jpg'

const RainwaterHarvesting = () => {
  return (
    <GreenCampusBlock
      reverse
      number="08"
      icon={<FaTint />}
      image={Img}
      imageAlt="Rainwater harvesting pipeline system installed on campus"
      title="Rain Water Harvesting"
      text="SRM Trichy College of Nursing has implemented a comprehensive rainwater harvesting system across the campus. Strategically placed collection points at rooftops and designated catchment areas collect and store rainwater for future use."
      points={[
        { icon: <FaCheckCircle />, label: 'Rooftop and ground-level catchment areas across campus' },
        { icon: <FaCheckCircle />, label: 'Reduces dependence on external water sources' },
        { icon: <FaCheckCircle />, label: 'Promotes responsible, natural water conservation' },
      ]}
    />
  );
};

export default RainwaterHarvesting;
