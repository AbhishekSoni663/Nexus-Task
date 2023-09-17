import FirstSection from "../FirstSection/FirstSection";
import "../NavbarComponents/Navbar.css";
import SecondSection from "../SecondSection/SecondSection";

const Navbar = () => {
  return (
    <>
      <section className="main-nav-sec">
        <div className="main-nav">
          <ul className="main-nav-ul">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skin Care
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Body & Hand
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Hair
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Fragrance
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Kits & Travel
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Gifts
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Read
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Stores
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Facial Appointments
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                <i className="bi bi-search" style={{ fontSize: "19px" }}></i>
              </a>
            </li>
          </ul>
          <ul className="main-nav-ul2">
            <li>
              <a className="nav-link disabled" aria-disabled="true">
                Shop
              </a>
            </li>
            <li>
              <a className="nav-link disabled" aria-disabled="true">
                Read
              </a>
            </li>
            <li>
              <a className="nav-link disabled" aria-disabled="true">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                <i className="bi bi-search" style={{ fontSize: "19px" }}></i>
              </a>
            </li>
          </ul>
          <ul className="main-nav-ul1">
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Cabinet
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Cart
              </a>
            </li>
          </ul>
        </div>
        <SecondSection />
        <FirstSection />
      </section>
    </>
  );
};

export default Navbar;
