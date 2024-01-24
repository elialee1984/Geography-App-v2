import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CountryList from "./components/CountryList";
import Demonyms from "./components/Demonyms";
import Languages from "./components/Languages";
import Currencies from "./components/Currencies";

const App = () => {
  const [countries, setCountries] = useState({});
  const [country, setCountry] = useState("South Korea");
  // const countries = ["USA", "South Korea", "Germany"];

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
  }, []);

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/countrylist" element={<CountryList />} />
        <Route path="/demonyms" element={<Demonyms />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/currencies" element={<Currencies />} />
      </Routes>
    </div>
  );
};

export default App;
