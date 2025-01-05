import "../stylesheets/ContactPage.css";

export function ContactPage() {
    return (
        <div className="cp">
            <div className="ab4">
                <h2>Get Started</h2>
                <p>
                    Need a grant application completed at an affordable price? Fill out this form for us to get to know you better and we will get in touch.
                </p>
                <div className="typeform-wrapper">
                    <iframe 
                        src="https://forms.fillout.com/t/4wjpvcz8xhus" 
                        className="typeform-iframe"
                        title="Typeform"
                    ></iframe>
                </div>
            </div>
            <div classname="ab7">
                <h4> Test</h4>
                <h4> Test</h4>
                <h4> Test</h4>
            </div>
        </div>
    );
}
export default ContactPage;
