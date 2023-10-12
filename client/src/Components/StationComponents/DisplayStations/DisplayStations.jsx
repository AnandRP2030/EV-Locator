import { InputGroup, Form } from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import StationTable from "../../StationTable/StationTable";
import { useState, useEffect } from "react";
import axios from "axios";
import "./displayStations.css";
const Displaystations = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [allStations, setAllStations] = useState([]);
  const [activeStation, setActiveStation] = useState("All-stations");
  const [searchStation, setSearchStation] = useState("");

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
  return (
    <div className="display-stations">
      <div className="station-table-container">
        <div className="table-heading-container">
          <h1>List of Charging Stations</h1>
          <button>Add New Station</button>
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
          <StationTable allStations={allStations} />
        )}
      </div>
    </div>
  );
};
export default Displaystations;
