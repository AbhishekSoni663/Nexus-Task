import EightComp from "./Components/EightComponent/EightComp";
import FifthComponent from "./Components/FifthComponent/FifthComponent";
import Footer from "./Components/Footer/Footer";
import FourthSec from "./Components/FourthSection/FourthSec";
import FourthNavbar from "./Components/NavbarComponents/FourthNavbar";
import Navbar from "./Components/NavbarComponents/Navbar";
import SecondNavbar from "./Components/NavbarComponents/SecondNavbar";
import ThirdNavbar from "./Components/NavbarComponents/ThirdNavbar";
import Seventh from "./Components/SeventhComponent/Seventh";
import SixthComp from "./Components/SixthComponent/SixthComp";
import ThirdSection from "./Components/ThirdSection/ThirdSection";


const App = () => {
  return (
    <>
    <SecondNavbar/>
    <ThirdNavbar/>
    <Navbar/>
    <FourthNavbar/>
      <div className="container">
        <ThirdSection/>
        <FourthSec/>
        <FifthComponent/>
        <SixthComp/>
        <Seventh/>
        <EightComp/>
        <Footer/>
      </div>
    </>
  );
}

export default App