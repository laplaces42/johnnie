import "../stylesheets/AboutPage.css";
import { motion } from "framer-motion";

export function AboutPage() {
  return (
    <motion.div
      className="ab"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0, once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="ab1">
        <h1>About Johnnie</h1>
        <p>
          Johnnie is a startup designed to change the grant writing and grant
          searching process for nonprofits everywhere.
        </p>
        <div className="ab1-buttons">
          <a className="ab1-button" href="#mission">Our Mission</a>
          <a className="ab1-button" href="#founders">Meet the Founders</a>
          <a className="ab1-button" href="#story">Our Story</a>
          <a className="ab1-button" href="#contact">Contact Us</a>
        </div>
      </div>
      <div id="mission" className="ab2">
        <h2>Our Mission</h2>
        <p>
          At Johnnie, we aim to simplify the grant application process, empower
          organizations, and provide unparalleled access to professional
          grant-writing services.
        </p>
      </div>
      <div id="founders" className="ab3">
        <h2>Meet the Founders</h2>
        <div className="ab3-founders">
          <div className="ab3-founder1">
            <img
              className="headshot"
              src="/images/ishaan_headshot.jpg"
              alt=""
            />
            <h3>Ishaan Sinha</h3>
            <p>
              Ishaan is a Rice University undergraduate student studying
              Electrical and Computer Engineering. He is passionate about
              user-centered design and making sure that this service truly helps
              volunteer fire departments. Ishaan values the relationships and
              community so strong in this space to overcome key challenges.
            </p>
          </div>
          <div className="ab3-founder2">
            <img
              className="headshot"
              src="/images/laplace_headshot.jpg"
              alt=""
            />
            <h3>LaPlace Sallis IV</h3>
            <p>
              LaPlace is a Rice University undergraduate student currently
              studying Computer Science and Business. With a strong foundation
              in programming and machine learning, he is passionate about
              leveraging technology to drive innovation. At the heart of
              LaPlace's vision for the startup is the desire to empower
              volunteer fire departments through accessible, user-friendly
              tools.
            </p>
          </div>
        </div>
      </div>
      <div id="story" className="ab4">
        <h2>Our Story</h2>
        <p>
          Volunteer fire departments are the unsung heroes of our communities,
          dedicating their time and risking their lives to protect others. Yet,
          despite their critical role, many face significant challenges, from
          retention and recruitment struggles to technological gaps and limited
          funding.
        </p>
        <p>
          In 2024, Johnnie was born out of a mission to change this narrative.
          During in-depth conversations with volunteer fire departments, we
          identified that a lack of funding often compounds other issues they
          face. Without adequate resources, departments struggle to invest in
          recruitment, retention, and improved communication tools.
        </p>
        <p>
          At Johnnie, we are determined to tackle this funding gap head-on. By
          simplifying grant searches and streamlining the grant-writing process,
          we aim to empower fire departments with the tools they need to secure
          essential resources and continue their invaluable work.
        </p>
        <p>
          Our journey is just beginning, but our commitment to supporting these
          everyday heroes remains steadfast. Together, we can build stronger,
          better-equipped fire departments for the future.
        </p>
      </div>
      <div id="contact" className="ab5">
        <h2>Contact Us</h2>
        <p>
          Want to get in touch? Feel free to email us at team@johnniegrants.com!
        </p>
      </div>
    </motion.div>
  );
}

export default AboutPage;
