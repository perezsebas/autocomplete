import React, { useEffect, useState } from "react";
import "./App.css";
import { Autocomplete } from "./components/Autocomplete";
import { Country } from "./types/country";

function App() {
  const [countries, setCountries] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = "/v3.1/all";
      const reponse = await fetch(url);
      const data = await reponse.json();
      setCountries(data.map((country: Country) => country.name.common));
    };
    try {
      fetchData();
    } catch (error) {
      console.log("There was an error getting countries");
    }
  }, []);
  return (
    <div className="container">
      <h2>Autocomplete</h2>
      <Autocomplete suggestions={countries} />
    </div>
  );
}

export default App;
