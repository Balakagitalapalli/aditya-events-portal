import React from "react";
import { Link } from "react-router-dom";

const DevelopersPage = () => {
  const team = [
    {
      name: "Bala Kagitalapalli",
      role: "Full Stack Developer",
      image: "/images/bala.jpg",
      github: "https://github.com/Balakagitalapalli",
      linkedin: "https://www.linkedin.com/in/bala-kagitalapalli-205172291/",
      bio: "Passionate Full Stack MERN Developer",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center pt-20"
      style={{
        backgroundImage: "url('/images/developer-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">

        {/* Back Button */}
        <div className="absolute top-6 left-8 z-20">
          <Link
            to="/"
            className="text-white font-medium hover:text-orange-500 transition"
          >
            ← Back to Events
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center pt-0 mb-0 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            Meet Our{" "}
            <span className="text-orange-500">
              Developer
            </span>
          </h1>
        </div>

        {/* Developer Card */}
        <div className="flex justify-center px-4 mt-2">

          {team.map((member, index) => (
            <div
              key={index}
              className="
                bg-white/95
                rounded-3xl
                shadow-2xl
                w-full
                max-w-3xl
                p-4
                flex
                flex-col
                md:flex-row
                gap-4
              "
            >

              {/* Left Section */}
              <div className="md:w-1/3 flex flex-col items-center justify-center">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-45
                    h-55
                    object-cover
                    rounded-[50px]
                    border-4
                    border-rgba(0, 0, 0, 0.1)
                    shadow-lg
                  "
                />

                <h2 className="text-3xl font-bold text-gray-800 mt-4">
                  {member.name}
                </h2>

                <p className="text-purple-600 text-xl font-semibold mt-1">
                  {member.role}
                </p>

                <span className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm">
                  MERN Stack Developer
                </span>

              </div>

              {/* Right Section */}
              <div className="md:w-2/3">

                <p className="text-gray-600 text-base leading-relaxed">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                    MongoDB
                  </span>

                  <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium">
                    Express.js
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                    React.js
                  </span>

                  <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-medium">
                    Node.js
                  </span>

                  <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">
                    HTML
                  </span>

                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                    CSS
                  </span>

                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6 flex-wrap">

                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white px-5 py-3 rounded-xl hover:scale-105 transition"
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
                <div className="border-t mt-6 pt-6">

                  <h3 className="text-2xl font-bold text-gray-800">
                    Event Management System
                  </h3>

                  <p className="text-gray-500 text-lg mt-2">
                    Developed using MongoDB, Express.js,
                    React.js and Node.js.
                  </p>

                  <div className="mt-4">

                    <h4 className="font-semibold text-xl mb-2">
                      Features:
                    </h4>

                    <ul className="list-disc ml-6 text-gray-600 space-y-0 text-sm">
                      <li>Dynamic Event Management</li>
                      <li>Event Registration System</li>
                      <li>Admin Dashboard</li>
                      <li>Event Galleries</li>
                      <li>MongoDB Database Integration</li>
                      <li>Responsive UI Design</li>
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

export default DevelopersPage;