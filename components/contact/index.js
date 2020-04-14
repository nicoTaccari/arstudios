import React from "react";
import SectionHeader from "../../common/section-header";
import Address from "./address";
import ContactForm from "./form";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./google-map"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const Contact = () => {
  const title = "Contact";
  const subtitle = " Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <section className="section bg-light" id="contact">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="row justifi-content-center mb-5">
          <div className="col-md-12">
            <Map />
          </div>
        </div>
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
