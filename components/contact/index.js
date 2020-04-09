import React from "react";
import SectionHeader from "../../common/section-header";
import Address from "./address";
import ContactForm from "./form";

const Contact = () => {
  const title = "Contact";
  const subtitle = " Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <section className="section bg-light" id="contact">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="row">
          <div className="col-md-7 mb-5">
            <ContactForm />
          </div>
          <Address />
        </div>
      </div>
    </section>
  );
};

export default Contact;
