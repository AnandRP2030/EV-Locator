import {BsFillCarFrontFill} from "react-icons/bs";
import {MdElectricCar} from "react-icons/md";
import "./styles/yellowBanner.css";
const YellowBanner = () => {

    return (
        <div className="yellow-banner banner-animation">
            <div>500+ Users activated</div>
            <BsFillCarFrontFill/>
            <div>1000+ EVs registered</div>
            <MdElectricCar/>
            <div>250+ Charging stations</div>
            <BsFillCarFrontFill/>
            <div>1500 Charging completed</div>
            <MdElectricCar/>
         
        </div>
    )
}
export default YellowBanner;