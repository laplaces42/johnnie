import "../stylesheets/MenuBar.css";

export function MenuBar() {
  return (
    <div className="menu-bar">
      <div >
        <button className="menu-bar-title-logo">
          <img className="logo" src="/images/logo.png" alt="" />
          <p className="menu-bar-title">Johnnie</p>
        </button>
      </div>
      <div className="menu-bar-buttons">
        <button className="menu-bar-button">Search Grants</button>
        <button className="menu-bar-button">Hire a Grant Writer</button>
        <button className="menu-bar-button">About Johnnie</button>
        <button className="menu-bar-button">Contact Us</button>
      </div>
    </div>
  );
}

export default MenuBar;
