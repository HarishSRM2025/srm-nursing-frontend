import React, { useState, useEffect } from "react";
import { IoArrowForward } from "react-icons/io5";

const API_URL = import.meta.env.VITE_BACKEND_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000';

const defaultDepartments = [
  {
    name: "Admissions Office",
    desc: "Course details, eligibility & seat enquiries.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    email: "admissions@nc.srmtrichy.edu.in",
  },
  {
    name: "Academic Affairs",
    desc: "Curriculum, faculty & examination support.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    email: "academics@nc.srmtrichy.edu.in",
  },
  {
    name: "Student Welfare",
    desc: "Hostel, scholarships & counselling services.",
    img: "https://images.unsplash.com/photo-1576765608866-5b51046452be?q=80&w=800&auto=format&fit=crop",
    email: "welfare@nc.srmtrichy.edu.in",
  },
];

const ContactDepartments = () => {
  const [departments, setDepartments] = useState(defaultDepartments);

  useEffect(() => {
    const fetchDepts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/department?status=active`);
        if (res.ok) {
          const json = await res.json();
          if (json && json.departments && json.departments.length > 0) {
            setDepartments(json.departments);
          }
        }
      } catch (err) {
        console.warn('Using default departments list:', err);
      }
    };

    fetchDepts();
  }, []);

  return (
    <section className="contact-depts">
      <div className="contact-depts__inner">
        <div className="contact-depts__head">
          <span className="contact-depts__eyebrow">Reach The Right Team</span>
          <h2 className="contact-depts__title">General Enquiries by Department</h2>
          <p className="contact-depts__desc">
            Connect directly with the team best placed to help — no waiting,
            no wrong turns.
          </p>
        </div>

        <div className="contact-depts__grid">
          {departments.map((d, idx) => (
            <div className="contact-depts__card" key={d._id || idx}>
              <div className="contact-depts__img-wrap">
                <img
                  src={d.img || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"}
                  alt={d.name}
                  onError={e => {
                    e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop";
                  }}
                />
              </div>
              <div className="contact-depts__body">
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <a href={`mailto:${d.email}`} className="contact-depts__link">
                  {d.email} <IoArrowForward />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDepartments;
