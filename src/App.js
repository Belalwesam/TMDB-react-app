//Hooks and tools
import { BrowserRouter as Router, Route } from "react-router-dom";
//components
import Navbar from "./components/partials/Navbar";
import Home from "./components/Pages/Home";
import Popular from "./components/Pages/Popular";
import TopRated from "./components/Pages/TopRated";
import Search from "./components/Pages/Search";
import MovieDetailes from "./components/MovieDetailes";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact render={() => <Home />} />
        <Route path="/popular" render={() => <Popular />} />
        <Route path="/top-rated" render={() => <TopRated />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/movie/:id" render={() => <MovieDetailes />} />
      </Router>
    </>
  );
}
export default App;
