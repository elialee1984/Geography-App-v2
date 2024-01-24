import React from "react";

const CountryList = (props) => {
  const { countries } = props;

  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.common}>
          <li>
            {country.name.official}, also known as{" "}
            <strong>{country.name.common}</strong>
          </li>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
