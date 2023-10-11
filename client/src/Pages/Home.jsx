import HomeWelcome from "../Components/HomeComponents/HomeWelcome";
import YellowBanner from "../Components/HomeComponents/YellowBanner";
import Explanation from "../Components/HomeComponents/explanation";
import EvNetwork from "../Components/HomeComponents/evNetword";
import Footer from "../Components/HomeComponents/footer";
import "./styles/home.css";
const Home = () => {
  return (
    <div className="home-page-container">
      <HomeWelcome />
      <YellowBanner />
      <Explanation />
      <EvNetwork />
      <Footer />
    </div>
  );
};
export default Home;
