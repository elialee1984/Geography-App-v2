import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">Home</Link>
      </div>
      <div className="right">
        <Link to="/countrylist">Country List</Link>
        <Link to="/demonyms">Demonyms</Link>
        <Link to="/languages">Languages</Link>
        <Link to="/currencies">Currencies</Link>
      </div>
    </nav>
  );
};

export default Navbar;
