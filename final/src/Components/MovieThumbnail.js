import React from "react";
import '../Visuals/Movie.css';
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MoveThumbnail = ({name, poster_path, score, overview }) => {
  return (
    <div className="movie">
      <div className="number">
      </div>
      <img src={IMG_API + poster_path} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Rating: {score}</small>
        <small>OverView: {overview}</small>
      </div>
    </div>
  );
};
export default MoveThumbnail;