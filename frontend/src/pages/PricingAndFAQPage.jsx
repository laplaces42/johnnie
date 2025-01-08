import "../stylesheets/PricingAndFAQPage.css";
import { FAQBar } from "./FAQBar";

export function PricingAndFAQPage() {
  return (
    <div className="pricing-page">
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
    </div>
  );
}

export default PricingAndFAQPage;
