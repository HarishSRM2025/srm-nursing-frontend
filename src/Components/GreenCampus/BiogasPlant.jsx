import React from 'react';
import { FaGasPump, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/7.jpg'
import { ImGift } from 'react-icons/im';

const BiogasPlant = () => {
  return (
    <GreenCampusBlock
      number="07"
      icon={<FaGasPump />}
      image={Img}
      imageAlt="Biogas plant meter installed on campus"
      title="Processing of Food Waste & Bio-Gas Generation"
      text="A biogas plant established on campus supports sustainable waste management and energy conservation. The plant utilizes night soil collected from the hostel and vegetable waste from the canteen to generate biogas used for cooking in the hostel kitchen."
      points={[
        { icon: <FaCheckCircle />, label: 'Converts hostel and canteen waste into usable cooking gas' },
        { icon: <FaCheckCircle />, label: 'Reduces methane emissions through effective recycling' },
        { icon: <FaCheckCircle />, label: 'Lowers dependence on conventional LPG supply' },
      ]}
      metric={{ value: '696 kg', label: 'LPG-equivalent energy saved annually' }}
    />
  );
};

export default BiogasPlant;
