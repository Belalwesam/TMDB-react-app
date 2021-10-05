import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "../MoviesList";
import Spinner from "../Spinner";
const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = {
    apiKey: "09028e53c058ded53b6ad39969718c77",
  };
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${api.apiKey}&language=en-US&page=1`,
    })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="popular-section">
      <div className="container">
        <h3 className="movies-heading text-center">Popular Movies</h3>
        {loading ? <Spinner /> : <MoviesList movies={movies} />}
      </div>
    </section>
  );
};
export default Popular;
