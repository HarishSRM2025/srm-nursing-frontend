import React from 'react';
import { FaTrashAlt, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/2.jpg'

const WasteSegregation = () => {
  return (
    <GreenCampusBlock
      reverse
      number="02"
      icon={<FaTrashAlt />}
      image={Img}
      imageAlt="Color-coded waste segregation bins on campus"
      title="Waste Collection, Segregation & Processing"
      text="The institution actively addresses environmental challenges posed by non-degradable waste through a strict waste segregation system. Segregated waste is regularly sent to authorized recycling facilities, supporting sustainable waste management and a circular economy."
      points={[
        { icon: <FaCheckCircle />, label: 'Color-coded bins for biodegradable, recyclable & hazardous waste' },
        { icon: <FaCheckCircle />, label: 'Routine cleaning keeps campus roads dust-free and hygienic' },
        { icon: <FaCheckCircle />, label: 'Waste sent to authorized recyclers, supporting a circular economy' },
      ]}
    />
  );
};

export default WasteSegregation;
