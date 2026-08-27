import React from 'react';
import { FaShuttleVan, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/6.jpg'

const EVehicles = () => {
  return (
    <GreenCampusBlock
      reverse
      number="06"
      icon={<FaShuttleVan />}
      image={Img}
      imageAlt="Electric vehicle used for transport within SRM Trichy campus"
      title="Restricted Vehicle Entry & Use of E-Vehicles"
      text="Students' vehicles are not allowed inside the campus and must be parked in the designated parking area near the entrance, supervised by security personnel. This policy helps maintain a pollution-free, eco-friendly, and safer campus environment."
      points={[
        { icon: <FaCheckCircle />, label: 'No vehicles permitted within academic premises' },
        { icon: <FaCheckCircle />, label: 'Security-supervised parking near the campus entrance' },
        { icon: <FaCheckCircle />, label: 'Hostel students encouraged to use e-vehicles for commuting' },
      ]}
    />
  );
};

export default EVehicles;
