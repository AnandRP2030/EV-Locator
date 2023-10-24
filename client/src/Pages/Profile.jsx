import UserInfo from "../Components/UserInfo/userInfo.jsx";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./styles/profile.css";
const ProfilePage = () => {
  const navigate = useNavigate();
  const redirectHome = () => {
    navigate("/");
  };
  return (
    <div className="profile-container">
      <div className="profile-info-container">
        <div className="sidebar-options">
          <div className="settings-div">
            <div onClick={redirectHome}>
              <AiOutlineArrowLeft />
            </div>
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
