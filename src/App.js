import "./App.css";
import React, { useState } from "react";
import Scroll0 from "./Scroll0";
import Navbar from "./Navbar";
import MousepadContainer from "./MousepadContainer";

function App() {
  

  return (
    <div className="App">
      <Navbar></Navbar>

      <Scroll0></Scroll0>

      <MousepadContainer
      ></MousepadContainer>

      
    </div>
  );
}

export default App;
