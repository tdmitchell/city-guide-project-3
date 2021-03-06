import "./../styles/CitySelectionForm.css";
import { useState } from "react";

function CitySelectionForm(props) {
  const [userChoice, setUserChoice] = useState("placeholder");

  //Get the User's choice value and update UserChoice State
  const handleUserChoice = (e) => {
    setUserChoice(e.target.value);
  };

  //Display
  return (
    <form onSubmit={(e) => props.getInfo(e, userChoice)} className="wrapper">
      <label htmlFor="cityName">Choose city:</label>
      {/* <label>Choose city:</label> */}
      <select
        value={userChoice}
        id="cityName"
        name="cityName"
        onChange={handleUserChoice}
      >
        <option value="placeholder" disabled>
          Pick one:
        </option>
        <option value="Calgary">Calgary</option>
        <option value="Edmonton">Edmonton</option>
        <option value="Halifax">Halifax</option>
        <option value="Montréal">Montréal</option>
        <option value="Ottawa">Ottawa</option>
        <option value="Québec">Québec</option>
        <option value="Saskatoon">Saskatoon</option>
        <option value="Toronto">Toronto</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Winnipeg">Winnipeg</option>
      </select>
      <button type="submit">Select</button>
    </form>
  );
}

export default CitySelectionForm;
