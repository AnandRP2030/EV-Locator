import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./book-slot.css";

const BookSlotComp = ({ activeStation, evStationObjectId }) => {
  const today = new Date().toISOString().slice(0, 10);
  const lastDayOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  );
  const lastDay = lastDayOfMonth.toISOString().slice(0, 10);
  const [isSlotAvailable, setIsSlotAvailable] = useState(null);
  const { stationName, pricePerHour, location } = activeStation;
  const [activeUser, setActiveUser] = useState({});
  const [bookingDate, setBookingDate] = useState("");

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-data")) || null;
    if (userData) {
      setActiveUser(userData);
    }
  }, []);

  const handleDateChange = (e) => {
    setBookingDate(e.target.value);
  };

  const handlePaynow = (e) => {
    e.preventDefault();
    if (!evStationObjectId || !bookingDate || !activeUser._id) {
      console.log(evStationObjectId, bookingDate, activeUser._id);
      alert("Please fill all the fields");
      return;
    }
    const data = {
      userObjectId: activeUser._id,
      evStationObjectId,
      bookingDate,
    };
    sendToServer(data);
    console.log("date", data);
  };
  const sendToServer = (data) => {
    try {
      axios.post(`${BASE_URL}/booking/new-booking`, data).then((res) => {
        console.log("res", res);
        if (res.status === 201) {
          alert(res.data.message);
        }
      });
    } catch (error) {
      console.log(error.response)
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="book-slot-container">
      <div className="book-slot-left">
        <img
          src="https://th.bing.com/th/id/OIG.qcLaH6OwGoSGQHFBNioN?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
          alt="img"
        />
      </div>
      <div className="book-slot-right">
        <div className="payment-form-container">
          <h3 className="payment-form-heading">Book Your Slot Now</h3>
          <div className="station-details-1">
            <h6>Station Name: {stationName}</h6>
            <h6>Rate/Hr: {pricePerHour}</h6>
          </div>
          <div className="station-details-2">
            <h6>Location: {location}</h6>
          </div>
          <form className="payment-form">
            <div className="schedule-div">
              <div className="date-container">
                <input
                  onChange={handleDateChange}
                  type="datetime-local"
                  name="booking-date-time"
                  placeholder="Date & Time"
                  min={`${today}T00:00`}
                  max={`${lastDay}T23:59`}
                />
                {isSlotAvailable === null ? (
                  <h6>Choose Your Date & Time </h6>
                ) : isSlotAvailable ? (
                  <h6 className="avail-msg">Slot Available on This Time</h6>
                ) : (
                  <h6 className="not-avail-msg">
                    {" "}
                    Slot is Not Available On This Time
                  </h6>
                )}
              </div>

              <input
                className="pay-btn"
                type="submit"
                value={`₹ ${pricePerHour} Pay Now`}
                onClick={handlePaynow}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
BookSlotComp.propTypes = {
  activeStation: PropTypes.object,
  evStationObjectId: PropTypes.string,
};

export default BookSlotComp;
