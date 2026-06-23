import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ id, image, title, description, date, location }) => {
  return (
    
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
      
      
      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-[#0047AB] mb-2">{title}</h3>

        <p className="text-gray-600 text-sm mb-3">
          {description}
        </p>

        <div className="text-sm text-gray-500 mb-4">
          📅 {date} <br />
          📍 {location}
        </div>

        {/* Only Link, not button */}
        <Link
          to={`/event/${id}`}
          className="inline-block text-[#ff6b00] font-semibold hover:text-[#0047AB] transition"
        >
          View Details →
        </Link>

      </div>
    </div>
  );
};

export default EventCard;
