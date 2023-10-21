import UserInfo from "../Components/UserInfo/userInfo.jsx";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./styles/profile.css";

const ProfilePage = () => {

  return (
    <div className="profile-container">
      <div className="profile-info-container">
        <div className="sidebar-options">
          <div className="settings-div">
            <AiOutlineArrowLeft />
            <AiOutlineSetting />
            <p>Settings</p>
          </div>
          <div className="sidebar-items">
            <div>Account Settings</div>
            <div>Edit Profile</div>
            <div>Privacy & Security</div>
            <div>Notifications</div>
            <div>Help & Support</div>
          </div>
        </div>
        <UserInfo />
      </div>
    </div>
  );
};
export default ProfilePage;
