const { BookingModel } = require("../Models/booking.model.js");

const bookAStation = async (req, res) => {
  try {
    const { userObjectId, evStationObjectId, bookingDate } = req.body;
    if (!userObjectId || !evStationObjectId || !bookingDate) {
      return res.status(400).send({ message: "All fields are required" });
    }
    const exisitingBooking = await BookingModel.findOne({
      evStation: evStationObjectId,
      bookingDate,
    });

    if (exisitingBooking) {
      return res.status(400).send({ message: "Booking Already Exists" });
    }

    const newBooking = new BookingModel({
      user: userObjectId,
      evStation: evStationObjectId,
      bookingDate,
    });

    await newBooking.save();
    return res
      .status(201)
      .send({ message: "Booking Successfully Completed.", newBooking });
  } catch (err) {
    return res.status(500).send({ message: "Server Error" });
  }
};

const getAllBookings = async (req, res) => {
  const allBookings = await BookingModel.find({})
    .populate("user")
    .populate("evStation")
    .exec();
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

const getAllBookingOfAUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const allBookings = await BookingModel.find({ user: userId })
      .populate("user")
      .populate("evStation")
      .exec();

    if (!allBookings) {
      return res
        .status(404)
        .send({ messsage: "You are not booked any EV stations yet." });
    }
    return res
      .status(200)
      .send({ message: "Found all bookings", data: allBookings });
  } catch (error) {
    return res.status(500).send({ message: "Server Error." });
  }
};

const getAllBookingsOfAStation = async (req, res) => {
  try {
    const { stationId } = req.params;
    const allBookings = await BookingModel.find({ evStation: stationId })
      .populate("user")
      .populate("evStation")
      .exec();
    if (!allBookings) {
      return res.status(404).send({ message: "Booking Not found" });
    }
    return res
      .status(200)
      .send({ message: "Found all bookings", data: allBookings });
  } catch (error) {
    return res.status(500).send({ message: "Server Error" });
  }
};
module.exports = {
  bookAStation,
  getAllBookings,
  getBookingById,
  getAllBookingOfAUser,
  getAllBookingsOfAStation,
};
