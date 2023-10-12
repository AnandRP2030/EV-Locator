import { InputGroup, Form, Modal, Button } from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import { Toast, ToastContainer } from "react-bootstrap";
import StationTable from "../../StationTable/StationTable";
import { useState, useEffect } from "react";
import axios from "axios";
import MyModel from "./MyModel.jsx";
import "./displayStations.css";
const Displaystations = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [allStations, setAllStations] = useState([]);
  const [searchStation, setSearchStation] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");
  const [showModel, setShowModel] = useState(false);
  const getAllStations = () => {
    axios.get(`${BASE_URL}/ev/all-stations`).then((res) => {
      setAllStations(res.data.data);
    });
  };

  useEffect(() => {
    getAllStations();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (searchStation === "") {
        getAllStations();
        return;
      }
      axios.get(`${BASE_URL}/ev/location/${searchStation}`).then((res) => {
        console.log(res.data.data.length, "res");
        if (res.data.data.length === 0) {
          setAllStations([]);
        } else {
          console.log("data: ", res.data);
          setAllStations(res.data.data);
        }
      });
    }
  };

  const deleteStation = (_id) => {
    axios
      .delete(`${BASE_URL}/ev/delete/${_id}`)
      .then((res) => {
        const stationName = res.data.data.stationName;
        getAllStations();
        setShowAlert(true);
        setToastColor("danger");
        setAlertMsg(stationName + " Station Deleted Successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddStation = () => {
    setShowModel(true);
  };

  return (
    <>
      <div className="display-stations">
        <div className="station-table-container">
          <div className="table-heading-container">
            <h1>List of Charging Stations</h1>
            <button onClick={handleAddStation}>Add New Station</button>
          </div>
          <div className="table-top-buttons">
            <div>All Stations</div>
            <div>Available Stations</div>
            <div>Not Available</div>
          </div>

          <div className="table-search-container">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaSearchLocation />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search Stations"
                aria-label="Search Stations"
                aria-describedby="basic-addon1"
                value={searchStation}
                onChange={(e) => setSearchStation(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
            <div className="mb-3">
              <Form.Select>
                <option value="KL">Filter By Location</option>
                <option value="KL">Kerala</option>
                <option value="TN">Tamil Nadu</option>
              </Form.Select>
              <Form.Select>
                <option value="KL">Sort by Price</option>
                <option value="KL">Low Price</option>
                <option value="TN">High Price</option>
              </Form.Select>
            </div>
          </div>
          {allStations.length === 0 ? (
            <>
              <div className="no-stations">
                {" "}
                Sorry EV Stations are Not Found.
              </div>
            </>
          ) : (
            <StationTable
              allStations={allStations}
              deleteStation={deleteStation}
            />
          )}
          <ToastContainer position="top-center">
            <Toast
              className="toast-msg"
              bg={toastColor}
              onClose={() => setShowAlert(false)}
              show={showAlert}
              animation={true}
              delay={2000}
              autohide
            >
              <Toast.Body>{alertMsg}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>

      <MyModel
        showModel={showModel}
        setShowModel={setShowModel}
        getAllStations={getAllStations}
        setShowAlert={setShowAlert}
        setAlertMsg={setAlertMsg}
        setToastColor={setToastColor}
      />
    </>
  );
};
export default Displaystations;
