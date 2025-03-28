import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";
import HirePage from "./pages/HirePage";
import MenuBar from "./components/MenuBar";
import BottomMenuBar from "./components/BottomMenuBar";
import PricingAndFAQPage from "./pages/PricingAndFAQPage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {

  return (
    <BrowserRouter basename="/">
      <div className="App">
      <MenuBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingAndFAQPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hire" element={<HirePage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <BottomMenuBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
