import "./App.css";
import CitySelectionForm from "./components/CitySelectionForm";
import DisplayInformation from "./components/DisplayInformation";

function App() {
  const cityInfo = {
    name: "Toronto",
    country: "Canada",
    population: 200000,
    latitude: 51.05,
    longitude: -114.067,
    is_capital: false,
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>City Information Guide</h1>
        <h2>Coming Soon!</h2>
        <h3>Developed by Theo Mitchell</h3>

        <CitySelectionForm />
        <DisplayInformation cityObject={cityInfo} />
      </header>
    </div>
  );
}

export default App;
