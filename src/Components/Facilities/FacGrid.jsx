import React from 'react';
import {
  FiMonitor, FiUsers, FiBook, FiActivity,
  FiZap, FiMusic, FiTruck, FiHome, FiCoffee,
  FiArrowRight
} from 'react-icons/fi';
import Img1 from "../../assets/images/Facilities/1.jpg"
import Img2 from "../../assets/images/Facilities/2.png"
import Img3 from "../../assets/images/Facilities/3.jpg"
import Img4 from "../../assets/images/Facilities/4.jpg"
import Img5 from "../../assets/images/Facilities/5.jpg"
import Img6 from "../../assets/images/Facilities/6.png"
import Img7 from "../../assets/images/Facilities/7.jpg"
import Img8 from "../../assets/images/Facilities/8.jpg"
import Img9 from "../../assets/images/Facilities/9.jpg"

const facilities = [
  {
    tag: 'Academic',
    icon: <FiMonitor />,
    title: 'Smart Class Rooms',
    desc: 'Well-designed, spacious, ventilated classrooms equipped with smart boards, LCD projectors, and audio-visual systems. High-speed internet access ensures engaging, tech-enriched learning.',
    img: Img1,
    features: ['Smart Boards', 'LCD Projectors', 'AV Systems', 'Hi-Speed WiFi'],
  },
  {
    tag: 'Events',
    icon: <FiUsers />,
    title: 'Multi Purpose Hall',
    desc: 'A versatile central facility designed to host academic seminars, cultural events, and co-curricular activities. Serves as the vibrant hub for interaction, learning, and celebrations.',
    img: Img2,
    features: ['Seminars', 'Cultural Events', 'Auditorium', 'Stage Setup'],
  },
  {
    tag: 'Knowledge',
    icon: <FiBook />,
    title: 'Digital Library',
    desc: 'A comprehensive knowledge hub with books, journals, and digital resources. Internet-enabled systems support research, innovation, and continuous learning for students and faculty.',
    img: Img3,
    features: ['Digital Journals', 'E-Resources', 'Research Tools', 'Reading Zones'],
  },
  {
    tag: 'Clinical',
    icon: <FiActivity />,
    title: 'Laboratory Facilities',
    desc: 'Modern, well-equipped laboratories provide hands-on experience and practical exposure. Students master theoretical concepts through real clinical simulations and skill-building exercises.',
    img: Img4,
    features: ['Anatomy Lab', 'Nursing Skills Lab', 'Simulation Room', 'OBG Lab'],
  },
  {
    tag: 'Wellness',
    icon: <FiZap />,
    title: 'Sports & Athletics',
    desc: 'Sports and physical education promote discipline, teamwork, leadership, and a healthy lifestyle. Students participate in inter-college tournaments and fitness programs year-round.',
    img: Img5,
    features: ['Outdoor Courts', 'Indoor Games', 'Fitness Zone', 'Tournaments'],
  },
  {
    tag: 'Culture',
    icon: <FiMusic />,
    title: 'Cultural Programs',
    desc: 'Rich cultural programs provide opportunities to explore creativity, showcase talents, and celebrate diversity. A vibrant campus life that enriches the overall student experience.',
    img: Img6,
    features: ['Dance & Music', 'Art Programs', 'Festivals', 'Talent Shows'],
  },
  {
    tag: 'Commute',
    icon: <FiTruck />,
    title: 'Transport Services',
    desc: 'Safe and reliable transport services ensure hassle-free commuting with well-planned routes, stops, and schedules for students and staff. GPS-enabled fleet for your security.',
    img: Img7,
    features: ['GPS Enabled', 'Multiple Routes', 'Safe Commute'],
  },
  {
    tag: 'Residence',
    icon: <FiHome />,
    title: 'Hostel Accommodation',
    desc: 'Comfortable and secure hostel facilities provide a safe, supportive home away from home. Separate hostels for boys and girls with wardens, recreational areas, and all amenities.',
    img: Img8,
    features: ['Boys & Girls Hostels', 'Common Rooms', 'In-house Dining', 'Security'],
  },
  {
    tag: 'Dining',
    icon: <FiCoffee />,
    title: 'Campus Canteen',
    desc: 'A vibrant canteen offering hygienic and affordable food where students and staff can relax and socialize. Nutritious meals and a warm atmosphere fuel productive minds.',
    img: Img9,
    features: ['Hygienic Food', 'Affordable Pricing', 'Nutritious Menu', 'Social Space'],
  },
];

const FacGrid = () => {
  return (
    <section className="fac-grid">
      <div className="fac-grid__inner">
        <div className="fac-grid__header">
          <span className="fac-section-label">What We Offer</span>
          <h2 className="fac-section-title">Our Campus Facilities</h2>
          <p className="fac-section-desc">
            Explore every dimension of student life at SRM Trichy College of Nursing —
            from academic excellence to holistic well-being.
          </p>
        </div>

        <div className="fac-grid__list">
          {facilities.map((fac, i) => (
            <div className="fac-card" key={i}>
              <div className="fac-card__image-wrap">
                <img src={fac.img} alt={fac.title} />
                <div className="fac-card__overlay" />
                <span className="fac-card__tag">{fac.tag}</span>
                {/* <div className="fac-card__icon-badge">{fac.icon}</div> */}
              </div>

              <div className="fac-card__body">
                <h3 className="fac-card__title"><span className='fac-card__icon-badge'>{fac.icon}</span>{fac.title}</h3>
                <p className="fac-card__desc">{fac.desc}</p>
                <div className="fac-card__features">
                  {fac.features.map((f, j) => (
                    <span className="fac-card__feature-tag" key={j}>{f}</span>
                  ))}
                </div>
                <div className="fac-card__footer">
                  <span className="fac-card__link">
                    Learn More <FiArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacGrid;
