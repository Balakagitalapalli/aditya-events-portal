const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
   eventName: String,
});

module.exports = mongoose.model(
  "Registration",
  registrationSchema
);