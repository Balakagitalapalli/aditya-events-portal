import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminEvents = () => {
  const [events, setEvents] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    fetch("https://aditya-events-portal.onrender.com/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, []);

  const deleteEvent = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this event?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(
        `https://aditya-events-portal.onrender.com/api/events/${id}`,
        {
          method: "DELETE",
        }
      );

      setEvents(
        events.filter((event) => event._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen p-10 pt-24">
      <h1 className="text-4xl font-bold mb-8">
        Manage Events
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white shadow-lg rounded-xl p-6"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-4">
              {event.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {event.date}
            </p>

            <p className="text-gray-600">
              {event.location}
            </p>

            <button
              onClick={() =>
                deleteEvent(event._id)
              }
              className="bg-red-600 text-white px-4 py-2 rounded mt-4"
            >
              Delete Event
            </button>

            <button
                onClick={() => navigate(`/edit-event/${event._id}`)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mt-2 ml-2"
                >
                Edit Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEvents;