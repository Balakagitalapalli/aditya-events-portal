import React from "react";

const announcements = `
📢 Registrations are now open for exciting campus events   •
🎯 Showcase your talent and compete with the best performers   •
🏆 Win exciting prizes, certificates, and recognition   •
🚀 Participate in technical, cultural, and innovation events   •
🤝 Connect with students, mentors, and industry experts   •
📅 Stay tuned for newly added events and opportunities   •
🎉 Join, Learn, Compete, and Celebrate at Aditya Events Portal   •
🌟 Discover exciting opportunities through campus events and competitions   •
🎓 Build your skills, confidence, and network through active participation   •
💻 Participate in coding contests, hackathons, and technical workshops   •
🎤 Showcase your talent in singing, dancing, music, and cultural events
`;

const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#ff6b00] via-[#ff8c42] to-[#0047AB] text-white overflow-hidden h-10 flex items-center shadow-md">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="px-8">{announcements}</span>
        <span className="px-8">{announcements}</span>
        <span className="px-8">{announcements}</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
