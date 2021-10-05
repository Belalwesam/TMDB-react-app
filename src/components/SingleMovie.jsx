import React from "react";
import { Link } from "react-router-dom";
const SingleMovie = ({ movie }) => {
  return (
    <div className="col-12 col-md-3 mb-4">
      <div className="single-movie">
        <div className="single-movie-img">
          <img
            src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="single-movie-text">
          <p className="m-0 movie-title">
            <Link to={`/movie/${movie.id}`}>{movie.original_title}</Link>
          </p>
          <p className="release-date m-0">
            Release date : <span>{movie.release_date}</span>
          </p>
          <p className="rating m-0">
            Rating :{" "}
            <span>
              {movie.vote_average === 0 ? "Not rated yet" : movie.vote_average}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
