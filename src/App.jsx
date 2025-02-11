/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import References from "./pages/References";
import Faqs from "./pages/Faqs";
import JobOpportunities from "./pages/Jobs/Jobs";

// Layout Component with Preloader

function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="references" element={<References />} />
          <Route path="jobs" element={<JobOpportunities />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
