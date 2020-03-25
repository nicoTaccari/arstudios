import React from "react";
import { useScroll } from "../../services/custom-hooks/on-scroll";
import { Jumbo } from "../jumbo/index";

export const Navbar = () => {
  const scrolled = useScroll();
  let navClass =
    "navbar navbar-expand-lg navbar-dark ftco_navbar fixed-top ftco-navbar-light " +
    (scrolled ? "scrolled awake" : "");
  console.log(scrolled);
  return (
    <>
      <div className="overlay"></div>
      <nav className={navClass} id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            April Road Studios
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="solutions.html" className="nav-link">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Sessions
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Jumbo />
    </>
  );
};
