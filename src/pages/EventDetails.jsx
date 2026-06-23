import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { events } from "../Data/events";
const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch(`http://localhost:5000/api/events/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Not found in MongoDB");
      }
      return res.json();
    })
    .then((data) => {
      if (data && data.eventId) {
        setEvent(data);
      } else {
        const localEvent = events.find(
          (e) => e.id === id
        );

        setEvent(localEvent || null);
      }

      setLoading(false);
    })
    .catch(() => {
      const localEvent = events.find(
        (e) => e.id === id
      );

      setEvent(localEvent || null);
      setLoading(false);
    });
}, [id]);

  if (loading) {
    return (
      <div className="p-10 text-center text-2xl">
        Loading Event...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="p-10 text-center text-2xl">
        Event Not Found
      </div>
    );
  }

  return (
    <div className="px-10 py-10">
      <Link
        to="/"
        className="text-gray-500 hover:text-purple-600"
      >
        ← Back to Events
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-8 items-center">
       <img
          src={event.image}
          alt={event.title}
          className="w-full h-[390px] object-cover rounded-3xl shadow-xl mb-10"
        />

        <div>
          <h1 className="text-5xl font-bold mb-4">
            {event.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b00] to-[#0047AB] rounded-full mt-3 mb-6"></div>
          <div className="flex gap-6 text-gray-600 mb-6">
            <div>📅 {event.date}</div>
            <div>📍 {event.location}</div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            {event.description}
          </p>

          <button
            onClick={() =>
              navigate(`/register/${event.eventId || event.id}`)
            }
            className="bg-gradient-to-r from-[#ff6b00] to-[#0047AB] text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          >
            Register Now
          </button>
        </div>
      </div>

            {/* Event Gallery */}
        <div className="mt-16 bg-gradient-to-b from-white via-orange-50 to-blue-50p-10 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Event <span className="text-purple-600">Gallery</span>
          </h2>

          {event.gallery?.length > 0 ? (
            <div className="grid md:grid-cols-4 gap-6">
              {event.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-lg">
              No gallery images available for this event.
            </p>
          )}
        </div>
    </div>
  );
};

export default EventDetails;