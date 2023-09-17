import "../SeventhComponent/Seventh.css";
import SeventhImg1 from "/src/assets/Seventhimg/seventh1.avif";
import SeventhImg2 from "/src/assets/Seventhimg/seventh2.avif";
import SeventhImg3 from "/src/assets/Seventhimg/seventh3.jpg";


const Seventh = () => {
  return (
    <>
      <section className="seventh-section">
        <section className="seventh-all-detail">
          <div
            className="seventh-card border-light mb-3"
            style={{ width: "370px", background: "none" }}
          >
            <div
              className="card-header seventh-h1"
              style={{ border: "none", background: "none" }}
            >
              <h6>Store Locator</h6>
            </div>
            <div
              className="card-body"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <p className="card-text seventh-p">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a className="seventh-btn">
                Find a nearby store <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={SeventhImg1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SeventhImg2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={SeventhImg3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ color: "#333333", backgroundColor: "#333333" }}
              ></span>
              <span className="visually-hidden" style={{ color: "#333333" }}>
                Previous
              </span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{ color: "#333333", backgroundColor: "#333333" }}
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Seventh;
