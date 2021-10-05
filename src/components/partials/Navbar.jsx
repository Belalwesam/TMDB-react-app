import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [activeBtn, setActiveBtn] = useState(false);
  const handleClick = () => {
    setActiveBtn(!activeBtn);
  };
  return (
    <>
      <nav className="my-nav">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="my-nav-logo">
            <h3>
              <Link to="/" className="logo-link">
                TM<span>DB</span>
              </Link>
            </h3>
          </div>
          <div className="my-nav-links">
            <ul className="list-unstyled">
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/search" activeClassName="active">
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink to="/popular" activeClassName="active">
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/top-rated" activeClassName="active">
                  Top Rated
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`mobile-menu-btn ${activeBtn ? "active-btn" : ""}`}
            onClick={() => handleClick()}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
      <div className={`my-mobile-nav ${activeBtn ? "show-mobile-nav" : ""}`}>
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="mobile-nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="mobile-nav-link ">
              Search
            </Link>
          </li>
          <li>
            <Link to="/popular" className="mobile-nav-link">
              Popular
            </Link>
          </li>
          <li>
            <Link to="/top-rated" className="mobile-nav-link">
              Top Rated
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
