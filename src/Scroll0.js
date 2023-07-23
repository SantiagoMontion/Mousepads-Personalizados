import "./Scroll0.css";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";

function Scroll0() {
  return (
    <div className="scroll-container">
      <div className="Banner-1">
        <a href="#" target="_blank" className="Banner-cta">
          Link
        </a>
      </div>

      <div className="Banner-50">
        <a href="#" target="_blank" className="Banner-2"></a>

        <a href="#" target="_blank" className="Banner-2"></a>
      </div>
    </div>
  );
}

export default Scroll0;
