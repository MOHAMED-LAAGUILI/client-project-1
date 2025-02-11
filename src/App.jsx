/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Outlet  } from "react-router-dom";
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
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages, and Outlet renders child routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="references" element={<References/>} />

          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
