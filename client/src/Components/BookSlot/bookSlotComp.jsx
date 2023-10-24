import PropTypes from "prop-types";
import "./book-slot.css";
const BookSlotComp = ({ activeStation }) => {
  console.log("as", activeStation);
  return (
    <div className="book-slot-container">
      <h1>booking slot</h1>
    </div>
  );
};
BookSlotComp.propTypes = {
  activeStation: PropTypes.object,
};

export default BookSlotComp;
