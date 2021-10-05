import { useState, useEffect } from "react";
import axios from "axios";
export const useFetchUpcoming = () => {
  const [loading, setLoading] = useState(false);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const api = {
    apiKey: "09028e53c058ded53b6ad39969718c77",
  };
  const getUpcomingMovies = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api.apiKey}&language=en-US&page=1`,
    })
      .then((res) => {
        setUpcomingMovies(res.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
  return {
    loading,
    upcomingMovies,
  };
};
