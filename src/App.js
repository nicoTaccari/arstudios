import React from "react";
import "./App.scss";
import Zoom from "react-reveal/Zoom";
import { Navbar } from "./components/navbar";
import { Youtube } from "./components/youtube";
import { Rider } from "./components/rider";
import { Calendar } from "./components/calendar";
import { Contact } from "./components/contact";
import { Servicios } from "./components/servicios";
import { Jumbo } from "./components/jumbo";

function App() {
  return (
    <div className="App">
      <Zoom>
        <Navbar />
        <Jumbo />
        <Servicios />
        <Youtube />
        <Calendar />
        <Rider />
        <Contact />
      </Zoom>
    </div>
  );
}

export default App;
