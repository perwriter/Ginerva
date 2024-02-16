

import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Destinations from "./Pages/Destinations";
import Footer from "./components/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./Pages/Services";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <div >
    <Router>
    <Navbar/>
    <Routes>
    <Route index element={<Hero />} />
    <Route path="/services" element={<Services />} />
    <Route path="/destination" element={<Destinations />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
      </Router>
    </div>
   
  );
}

export default App;
