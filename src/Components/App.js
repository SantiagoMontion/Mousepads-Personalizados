import "../css/App.css";
import React, { useState } from "react";
import Scroll0 from "./Scroll0";
import Navbar from "./Navbar";
import MousepadContainer from "./MousepadContainer";
import Footer from "./footer";
import Scroll2 from "./Scroll2";
function App() {
  return (
    <div className="App">
      <div className="scroll-back">
        <Navbar></Navbar>

        <Scroll0></Scroll0>
        <Scroll2></Scroll2>
      </div>
      <MousepadContainer></MousepadContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
