import React from "react";
import { Link } from "react-router-dom";

const Developers = () => {
  const team = [
    {
      name: "Bala",
      role: "Lead Developer",
      image: "/images/bala.png",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      bio: "Passionate Full Stack MERN Developer focused on building scalable and modern web applications with excellent user experiences.",
    },
  ];

  return (
    <div
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/developer-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 pt-2">
          <Link
            to="/"
            className="text-white font-medium hover:text-white transition"
          >
            ← Back to Events
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center pt-2 pb-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Meet Our{" "}
            <span className="text-orange-500">
              Developers
            </span>
          </h1>

          <p className="text-gray-200 mt-4 max-w-3xl mx-auto text-lg">
            The creative minds behind the Aditya Events platform.
            We design, develop and deliver modern event management
            solutions using the MERN Stack.
          </p>
        </div>

        {/* Developer Card */}
        <div className="flex justify-center px-4 pb-4">

          {team.map((member, index) => (
            <div
              key={index}
              className="
                bg-white/95
                backdrop-blur-md
                rounded-3xl
                shadow-2xl
                p-6
                w-[850px]
                flex
                flex-col
                md:flex-row
                items-center
                gap-8
              "
            >

              {/* Left Side */}
              <div className="md:w-1/3 text-center">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-40
                    h-43
                    rounded-full
                    object-cover
                    border-4
                    border-purple-500
                    mx-auto
                    shadow-lg
                  "
                />

                <h2 className="text-4xl font-bold text-gray-800 mt-4">
                  {member.name}
                </h2>

                <p className="text-purple-600 font-semibold text-lg mt-2">
                  {member.role}
                </p>

                <div className="mt-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    MERN Stack Developer
                  </span>
                </div>

              </div>

              {/* Right Side */}
              <div className="md:w-2/3">

                <p className="text-gray-600 leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mb-6">

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    MongoDB
                  </span>

                  <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Express.js
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    React.js
                  </span>

                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Node.js
                  </span>

                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    HTML
                  </span>

                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    CSS
                  </span>

                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-4 mb-6">

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition"
                  >
                    🐱 GitHub
                  </a>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:scale-105 transition"
                  >
                    💼 LinkedIn
                  </a>

                </div>

                {/* Project Section */}
                <div className="border-t pt-5">

                  <h3 className="font-bold text-2xl text-gray-800">
                    Event Management System
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Developed using MongoDB, Express.js,
                    React.js and Node.js.
                  </p>

                  <div className="mt-4 text-sm text-gray-600">
                    Features:
                    <ul className="list-disc ml-5 mt-2">
                      <li>Dynamic Event Management</li>
                      <li>Event Registration System</li>
                      <li>Admin Dashboard</li>
                      <li>Event Galleries</li>
                      <li>MongoDB Database Integration</li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Developers;
