import { useEffect, useState } from "react";
import "./App.css";
import loader from "../src/assets/loader.svg";
import browser from "../src/assets/browser.svg";
import useFetch from "./components/FetchData.jsx";
import NavBar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";

// pays.flags.svg
// pays.translations.fra.common
// pays.population

function App() {
  const { loading, data, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  // const [countriesData, setCountriesData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [inputRange, setInputRange] = useState(24);
  function inputChange(e) {
    setInputSearch(e.target.value);
  }
  function rangeValue(e) {
    setInputRange(e.target.value);
  }
  const [compare, setCompare] = useState("alpha");

  function handleClick(e) {
    setCompare(e.target.id);
  }
  return     <>
      {loading && <div>Chargement en cours...</div>}
      {error && (
        <div className="alert alert-danger">
          Problème rencontré : {error.toString()}
        </div>
      )}
      <NavBar
        onChange={inputChange}
        value={inputRange}
        onRange={rangeValue}
        props={inputRange}
        onClick={handleClick}
      />
      <Card
      data={data}
      inputSearch={inputSearch}
      compare={compare}
      inputRange={inputRange}
      />
    </>  
}

export default App;
