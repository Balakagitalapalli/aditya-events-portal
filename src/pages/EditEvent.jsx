import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditEvent = () => {
const { id } = useParams();
const navigate = useNavigate();

const [loading, setLoading] = useState(true);

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

useEffect(() => {
fetch("https://aditya-events-portal.onrender.com/api/events")
.then((res) => res.json())
.then((data) => {
const event = data.find(
(e) => e._id === id
);
    if (event) {
  setEventData({
    ...event,
    gallery1: event.gallery?.[0] || "",
    gallery2: event.gallery?.[1] || "",
    gallery3: event.gallery?.[2] || "",
    gallery4: event.gallery?.[3] || "",
  });
}

    setLoading(false);
  })
  .catch((err) => {
    console.log(err);
    setLoading(false);
  });

}, [id]);

const handleChange = (e) => {
setEventData({
...eventData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const response = await fetch(
    `https://aditya-events-portal.onrender.com/api/events/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  ...eventData,
  gallery: [
    eventData.gallery1,
    eventData.gallery2,
    eventData.gallery3,
    eventData.gallery4,
  ].filter((img) => img.trim() !== ""),
}),
    }
  );

  if (response.ok) {
    alert("Event Updated Successfully");
    navigate("/admin-events");
  } else {
    alert("Failed to update event");
  }
} catch (error) {
  console.log(error);
  alert("Error updating event");
}
};

if (loading) {
return ( <div className="text-center mt-24 text-2xl">
Loading Event... </div>
);
}

return ( <div className="max-w-3xl mx-auto p-8 mt-24 bg-white rounded-xl shadow-lg"> <h1 className="text-3xl font-bold mb-6">
Edit Event </h1>

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
    />

    <input
      type="text"
      name="eventId"
      placeholder="Event ID"
      value={eventData.eventId}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      name="image"
      placeholder="Image URL"
      value={eventData.image}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      name="date"
      placeholder="Date"
      value={eventData.date}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <input
      type="text"
      name="location"
      placeholder="Location"
      value={eventData.location}
      onChange={handleChange}
      className="w-full border p-3 rounded"
    />

    <textarea
      name="description"
      placeholder="Description"
      value={eventData.description}
      onChange={handleChange}
      className="w-full border p-3 rounded"
      rows="5"
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
      className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600"
    >
      Save Changes
    </button>
  </form>
</div>

);
};

export default EditEvent;
