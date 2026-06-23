const express = require("express");
const router = express.Router();
router.delete("/events/:id", async (req, res) => {
  try {
    console.log("Deleting:", req.params.id);

    const deletedEvent =
      await Event.findByIdAndDelete(req.params.id);

    console.log(deletedEvent);

    res.json({
      message: "Event Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/stats", async (req, res) => {
  try {
    const totalEvents = await Event.countDocuments();

    res.json({
      totalEvents,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.put("/events/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
const Event = require("../models/Event");

router.get("/test", (req, res) => {
  res.send("Event Route Working");
});

router.post("/events", async (req, res) => {
  try {
    const event = new Event(req.body);

    await event.save();

    res.status(201).json({
      message: "Event Created Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();

    res.json(events);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/events/:eventId", async (req, res) => {
  try {
    const event = await Event.findOne({
      eventId: req.params.eventId,
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});
router.get("/stats", async (req, res) => {
  try {
    const totalEvents = await Event.countDocuments();

    res.json({
      totalEvents,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;