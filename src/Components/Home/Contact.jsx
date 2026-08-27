import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFileSignature, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";
import {FaFacebookF,FaInstagram,FaYoutube,FaLinkedinIn} from "react-icons/fa";
/* ─── CONTACT ─── */
const contactItems = [
  { icon: <FaMapMarkerAlt />, label: "Address", text: "Nightingale College of Nursing\nNo. 45, Medical College Road, Trichy – 620 019\nTamil Nadu, India" },
  { icon: <FaPhoneAlt />, label: "Phone", text: "+91 431 245 6789 (General)\n+91 98765 43210 (Admissions)" },
  { icon: <FaEnvelope />, label: "Email", text: "admissions@nightingalecollege.edu.in\nprincipal@nightingalecollege.edu.in" },
  { icon: <FaClock />, label: "Office Hours", text: "Monday – Saturday: 9:00 AM – 5:00 PM\nSunday: Closed" },
];

const API_URL = import.meta.env.VITE_BACKEND_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000';

export function Contact() {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", program: "", message: "" });
  const [submitState, setSubmitState] = useState("idle"); // "idle" | "loading" | "done" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!form.email || !form.message) {
      alert("Please provide at least your email address and inquiry message.");
      return;
    }

    setSubmitState("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          name: [form.firstName, form.lastName].filter(Boolean).join(" ") || "Website Visitor",
          email: form.email,
          phone: form.phone,
          program: form.program,
          subject: form.program ? `Admission Enquiry - ${form.program}` : "Admission Enquiry",
          message: form.message,
          source: "Home - Get In Touch With Us"
        })
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry. Please try again.");
      }

      setSubmitState("done");
      setForm({ firstName: "", lastName: "", email: "", phone: "", program: "", message: "" });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "Failed to submit enquiry. Please try again.");
      setSubmitState("error");
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-eyebrow">Contact & Admission</div>
          <h2 className="section-title">Get In Touch With Us</h2>
          <p className="section-desc">We're here to answer your questions and guide you through the admission process.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Contact Information</h3>
            <div className="contact-items">
              {contactItems.map((item) => (
                <div key={item.label} className="contact-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <strong>{item.label}</strong>
                    <p style={{ whiteSpace: "pre-line" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-socials">
              {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="contact-social-link"><Icon /></a>
              ))}
            </div>
          </div>

          <div className="contact-form-card reveal reveal-delay-1">
            <h3><FaFileSignature /> Admission Enquiry Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" placeholder="Enter first name" value={form.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" placeholder="Enter last name" value={form.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address <span style={{ color: "red" }}>*</span></label>
                <input type="email" name="email" required placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" name="phone" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Program of Interest</label>
                <select name="program" value={form.program} onChange={handleChange}>
                  <option value="">Select a Program</option>
                  <option>B.Sc Nursing (4 Years)</option>
                  <option>M.Sc Nursing (2 Years)</option>
                  <option>Post Basic B.Sc Nursing</option>
                  <option>GNM Program</option>
                  <option>Certificate Courses</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message / Query <span style={{ color: "red" }}>*</span></label>
                <textarea name="message" required placeholder="Tell us about your inquiry, background, or any questions you have..." value={form.message} onChange={handleChange} />
              </div>

              {submitState === "error" && (
                <div style={{ color: "#dc2626", fontSize: 13, marginBottom: 12, fontWeight: 500 }}>
                  ⚠️ {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className={`form-submit${submitState === "done" ? " success" : ""}`}
                disabled={submitState === "loading"}
              >
                {submitState === "idle" && <><FaPaperPlane /> Submit Enquiry</>}
                {submitState === "loading" && <><FaSpinner className="fa-spin" /> Submitting...</>}
                {submitState === "done" && <><FaCheckCircle /> Enquiry Submitted! We will contact you shortly.</>}
                {submitState === "error" && <><FaPaperPlane /> Retry Submission</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}