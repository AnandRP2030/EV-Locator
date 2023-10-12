import NavbarComponent from "../Components/Navbar/navbar";
import Footer from "../Components/HomeComponents/footer";
import Displaystations from "../Components/StationComponents/DisplayStations/DisplayStations";
import "dotenv";
const Station = () => {
  return (
    <div>
      <NavbarComponent />
      <Displaystations />
      <Footer />
    </div>
  );
};
export default Station;
