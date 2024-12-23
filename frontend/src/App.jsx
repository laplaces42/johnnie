import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";
import HirePage from "./pages/HirePage";
import MenuBar from "./components/MenuBar";
import BottomMenuBar from "./components/BottomMenuBar";

function App() {

  // const [isBottomVisible, setIsBottomVisible] = useState(false);

  //   useEffect(() => {
  //       const handleScroll = () => {
  //           const scrollTop = window.scrollY;
  //           const windowHeight = window.innerHeight;
  //           const documentHeight = document.documentElement.scrollHeight;

  //           // Check if the user has scrolled to the bottom
  //           if (scrollTop + windowHeight >= documentHeight - 10) {
  //               setIsBottomVisible(true);
  //           } else {
  //               setIsBottomVisible(false);
  //           }
  //       };

  //       window.addEventListener("scroll", handleScroll);

  //       // Cleanup the event listener
  //       return () => {
  //           window.removeEventListener("scroll", handleScroll);
  //       };
  //   }, []);

  return (
    <BrowserRouter>
      <div className="App">
      <MenuBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
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
