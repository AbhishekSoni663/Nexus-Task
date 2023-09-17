import "../FourthSection/FourthSec.css";
import FourthImg1 from "/src/assets/HeroImg/firstimg2.avif";
const FourthSec = () => {
  return (
    <>
      <div className="first-section">
        <div className="first-head">
          <h6 className="first-heade-h6">Parsley Seed Skin Case</h6>
          <p className="first-heade-p">
            In warm or humid urban settings, skin is vulnerable to a range of
            environmental factors.
          </p>
          <p className="first-heade-p1">
            Pollution, air-conditioning and the stresses of city life can
            heighten skin’s susceptibility to free radical damage and
            dehydration. Anti-oxidant rich Parsley Seed formulations help to
            support skin against these effects.
          </p>
          <a className="first-sec-a" href="">
            Regimens for warm climates <i className="bi bi-arrow-right"></i>
          </a>
        </div>
        <div className="first-detail">
          <img src={FourthImg1} alt="" />
        </div>
      </div>
    </>
  );
};

export default FourthSec;
