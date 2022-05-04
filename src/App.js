import "./styles/App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import CitySelectionForm from "./components/CitySelectionForm";
import DisplayInformation from "./components/DisplayInformation";
import DisplayPhotos from "./components/DisplayPhoto";

function App() {
  //States
  const [city, setCity] = useState("");
  const [selectedInfo, setSelectedInfo] = useState({});
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
        const responseData = res.data[0];
        setSelectedInfo(responseData);
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
          collections: "sightseeing",
        },
      }).then((res) => {
        const responseData = res.data.results;
        setCityPhotos(responseData);
      });
    }
  }, [city]);

  // Get info from Form
  const getInfo = (e, cityName) => {
    e.preventDefault();
    setCity(cityName);
  };

  //Display
  return (
    <div className="App">
      <header className="App-header wrapper">
        <h1>City Information Guide</h1>
        <CitySelectionForm getInfo={getInfo} />
      </header>

      <main>
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
        <h3>Developed by Theo Mitchell - 2022</h3>
        <p>During Web Development Bootcamp at Juno College of Technology</p>

        <p>
          Courtesy of Ninja API and Unsplash API. They Provided the data for
          this learning project.
        </p>
      </footer>
    </div>
  );
}

export default App;
