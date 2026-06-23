import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegistrationForm from "./pages/RegistrationForm";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";
import EventDetails from "./pages/EventDetails";
import DevelopersPage from "./pages/DevelopersPage";
import AddEvent from "./pages/AddEvent";
import AdminEvents from "./pages/AdminEvents";
import EditEvent from "./pages/EditEvent";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Hero from "./components/Hero";
import FeaturedEvents from "./components/FeaturedEvents";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Announcement Bar Below Navbar */}

      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <div className="pt-20">
                <AnnouncementBar />
              </div>

              <Hero />
              <FeaturedEvents />
              <Gallery />
            </>
          }
        />

        {/* Event Details */}
        <Route path="/event/:id" element={<EventDetails />} />

        {/* Registration */}
        <Route
          path="/register/:eventId"
          element={<RegistrationForm />}
        />

        {/* Registration Success */}
        <Route
          path="/registration-success"
          element={<RegistrationSuccess />}
        />

        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/admin-events" element={<AdminEvents />} />
        <Route path="/edit-event/:id" element={<EditEvent />} />

        {/* Developers */}
        <Route
          path="/developers"
          element={<DevelopersPage />}
        />

      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;