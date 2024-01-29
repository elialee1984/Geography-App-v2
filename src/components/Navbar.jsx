import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">Home</Link>
      </div>
      <div className="right">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => {
            if (typeof e.target.value === 'string') {
              setSearchTerm(e.target.value);
            }
          }}
        />
        <Link to="/countrylist">Country List</Link>
        <Link to="/demonyms">Demonyms</Link>
        <Link to="/languages">Languages</Link>
        <Link to="/currencies">Currencies</Link>
      </div>
    </nav>
  );
};

export default Navbar;
