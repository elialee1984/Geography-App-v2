import React from "react";

const normalizeString = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const Languages = ({ countries, searchTerm, isIndependent, setIsIndependent }) => {
  const normalizedSearchTerm = normalizeString(searchTerm);
  return (
    <div>
      {countries
        .filter(
          (country) =>
          (!isIndependent || country.independent) &&
          normalizeString(country.name.common).includes(normalizedSearchTerm) ||
            normalizeString(country.name.official).includes(normalizedSearchTerm) ||
            (country.languages &&
              Object.values(country.languages)
                .map((language) => normalizeString(language))
                .join(", ")
                .includes(normalizedSearchTerm))
        )
        .map((country) => (
          <div key={country.name.common}>
            <li style={{ listStyle: "none" }}>
              <h3 style={{ display: "inline" }}>
                {country.name.common}
                <span>: </span>
                {country.languages ? (
                  Object.values(country.languages)
                    .map((language) => `${language}`)
                    .join(", ")
                ) : (
                  <i>No official language</i>
                )}
              </h3>
            </li>
          </div>
        ))}
    </div>
  );
};

export default Languages;
