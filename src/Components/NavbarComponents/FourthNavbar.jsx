import "../NavbarComponents/FourthNav.css";

const FourthNavbar = () => {
  return (
    <>
      <section className="fourth-nav-sec">
        <nav className="navbar navbar-expand-lg fourth-nav">
          <div className="container-fluid ">
            <a className="navbar-brand" style={{textDecoration:"none", color:"white"}}href="#">
              Aesop
            </a>
            <span className="fourth-nav-a  d-flex ms-auto">
              <a href="" style={{color:'white'}}>
                <i className="bi bi-search"></i>
              </a>
              <a href="" style={{ color: "white" }}>
                <i className="bi bi-heart"></i>
              </a>
              <a href="" style={{color:"white"}}>Cart</a>
            </span>
            <button
              className="navbar-toggler"
              style={{ border: "none", background: "none" }}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <h3 style={{color:"white"}}>=</h3>
            </button>
            <div
              className="offcanvas offcanvas-top text-bg-white"
              tabIndex="-1"
              style={{ height: "100%" }}
              id="offcanvasDarkNavbar"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Dark offcanvas
                </h5>
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
                    <a className="nav-link active" aria-current="page" href="#">
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
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default FourthNavbar;
