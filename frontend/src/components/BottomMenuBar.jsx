import "../stylesheets/BottomMenuBar.css";

export function BottomMenuBar() {
    return (
        <div className={`bottom-menu-bar`}>
            <div className="bottom-menu-left">
                <p>© 2025 Johnnie USA. All rights reserved.</p>
            </div>
            <div className="bottom-menu-right">
                <a href="/terms-and-conditions" className="bottom-menu-link">Terms and Conditions</a>
                <a href="/privacy-policy" className="bottom-menu-link">Privacy Policy</a>
            </div>
        </div>
    );
}

export default BottomMenuBar;
