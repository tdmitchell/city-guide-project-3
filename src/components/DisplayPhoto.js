function DisplayPhotos(props) {
  return (
    <section>
      {props.photos.length === 0 ? (
        <h2>No photos found!</h2>
      ) : (
        <>
          <h2>Photos!</h2>
          <div className="photos">
            {props.photos.map((photo) => {
              return (
                <div className="photo-container" key={props.photo.id}>
                  <img
                    src={props.photo.urls.small}
                    alt={props.photo.alt_description}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
export default DisplayPhotos;
