import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    emailSubject: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
        emailSubject: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <form onSubmit={handleOnSubmit} action="#" className="p-5 bg-white">
      <h2 className="h4 text-black mb-5">Contact Form</h2>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="text-black" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            onChange={handleOnChange}
            required
            value={inputs.email}
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <label className="text-black" htmlFor="emailSubject">
            Subject
          </label>
          <input
            id="emailSubject"
            className="form-control"
            onChange={handleOnChange}
            required
            value={inputs.emailSubject}
          />
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
            onChange={handleOnChange}
            required
            value={inputs.message}
          ></textarea>
        </div>
      </div>

      <div className="row form-group">
        <div className="col-md-12">
          <button
            type="submit"
            disabled={status.submitting}
            value="Send Message"
            className="btn btn-primary btn-md text-white"
          >
            {!status.submitting
              ? !status.submitted
                ? "Submit"
                : "Submitted"
              : "Submitting..."}
          </button>
        </div>
      </div>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </form>
  );
};

export default ContactForm;
