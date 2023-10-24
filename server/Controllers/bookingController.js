const { BookingModel } = require("../Models/booking.model.js");

const bookAStation = async (req, res) => {
  try {
    const { userObjectId, evStationObjectId, bookingDate } = req.body;
    if (!userObjectId || !evStationObjectId || !bookingDate) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const newBooking = new BookingModel({
      user: userObjectId,
      evStation: evStationObjectId,
      bookingDate,
    });
    await newBooking.save();
    return res.status(200).send({ message: "Booking Completed", newBooking });
  } catch (err) {
    return res.status(500).send({ message: "Server Error" });
  }
};

const getAllBookings = async (req, res) => {
  const allBookings = await BookingModel.find({});
  return res.status(200).send({ data: allBookings });
};

const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({ message: "Id is required" });
    }
    const booking = await BookingModel.findById(id)
      .populate("user")
      .populate("evStation")
      .exec();

    if (!booking) {
      return res.status(404).send({ message: "Booking Not found" });
    }
    return res.status(200).send({ message: "Booking Found", booking });
  } catch (error) {
    return res.status(500).send({ message: "Server Error" });
  }
};
module.exports = {
  bookAStation,
  getAllBookings,
  getBookingById,
};
