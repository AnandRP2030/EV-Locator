import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./list-bookings.css";

const ListBookings = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    let userData = JSON.parse(localStorage.getItem("user-data")) || null;
    if (userData?.token) {
      setUserInfo(userData);
      console.log("dfd", userInfo.role);
      if (userData.role === "user") {
        getBookedStationsOfAUser(userData._id);
      } else if (userData.role === "ev-station") {
        getAllBookingsOfAStation(userData._id);
      }
    } else {
      console.log("Login first");
      navigate("/login");
    }
  }, []);

  const getAllBookingsOfAStation = (stationUserId) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    axios
      .get(`${BASE_URL}/booking/get-all-bookings`)
      .then((res) => {
        if (res.status === 200) {
          const allBookings = res.data.data;
          const myStations = allBookings.filter((elem, index) => {
            return elem.evStation.ownerId === stationUserId;
          });
          setAllBookings(myStations);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getBookedStationsOfAUser = (userId) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    console.log("userid", BASE_URL);
    axios
      .get(`${BASE_URL}/booking/user/get-all-bookings/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("res", res.data.data);
          setAllBookings(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const splitDateAndTime = (dateTime) => {
    const datePart = dateTime.substring(0, 10);
    const timePart = dateTime.substring(11, 16);
    return { datePart, timePart };
  };

  return (
    <div className="list-bookings-container">
      <h3>List of Bookings</h3>
      <hr />
      <div className="list-table-div">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              {userInfo?.role === "ev-station" && <th> User Name </th>}
              <th>EV Station Name</th>
              <th>Station Location</th>
              <th> &#x20B9; Paid </th>
              <th>Date </th>
              <th> Time</th>
              <th>Cancel Booking</th>
            </tr>
          </thead>
          <tbody>
            {allBookings.map((elem, index) => {
              console.log(elem.user.name);
              const { datePart, timePart } = splitDateAndTime(elem.bookingDate);
              return (
                <tr key={index}>
                  <td> {index + 1}</td>
                  {userInfo.role === "ev-station" && (
                    <td> {elem.user.name} </td>
                  )}
                  <td> {elem.evStation.stationName}</td>
                  <td> {elem.evStation.location}</td>
                  <td> &#x20B9; {elem.evStation.pricePerHour}</td>
                  <td> {datePart}</td>
                  <td> {timePart}</td>
                  <td>
                    {" "}
                    <button className="booking-cancel-btn">Cancel</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default ListBookings;
