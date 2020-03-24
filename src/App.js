import React from "react";
import "./App.scss";
import { Fade } from "react-reveal";
import { Youtube } from "./components/youtube";
import { Rider } from "./components/rider";
import { Calendar } from "./components/calendar";
import { Contact } from "./components/contact";
import { Servicios } from "./components/servicios";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Fade>
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
