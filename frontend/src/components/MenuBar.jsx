import "../stylesheets/MenuBar.css";
import { useNavigate, useParams } from "react-router-dom";
export function MenuBar() {
  const navigate = useNavigate();
  return (
    <div className="menu-bar">
      <div>
        <button onClick={() => navigate("/")} className="menu-bar-title-logo">
          <img className="logo" src="/images/logo.png" alt="" />
          <p className="menu-bar-title">Johnnie</p>
        </button>
      </div>
      <div className="menu-bar-buttons">
        <button onClick={() => navigate("/search")} className="menu-bar-button">
          Search Grants
        </button>
        <button onClick={() => navigate("/hire")} className="menu-bar-button">
          Hire a Grant Writer
        </button>
        <button onClick={() => navigate("/about")} className="menu-bar-button">
          About Johnnie
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="menu-bar-button contact-box"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
