import React, { useEffect, useState } from "react";
import { api_key, imageUrl } from "../constants/constants";
import axios from "../axios";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 20) + 1
    axios
      .get(`trending/all/week?api_key=${api_key}&language=en-US`)
      .then(({ data }) => {
        setMovie(data.results[randomNumber]);
      }).catch(err => {
        alert(err ,'banner')
      })
  }, []);
  return (
    <div
      className="Banner text-white"
      style={{ backgroundImage: `url(${imageUrl + movie.backdrop_path})` }}
    >
      <div className="p-14">
        <h1 className="text-6xl font-semibold heading">{movie.title}</h1>
        <div className="mt-8">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <p className="description font-semibold">{movie.overview}</p>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};
