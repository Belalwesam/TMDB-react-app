import { Link } from "react-router-dom";
import HeroImg from "../../assets/react.png";
import MovieList from "./../MoviesList";
import { useFetchUpcoming } from "./../../hooks/useFetchUpcoming";
import { useEffect, useState } from "react";
const Home = () => {
  const { upcomingMovies, loading } = useFetchUpcoming();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (loading) {
      return;
    }
    setMovies(upcomingMovies);
  }, [loading]);
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-6 d-flex d-flex align-items-center order-2">
            <div className="hero-text">
              <h3>
                The Movie <span>Database</span>
              </h3>
              <p>
                TMDB is an application built with React.js framework based on
                the API provided by the developers. <br /> and the main idea
                behinde it is to be able to search and look up movies based on
                the category , rating and much more!
              </p>
              <div className="search-link">
                <Link to="/search">Search</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1">
            <div className="hero-img">
              <img src={HeroImg} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <h3 className="text-center movies-heading mb-5">Upcoming Movies</h3>
        <MovieList movies = {movies}/>
      </div>
    </section>
  );
};
export default Home;
