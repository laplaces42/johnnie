import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import "../stylesheets/LandingPage.css";

export function LandingPage() {
    const navigate = useNavigate();
    const testimonials = [
      {
          text: "Johnnie helped us secure the funding we needed to keep our programs running.",
          person: "Nonprofit Organization A"
      },
      {
          text: "The grant writing services provided by Johnnie were top-notch and very effective.",
          person: "Nonprofit Organization B"
      },
      {
          text: "Thanks to Johnnie, we were able to expand our outreach and impact more lives.",
          person: "Nonprofit Organization C"
      }
  ];
  return (
    <div className="lp">
      <motion.div
        className="lp1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="lp-title">Grantwriting Reimagined.</h1>
        <p className="lp-description">
          Grantwriting shouldn't be a gamble. Let's make finding more funding sustainable and accessible.
        </p>
        <div className="lp1-buttons">
          <button onClick={() => navigate("/contact")} className="lp1-button">Get Started</button>
          {/* <button onClick={() => navigate("/search")} className="lp1-button">Search for Grants</button>
          <button onClick={() => navigate("/hire")} className="lp1-button">Hire a Grant Writer</button> */}
        </div>
      </motion.div>

      <div className="lp2">
        <motion.div
          className="lp2-section1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="lp2-text">
            <h2 className="lp2-subtitle">About Johnnie</h2>
            <p className="lp2-description">
              Learn more about Johnnie's story and why we do what we do.
            </p>
            <button onClick={() => navigate("/about")} className="lp2-button">About Johnnie</button>
          </div>
          {/* <img className="lp2-image" src="/images/dollar_sign.pn" alt="" /> */}
          <div className="lp2-text">
            <h2 className="lp2-subtitle">Learn More</h2>
            <p className="lp2-description">
              Have questions? Want a price estimate for your nonprofit? Click below to get all your questions answered.
            </p>
            <button onClick={() => navigate("/pricing")} className="lp2-button">Pricing and FAQ</button>
          </div>
        </motion.div>
        {/* <motion.div
          className="lp2-section2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.8 }}
        >
          <img className="lp2-image" src="/images/form.pn" alt="" />
          <div className="lp2-text">
            <h2 className="lp2-subtitle">Learn More</h2>
            <p className="lp2-description">
              Have questions? Want a price estimate for your nonprofit? Click below to get all your questions answered.
            </p>
            <button onClick={() => navigate("/pricing")} className="lp2-button">Pricing and FAQ</button>
          </div>
        </motion.div> */}
      </div>
      <motion.div
        className="lp3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="lp3-subtitle">Testimonials</h2>
        <div className="lp3-testimonials">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <p className="testimonial-person">- {testimonial.person}</p>
                        </div>
                    ))}
                </div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
