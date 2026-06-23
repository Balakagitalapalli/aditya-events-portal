const express = require("express");
const router = express.Router();
module.exports = router;
const Registration = require("../models/Registration");

// Delete Registration
router.delete("/registrations/:id", async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);

    res.json({
      message: "Registration Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Save Registration
router.post("/register", async (req, res) => {
  try {
    const registration = new Registration(req.body);

    await registration.save();

    res.status(201).json({
      message: "Registration Saved Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});


// Get All Registrations
router.get("/registrations", async (req, res) => {
  try {
    const registrations = await Registration.find();

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;