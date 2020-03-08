/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

export const Navbar = () => {
  const [collapsed, setcollapsed] = useState(true);

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src="/docs/4.4/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        April Road Studios
      </a>
      <button
        className="navbar-toggler d-block d-xl-none"
        type="button"
        onClick={() => setcollapsed(!collapsed)}
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Fade>
        <div
          className={`collapse navbar-collapse d-xl-none ${
            collapsed ? "" : "show"
          }`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </Fade>
    </nav>
  );
};
