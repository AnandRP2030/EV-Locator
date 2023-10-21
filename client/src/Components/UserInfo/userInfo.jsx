import { useState } from "react";
import { GrFormUpload } from "react-icons/gr";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import "./userinfo.css";
const UserInfo = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5p4_tWehsK48da06XVBCme8pyhxX3XF84dSG403cFCA7JZlKx"
  );

  return (
    <div className="userinfo-container">
      <h5> Personal Profile </h5>
      <div className="profile-img-section">
        <div className="item-1">
          <img src={profilePicture} alt="profile-img" />
        </div>
        <div className="item-2">
          <GrFormUpload />
          <h6>Upload a new one </h6>
        </div>
        <div className="item-3">
          <MdOutlineDeleteOutline />
          <h6>Remove</h6>
        </div>
      </div>
      <div className="user-details">
        <div>
          <p className="user-title">Full Name</p>
          <p className="user-data">Anand R P</p>
        </div>
        <div>
          <p className="user-title">Role</p>
          <p className="user-data">User</p>
        </div>

        <div>
          <p className="user-title"> Contact Information</p>
          <div className="contact-links-container">
            <div>
              <div className="contact">
                <AiOutlineMail />
                <p>Mail Account</p>
              </div>
              <button>Remove</button>
            </div>
            <div>
              <div className="contact">
                <BiPhoneCall />
                <p>Phone Number</p>
              </div>
              <button>Remove</button>
            </div>
            <button id="edit-profile-btn">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
