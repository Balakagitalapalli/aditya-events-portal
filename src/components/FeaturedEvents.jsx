import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const FeaturedEvents = () => {
  const [dbEvents, setDbEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const staticEvents = [
    {
      id: "thunder-thursday",
      image: "/images/thundertday.png",
      title: "Thunder Thursday",
      description:
        "Weekly coding competitions with lightning-fast challenges.",
      date: "Every Thursday",
      location: "Main Auditorium",
    },
    {
      id: "code-carnival",
      image: "/images/codecarnival.png",
      title: "Code Carnival",
      description:
        "A festive celebration of coding with fun challenges.",
      date: "March 15, 2026",
      location: "Tech Park",
    },
    {
      id: "hackathon",
      image: "/images/hack.png",
      title: "Hackathon",
      description:
        "24-hour coding marathon to build innovative solutions.",
      date: "April 5-6, 2026",
      location: "Innovation Hub",
    },
    {
      id: "workshops",
      image: "/images/work.png",
      title: "Workshops",
      description:
        "Hands-on learning sessions with industry experts.",
      date: "Ongoing",
      location: "Seminar Hall",
    },
    {
      id: "blood-donation-camp",
      image: "/images/blooddonation.png",
      title: "Blood Donation Camp 🩸",
      description: "Donate Blood Save Life",
      date: "Soon",
      location: "Main Auditorium",
    },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
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

  const allEvents = [...staticEvents, ...dbEvents];

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
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {allEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedEvents;