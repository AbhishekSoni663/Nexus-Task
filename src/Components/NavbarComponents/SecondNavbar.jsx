import "../NavbarComponents/SecondNav.css"
import "../NavbarComponents/FourthNav.css"
const SecondNavbar = () => {
  return (
    <nav className="navbar second-nav" style={{ backgroundColor: "#C2C2AF" }}>
      <div className="container-fluid sec-nav">
        <h6 className="second-nav-h5">
          Trained Aesop consultations are available to provide bespoke skin care
          advise. <span className="second-nav-spa">Book a video consultation</span>
        </h6>
      </div>
    </nav>
  );
}

export default SecondNavbar