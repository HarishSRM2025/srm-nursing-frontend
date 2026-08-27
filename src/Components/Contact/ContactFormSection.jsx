import React, { useState } from "react";
import { IoPaperPlaneOutline, IoCheckmarkCircle, IoReloadOutline } from "react-icons/io5";

const API_URL = import.meta.env.VITE_BACKEND_API_URL || import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admission Enquiry",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          source: "Contact Page - Talk To Us"
        })
      });

      if (!res.ok) {
        throw new Error("Failed to submit message. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "Admission Enquiry",
      message: "",
    });
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-section__inner">
        <div className="contact-form-section__media">
          <img
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1200&auto=format&fit=crop"
            alt="SRM Trichy College of Nursing campus"
          />
          <div className="contact-form-section__media-card">
            <h4>28+</h4>
            <p>Years of Academic Excellence</p>
          </div>
        </div>

        <div className="contact-form-section__form-wrap">
          <span className="contact-form-section__eyebrow">Talk To Us</span>
          <h2 className="contact-form-section__title">
            Send Us a Message, We'll Reply Fast
          </h2>
          <p className="contact-form-section__desc">
            For admissions, academics or general queries, fill out the form
            below and our team will get back to you within one business day.
          </p>

          {submitted ? (
            <div className="contact-form-section__success">
              <IoCheckmarkCircle />
              <div>
                <h4>Message sent successfully!</h4>
                <p>Thank you, {form.name || "there"} — our team has received your message and will be in touch shortly.</p>
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    marginTop: 12,
                    background: "var(--primary)",
                    color: "white",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: 6,
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6
                  }}
                >
                  <IoReloadOutline /> Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form-section__form" onSubmit={handleSubmit}>
              <div className="contact-form-section__row">
                <div className="contact-form-section__field">
                  <label htmlFor="contact-name">Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="contact-form-section__field">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 99999 99999"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="contact-form-section__row">
                <div className="contact-form-section__field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="example@domain.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="contact-form-section__field">
                  <label htmlFor="contact-subject">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option>Admission Enquiry</option>
                    <option>Academic Programs</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-form-section__field">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  placeholder="Tell us briefly about your needs"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              {errorMsg && (
                <div style={{ color: "#dc2626", fontSize: 13, marginBottom: 12, fontWeight: 500 }}>
                  ⚠️ {errorMsg}
                </div>
              )}

              <button type="submit" className="contact-form-section__submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit Enquiry"} <IoPaperPlaneOutline />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
