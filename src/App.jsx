/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // Import WhatsApp and Phone icons
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import References from "./pages/References";
import Faqs from "./pages/Faqs";
import Preloader from "./Components/Preloader";
import Breadcrumb from "./Components/Breadcrumb";
import JobOpportunities from "./pages/Jobs/Jobs";

// Layout Component with Preloader
const Layout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulating loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative">
      <Header />
      <Breadcrumb />

      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />

      {/* WhatsApp and Phone Icon Container */}
      <div className="fixed bottom-5 right-5 space-y-5 z-50">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/yourphoneNumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center mb-2">
            <FaWhatsapp size={30} color="white" />
          </div>
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+yourPhoneNumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-primary p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center">
            <FaPhone size={30} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages, and Outlet renders child routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="references" element={<References />} />
          <Route path="jobs" element={<JobOpportunities />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
