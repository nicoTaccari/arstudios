import React from "react";
import "./App.scss";
import Zoom from "react-reveal/Zoom";
import { Navbar } from "./components/navbar";
import { Youtube } from "./components/youtube";

function App() {
  return (
    <div className="App">
      <Zoom>
        <Navbar />
        <Youtube />
      </Zoom>
    </div>
  );
}

export default App;
