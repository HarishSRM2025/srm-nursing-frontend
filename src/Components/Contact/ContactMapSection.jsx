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
          src="https://www.openstreetmap.org/export/embed.html?bbox=78.6%2C10.78%2C78.65%2C10.82&layer=mapnik"
          loading="lazy"
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
