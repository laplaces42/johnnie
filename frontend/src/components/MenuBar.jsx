import "../stylesheets/MenuBar.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export function MenuBar() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="menu-bar">
      <div>
        <button onClick={() => navigate("/")} className="menu-bar-title-logo">
          <img className="logo" src="/images/logo_white.png" alt="" />
          <p className="menu-bar-title">Johnnie</p>
        </button>
      </div>
      <div className="burger-menu">
        <img
          className="burger-icon"
          onClick={() => setMenuVisible((menuVisible) => !menuVisible)}
          src="/images/hamburger.png"
          alt=""
        />
        <div className={`burger-buttons${menuVisible ? " active" : ""}`}>
          <button
            onClick={() => {
              navigate("/pricing");
              setMenuVisible((menuVisible) => !menuVisible);
            }}
            className="burger-button"
          >
            Pricing and FAQ
          </button>
          <button
            onClick={() => {
              navigate("/about");
              setMenuVisible((menuVisible) => !menuVisible);
            }}
            className="burger-button"
          >
            About Johnnie
          </button>
          <button
            onClick={() => {
              navigate("/contact");
              setMenuVisible((menuVisible) => !menuVisible);
            }}
            className="burger-button"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="menu-bar-buttons">
        {/* <button onClick={() => navigate("/search")} className="menu-bar-button">
          Search Grants
        </button>
        <button onClick={() => navigate("/hire")} className="menu-bar-button">
          Hire a Grant Writer
        </button> */}
        <button
          onClick={() => navigate("/pricing")}
          className="menu-bar-button"
        >
          Pricing and FAQ
        </button>
        <button onClick={() => navigate("/about")} className="menu-bar-button">
          About Johnnie
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="menu-bar-button contact-box"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
