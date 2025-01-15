import "../stylesheets/PPSidebar.css";

export function PPSidebar() {
    return (
        <div className="pp-sidebar">
            <a href="#information-we-collect" className="pp-sidebar-button">1. Information We Collect</a>
            <a href="#how-we-use-your-information" className="pp-sidebar-button">2. How We Use Your Information</a>
            <a href="#sharing-your-information" className="pp-sidebar-button">3. Sharing Your Information</a>
            <a href="#data-storage-and-retention" className="pp-sidebar-button">4. Data Storage and Retention</a>
            <a href="#your-privacy-rights" className="pp-sidebar-button">5. Your Privacy Rights</a>
            <a href="#minors" className="pp-sidebar-button">6. Minors</a>
            <a href="#security-measures" className="pp-sidebar-button">7. Security Measures</a>
            <a href="#updates" className="pp-sidebar-button">8. Updates to This Privacy Policy</a>
            <a href="#contact-information" className="pp-sidebar-button">9. Contact Us</a>
            
            {/* <h1>Terms and Conditions</h1>
            <p>Here are the terms and conditions...</p> */}
        </div>
    );
}

export default PPSidebar;
