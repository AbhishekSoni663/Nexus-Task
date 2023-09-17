import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../NavbarComponents/FourthNav.css";
import NewOffImg1 from "/src/assets/OffCanImg/Offimg1.jpg";

import NewOffImg3 from "/src/assets/OffCanImg/Offimg3.avif";
import NewOffImg4 from "/src/assets/OffCanImg/Offimg4.jpg";

import NineComp from "../Ninecomp/NineComp";

const FourthNavbar = () => {
  return (
    <>
      <section className="fourth-nav-sec">
        <nav className="navbar navbar-expand-lg fourth-nav">
          <div className="container-fluid ">
            <a
              className="navbar-brand"
              style={{ textDecoration: "none", color: "white" }}
              href="#"
            >
              Aesop
            </a>
            <span className="fourth-nav-a  d-flex ms-auto">
              <a href="" style={{ color: "white" }}>
                <i className="bi bi-search"></i>
              </a>
              <a href="" style={{ color: "white" }}>
                <i className="bi bi-heart"></i>
              </a>
              <a href="" style={{ color: "white" }}>
                Cart
              </a>
            </span>
            <button
              className="navbar-toggler"
              style={{ border: "none", background: "none" }}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <h3 style={{ color: "white" }}>=</h3>
            </button>
            <div
              className="offcanvas offcanvas-top text-bg-white"
              tabIndex="-1"
              style={{ height: "100%" }}
              id="offcanvasDarkNavbar"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id="offcanvasDarkNavbarLabel"
                  style={{
                    color: "#333",
                    fontSize: "16px",
                    fontFamily: "Sussie,snas-serif",
                  }}
                >
                  Aesop
                </h5>
                <span className="fourth-off-icon">
                  <a href="">
                    <i className="bi bi-search"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-heart"></i>
                  </a>
                  <a href="">Cart</a>
                </span>
                <button
                  type="button"
                  className="btn-close btn-close-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav fourth-off-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      Skin Care
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Body & Hand
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Hair
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Fragrance
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Kits & Travel
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Gifts
                    </a>
                  </li>
                </ul>
                <span className="fourth-off-span-nav">
                  <a href="#2">Read</a>
                  <a href="#2">Log in</a>
                  <a href="#2">Stores</a>
                  <a href="#2">Live assistance</a>
                  <a href="#2">Facial Appointments</a>
                </span>
                <div className="fourth-off-cars">
                  <Splide
                    className="fourth-off-cars1"
                    options={{
                      gap: "8rem",
                      pagination: 0,
                      dots: false,
                      focus: 0,
                      loop: true,
                    }}
                  >
                    <SplideSlide className="fourth-off-cars2">
                      <div
                        className="card fourth-off-card"
                        style={{ borderRadius: "0%" }}
                      >
                        <img
                          src={NewOffImg1}
                          className="card-img-top fourth-off-img"
                          alt="..."
                        />
                        <div className="card-body fourth-off-card-body">
                          <h6 className="card-title fourth-off-h6">
                            Lessons from the lab
                          </h6>
                          <p
                            className="card-text fouth-off-p"
                            style={{
                              fontSize: "13px",
                              fontFamily: "Sussie ,sans-serif",
                            }}
                          >
                            The next chapter in Aesop fragrance: Gloam Eau de
                            Parfum
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide className="fourth-off-cars2">
                      <div className="card fourth-off-card">
                        <img
                          src="src/assets/OffCanImg/Offimg2.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body  fourth-off-card-body">
                          <h6 className="card-title fourth-off-h6">Habitat</h6>
                          <p
                            className="card-text fourth-off-p"
                            style={{
                              fontSize: "13px",
                              fontFamily: "Sussie ,sans-serif",
                            }}
                          >
                            A guide to home fragrance
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide className="fourth-off-cars2">
                      <div className="card fourth-off-card">
                        <img
                          src={NewOffImg3}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body fourth-off-card-body">
                          <h6 className="card-title fourth-off-h6">
                            Lesson from the lab
                          </h6>
                          <p
                            className="card-text fourth-off-p"
                            style={{
                              fontSize: "13px",
                              fontFamily: "Sussie ,sans-serif",
                            }}
                          >
                            How to care for the delicate skin around the eyes
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide className="fourth-off-cars2">
                      <div className="card fourth-off-card">
                        <img
                          src={NewOffImg4}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body fourth-off-card-body">
                          <h6 className="card-title fourth-off-h6">Podcast</h6>
                          <p
                            className="card-text fourth-off-p"
                            style={{
                              fontSize: "13px",
                              fontFamily: "Sussie ,sans-serif",
                            }}
                          >
                            Radiomatique Future Fables
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide className="fourth-off-cars2">
                      <div className="card fourth-off-card">
                        <img
                          src="src/assets/OffCanImg/Offimg5.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body fourth-off-card-body">
                          <h6 className="card-title fourth-off-h6">Culture</h6>
                          <p
                            className="card-text fourth-off-p"
                            style={{
                              fontSize: "13px",
                              fontFamily: "Sussie ,sans-serif",
                            }}
                          >
                            Musings from the Rain Garden
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <NineComp />
    </>
  );
};

export default FourthNavbar;
