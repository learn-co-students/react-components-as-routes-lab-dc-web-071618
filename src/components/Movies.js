import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => {
        return (
          <div className="movie">
            <h3>{m.title}</h3>
            <h5>{m.time}</h5>
            <ul>
              {m.genres.map(g => {
                return <li>{g}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
