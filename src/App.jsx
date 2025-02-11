/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './assets/css/tailwind.css'

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import References from "./pages/References";
import Faqs from "./pages/Faqs";
import JobOpportunities from "./pages/Jobs/Jobs";
import Telecommunication from "./pages/services/Telecommunication";
import Etude_Conseil from "./pages/services/Etude_Conseil";

// Layout Component with Preloader

function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="references" element={<References />} />
          <Route path="Telecommunication" element={<Telecommunication />} />
          <Route path="consulting" element={<Etude_Conseil />} />
          <Route path="jobs" element={<JobOpportunities />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
