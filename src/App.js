import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import CitySelectionForm from "./components/CitySelectionForm";
import DisplayInformation from "./components/DisplayInformation";

function App() {
  //States
  // const [city, setCity] = useState("");
  const [city, setCity] = useState("Rio de Janeiro");
  const [selectedInfo, setSelectedInfo] = useState({
    // name: "Toront",
    // country: "Canada1",
    // population: 200000,
    // latitude: 51.05,
    // longitude: -114.067,
    // is_capital: false,
  });

  //API call
  useEffect(() => {
    axios({
      url: `https://api.api-ninjas.com/v1/city?name=${city}`,
      method: "GET",
      headers: {
        "X-Api-Key": "OMPD0sHj09N5XJV/prIM3Q==zKLddhyIL406cdHa",
      },
    })
      .then((res) => {
        // console.log("Res", res);
        const responseData = res.data[0];

        console.log("responseData", responseData);

        setSelectedInfo(responseData);
        // setCity("Sao Paulo"); //           //It changes city state and gets new data from the API
      })
      .catch((error) => {
        const noDataAvailable = document.querySelector("#errorMessage");
        const message = noDataAvailable.innerHTML("<h2>NOOOOOO</h2>");
        noDataAvailable.appendChild(message);
      });
  }, [city]);

  // Get info from Form
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
        <div id="errorMessage"></div>
        <CitySelectionForm getInfo={getInfo} />
        {/* <DisplayInformation cityObject={cityInfo} /> */}
        <DisplayInformation cityObject={selectedInfo} />
      </header>
    </div>
  );
}

export default App;
