import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import CitySelectionForm from "./components/CitySelectionForm";
import DisplayInformation from "./components/DisplayInformation";

function App() {
  //Hardcoded to test Display
  // const cityInfo = {
  //   name: "Toronto",
  //   country: "Canada",
  //   population: 200000,
  //   latitude: 51.05,
  //   longitude: -114.067,
  //   is_capital: false,
  // };

  //States
  // const [city, setCity] = useState("Rio de Janeiro");
  const [city, setCity] = useState("");
  const [selectedInfo, setSelectedInfo] = useState({
    // name: "Toront",
    // country: "Canada1",
    // population: 200000,
    // latitude: 51.05,
    // longitude: -114.067,
    // is_capital: false,
  });

  // Get info from API
  const getInfo = (e, cityName) => {
    e.preventDefault();
    console.log("city From getInfo", cityName);
    setCity(cityName);
    let newCityInfo = selectedInfo;
    return newCityInfo;

    // setSelectedInfo(apiCityInformation);
    // console.log("apiCityInformation", apiCityInformation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>City Information Guide</h1>
        <h2>Coming Soon!</h2>
        <h3>Developed by Theo Mitchell</h3>

        <CitySelectionForm getInfo={getInfo} />
        {/* <DisplayInformation cityObject={cityInfo} /> */}
        <DisplayInformation cityObject={selectedInfo} />
      </header>
    </div>
  );
}

export default App;
