import React from "react";
import { IoNavigateOutline, IoLocationSharp } from "react-icons/io5";

const ContactMapSection = () => {
  return (
    <section className="contact-map">
      <div className="contact-map__header">
        <div>
          <span className="contact-map__eyebrow">Find Us On The Map</span>
          <h2 className="contact-map__title">Our Campus Location</h2>
        </div>
        <a
          className="contact-map__directions"
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoNavigateOutline /> Get Directions
        </a>
      </div>
      <div className="contact-map__frame">
        <iframe
          title="SRM Trichy College of Nursing Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9292.808543141642!2d78.74964709148355!3d10.959104056803783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf1ea900b9d0d%3A0xbcc2d0481c1b2865!2sSRM%20Trichy%20College%20of%20Nursing!5e1!3m2!1sen!2sin!4v1788951281414!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="contact-map__badge">
          <IoLocationSharp />
          <span>SRM Trichy College of Nursing</span>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
