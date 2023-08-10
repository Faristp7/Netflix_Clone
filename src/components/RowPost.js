import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../axios";
import Youtube from "react-youtube";
import { api_key, imageUrl } from "../constants/constants";

export default function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then(({ data }) => {
        setMovies(data.results);
      })
      .catch((err) => {
        alert(err, "card");
      });
  });
  const opts = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`)
      .then(({ data }) => {
        if (data.results.length !== 0) {
          setUrlId(data.results[0]);
        }
      });
  };
  return (
    <div className="ml-5">
      <h2 className="text-white text-2xl font-bold">{props.title}</h2>
      <div className="flex p-5 overflow-x-scroll overflow-y-auto no-scrollbar">
        {movies.map((obj) => (
          <img
          key={obj.id}
            onClick={() => handleMovie(obj.id)}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="card"
            className={`cursor-pointer mr-3 rounded-md ${
              props.isSmall ? `w-72 hoverWidth` : `w-80 hoverWidth`
            }`}
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}
