

import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Destinations from "./Pages/Destinations";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Services from "./Pages/Services";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";

function App() {
  return (
    <div >
    <Router>
    <Navbar/>
    <Routes>
    <Route index element={<Home />} />
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
