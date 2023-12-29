import React from "react";
import StarRating from "./StarRating";
import { useParams } from "react-router-dom";

const Info = ({ list }) => {
  const { id } = useParams();
  const movie = list.find((el) => el.id == id);
  return (
    <div className="waw">
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} />
      <p>{movie.date}</p>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Info;
