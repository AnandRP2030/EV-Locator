const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  evStation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EvModel",
    required: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
});

const BookingModel = mongoose.model("BookingModel", bookingSchema);
module.exports = { BookingModel };
