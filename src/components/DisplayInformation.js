import "./../styles/DisplayInformation.css";

function DisplayInformation(props) {
  //Display
  return (
    <section>
      {props.cityObject.name === "" ? (
        <h2>Please select an option from the dropdown list.</h2>
      ) : (
        <>
          <h2>{props.cityObject.name}</h2>
          <ul>
            <li>
              <h3>
                Country: <span>{props.cityObject.country}</span>
              </h3>
            </li>
            <li>
              <h3>
                Population: <span>{props.cityObject.population}</span>
              </h3>
            </li>
            <li>
              <h3>
                Is it capital: <span>{props.cityObject.is_capital}</span>
              </h3>
            </li>
            <li>
              <h3>
                Latitude: <span>{props.cityObject.latitude}</span>
              </h3>
            </li>
            <li>
              <h3>
                Longitude: <span>{props.cityObject.longitude}</span>
              </h3>
            </li>
          </ul>
        </>
      )}
    </section>
  );
}

export default DisplayInformation;
