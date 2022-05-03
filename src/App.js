import "./styles/App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import CitySelectionForm from "./components/CitySelectionForm";
import DisplayInformation from "./components/DisplayInformation";
import DisplayPhotos from "./components/DisplayPhoto";

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
  const [cityPhotos, setCityPhotos] = useState([]);

  //API call
  useEffect(() => {
    //1st Call: Ninjas City API

    if (city) {
      axios({
        url: `https://api.api-ninjas.com/v1/city?name=${city}`,
        method: "GET",
        headers: {
          "X-Api-Key": "OMPD0sHj09N5XJV/prIM3Q==zKLddhyIL406cdHa",
        },
      }).then((res) => {
        // console.log("Res", res);
        const responseData = res.data[0];

        console.log("responseData", responseData);

        setSelectedInfo(responseData);
        // setCity("Sao Paulo"); //           //It changes city state and gets new data from the API
      });

      //2nd Call: Unsplash API
      axios({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        dataResponse: "json",
        params: {
          client_id: "E8k2AKw4LSSFulm3bhOPXuC6-MWfhsGIsamLaFBJAEo",
          query: city,
          per_page: 12,
          orientation: "landscape",
          collections: "nature",
        },
      }).then((res) => {
        const responseData = res.data.results;

        setCityPhotos(responseData);

        console.log("res", res);
        console.log("res.data.results", res.data.results);
        // console.log(withOrientation);
        // console.log(allPhotos); //RETURNS AN EMPTY ARRAY, WHY ????????
      });
    }
  }, [city]);

  // Get info from Form
  const getInfo = (e, cityName) => {
    e.preventDefault();
    // console.log("city From getInfo", cityName);
    setCity(cityName);
    // let newCityInfo = selectedInfo;
    // getPhotos(e, cityName);
    // return newCityInfo;

    // setSelectedInfo(apiCityInformation);
    // console.log("apiCityInformation", apiCityInformation);
  };

  // const getPhotos = (e, cityName) => {
  //   // e.preventDefault();
  //   console.log("city From getPhoto", cityName);
  //   setCity(cityName);
  //   let selectedPhotos = cityPhotos;
  //   return selectedPhotos;
  // };

  return (
    <div className="App">
      <header className="App-header wrapper">
        <h1>City Information Guide</h1>
        {/* <h2>Coming Soon!</h2> */}

        <CitySelectionForm getInfo={getInfo} />
      </header>

      {/* <DisplayInformation cityObject={cityInfo} /> */}
      <main>
        {/* <h2>Select a city</h2> */}
        {city ? (
          <>
            <DisplayInformation cityObject={selectedInfo} />
            <DisplayPhotos photos={cityPhotos} />
          </>
        ) : (
          <p>A site to get to know some important Canadian cities.</p>
        )}
      </main>

      <footer className="wrapper">
        <h3>Developed by Theo Mitchell</h3>
        <p>For juno Bootcamp Project 3</p>
        <p>
          Thanks for Ninja API and Unsplash API, and jameswheeler at pixabay for
          providing the data for this learning project.
        </p>
      </footer>
    </div>
  );
}

export default App;
