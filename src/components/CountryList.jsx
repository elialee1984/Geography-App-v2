import React from "react";



const CountryList = ({ countries, searchTerm }) => {
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
              .includes(searchTerm.toLowerCase())
        )
        .map((country) => (
          <div key={country.name.common}>
            <li style={{ listStyle: "none" }}>
              <h3 style={{ display: "inline" }}>{country.name.common}</h3>
              {country.name.common === country.name.official ? (
                ""
              ) : (
                <span> (officially: {country.name.official})</span>
              )}
            </li>
          </div>
        ))}
    </div>
  );
};

export default CountryList;
