import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const AdminPage = () => {
const [registrations, setRegistrations] = useState([]);

const [searchTerm, setSearchTerm] = useState("");
const [selectedEvent, setSelectedEvent] = useState("All");
const eventCounts = {};

registrations.forEach((student) => {
const event = student.eventName || "Unknown";
eventCounts[event] = (eventCounts[event] || 0) + 1;
});

const filteredRegistrations = registrations.filter((student) => {
  const matchesSearch = student.rollNumber
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesEvent =
  selectedEvent === "All" ||
  (student.eventName || "").toLowerCase() ===
    selectedEvent.toLowerCase();
  if (localStorage.getItem("adminLoggedIn") !== "true") {
  return <Navigate to="/admin-login" />;
  }
  return matchesSearch && matchesEvent;
});

useEffect(() => {
fetch("https://aditya-events-portal.onrender.com/api/registrations")
.then((res) => res.json())
.then((data) => setRegistrations(data))
.catch((err) => console.log(err));
}, []);

const exportToExcel = () => {
console.log(registrations);
const worksheet = XLSX.utils.json_to_sheet(
registrations.map((student) => ({
Name: student.fullName,
RollNumber: student.rollNumber,
Branch: student.branch,
Year: student.year,
Event: student.eventName,
Email: student.email,
Phone: student.phoneNumber,
}))
);

const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(
workbook,
worksheet,
"Registrations"
);

XLSX.writeFile(
workbook,
"Event_Registrations.xlsx"
);
};


const deleteRegistration = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this registration?"
  );

  if (!confirmDelete) return;

  try {
    await fetch(
      `https://aditya-events-portal.onrender.com/api/registrations/${id}`,
      {
        method: "DELETE",
      }
    );

    setRegistrations(
      registrations.filter(
        (student) => student._id !== id
      )
    );
  } catch (error) {
    console.log(error);
  }
};


return ( <div className="min-h-screen p-10 pt-24"> <h1 className="text-4xl font-bold mb-6">
Admin Dashboard </h1>

  {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 pt-2">
          <Link
            to="/"
            className="text-white font-medium hover:text-white transition"
          >
            ← Back to Events
          </Link>
        </div>

  <Link
  to="/admin-events"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block ml-4"
>
  📋 Manage Events
</Link> 

  <Link
  to="/add-event"
  className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block mb-6"
>
  ➕ Add New Event
</Link>

  {/* Total Registrations */}
  <div className="bg-purple-600 text-white p-6 rounded-xl shadow-lg mb-8 w-fit">
    <h2 className="text-xl font-semibold">
      Total Registrations
    </h2>

    <p className="text-4xl font-bold mt-2">
      {registrations.length}
    </p>
  </div>

  {/* Event Counts */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    {Object.entries(eventCounts).map(([event, count]) => (
      <div
        key={event}
        className="bg-indigo-600 text-white p-5 rounded-xl shadow-lg"
      >
        <h3 className="text-lg font-semibold">
          {event}
        </h3>

        <p className="text-3xl font-bold mt-2">
          {count}
        </p>
      </div>
    ))}
  </div>

<button
  onClick={exportToExcel}
  className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg mb-6 hover:bg-green-700"
>
  Download Excel
</button>

<div className="flex flex-wrap gap-3 mb-6">

  <button
    onClick={() => setSelectedEvent("All")}
    className="bg-purple-600 text-white px-4 py-2 rounded"
  >
    All
  </button>

  {Object.keys(eventCounts).map((event) => (
    <button
      key={event}
      onClick={() => setSelectedEvent(event)}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {event}
    </button>
  ))}

</div>

  {/* Search Box */}
  <input
    type="text"
    placeholder="Search by Roll Number..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="border p-3 rounded-lg w-full mb-6"
  />

  <table className="w-full border">
    <thead>
      <tr className="bg-purple-600 text-white">
        <th className="p-3">Name</th>
        <th className="p-3">Roll Number</th>
        <th className="p-3">Branch</th>
        <th className="p-3">Year</th>
        <th className="p-3">Event</th>
        <th className="p-3">Action</th>
      </tr>
    </thead>

    <tbody>
      {filteredRegistrations.map((student) => (
        <tr key={student._id}>
          <td className="border p-3">
            {student.fullName}
          </td>

          <td className="border p-3">
            {student.rollNumber}
          </td>

          <td className="border p-3">
            {student.branch}
          </td>

          <td className="border p-3">
            {student.year}
          </td>

          <td className="border p-3">
            {student.eventName || "Not Available"}
          </td>

          <td className="border p-3">
          <button
            onClick={() =>
              deleteRegistration(student._id)
            }
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
          </td>

        </tr>
      ))}
    </tbody>
  </table>
</div>

);
};

export default AdminPage;
