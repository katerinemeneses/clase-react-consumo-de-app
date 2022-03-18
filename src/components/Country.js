import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Country = () => {
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/alpha/vu")
      .then((res) => setCountry(res.data[0]));
  }, []);

  console.log(country);

  return (
    <div>
      <h1>{country.name?.official}</h1>
      <img src={country.flags?.png} alt="" />
      <h3>Demography</h3>
      <p>
        <b>Population: </b> {country.population}
      </p>
      <p>
        <b>Area: </b> {country.area}
      </p>

      <h3>Location</h3>
      <p>
        <b>Continent: </b>
        {country.continents?.[0]}
      </p>
      <p>
        <b>Region: </b> {country.region}
      </p>
      <p>
        <b>Subregion: </b> {country.subregion}
      </p>

      <h3>Capital</h3>
      <p>
        <b>Capital: </b> {country.capital?.[0]}
      </p>
    </div>
  );
};

export default Country;