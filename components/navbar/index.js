import React, { useState } from "react";
import { useScroll } from "../../services/custom-hooks/on-scroll";
import Jumbo from "../jumbo";
import { HashLink as Link } from "react-router-hash-link";
import LogoWhiteTransparent from "../../assets/images/logo-white-transparent.png";
import LogoBlackWhite from "../../assets/images/logo-black-white.png";

const Navbar = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const scrolled = useScroll();
  let navClass =
    "navbar navbar-toggleable-sm navbar-expand-lg navbar-dark ftco_navbar fixed-top ftco-navbar-light " +
    (scrolled ? "scrolled awake" : "");
  return (
    <>
      <div className="overlay"></div>
      <nav className={navClass} id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" smooth to="#jumbo">
            <img
              src={scrolled ? LogoBlackWhite : LogoWhiteTransparent}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            &nbsp; April Road Studios
          </Link>

          <button
            className={
              mobileMenu
                ? "navbar-toggler navbar-toggler-right"
                : "navbar-toggler navbar-toggler-right collapsed"
            }
            onClick={() => setmobileMenu(!mobileMenu)}
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={
              mobileMenu
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="ftco-nav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link smooth to="#about" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#sessions" className="nav-link">
                  Live Sessions
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#calendar" className="nav-link">
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#rider" className="nav-link">
                  Rider
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth to="#contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Jumbo />
    </>
  );
};

export default Navbar;
