import React from "react";
import "./App.scss";
import Zoom from "react-reveal/Zoom";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Zoom>
        <Navbar />
      </Zoom>
    </div>
  );
}

export default App;
