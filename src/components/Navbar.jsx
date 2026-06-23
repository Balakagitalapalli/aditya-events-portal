import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
<img
  src="/images/aditya_logo.jpg"
  alt="Aditya Logo"
  className="w-14 h-14 object-contain"
/>
const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

 const isDeveloperPage =
  location.pathname.startsWith("/developers");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-US");

  return (
    <nav
  className={`flex justify-between items-center px-8 py-3 w-full fixed top-0 left-0 z-50
  ${
    isDeveloperPage
      ? "bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg"
      : "bg-gradient-to-r from-white via-orange-50 to-blue-100"
  }`}
>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3">

         <img
          src="/images/aditya_logo.jpg"
          alt="Aditya Logo"
          className="w-40 h-14 object-contain"
        />
           {/* Divider */}
          <div className="h-14 w-[2px] bg-gradient-to-b from-orange-900 to-purple-600"></div>
          <div>
            <h1 className="text-3xl font-extrabold text-orange-500">
              ADITYA EVENTS
            </h1>

            <p className="text-sm text-[#0047AB] font-medium">
              Event Management Portal
            </p>
          </div>

        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Meet Developers Button */}
        <Link
          to="/developers"
          className=""
        >
          🧑‍💻 Meet Developers
        </Link>

        {/* Admin Button */}
        <Link
          to="/admin-login"
          className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
        >
          🔐 Admin
        </Link>

        {/* Date & Time */}
        <div className="flex items-center gap-6 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-yellow-300 text-xl">📅</span>
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-green-300 text-xl">🕒</span>
            <span>{formattedTime}</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;