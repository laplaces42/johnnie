import MenuBar from "../components/MenuBar";
import "../stylesheets/LandingPage.css";

export function LandingPage() {
  return (
    <div className="lp">
      <MenuBar />
      <div className="lp1">
        <h1 className="lp-title">Johnnie</h1>
        <p className="lp-description">
          Redefining the business model of grantwriting for better business
          modeling.
        </p>
        <div className="lp1-buttons">
          <button className="lp1-button">Search for Grants</button>
          <button className="lp1-button">Hire a Grant Writer</button>
        </div>
      </div>
      <div className="lp2">
        <div className="lp2-section1">
          <div>
            <h2 className="lp2-subtitle">Grant Search</h2>
            <p className="lp2-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae tempore id vitae aut odio explicabo exercitationem
              inventore placeat ratione? Totam excepturi adipisci officiis
              reprehenderit rerum!
            </p>
          </div>
          <img className="lp2-image" src="/images/dollar_sign.png" alt="" />
        </div>
        <div className="lp2-section2">
          <img className="lp2-image" src="/images/form.png" alt="" />
          <div>
            <h2 className="lp2-subtitle">Grant Writing</h2>
            <p className="lp2-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae tempore id vitae aut odio explicabo exercitationem
              inventore placeat ratione? Totam excepturi adipisci officiis
              reprehenderit rerum!
            </p>
          </div>
        </div>
      </div>
      <div className="lp3">
        <h2 className="lp3-subtitle">Testimonials</h2>
        <p>Coming Soon!</p>
      </div>
    </div>
  );
}

export default LandingPage;
