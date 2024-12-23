import "../stylesheets/BottomMenuBar.css";

export function BottomMenuBar({ visible }) {
    return (
        <div className={`bottom-menu-bar ${visible ? "visible" : "hidden"}`}>
            <div className="bottom-menu-left">
                <p>© 2025 Johnnie. All rights reserved.</p>
            </div>
            <div className="bottom-menu-right">
                <a href="/terms-and-conditions" className="bottom-menu-link">Terms and Conditions</a>
                <a href="/privacy-policy" className="bottom-menu-link">Privacy Policy</a>
            </div>
        </div>
    );
}

export default BottomMenuBar;
