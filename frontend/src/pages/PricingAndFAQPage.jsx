import "../stylesheets/PricingAndFAQPage.css";
import { FAQBar } from "./FAQBar";

export function PricingAndFAQPage() {
  return (
    <div className="pricing-page">
      <div className="cp">
        <h2>Pricing</h2>
        <p>
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
        <h4> 2</h4>
      </div>
      <FAQBar />
    </div>
  );
}

export default PricingAndFAQPage;
