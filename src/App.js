import React from "react";
import "./App.scss";
import Fade from "react-reveal/Fade";
import { Youtube } from "./components/youtube";
import { Rider } from "./components/rider";
import { Calendar } from "./components/calendar";
import { Contact } from "./components/contact";
import { Servicios } from "./components/servicios";
import { Jumbo } from "./components/jumbo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Fade>
          <Jumbo />
          <Servicios />
          <Youtube />
          <Calendar />
          <Rider />
          <Contact />
        </Fade>
      </div>
    </Router>
  );
}

export default App;
