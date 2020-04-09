import React from "react";

const ContactForm = () => {
  return (
    <form action="#" className="p-5 bg-white">
      <h2 className="h4 text-black mb-5">Contact Form</h2>

      <div className="row form-group">
        <div className="col-md-6 mb-3 mb-md-0">
          <label className="text-black" for="fname">
            First Name
          </label>
          <input type="text" id="fname" className="form-control" />
        </div>
        <div className="col-md-6">
          <label className="text-black" htmlFor="lname">
            Last Name
          </label>
          <input type="text" id="lname" className="form-control" />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="text-black" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" className="form-control" />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="text-black" htmlFor="subject">
            Subject
          </label>
          <input type="subject" id="subject" className="form-control" />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="text-black" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            className="form-control"
            placeholder="Write your notes or questions here..."
          ></textarea>
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary btn-md text-white"
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
