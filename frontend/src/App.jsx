import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";
import HirePage from "./pages/HirePage";
import MenuBar from "./components/MenuBar";
import BottomMenuBar from "./components/BottomMenuBar";
import { PricingAndFAQPage } from "./pages/PricingAndFAQPage";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <MenuBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingAndFAQPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hire" element={<HirePage />} />
        </Routes>
        <BottomMenuBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
