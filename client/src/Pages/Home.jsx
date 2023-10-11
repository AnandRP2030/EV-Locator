import Container from "react-bootstrap/esm/Container";
import HomeWelcome from "../Components/HomeComponents/HomeWelcome";
import YellowBanner from "../Components/HomeComponents/YellowBanner";
import "./styles/home.css";
const Home = () => {
  return (
    <div className="home-page-container">
      <HomeWelcome />
      <YellowBanner />
    </div>
  );
};
export default Home;
