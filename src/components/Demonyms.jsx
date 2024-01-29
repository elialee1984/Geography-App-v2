import React from "react";
import "../App.css";

const Demonyms = ({ countries, searchTerm }) => {
  return (
    <div>
      {countries
        .filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            country.name.official
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
              (country.demonyms &&
                country.demonyms.eng &&
                (country.demonyms.eng.m.toLowerCase().includes(searchTerm.toLowerCase()) ||
                country.demonyms.eng.f.toLowerCase().includes(searchTerm.toLowerCase())))
        )
        .map((country) => (
          <div key={country.name.common}>
            <li style={{ listStyle: "none" }}>
              <h3 style={{ display: "inline" }}>
                {country.name.common}
                <span>: </span>
                {country.demonyms && country.demonyms.eng ? (
                  country.demonyms.eng.m
                ) : (
                  <i>No official demonym</i>
                )}
              </h3>
            </li>
          </div>
        ))}
    </div>
  );
};

export default Demonyms;
