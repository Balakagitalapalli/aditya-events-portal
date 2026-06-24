import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const FeaturedEvents = () => {
  const [dbEvents, setDbEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://aditya-events-portal.onrender.com/api/events")
      .then((res) => res.json())
      .then((data) => {
        const formattedEvents = data.map((event) => ({
          id: event.eventId,
          image: event.image,
          title: event.title,
          description: event.description,
          date: event.date,
          location: event.location,
        }));

        console.log("DB Events:", formattedEvents);

        setDbEvents(formattedEvents);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="px-10 py-16 bg-gradient-to-b from-white via-orange-50 to-blue-50">
      <h2 className="text-4xl font-bold mb-2 text-[#0047AB]">
        Featured Events
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-[#ff6b00] to-[#0047AB] rounded-full mb-4"></div>

      <p className="text-gray-600 mb-8 text-lg">
        Explore our upcoming events and register now
      </p>

      {loading ? (
        <div className="text-center text-lg font-semibold text-gray-500">
          Loading Events...
        </div>
      ) : dbEvents.length === 0 ? (
        <div className="text-center text-lg font-semibold text-gray-500">
          No Events Available
        </div>
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {dbEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedEvents;