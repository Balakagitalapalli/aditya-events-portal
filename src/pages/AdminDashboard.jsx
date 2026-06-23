import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalEvents: 0,
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen p-10 pt-24 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        📊 Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-purple-600 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">
            Total Events
          </h2>

          <p className="text-5xl font-bold mt-4">
            {stats.totalEvents}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;