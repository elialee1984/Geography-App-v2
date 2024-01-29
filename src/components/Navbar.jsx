import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  searchTerm,
  setSearchTerm,
  showDependent,
  setShowDependent,
  showIndependent,
  setShowIndependent,
}) => {
  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/">Home</Link>
        <div className="spacer" style={{ margin: "10px" }}></div>
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => {
            if (typeof e.target.value === "string") {
              setSearchTerm(e.target.value);
            }
          }}
        />
        <div className="spacer" style={{ margin: "10px" }}></div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={showIndependent}
              onChange={() => setShowIndependent(!showIndependent)}
            />
            Show <span style={{ color: "turquoise" }}>independent </span>
            sovereign countries
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={showDependent}
              onChange={() => setShowDependent(!showDependent)}
            />
            Show <span style={{ color: "orange" }}>dependent </span>territories 
          </label>
        </div>
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
