import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const RegistrationForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    branch: "",
    year: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      eventName: eventId,
    };

    try {
      const response = await fetch(
        "https://aditya-events-portal.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        }
      );

      await response.json();

navigate("/registration-success", {
  state: {
    name: formData.fullName,
    eventTitle: eventId,
  },
});

setFormData({
  fullName: "",
  rollNumber: "",
  branch: "",
  year: "",
  email: "",
  phoneNumber: "",
});
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-36 p-8 bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-2">
        Event Registration
      </h1>

      <p className="text-center text-[#0231a8] mb-6">
        Event: <span className="font-semibold">{eventId}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full bg-white/20 border border-gray/30 text-gray-500 placeholder-gray-500 p-3 rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />

        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={formData.branch}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl w-full hover:scale-105 transition duration-300 font-semibold"
        >
          Submit
        </button>

      </form>
    </div>
  );
};

export default RegistrationForm;