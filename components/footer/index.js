import React from "react";
import Logo from "../../assets/images/logo-white-transparent.png";
import Icon from "./social-icon";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  const copyrightDate = new Date().getFullYear();
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3 pt-2">
            <img
              src={Logo}
              alt=""
              className="d-inline-block"
              width="150"
              height="150"
            />
          </div>
          <div class="col-12 col-md-3 pt-2">
            <h2 class="footer-heading mb-3">Features</h2>
            <ul class="list-unstyled">
              <li>
                <Link smooth to="#about">
                  About us
                </Link>
              </li>
              <li>
                <Link smooth to="#services">
                  Services
                </Link>
              </li>
              <li>
                <Link smooth to="#sessions">
                  Live Sessions
                </Link>
              </li>
              <li>
                <Link smooth to="#calendar">
                  Calendar
                </Link>
              </li>
              <li>
                <Link smooth to="#rider">
                  Rider
                </Link>
              </li>
              <li>
                <Link smooth to="#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-3 pt-2">
            <h2 class="footer-heading mb-3">Follow Us</h2>
            <a
              href="https://www.facebook.com/aprilroadstudios/"
              target="_blank"
              class="pl-0 pr-3"
            >
              <span>
                <Icon isBrand={true} name={"fa-facebook"} color={"blue"} />
              </span>
            </a>
            <a
              href="https://www.instagram.com/aprilroadstudios/"
              target="_blank"
              class="pl-3 pr-3"
            >
              <span>
                <Icon isBrand={true} name={"fa-instagram"} color={"orange"} />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCl2QUPd8gFPKMZN5b-MNL6g"
              target="_blank"
              class="pl-3 pr-3"
            >
              <span>
                <Icon isBrand={true} name={"fa-youtube"} color={"red"} />
              </span>
            </a>
          </div>
          <div class="col-12 col-md-3 pt-2">
            <h2 className="footer-heading pt-3 mb-4">Opening Hours</h2>
            <ul className="opening-time">
              <li>
                <span>
                  <i className="fa fa-times"></i>
                </span>
                <p className="clock-time">
                  <strong>monday :</strong> closed
                </p>
              </li>
              <li>
                <span>
                  <i className="fa fa-check"></i>
                </span>
                <p>
                  <strong>tue-fri :</strong> 8am - 12am
                </p>
              </li>
              <li>
                <span>
                  <i className="fa fa-check"></i>
                </span>
                <p>
                  <strong>sat-sun :</strong> 7am - 1am
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-5">
              <p>
                {copyrightDate} All rights reserved | Developed by{" "}
                <a href="https://github.com/nicoTaccari" target="_blank">
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
