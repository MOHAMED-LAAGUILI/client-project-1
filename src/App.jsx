/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { FaWhatsapp, FaPhone } from "react-icons/fa";  // Import WhatsApp and Phone icons
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import References from "./pages/References";

// Layout Component (Keeps Header & Footer for all pages)
const Layout = () => (
  <>
    <Header />
    <main className="container">
      <Outlet /> 
    </main>
    <Footer />
    
    {/* WhatsApp and Phone Icon Container */}
    <div className="fixed bottom-5 right-5 space-y-5">
      {/* WhatsApp Icon */}
      <a href="https://wa.me/yourphoneNumber" target="_blank" rel="noopener noreferrer" className="">
        <div className="bg-green p-4 rounded-full shadow-lg hover:bg-green-dark transition-all duration-300 flex items-center justify-center relative ">
          <FaWhatsapp size={30} color="white" />
        </div>
      </a>
      
      {/* Phone Icon */}
      <a href="tel:+yourPhoneNumber" target="_blank" rel="noopener noreferrer">
        <div className="top-3 bg-primary p-4 rounded-full shadow-lg hover:bg-primary transition-all duration-300 flex items-center justify-center relative z-600">
          <FaPhone size={30} color="white" />
        </div>
      </a>
    </div>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages, and Outlet renders child routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="references" element={<References />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
