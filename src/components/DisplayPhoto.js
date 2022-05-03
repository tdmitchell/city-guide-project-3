function DisplayPhotos(props) {
  return (
    <section>
      {props.photos.length === 0 ? (
        <h2>No photos found!</h2>
      ) : (
        <>
          <h2>Photos!</h2>
          {/* {console.log("kkk", props.photos)} */}
          <div className="photos">
            {props.photos.map((photo) => {
              return (
                <div className="photo-container" key={photo.id}>
                  <img src={photo.urls.small} alt={photo.alt_description} />
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
