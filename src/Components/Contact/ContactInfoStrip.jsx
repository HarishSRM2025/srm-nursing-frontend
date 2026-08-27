import React from "react";
import {
  IoTimeOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";

const items = [
  {
    icon: <IoTimeOutline />,
    label: "Working Hours",
    lines: ["Mon – Fri: 9:00 AM – 5:00 PM", "Sat: 9:00 AM – 3:00 PM · Sun: Holiday"],
  },
  {
    icon: <IoCallOutline />,
    label: "Call Us",
    lines: ["+91 431 225 8501 / 02 / 03", "College Mobile: 95852 28600"],
  },
  {
    icon: <IoMailOutline />,
    label: "Email Us",
    lines: ["principal@nc.srmtrichy.edu.in", "We reply within 24 hours"],
  },
  {
    icon: <IoLocationOutline />,
    label: "Visit Us",
    lines: ["Irungalur Village, Manachanallur Taluk,", "Tiruchirappalli – 621105, Tamil Nadu"],
  },
];

const ContactInfoStrip = () => {
  return (
    <section className="contact-strip">
      <div className="contact-strip__inner">
        {items.map((item, idx) => (
          <div className="contact-strip__card" key={idx}>
            <span className="contact-strip__icon">{item.icon}</span>
            <div>
              <h3 className="contact-strip__label">{item.label}</h3>
              {item.lines.map((line, i) => (
                <p className="contact-strip__line" key={i}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoStrip;
