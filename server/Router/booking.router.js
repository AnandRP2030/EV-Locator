const bookingRouter = require("express").Router();
const {
  bookAStation,
  getAllBookings,
  getBookingById,
  getAllBookingOfAUser,
  getAllBookingsOfAStationUser,
  deleteSlotById,
} = require("../Controllers/bookingController.js");

bookingRouter.post("/new-booking", bookAStation);
bookingRouter.get("/get-all-bookings", getAllBookings);
bookingRouter.get("/get-booking-by-id/:id", getBookingById);
bookingRouter.get("/user/get-all-bookings/:userId", getAllBookingOfAUser);
bookingRouter.get(
  "/station/get-all-bookings/:stationOwnerId",
  getAllBookingsOfAStationUser
);
bookingRouter.delete("/delete-slot-by-id/:id", deleteSlotById);
module.exports = { bookingRouter };
