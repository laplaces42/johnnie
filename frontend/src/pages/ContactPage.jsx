import "../stylesheets/ContactPage.css";
import { motion } from "framer-motion";

export function ContactPage() {
  return (
    <motion.div
      className="cp"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0, once: true }}
      transition={{ duration: 0.8 }}
    >
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
    </motion.div>
  );
}
export default ContactPage;
