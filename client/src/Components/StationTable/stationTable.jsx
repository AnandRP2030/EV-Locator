import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

import "./stationTable.css";

const StationTable = ({ allStations, deleteStation, bookSlot }) => {
  return (
    <div className="ev-table-container">
      <Table className="" striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Station Name</th>
            <th>Location</th>
            <th>Total Ports</th>
            <th>Available Ports</th>
            <th>Rate/hr</th>
            <th>Book Slot</th>
            <th>Delete Station</th>
          </tr>
        </thead>
        <tbody>
          {allStations.map((elem, index) => {
            return (
              <tr key={elem._id}>
                <td>{index + 1}</td>
                <td>{elem.stationName}</td>
                <td>{elem.location}</td>
                <td>{elem.totalPorts}</td>
                <td>{elem.availablePorts}</td>
                <td>{elem.pricePerHour}</td>
                <td>
                  <button
                    onClick={() => {
                      bookSlot(elem._id);
                    }}
                    className="book-slot-btn"
                  >
                    Book Slots
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteStation(elem._id);
                    }}
                    className="delete-station-btn"
                  >
                    Delete Station
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

StationTable.propTypes = {
  allStations: PropTypes.array,
  deleteStation: PropTypes.func,
  bookSlot: PropTypes.func,
};

export default StationTable;
