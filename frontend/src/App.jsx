import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ContactPage from "./pages/ContactPage";
import HirePage from "./pages/HirePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/hire" element={<HirePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
