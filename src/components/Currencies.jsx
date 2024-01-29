import React from "react";
import "../App.css";

const Currencies = ({ countries, searchTerm }) => {
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
            (country.currencies &&
              Object.values(country.currencies)
                .map((currency) => currency.name)
                .join(", ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase()))
        )
        .map((country) => (
          <div key={country.name.common}>
            <li style={{ listStyle: "none" }}>
              <h3 style={{ display: "inline" }}>
                {country.name.common}
                <span>: </span>
                {country.currencies ? (
                  Object.values(country.currencies)
                    .map((currency) => `${currency.name} ${currency.symbol}`)
                    .join(", ")
                ) : (
                  <i>No official currency</i>
                )}
              </h3>
            </li>
          </div>
        ))}
    </div>
  );
};

export default Currencies;
