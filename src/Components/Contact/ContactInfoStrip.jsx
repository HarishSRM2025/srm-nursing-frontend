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
    lines: [
      { label: "Mon – Fri:", time: "9:00 AM – 5:00 PM" },
      { label: "Sat:", time: "9:00 AM – 3:00 PM" },
      { label: "Sun:", time: "Holiday" },
    ],
    accent: "var(--teal)",
  },
  {
    icon: <IoCallOutline />,
    label: "Call Us",
    lines: [
      { text: "+91 431 225 8501 / 02 / 03", strong: true, href: "tel:+914312258501" },
      { text: "College Mobile: 95852 28600", strong: true, href: "tel:+919585228600" },
    ],
    accent: "var(--primary)",
  },
  {
    icon: <IoMailOutline />,
    label: "Email Us",
    lines: [
      { text: "principal@nc.srmtrichy.edu.in", strong: true, href: "mailto:principal@nc.srmtrichy.edu.in" },
      { text: "We reply within 24 hours", strong: false },
    ],
    accent: "var(--teal)",
  },
  {
    icon: <IoLocationOutline />,
    label: "Visit Us",
    lines: [
      { text: "Irungalur Village, Manachanallur Taluk,", strong: false },
      { text: "Tiruchirappalli – 621105, Tamil Nadu", strong: false },
    ],
    accent: "var(--primary)",
  },
];

const ContactInfoStrip = () => {
  return (
    <section className="cis">
      <div className="cis__inner">
        {items.map((item, idx) => (
          <div className="cis__card" key={idx}>
            {/* Glowing accent dot */}
            <span className="cis__dot" style={{ background: item.accent }} />

            {/* Icon bubble */}
            <div className="cis__icon-wrap" style={{ "--card-accent": item.accent }}>
              <span className="cis__icon">{item.icon}</span>
            </div>

            {/* Text */}
            <div className="cis__body">
              <h3 className="cis__label">{item.label}</h3>
              {item.lines.map((line, i) => {
                const content = line.href ? (
                  <a className="cis__link" href={line.href}>{line.text}</a>
                ) : line.time ? (
                  <>
                    {line.label} <span className="cis__time">{line.time}</span>
                  </>
                ) : (
                  line.text
                );

                const isStrongLine = line.strong || !!line.time;

                return (
                  <p
                    key={i}
                    className={`cis__line${isStrongLine ? " cis__line--strong" : ""}`}
                  >
                    {content}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoStrip;
