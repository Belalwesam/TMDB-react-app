import React from "react";

import SingleMovie from "./SingleMovie";
const MoviesList = ({movies}) => {
 
  return (
    <>
      <div className="row mb-0 mb-md-5 align-items-stretch">
        {movies.map((movie) => (
          <SingleMovie movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default MoviesList;
