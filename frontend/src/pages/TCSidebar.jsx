import "../stylesheets/TCSidebar.css";

export function TCSidebar() {
    return (
        <div className="tc-sidebar">
            <a href="#overview" className="tc-sidebar-button">Overview</a>
            <a href="#services" className="tc-sidebar-button">Section 1 - Services</a>
            <a href="#eligibility" className="tc-sidebar-button">Section 2 - Eligibility</a>
            <a href="#general-conditions" className="tc-sidebar-button">Section 3 - General Conditions</a>
            <a href="#service-modifications" className="tc-sidebar-button">Section 4 - Service Modifications</a>
            <a href="#data-collection-and-privacy" className="tc-sidebar-button">Section 5 - Data Collection and Privacy</a>
            <a href="#accuracy-and-completeness" className="tc-sidebar-button">Section 6 - Accuracy and Completeness</a>
            <a href="#third-party-links-and-tools" className="tc-sidebar-button">Section 7 - Third-Party Links and Tools</a>
            <a href="#intellectual-property" className="tc-sidebar-button">Section 8 - Intellectual Property</a>
            <a href="#limitation-of-liability" className="tc-sidebar-button">Section 9 - Limitation of Liability</a>
            <a href="#indemnification" className="tc-sidebar-button">Section 10 - Indemnification</a>
            <a href="#termination" className="tc-sidebar-button">Section 11 - Termination</a>
            <a href="#governing-law" className="tc-sidebar-button">Section 12 - Governing Law</a>
            <a href="#contact-information" className="tc-sidebar-button">Section 13 - Contact Information</a>
            
            {/* <h1>Terms and Conditions</h1>
            <p>Here are the terms and conditions...</p> */}
        </div>
    );
}

export default TCSidebar;
