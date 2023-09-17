import "../NavbarComponents/ThirdNav.css"
import "../NavbarComponents/FourthNav.css";
const ThirdNavbar = () => {
  return (
    <nav className="navbar third-navbar" style={{ backgroundColor: "#252525" }}>
      <div className="container-fluid">
        <a className="third-nav-a" href="#">
          Click and Collect is now available at Hong Kong stores. Enjoy
          complimentary shipping on orders over HK$400
          <span className="third-nav-icon" style={{ marginLeft: "10px" }}>
            +
          </span>
        </a>
      </div>
    </nav>
  );
}

export default ThirdNavbar