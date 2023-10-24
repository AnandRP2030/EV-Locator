const bookingRouter = require("express").Router();
const {
  bookAStation,
  getAllBookings,
  getBookingById
} = require("../Controllers/bookingController.js");

bookingRouter.post("/new-booking", bookAStation);
bookingRouter.get("/get-all-bookings", getAllBookings);
bookingRouter.get("/get-booking-by-id/:id", getBookingById);
module.exports = { bookingRouter };
