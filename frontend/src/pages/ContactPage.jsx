import "../stylesheets/ContactPage.css";

export function ContactPage() {
  return (
    <div className="cp">
      <h2 className="cp-title">Get Started</h2>
      <p className="cp-description">
        Need a grant application completed at an affordable price? Fill out this
        form for us to get to know you better and we will get in touch.
      </p>
      <div className="typeform-wrapper">
        <iframe
          src="https://forms.fillout.com/t/4wjpvcz8xhus"
          className="typeform-iframe"
          title="Typeform"
        ></iframe>
      </div>
    </div>
  );
}
export default ContactPage;
