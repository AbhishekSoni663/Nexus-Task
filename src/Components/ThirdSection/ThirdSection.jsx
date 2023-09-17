import { Splide, SplideSlide } from "@splidejs/react-splide";
import ThirdImg1 from "/src/assets/HeroImg/AeospPerfume.avif";
import "../ThirdSection/ThirdSection.css";
// import { scroll } from "framer-motion/dom";

const ThirdSection = () => {
  return (
    <>
      <div className="third-container">
        <div className="third-detail">
          <Splide
            className="third-splide"
            options={{
              gap: "9rem",
              pagination: 0,
              dots: false,
              focus: 0,
              loop: true,
            }}
          >
            <SplideSlide className="third-card1">
              <div
                className="card mb-3"
                style={{ width: "350px", border: "none" }}
              >
                <div
                  className="card-header third-header-h1"
                  style={{ background: "none", border: "none" }}
                >
                  Fragrance
                </div>
                <div className="card-body">
                  <h5 className="card-title third-title-h5">
                    Our personal scents
                  </h5>
                  <p className="card-text third-title-p">
                    Unorthodox, evocative, and refined, Aesop fragrances are
                    sensory bridges to memory and connection points to those
                    around us.
                  </p>
                  <a href="#" className="third-title-a">
                    See all Fragrance <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="third-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={ThirdImg1} className="card-img-top" alt="..." />
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <a className="card-title third-title-h1" href="">
                    Ouranon Eau de Parfum
                  </a>
                  <a className="card-text third-title-p1" href="">
                    Woody, spicy, resinous
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="third-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={ThirdImg1} className="card-img-top" alt="..." />
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <a className="card-title third-title-h1" href="">
                    Ouranon Eau de Parfum
                  </a>
                  <a className="card-text third-title-p1" href="">
                    Woody, spicy, resinous
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="third-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={ThirdImg1} className="card-img-top" alt="..." />
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <a className="card-title third-title-h1" href="">
                    Ouranon Eau de Parfum
                  </a>
                  <a className="card-text third-title-p1" href="">
                    Woody, spicy, resinous
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="third-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={ThirdImg1} className="card-img-top" alt="..." />
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <a className="card-title third-title-h1" href="">
                    Ouranon Eau de Parfum
                  </a>
                  <a className="card-text third-title-p1" href="">
                    Woody, spicy, resinous
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="third-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={ThirdImg1} className="card-img-top" alt="..." />
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <a className="card-title third-title-h1" href="">
                    Ouranon Eau de Parfum
                  </a>
                  <a className="card-text third-title-p1" href="">
                    Woody, spicy, resinous
                  </a>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="third-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={ThirdImg1} className="card-img-top" alt="..." />
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                >
                  <a className="card-title third-title-h1" href="">
                    Ouranon Eau de Parfum
                  </a>
                  <a className="card-text third-title-p1" href="">
                    Woody, spicy, resinous
                  </a>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="third-detail-2">
          <div className="third-head-2">
            <div
              className="card mb-3"
              style={{ width: "350px", border: "none" }}
            >
              <div
                className="card-header third-header-h1"
                style={{ background: "none", border: "none" }}
              >
                Fragrance
              </div>
              <div className="card-body">
                <h5 className="card-title third-title-h5">
                  Our personal scents
                </h5>
                <p className="card-text third-title-p">
                  Unorthodox, evocative, and refined, Aesop fragrances are
                  sensory bridges to memory and connection points to those
                  around us.
                </p>
                <a href="ht" className="third-title-a">
                  See all Fragrance <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="third-splide-crs-2">
            <Splide
              className="third-splide-2"
              options={{
                gap: "9rem",
                pagination: 0,
                dots: false,
                focus: 0,
                loop: true,
              }}
            >
              <SplideSlide className="third-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={ThirdImg1} className="card-img-top" alt="..." />
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                    }}
                  >
                    <a className="card-title third-title-h1" href="">
                      Ouranon Eau de Parfum
                    </a>
                    <a className="card-text third-title-p1" href="">
                      Woody, spicy, resinous
                    </a>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="third-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={ThirdImg1} className="card-img-top" alt="..." />
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                    }}
                  >
                    <a className="card-title third-title-h1" href="">
                      Ouranon Eau de Parfum
                    </a>
                    <a className="card-text third-title-p1" href="">
                      Woody, spicy, resinous
                    </a>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="third-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={ThirdImg1} className="card-img-top" alt="..." />
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                    }}
                  >
                    <a className="card-title third-title-h1" href="">
                      Ouranon Eau de Parfum
                    </a>
                    <a className="card-text third-title-p1" href="">
                      Woody, spicy, resinous
                    </a>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="third-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={ThirdImg1} className="card-img-top" alt="..." />
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                    }}
                  >
                    <a className="card-title third-title-h1" href="">
                      Ouranon Eau de Parfum
                    </a>
                    <a className="card-text third-title-p1" href="">
                      Woody, spicy, resinous
                    </a>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="third-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={ThirdImg1} className="card-img-top" alt="..." />
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                    }}
                  >
                    <a className="card-title third-title-h1" href="">
                      Ouranon Eau de Parfum
                    </a>
                    <a className="card-text third-title-p1" href="">
                      Woody, spicy, resinous
                    </a>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="third-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={ThirdImg1} className="card-img-top" alt="..." />
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                    }}
                  >
                    <a className="card-title third-title-h1" href="">
                      Ouranon Eau de Parfum
                    </a>
                    <a className="card-text third-title-p1" href="">
                      Woody, spicy, resinous
                    </a>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
      <div className="my-slider-progress">
        <div className="my-slider-progress-bar"></div>
      </div>
    </>
  );
};

export default ThirdSection;
