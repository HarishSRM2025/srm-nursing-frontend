import React, { useState } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

const faqs = [
  {
    q: "How do I apply for the B.Sc. / M.Sc. Nursing program?",
    a: "You can submit the admission enquiry form on this page, or visit the Admissions Office during working hours with your academic certificates for guided assistance.",
  },
  {
    q: "What documents are required for admission enquiries?",
    a: "Keep your 10+2 / degree mark sheets, transfer certificate, community certificate, and a passport-size photograph ready when you reach out.",
  },
  {
    q: "Can I schedule a campus visit before applying?",
    a: "Yes — mention 'Campus Visit' as the subject in the contact form and our admissions team will arrange a convenient time for you.",
  },
  {
    q: "Whom do I contact for scholarship information?",
    a: "Reach out to the Student Welfare department using the email listed above; they handle all scholarship and financial aid queries.",
  },
];

const ContactFAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="contact-faq">
      <div className="contact-faq__inner">
        <div className="contact-faq__head">
          <span className="contact-faq__eyebrow">Quick Answers</span>
          <h2 className="contact-faq__title">Frequently Asked Questions</h2>
        </div>

        <div className="contact-faq__list">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                className={`contact-faq__item ${isOpen ? "is-open" : ""}`}
                key={idx}
              >
                <button
                  className="contact-faq__question"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                >
                  <span>{item.q}</span>
                  {isOpen ? <IoRemoveOutline /> : <IoAddOutline />}
                </button>
                {isOpen && <p className="contact-faq__answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
