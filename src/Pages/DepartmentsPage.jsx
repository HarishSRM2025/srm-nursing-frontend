import { useState, useEffect } from 'react';
import {
  FaHeartbeat, FaUserMd, FaUsers, FaBaby, FaBrain, FaFemale,
  FaFlask, FaStethoscope, FaHospital, FaHandHoldingHeart,
  FaSchool, FaAmbulance, FaSyringe, FaChild, FaSmile,
  FaAppleAlt, FaCommentMedical, FaHeadSideVirus, FaCalendarAlt,
  FaBabyCarriage, FaShieldAlt,
} from 'react-icons/fa';

import '../Styles/departments.css';
import DepartmentsGrid from '../Components/Departments/DepartmentsGrid';
import DepartmentsNav from '../Components/Departments/DepartmentsNav';
import DepartmentCard from '../Components/Departments/DepartmentCard';
import DepartmentsCTA from '../Components/Departments/DepartmentsCTA';
import Breadcrum from '../Components/Common/Breadcrum';

const DEPARTMENTS = [
  {
    id: 'fundamentals', eyebrow: 'Department 01', title: 'Fundamentals of Nursing',
    color: '#4b2e83', icon: FaHeartbeat,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80',
    description: [
      'The time is spent exclusively on theoretical and clinical instruction, monthly performance feedback, and student nurture and counselling. Students are closely supervised and mentored in groups of 10.',
      'Basic nursing procedures are demonstrated by teachers, and students re-demonstrate on Manikins in the skill lab. After gaining confidence, students carry out procedures on patients — molded across physical, mental, social, and spiritual dimensions.',
    ],
    highlights: [
      { icon: FaStethoscope,    text: 'Mentor groups of 10 students' },
      { icon: FaFlask,          text: 'Skill lab with high-fidelity Manikins' },
      { icon: FaHospital,       text: 'Structured clinical progression' },
      { icon: FaHandHoldingHeart, text: 'Holistic development approach' },
    ],
  },
  {
    id: 'adult-health', eyebrow: 'Department 02', title: 'Adult Health Nursing',
    color: '#0f8ca6', icon: FaUserMd,
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=900&q=80',
    description: [
      'Specializing in care of patients with Medical and Surgical conditions. Students are posted in Trichy SRM Medical College Hospital & Research Centre — a 1575-bedded multi-specialty teaching hospital equipped with the latest diagnostic and treatment technologies.',
      'The hospital offers Surgery, Medicine, Obstetrics & Gynecology, Paediatrics, Orthopedics, Neurology, Ophthalmology, ENT, Cardiology, Urology, Nephrology, Respiratory Medicine, and Psychiatry with 24×7 services.',
    ],
    highlights: [
      { icon: FaHospital,  text: '1575-bed multi-specialty hospital' },
      { icon: FaSyringe,   text: 'Latest diagnostic technologies' },
      { icon: FaAmbulance, text: '24×7 emergency services' },
      { icon: FaStethoscope, text: '14+ clinical specialities' },
    ],
  },
  {
    id: 'community', eyebrow: 'Department 03', title: 'Community Health Nursing',
    color: '#0f7a5a', icon: FaUsers,
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80',
    description: [
      'The College strongly emphasizes preventive and promotive health. Programmes promote health of communities through direct and indirect services for all age groups, preparing students to acquire clinical competencies at different levels.',
      'Services include Home Care, Clinic Services, School Health Programmes, Special Camps, and Community Organization Activities. Antenatal and well-baby clinics are conducted in villages alongside Adolescent Health and Mass Education Programmes.',
    ],
    highlights: [
      { icon: FaSchool,         text: 'School and adolescent health programmes' },
      { icon: FaHandHoldingHeart, text: 'Home visits and community education' },
      { icon: FaUsers,          text: 'Village health meetings and camps' },
      { icon: FaHospital,       text: 'Problem-Based Learning approaches' },
    ],
  },
  {
    id: 'child-health', eyebrow: 'Department 04', title: 'Child Health Nursing',
    color: '#c2760c', icon: FaBaby,
    image: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=900&q=80',
    description: [
      'Paediatric nurses provide care for children from birth through their late teens. Special training delivers expert care while working with families to address their concerns and help them understand treatment options.',
      'Students develop unique capabilities in communication and treatment techniques with children and families, backed by the finest academic infrastructure and dynamic, hands-on education.',
    ],
    highlights: [
      { icon: FaChild,          text: 'Care from birth through adolescence' },
      { icon: FaCommentMedical, text: 'Specialized family communication' },
      { icon: FaSmile,          text: 'Child-centred clinical techniques' },
      { icon: FaHospital,       text: 'Collaboration with paediatricians' },
    ],
  },
  {
    id: 'mental-health', eyebrow: 'Department 05', title: 'Mental Health Nursing',
    color: '#7c3aed', icon: FaBrain,
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=900&q=80',
    description: [
      'The Department of Psychiatric Nursing is integral to the multidisciplinary team in treatment and rehabilitation of persons with mental disorders. It fosters quality education to upgrade knowledge and skill in psychiatric nursing.',
      "Faculty incorporates principles of neurobiology, psychology, and psychiatric nursing to mould students as dedicated and competent mental health nurses. The department also provides guidance and counselling for students' educational, clinical, and social needs.",
    ],
    highlights: [
      { icon: FaBrain,          text: 'Neurobiology & psychology integrated' },
      { icon: FaCommentMedical, text: 'Guidance & counselling services' },
      { icon: FaHeadSideVirus,  text: 'World Mental Health Day observances' },
      { icon: FaHandHoldingHeart, text: 'Rehabilitation & multidisciplinary approach' },
    ],
  },
  {
    id: 'midwifery', eyebrow: 'Department 06', title: 'Midwifery & OBG Nursing',
    color: '#b5456a', icon: FaFemale,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=900&q=80',
    description: [
      'Midwives provide independent care to women prior to pregnancy, during pregnancy, childbirth, postnatal, and newborn care within the healthcare framework. Gynaecological nurses handle clinical assessment, patient advocacy, and care management.',
      'The department enhances skills in early disease identification, management, and complication prevention. New manikins and simulators support world-class skill development with effective hands-on practice for every student.',
    ],
    highlights: [
      { icon: FaBabyCarriage, text: 'Full continuum: pre-conception to postnatal' },
      { icon: FaShieldAlt,    text: 'High-fidelity manikins & simulators' },
      { icon: FaCalendarAlt,  text: 'Women\'s health advocacy & rights' },
      { icon: FaAppleAlt,     text: 'Reproductive health education' },
    ],
  },
];

export default function DepartmentsPage() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observers = DEPARTMENTS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      return obs;
    }).filter(Boolean);

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="depart-page">
      <Breadcrum title="Departments"/>
      {/* <DepartmentsGrid /> */}
      <DepartmentsNav activeId={activeId} />
      {DEPARTMENTS.map((dept, i) => (
        <DepartmentCard key={dept.id} {...dept} reversed={i % 2 !== 0} />
      ))}
      <DepartmentsCTA />
    </div>
  );
}
