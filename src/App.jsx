import React from "react";
import CustomSwiper from "./components/Swiper";
import LandingPage from "./pages/LandingPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsConditions from "./pages/TermsConditions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./pages/Form";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
