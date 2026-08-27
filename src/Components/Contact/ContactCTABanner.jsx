import React from "react";
import { IoCallOutline, IoDocumentTextOutline } from "react-icons/io5";

const ContactCTABanner = () => {
  return (
    <section className="contact-cta">
      <div
        className="contact-cta__bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      <div className="contact-cta__overlay" />

      <div className="contact-cta__inner">
        <h2>Ready to Begin Your Nursing Journey?</h2>
        <p>
          Speak with our admissions counsellors today or download the
          prospectus to explore programs at your own pace.
        </p>
        <div className="contact-cta__actions">
          <a href="tel:+914312258501" className="contact-cta__btn contact-cta__btn--solid">
            <IoCallOutline /> Call Admissions
          </a>
          <a href="/prospectus.pdf" className="contact-cta__btn contact-cta__btn--outline">
            <IoDocumentTextOutline /> Download Prospectus
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTABanner;
