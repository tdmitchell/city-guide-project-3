function DisplayInformation(props) {
  console.log(props);

  return (
    <section>
      {props.cityObject.name !== "" ? (
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
      ) : (
        <h2>Sorry, No info available</h2>
      )}
    </section>
  );
}

export default DisplayInformation;
