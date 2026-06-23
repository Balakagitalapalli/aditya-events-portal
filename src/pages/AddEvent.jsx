import React, { useState } from "react";

const AddEvent = () => {
const [eventData, setEventData] = useState({
title: "",
eventId: "",
image: "",
date: "",
location: "",
description: "",
gallery1: "",
gallery2: "",
gallery3: "",
gallery4: "",
});

const handleChange = (e) => {
setEventData({
...eventData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

const payload = {
  title: eventData.title,
  eventId: eventData.eventId,
  image: eventData.image,
  date: eventData.date,
  location: eventData.location,
  description: eventData.description,

  gallery: [
    eventData.gallery1,
    eventData.gallery2,
    eventData.gallery3,
    eventData.gallery4,
  ].filter((img) => img.trim() !== ""),
};

try {
  const response = await fetch(
    "http://localhost:5000/api/events",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await response.json();

  alert(data.message);

  setEventData({
    title: "",
    eventId: "",
    image: "",
    date: "",
    location: "",
    description: "",
    gallery1: "",
    gallery2: "",
    gallery3: "",
    gallery4: "",
  });
} catch (error) {
  console.log(error);
  alert("Error creating event");
}

};

return ( <div className="max-w-3xl mx-auto p-8 mt-24 bg-white rounded-xl shadow-lg"> <h1 className="text-3xl font-bold mb-6">
Add New Event </h1>

  <form
    onSubmit={handleSubmit}
    className="space-y-4"
  >
    <input
      type="text"
      name="title"
      placeholder="Event Title"
      value={eventData.title}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      required
    />

    <input
      type="text"
      name="eventId"
      placeholder="event-id"
      value={eventData.eventId}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      required
    />

    <input
      type="text"
      name="image"
      placeholder="Cover Image URL"
      value={eventData.image}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      required
    />

    <input
      type="text"
      name="date"
      placeholder="Date"
      value={eventData.date}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      required
    />

    <input
      type="text"
      name="location"
      placeholder="Location"
      value={eventData.location}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      required
    />

    <textarea
      name="description"
      placeholder="Description"
      value={eventData.description}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      rows="4"
      required
    />

    <input
      type="text"
      name="gallery1"
      placeholder="Gallery Image 1 URL"
      value={eventData.gallery1}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      name="gallery2"
      placeholder="Gallery Image 2 URL"
      value={eventData.gallery2}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      name="gallery3"
      placeholder="Gallery Image 3 URL"
      value={eventData.gallery3}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      name="gallery4"
      placeholder="Gallery Image 4 URL"
      value={eventData.gallery4}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <button
      type="submit"
      className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
    >
      Create Event
    </button>
  </form>
</div>

);
};

export default AddEvent;
