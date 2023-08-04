import React from "react";
import './Banner.css'

export default function Banner() {
  return (
    <div className="Banner text-white">
      <div>
        <h1>Movie Name</h1>
        <div>
          <button>Play</button>
          <button>My list</button>
        </div>
        <h1>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}
    