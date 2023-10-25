const bookingRouter = require("express").Router();
const {
  bookAStation,
  getAllBookings,
  getBookingById,
  getAllBookingOfAUser,
  getAllBookingsOfAStation,
} = require("../Controllers/bookingController.js");

bookingRouter.post("/new-booking", bookAStation);
bookingRouter.get("/get-all-bookings", getAllBookings);
bookingRouter.get("/get-booking-by-id/:id", getBookingById);
bookingRouter.get("/user/get-all-bookings/:userId", getAllBookingOfAUser);
bookingRouter.get(
  "/station/get-all-bookings/:stationId",
  getAllBookingsOfAStation
);
module.exports = { bookingRouter };
