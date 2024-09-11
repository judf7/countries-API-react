import { useEffect, useState } from "react";
import "./App.css";
import loader from "../src/assets/loader.svg";
import browser from "../src/assets/browser.svg";
import useFetch from "./components/FetchData.jsx";
import NavBar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";


function App() {
  const { loading, data, error } = useFetch(
    "https://restcountries.com/v3.1/all/"
  );
  const [inputSearch, setInputSearch] = useState("");
  const [inputRange, setInputRange] = useState(10);
  const [compare, setCompare] = useState("alpha");
  const [activeButton, setActiveButton] = useState("");
  function inputChange(e) {
    setInputSearch(e.target.value);
  }
  function rangeValue(e) {
    setInputRange(e.target.value);
  }
  function handleClickMin() {
    setCompare("minToMax");
    setActiveButton("minToMax");
  }

  function handleClickMax() {
    setCompare("maxToMin");
    setActiveButton("maxToMin");
  }

  function handleClickAlpha() {
    setCompare("alpha");
    setActiveButton("alpha");
  }
  return (
    <>
<div className="title"> <h1 className="display-3">Bienvenue sur l'application Countries</h1><br></br>
    <p className="lead">
Ici vous retrouverez l'ensemble des pays du monde et des informations détaillées</p></div>
      {loading && (
        <div className="alert">
          Chargement en cours...
          <div>
            <img src={loader} />
          </div>{" "}
        </div>
      )}
      {error && (
        <div className="alert alert-danger">
          Problème rencontré : {error.toString()}
          <div className="icons">
            <img src={browser} alt="" />
          </div>
        </div>
      )}
      <NavBar
        onChange={inputChange}
        value={inputRange}
        onRange={rangeValue}
        props={inputRange}
        activeButton={activeButton}
        onClickMin={() => handleClickMin("minToMax")}
        onClickMax={() => handleClickMax("maxToMin")}
        onClickAlpha={() => handleClickAlpha("alpha")}
      />
      <Card
        data={data}
        inputSearch={inputSearch}
        compare={compare}
        inputRange={inputRange}
      />
    </>
  );
}

export default App;
