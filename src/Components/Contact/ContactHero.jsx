import React from "react";
import { IoChevronForward, IoHomeOutline } from "react-icons/io5";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div
        className="contact-hero__bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="contact-hero__overlay" />
      </div>

      <div className="contact-hero__inner">
        <span className="contact-hero__eyebrow">We'd Love To Hear From You</span>
        <h1 className="contact-hero__title">
          Let's Start a <span>Conversation</span>
        </h1>
        <p className="contact-hero__subtitle">
          Whether it's admissions, academics, or a campus visit — our team at
          SRM Trichy College of Nursing is here to guide every step.
        </p>

        <nav className="contact-hero__breadcrumb" aria-label="breadcrumb">
          <a href="/">
            <IoHomeOutline /> Home
          </a>
          <IoChevronForward className="contact-hero__crumb-sep" />
          <span>Contact Us</span>
        </nav>
      </div>
    </section>
  );
};

export default ContactHero;
