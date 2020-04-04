import Navbar from "../components/navbar";
import About from "../components/about";
import Servicios from "../components/servicios";
import Youtube from "../components/youtube";
import Calendar from "../components/calendar";
import Rider from "../components/rider";
import Contact from "../components/contact";

import { StaticRouter as Router } from "react-router-dom";

export default () => (
  <Router>
    <div className="app">
      <header>
        <Navbar />
      </header>
      <About />
      <Servicios />
      {/* <Youtube /> */}
      <Calendar />
      <Rider />
      <Contact />
    </div>
  </Router>
);
