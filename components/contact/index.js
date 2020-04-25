import React from "react";
import SectionHeader from "../../common/section-header";
import Address from "./address";
import ContactForm from "./form";
import Spinner from "react-bootstrap/Spinner";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./google-map"), {
  loading: () => (
    <div className="row justify-content-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  ),
  ssr: false,
});

const Contact = () => {
  const title = "Contact";
  const subtitle = " Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <section className="section bg-light" id="contact">
      <div className="container-fluid">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="row justify-content-center mb-5">
          <div className="col-md-12">
            <Map />
          </div>
        </div>
      </div>
      <div className="container">
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
