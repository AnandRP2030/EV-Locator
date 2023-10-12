import NavbarComponent from "../Components/Navbar/navbar";
import Footer from "../Components/HomeComponents/footer";
import Displaystations from "../Components/StationComponents/DisplayStations/DisplayStations";
import { useEffect, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

const Station = () => {
  const navigate = useNavigate();
  const { isUserLogin } = useContext(LoginContext);

  useEffect(() => {
    if (!isUserLogin) {
      // navigate("/login");
    }
  }, []);
  return (
    <div>
      <NavbarComponent />
      <Displaystations />
      <Footer />
    </div>
  );
};
export default Station;
