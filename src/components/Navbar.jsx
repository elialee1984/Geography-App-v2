import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countrylist">Country List</Link>
          </li>
          <li>
            <Link to="/demonyms">Demonyms</Link>
          </li>
          <li>
            <Link to="/languages">Languages</Link>
          </li>
          <li>
            <Link to="/currencies">Currencies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
