/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Fade from "react-reveal/Fade";

export const Navbar = () => {
  const [collapsed, setcollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        April Road Studios
      </a>

      <button
        onClick={() => setcollapsed(!collapsed)}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
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
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </Fade>
    </nav>
  );
};
