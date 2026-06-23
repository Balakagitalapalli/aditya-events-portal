import React from "react";
import { Link, useLocation } from "react-router-dom";

const RegistrationSuccess = () => {
  const location = useLocation();

  const { name, eventTitle } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700 px-4">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl w-full text-center">

        <div className="text-7xl mb-4">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Registration Successful!
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Thank you for registering.
        </p>

        <div className="bg-gray-100 rounded-xl p-4 mb-6">

          <p className="text-lg">
            <strong>Name:</strong> {name || "Participant"}
          </p>

          <p className="text-lg mt-2">
            <strong>Event:</strong> {eventTitle || "Selected Event"}
          </p>

        </div>

        <p className="text-gray-500 mb-6">
          We look forward to seeing you at the event.
        </p>

        <Link
          to="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
};

export default RegistrationSuccess;