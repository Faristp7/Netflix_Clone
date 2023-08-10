import React from "react";
import './Banner.css'

export default function Banner() {
  return (
    <div className="Banner text-white">
      <div className="p-16">
        <h1 className="text-6xl font-semibold">Movie Name</h1>
        <div className="mt-8">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <p className="description">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface
        </p> 
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}
    