import "../stylesheets/PricingAndFAQPage.css";
import { motion } from "framer-motion";
import { FAQBar } from "./FAQBar";

export function PricingAndFAQPage() {
  return (
    <motion.div
      className="pricing-page"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0, once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="fp">
        <h2 className="pricing-title">Pricing</h2>
        <p className="pricing-description">
          Our prices varies on depending on the funding opportunity. To get an
          accurate estimate for our pricing, complete this quick quote
          estimator!
        </p>
        <div className="typeform-wrapper">
          <iframe
            src="https://maxzge0ttlh.typeform.com/to/sehN5JTT"
            className="typeform-iframe"
            title="Typeform"
          ></iframe>
        </div>
      </div>
      <FAQBar />
    </motion.div>
  );
}

export default PricingAndFAQPage;
