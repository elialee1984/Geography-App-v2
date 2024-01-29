import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CountryList from "./components/CountryList";
import Demonyms from "./components/Demonyms";
import Languages from "./components/Languages";
import Currencies from "./components/Currencies";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("South Korea");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedData);
      } catch (error) {
        console.error(error);
      }
    };
    getData();

    // console.log(countries);
  }, []);

  return (
    <div>
      <div className="navbar">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="main main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/countrylist"
            element={
              <CountryList countries={countries} searchTerm={searchTerm} />
            }
          />
          <Route
            path="/demonyms"
            element={<Demonyms countries={countries} searchTerm={searchTerm} />}
          />
          <Route
            path="/languages"
            element={
              <Languages countries={countries} searchTerm={searchTerm} />
            }
          />
          <Route
            path="/currencies"
            element={
              <Currencies countries={countries} searchTerm={searchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
