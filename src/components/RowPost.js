import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../axios";
import { api_key, imageUrl } from "../constants/constants";

export default function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${api_key}&with_networks=213`)
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((err) => {
        alert(err, "card");
      });
  });
  return (
    <div className="ml-5">
      <h2 className="text-white text-2xl font-bold">{props.title}</h2>
      <div className="flex p-5 overflow-x-scroll overflow-y-auto no-scrollbar">
        {movies.map((obj) => (
          <img
            src={`${imageUrl + obj.backdrop_path}`}
            alt="card"
            className={`mr-3 ${props.isSmall ? `w-60` : `w-72`}  `}
          />
        ))}
      </div>
    </div>
  );
}
