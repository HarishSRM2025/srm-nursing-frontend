import React from "react";
import ContactInfoStrip from "../Components/Contact/ContactInfoStrip";
import ContactMapSection from "../Components/Contact/ContactMapSection";
import ContactFAQ from "../Components/Contact/ContactFAQ";
import ContactCTABanner from "../Components/Contact/ContactCTABanner";
import "../Styles/contact.css"
import Breadcrum from "../Components/Common/Breadcrum";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <Breadcrum title="Contact Us"/>
      <ContactInfoStrip />
      <ContactMapSection />
      <ContactFAQ />
      <ContactCTABanner />
    </main>
  );
};

export default ContactPage;
