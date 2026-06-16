import { FiClock, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';
import Img1 from '../../assets/images/Academics/Course/1.JPG'
import Img2 from '../../assets/images/Academics/Course/2.JPG'
import Img3 from '../../assets/images/Academics/Course/3.JPG'

const COURSES = [
  
  {
    title: 'B.Sc. Nursing',
    fullName: 'Bachelor of Science in Nursing',
    badge: 'Undergraduate',
    duration: '4 Years Programme',
    image: Img1,
    desc: 'A four-year undergraduate degree that prepares nurses for comprehensive patient care with advanced clinical and theoretical training.',
    criteria: [
      'Age: 17 years on or before December 31',
      '10+2 with Science (PCB) & English, min 45%',
      'AISSCE / CBSE / ICSE / HSCE or equivalent',
      'Gender: Both Male and Female',
    ],
  },
  {
    title: 'M.Sc. Nursing',
    fullName: 'Master of Science in Nursing',
    badge: 'Postgraduate',
    duration: '2 Years Programme',
    image: Img2,
    desc: 'An advanced postgraduate programme offering specialization in key nursing disciplines for experienced registered nurses.',
    criteria: [
      'Registered Nurse and Registered Midwife',
      'B.Sc Nursing / Post Basic B.Sc Nursing',
      'Minimum 55% aggregate score',
      'Minimum one year work experience',
    ],
  },
  {
    title: 'DGNM',
    fullName: 'Diploma in General Nursing & Midwifery',
    badge: 'Diploma',
    duration: '3 Years Programme',
    image: Img3,
    desc: 'A comprehensive diploma programme designed to train skilled nursing professionals in general nursing and midwifery care.',
    criteria: [
      'Age: 17 years on or before December 31',
      '10+2 with English and minimum 40% marks',
      'From recognized board',
      'Gender: Only Females',
    ],
  },
];

export default function CoursesSection() {
  return (
    <section className="academic-courses">
      <div className="academic-container">
        <div className="academic-courses-header">
          <div className="academic-section-label">What We Offer</div>
          <h2 className="academic-section-title">
            Courses <span>Offered</span>
          </h2>
          <p className="academic-section-subtitle" style={{ margin: '0 auto' }}>
            Choose from our nationally recognized nursing programmes, each designed to equip you
            with the skills and knowledge to excel in modern healthcare.
          </p>
        </div>

        <div className="academic-courses-grid">
          {COURSES.map((course, i) => (
            <div className="academic-course-card" key={i}>
              <div className="academic-course-card-image">
                <img src={course.image} alt={course.title} />
                <div className="academic-course-card-image-overlay">
                  <span className="academic-course-card-badge">{course.badge}</span>
                </div>
              </div>
              <div className="academic-course-card-body">
                <h3 className="academic-course-card-title">{course.title}</h3>
                <div className="academic-course-card-duration">
                  <FiClock size={14} />
                  {course.duration}
                </div>
                <p className="academic-course-card-desc">{course.desc}</p>

                <div className="academic-course-card-criteria">
                  <div className="academic-course-card-criteria-title">Admission Criteria</div>
                  <ul>
                    {course.criteria.map((c, j) => (
                      <li key={j}>
                        <FiCheckCircle size={13} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#" className="academic-btn academic-btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                  Learn More
                  <FiArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
