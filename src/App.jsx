import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./page/Hero";
import AboutSection from "./page/AboutSection";
import ContactSection from "./page/ContactSection";
import Footer from "./page/Footer";
import PartnershipSection from "./page/PartnershipSection";
import SolutionsSlider from "./page/SolutionsSlider";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/solution" element={<SolutionsSlider />} />
        {/* Add other routes as needed */}
      </Routes>
      <AboutSection />
      <SolutionsSlider />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </Router>
  );
}

export default App;
