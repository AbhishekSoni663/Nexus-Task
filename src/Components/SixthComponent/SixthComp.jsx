import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../SixthComponent/Sixth.css";
import SixthImg1 from "/src/assets/Sixthimg/sixth1.webp";
import SixthImg2 from "/src/assets/Sixthimg/Sixth2.webp";
import SixthImg3 from "/src/assets/Sixthimg/Sixth3.webp";
import SixthImg4 from "/src/assets/Sixthimg/Sixth4.webp";
import SixthImg5 from "/src/assets/Sixthimg/sixth5.webp";
import SixthImg6 from "/src/assets/Sixthimg/sixth6.png";
import SixthImg7 from "/src/assets/Sixthimg/sixth7.webp";
import SixthImg8 from "/src/assets/Sixthimg/sixth8.webp";

const SixthComp = () => {
  return (
    <>
      <div className="sixth-container">
        <div className="sixth-detail">
          <Splide
            className="sixth-splide"
            options={{
              gap: "9rem",
              pagination: 0,
              dots: false,
              focus: 0,
              loop: true,
            }}
          >
            <SplideSlide className="sixth-card1">
              <div
                className="card mb-3"
                style={{ width: "350px", border: "none" }}
              >
                <div
                  className="card-header sixth-h3"
                  style={{ background: "none", border: "none" }}
                >
                  For warm climates
                </div>
                <div className="card-body">
                  <h5 className="card-title sixth-h1">
                    Adjusting to seasonal change
                  </h5>
                  <p className="card-text sixth-p1">
                    In the warmer months, high temperatures and humidity can
                    lead to increased sebum production for normal, combination,
                    and oily skins. Accordingly, the use of slightly lighter
                    formulations is recommended.
                  </p>
                </div>
              </div>
            </SplideSlide>

            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg1} className="card-img-top" alt="..." />
                <div className="card-body" style={{ marginTop: "46px" }}>
                  <h5 className="card-title sixth-h2">Immediate Moisture</h5>
                  <p className="card-text sixth-p2">
                    A refreshing mist hydrator
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title sixth-h2">
                    Purifying Facial Exofoliant Paste
                  </h5>
                  <p className="card-text sixth-p2">
                    A deep cleansing exfoliating cream
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg3} className="card-img-top" alt="..." />
                <div className="card-body" style={{ marginTop: "46px" }}>
                  <h5 className="card-title sixth-h2">
                    Parsley Seed Facial Cleanser
                  </h5>
                  <p className="card-text sixth-p2">
                    For those in polluted urban environments
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title sixth-h2">
                    B & Tea Balancing Toner
                  </h5>
                  <p className="card-text sixth-p2">
                    Balancing and hydrating, a light finish
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg5} className="card-img-top" alt="..." />
                <div className="card-body" style={{ marginTop: "57px" }}>
                  <h5 className="card-title sixth-h2">
                    Lucent Facial Concentrate
                  </h5>
                  <p className="card-text sixth-p2">
                    A Vitamin C-rich layering serum
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg6} className="card-img-top" alt="..." />
                <div className="card-body" style={{ marginTop: "57px" }}>
                  <h5 className="card-title sixth-h2">
                    Parsley Seed Anti-OxidantIntense Serum
                  </h5>
                  <p className="card-text sixth-p2">
                    A hydrating serum to bolster skin
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg7} className="card-img-top" alt="..." />
                <div className="card-body" style={{ marginTop: "47px" }}>
                  <h5 className="card-title sixth-h2">
                    Protective Facial Lotion SPF25
                  </h5>
                  <p className="card-text sixth-p2">
                    Broad-spectrum protection and hydration
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="sixth-card">
              <div className="card" style={{ width: "300px", border: "none" }}>
                <img src={SixthImg8} className="card-img-top" alt="..." />
                <div className="card-body" style={{ marginTop: "97px" }}>
                  <h5 className="card-title sixth-h2">
                    Orotective lip Balm SPF30
                  </h5>
                  <p className="card-text sixth-p2">
                    Nourishing SPF30 protection
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="sixth-detail-2">
          <div className="sixth-head-2">
            <div
              className="card mb-3"
              style={{ width: "350px", border: "none" }}
            >
              <div
                className="card-header sixth-h3"
                style={{ background: "none", border: "none" }}
              >
                For warm climates
              </div>
              <div className="card-body">
                <h5 className="card-title sixth-h1">
                  Adjusting to seasonal change
                </h5>
                <p className="card-text sixth-p1">
                  In the warmer months, high temperatures and humidity can lead
                  to increased sebum production for normal, combination, and
                  oily skins. Accordingly, the use of slightly lighter
                  formulations is recommended.
                </p>
              </div>
            </div>
          </div>
          <div className="sixth-splide-crs-2">
            <Splide
              className="sixth-splide-2"
              options={{
                gap: "9rem",
                pagination: 0,
                dots: false,
                focus: 0,
                loop: true,
              }}
            >
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">Immediate Moisture</h5>
                    <p className="card-text sixth-p2">
                      A refreshing mist hydrator
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg2} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">
                      Purifying Facial Exofoliant Paste
                    </h5>
                    <p className="card-text sixth-p2">
                      A deep cleansing exfoliating cream
                    </p>
                    e up the bulk of the cards content.
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">
                      Parsley Seed Facial Cleanser
                    </h5>
                    <p className="card-text sixth-p2">
                      For those in polluted urban environments
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">
                      B & Tea Balancing Toner
                    </h5>
                    <p className="card-text sixth-p2">
                      Balancing and hydrating, a light finish
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">
                      Lucent Facial Concentrate
                    </h5>
                    <p className="card-text sixth-p2">
                      A Vitamin C-rich layering serum
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg6} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">
                      Parsley Seed Anti-OxidantIntense Serum
                    </h5>
                    <p className="card-text sixth-p2">
                      A hydrating serum to bolster skin
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg7} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">
                      Protective Facial Lotion SPF25
                    </h5>
                    <p className="card-text sixth-p2">
                      Broad-spectrum protection and hydration
                    </p>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide className="sixth-card-2">
                <div
                  className="card"
                  style={{ width: "300px", border: "none" }}
                >
                  <img src={SixthImg8} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title sixth-h2">Card title</h5>
                    <h5 className="card-title sixth-h2">
                      Orotective lip Balm SPF30
                    </h5>
                    <p className="card-text sixth-p2">
                      Nourishing SPF30 protection
                    </p>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixthComp;
