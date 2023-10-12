import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import "./stationTable.css";
const StationTable = ({ allStations }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Station Name</th>
          <th>Location</th>
          <th>Total Ports</th>
          <th>Available Ports</th>
          <th>Rate/hr</th>
          <th>Book Slot</th>
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
                <button className="book-slot-btn">Book Slot</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

StationTable.propTypes = {
  allStations: PropTypes.array,
};

export default StationTable;
