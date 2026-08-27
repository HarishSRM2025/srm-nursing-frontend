import React from 'react';
import { FaSolarPanel, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/5.jpg'

const SolarEnergy = () => {
  return (
    <GreenCampusBlock
      number="05"
      icon={<FaSolarPanel />}
      image={Img}
      imageAlt="Rooftop solar power installation at SRM Trichy"
      title="Use of Solar Energy & LED Bulbs"
      text="The college has developed a time-bound institutional plan to promote energy conservation by installing a solar power system on the rooftop, enabling effective use of renewable energy for power requirements while lowering electricity costs."
      points={[
        { icon: <FaCheckCircle />, label: 'Energy-efficient CFL and LED lighting used widely across campus' },
        { icon: <FaCheckCircle />, label: 'Street lights powered by renewable energy sources' },
        { icon: <FaCheckCircle />, label: 'Supports long-term self-reliance and lower energy costs' },
      ]}
    />
  );
};

export default SolarEnergy;
