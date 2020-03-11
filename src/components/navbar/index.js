/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

export const Navbar = () => {
  const [collapsed, setcollapsed] = useState(true);

  return (
    <nav className="navbar navbar-dark navbar-expand-md navbar-no-bg">
      <div className="container">
        <a className="navbar-brand" href="#">
          April Road Studios
        </a>

        <button
          onClick={() => setcollapsed(!collapsed)}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Fade>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link scroll-link" href="#top-content">
                  Top
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" href="#section-1">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" href="#section-2">
                  Specs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" href="#section-3">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" href="#section-4">
                  About
                </a>
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    </nav>
  );
};
