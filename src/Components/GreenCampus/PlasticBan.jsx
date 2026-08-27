import React from 'react';
import { FaBan, FaCheckCircle } from 'react-icons/fa';
import GreenCampusBlock from './GreenCampusBlock';
import Img from '../../assets/images/GreenCampus/3.jpg'
const PlasticBan = () => {
  return (
    <GreenCampusBlock
      number="03"
      icon={<FaBan />}
      image={Img}
      imageAlt="Say no to plastic bags awareness poster on campus"
      title="Ban on Single-Use Plastics"
      text="SRM Trichy College of Nursing promotes a plastic-free campus by prohibiting single-use plastic covers and plastic water bottles within the institution. Awareness programs are conducted regularly for both students and staff to support this initiative."
      points={[
        { icon: <FaCheckCircle />, label: 'Cloth bags encouraged in place of polythene covers' },
        { icon: <FaCheckCircle />, label: 'Reusable water bottles replace single-use plastic bottles' },
        { icon: <FaCheckCircle />, label: 'Regular awareness drives for students and staff' },
      ]}
    />
  );
};

export default PlasticBan;
