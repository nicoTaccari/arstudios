import React from "react";

export const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div class="container">
        <a class="navbar-brand" href="index.html">
          April Road Studios
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="about.html" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="solutions.html" class="nav-link">
                Servicios
              </a>
            </li>
            <li class="nav-item">
              <a href="blog.html" class="nav-link">
                Sessions
              </a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
