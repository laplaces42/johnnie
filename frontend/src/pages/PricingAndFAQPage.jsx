import "../stylesheets/PricingAndFAQPage.css";

export function PricingAndFAQPage() {
  return (
    <div className="pricing-page">
      <div className="pricing-hero">
        <h1>Pricing Plans</h1>
        <p>
          Choose the plan that suits your organization's needs and take the
          first step toward securing essential funding.
        </p>
      </div>
      <div className="pricing-plans">
        <div className="plan">
          <h2>Basic</h2>
          <p>Perfect for small organizations just getting started.</p>
          <ul>
            <li>Access to grant database</li>
            <li>Email support</li>
          </ul>
          <p className="price">$29/month</p>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>Ideal for growing organizations with more complex needs.</p>
          <ul>
            <li>Priority support</li>
            <li>Grant writing templates</li>
            <li>1-on-1 consulting</li>
          </ul>
          <p className="price">$99/month</p>
        </div>
        <div className="plan">
          <h2>Enterprise</h2>
          <p>Tailored solutions for large-scale operations.</p>
          <ul>
            <li>Dedicated account manager</li>
            <li>Custom integrations</li>
            <li>Team training sessions</li>
          </ul>
          <p className="price">Contact us</p>
        </div>
      </div>
      <div className="faq-hero">
        <h1>Frequently Asked Questions</h1>
        <p>
          Have questions? We have answers. If you can't find what you're
          looking for, feel free to contact us.
        </p>
      </div>
      <div className="faq-section">
        <div className="faq-item">
          <h3>What is included in the Basic plan?</h3>
          <p>The Basic plan includes access to our grant database and email support.</p>
        </div>
        <div className="faq-item">
          <h3>Can I upgrade my plan later?</h3>
          <p>
            Yes, you can upgrade your plan at any time. Just reach out to our
            support team.
          </p>
        </div>
        <div className="faq-item">
          <h3>Is there a free trial?</h3>
          <p>
            Absolutely! We offer a 14-day free trial for all new users to
            explore our features.
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default PricingAndFAQPage;
