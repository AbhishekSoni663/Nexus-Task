import "../FifthComponent/Fifth.css";

const FifthComponent = () => {
  return (
    <>
      <div className="fifth-section">
        <div className="fifth-detail">
          <video autoPlay loop muted width={"100%"}>
            <source
              src="https://videos.ctfassets.net/u1nb1km7t5q7/1fy7IJOkhkLfiBJNrqqZlL/55ce2547d65d261beb120b441a0ed0df/Aesop_A_Guide_to_Fragrance_Web_Secondary_Mid_01_Rose_Desktop_1920x1080px.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="fifth-head">
          <h6 className="fifth-head-h6">Parsley Seed Skin Case</h6>
          <p className="fifth-head-p">Decoding fragrance</p>
          <p className="fifth-head-p1">
            The language of notes, sillage and aromatic profiles allows us to
            describe perfume. Discover our guide to selecting a signature
            fragrance.
          </p>
          <a className="fifth-sec-a" href="">
            Read More<i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default FifthComponent;
