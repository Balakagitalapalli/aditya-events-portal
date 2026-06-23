const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-orange-50 to-blue-50 py-6 px-8 mt-10 border-t border-gray-200 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-700">

        {/* Logo / Brand */}
        <div className="flex items-center gap-2 font-bold text-[#0047AB] text-lg">
          ☀️ ADITYA-EVENTS
        </div>

        {/* Center Text */}
        <div className="text-sm text-gray-500">
          Event Management Portal
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600">
          © 2026 All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;