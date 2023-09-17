import "../EightComponent/Eight.css";
import EightImg1 from "/src/assets/Seventhimg/eightimg.avif";

const EightComp = () => {
  return (
    <>
      <section className="eight-section">
        <div className="eight-main">
          <div className="eight-img">
            <img src={EightImg1} />
          </div>
          <div className="eight-detail">
            <h5 className="eight-h5">Facial Appointments</h5>
            <h6 className="eight-h2">Composure for the skin and senses</h6>
            <p className="eight-p">
              For a well-rounded skin care regimen, Aesop Facial Appointments
              offer a series of treatments tailored to balance, stimulate and
              intensely nourish the skin.
            </p>
            <a className="eight-btn">
              Learn more <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="eight-text">
          <p className="eight-test-p">
            ‘Nothing is ever ended, everything only begun.’
          </p>
          <p className="eight-test-p1">Sara Teasdale</p>
        </div>
      </section>
    </>
  );
};

export default EightComp;
