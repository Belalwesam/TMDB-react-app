import { useState, useRef } from "react";
import axios from "axios";
import MoviesList from "../MoviesList";
import Spinner from "../Spinner";
const Search = () => {
  const searchRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = () => {
    if (searchRef.current.value !== "") {
      setLoading(true);
      axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=09028e53c058ded53b6ad39969718c77&language=en-US&query=${searchRef.current.value}&page=1&include_adult=false`,
      })
        .then((res) => {
          setMovies(res.data.results);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setMovies([]);
    }
  };
  return (
    <div className="popular-section">
      <div className="container">
        <div className="mb-4">
          <h3 className="text-center movies-heading mb-3">Search Movies : </h3>
          <div className="row mb-5">
            <div className="col-12 col-md-6 offset-md-3">
              <form action="#">
                <div className="form-group">
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search ..."
                    className="form-control"
                    onChange={() => handleChange()}
                  />
                </div>
              </form>
            </div>
          </div>
          {loading ? <Spinner /> : <MoviesList movies={movies} />}
        </div>
      </div>
    </div>
  );
};

export default Search;
