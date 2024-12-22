import MenuBar from "../components/MenuBar";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import "../stylesheets/LandingPage.css";

export function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className="lp">
      <MenuBar />
      <motion.div
        className="lp1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="lp-title">Johnnie</h1>
        <p className="lp-description">
          Redefining the business model of grantwriting for better business
          modeling.
        </p>
        <div className="lp1-buttons">
          <button onClick={() => navigate("/search")} className="lp1-button">Search for Grants</button>
          <button onClick={() => navigate("/hire")} className="lp1-button">Hire a Grant Writer</button>
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
            <h2 className="lp2-subtitle">Grant Search</h2>
            <p className="lp2-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae tempore id vitae aut odio explicabo exercitationem
              inventore placeat ratione? Totam excepturi adipisci officiis
              reprehenderit rerum!
            </p>
            <button onClick={() => navigate("/search")} className="lp2-button">Search for Grants</button>
          </div>
          <img className="lp2-image" src="/images/dollar_sign.pn" alt="" />
        </motion.div>
        <motion.div
          className="lp2-section2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.8 }}
        >
          <img className="lp2-image" src="/images/form.pn" alt="" />
          <div className="lp2-text">
            <h2 className="lp2-subtitle">Grant Writing</h2>
            <p className="lp2-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae tempore id vitae aut odio explicabo exercitationem
              inventore placeat ratione? Totam excepturi adipisci officiis
              reprehenderit rerum!
            </p>
            <button onClick={() => navigate("/hire")} className="lp2-button">Hire a Grant Writer</button>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="lp3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="lp3-subtitle">Testimonials</h2>
        <p>Coming Soon!</p>
      </motion.div>
    </div>
  );
}

export default LandingPage;
