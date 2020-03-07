import React from "react";
import "./App.css";
import Zoom from "react-reveal/Zoom";

function App() {
  return (
    <div className="App">
      <Zoom>
        <button className={"btn btn-primary"}>Testing</button>
      </Zoom>
    </div>
  );
}

export default App;
