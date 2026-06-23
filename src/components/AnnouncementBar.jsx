import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#ff6b00] via-[#ff8c42] to-[#0047AB] text-white overflow-hidden h-10 flex items-center font-medium shadow-md">
      <div className="animate-marquee whitespace-nowrap">
        📢 Event registrations are currently open &nbsp;&nbsp;&nbsp;
        🎯 Don't miss the opportunity to showcase your skills &nbsp;&nbsp;&nbsp;
        🏆 Winners will receive exciting prizes and recognition &nbsp;&nbsp;&nbsp;
        📅 Keep checking the portal for newly added events &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};

export default AnnouncementBar;