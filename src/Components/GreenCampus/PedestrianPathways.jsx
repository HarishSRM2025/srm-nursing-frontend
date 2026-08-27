import React from 'react';
import { FaWalking, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/10.jpg'

const PedestrianPathways = () => {
  return (
    <GreenCampusBlock
      reverse
      number="10"
      icon={<FaWalking />}
      image={Img}
      imageAlt="Pedestrian-friendly walkway leading to the main college block"
      title="Pedestrian Friendly Pathways"
      text="Since students' vehicles are not permitted inside the campus, a well-planned pedestrian-friendly pathway has been constructed from the entrance to the main college block, ensuring safe and comfortable movement for everyone."
      points={[
        { icon: <FaCheckCircle />, label: 'Dedicated walkway from entrance to academic blocks' },
        { icon: <FaCheckCircle />, label: 'Encourages walking over vehicle dependence' },
        { icon: <FaCheckCircle />, label: 'Supports a clean, eco-friendly campus environment' },
      ]}
    />
  );
};

export default PedestrianPathways;
