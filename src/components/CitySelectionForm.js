import { useState } from "react";

function CitySelectionForm(props) {
  const [userChoice, setUserChoice] = useState("placeholder");
  // console.log("Inicial Users Choice State:", userChoice); //RETURNS placeholder  - OK

  //Get the User's choice value
  const handleUserChoice = (e) => {
    console.log("City from Form:", e.target.value);
    //Update userChoice
    setUserChoice(e.target.value);
    // console.log("Users Choice State:", userChoice); //Why 1 behind???
  };

  return (
    <form onSubmit={(e) => props.getInfo(e, userChoice)}>
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
