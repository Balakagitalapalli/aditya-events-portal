import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isDeveloperPage = location.pathname.startsWith("/developers");

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
    <>
      <nav
        className={`flex justify-between items-center px-4 md:px-8 py-3 w-full fixed top-0 left-0 z-50 ${
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
              className="w-24 md:w-40 h-auto object-contain"
            />

            <div className="h-14 w-[2px] bg-gradient-to-b from-orange-900 to-purple-600"></div>

            <div>
              <h1 className="text-xl md:text-3xl font-extrabold text-orange-500">
                ADITYA EVENTS
              </h1>

              <p className="text-xs md:text-sm text-[#0047AB] font-medium">
                Event Management Portal
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/developers">
            🧑‍💻 Meet Developers
          </Link>

          <Link
            to="/admin-login"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
          >
            🔐 Admin
          </Link>

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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-[#0047AB]"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[80px] left-0 w-full bg-white shadow-lg z-40">
          <div className="flex flex-col p-5 space-y-5">

            <Link
              to="/developers"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-blue-600"
            >
              🧑‍💻 Meet Developers
            </Link>

            <Link
              to="/admin-login"
              onClick={() => setMenuOpen(false)}
              className="bg-purple-700 text-white text-center py-3 rounded-lg"
            >
              🔐 Admin
            </Link>

            <div className="flex items-center gap-2">
              📅 {formattedDate}
            </div>

            <div className="flex items-center gap-2">
              🕒 {formattedTime}
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;