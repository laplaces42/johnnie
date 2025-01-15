import PPSidebar from "./PPSidebar";
import "../stylesheets/PrivacyPolicy.css";

export function PrivacyPolicy() {
  return (
    <div className="pp-group">
      <PPSidebar />
      <div className="pp">
        <h1>PRIVACY POLICY</h1>
        <p>
          Last Updated: January 13, 2025
          <br /> This Privacy Policy for Johnnie USA Corporation ("we," "us," or
          "our") outlines how we collect, use, store, and share your personal
          information when you interact with our services. By engaging with our
          services, you agree to the practices described herein.
        </p>
        <h2 id="information-we-collect">1. Information We Collect</h2>
        <p>
          <ol type="a">
            <b>
              <li>Personal Information You Provide to Us</li>
            </b>
            We collect personal information that you voluntarily provide when
            you:
            <ul>
              <li>
                Interact with our services, such as grant writing assistance for
                volunteer fire departments.
              </li>
              <li>Register for programs, workshops, or other activities.</li>
              <li>Communicate with us via email, phone, or in person.</li>
            </ul>
            <br />
            The personsal information collected may include:
            <ul>
              <li>Names, addresses, and contact details.</li>
              <li>Employment or volunteer organization information.</li>
              <li>Grant application and related documentation.</li>
            </ul>
            <br />
            <b>
              <li>Automatically Collected Information</li>
            </b>
            We may collect certain information automatically when you use our
            services:
            <ul>
              <li>
                Device information (e.g., IP address, browser type, operating
                system).
              </li>
              <li>
                Usage data, including log files and timestamps of service
                interactions.
              </li>
              <li>Location data, if enabled on your device.</li>
            </ul>
          </ol>
        </p>
        <h2 id="how-we-use-your-information">2. How We Use Your Information</h2>
        <p>
          We use your information to:
          <ul>
            <li>
              Provide grant-writing services and support to volunteer fire
              departments.
            </li>
            <li>
              Improve the effectiveness of our services and training programs.
            </li>
            <li>Comply with legal and regulatory requirements.</li>
            <li>
              Communicate updates, opportunities, and service-related
              information.
            </li>
          </ul>
        </p>
        <h2 id="sharing-your-information">3. Sharing Your Information</h2>
        <p>
          We may share your information:
          <ul>
            <li>
              <b>With your consent:</b> When you explicitly authorize us to
              share your information.
            </li>
            <li>
              <b>With third parties:</b> Such as grant funding organizations,
              provided it is necessary for fulfilling grant requirements.
            </li>
            <li>
              <b>As required by law:</b> To comply with legal obligations or to
              protect our rights and those of our partners.
            </li>
            <li>
              <b>With trusted service providers:</b> Who assist us in service
              delivery under strict confidentiality agreements.
            </li>
          </ul>
        </p>
        <h2 id="data-storage-and-retention">4. Data Storage and Retention</h2>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy unless otherwise
          required by law. Secure measures are in place to protect your data,
          but no electronic storage system can guarantee 100% security.
        </p>
        <h2 id="your-privacy-rights">5. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have the following rights
          regarding your personal information:
          <ul>
            <li>
              <b>Access:</b> Request a copy of your data.
            </li>
            <li>
              <b>Correction:</b> Rectify inaccurate or incomplete information.
            </li>
            <li>
              <b>Deletion:</b> Request the deletion of your personal data.
            </li>
            <li>
              <b>Restriction:</b> Limit processing of your personal data.
            </li>
            <li>
              <b>Objection:</b> Withdraw consent or object to certain data uses.
            </li>
          </ul>
          To exercise your rights, contact us at <b>team@johnniegrants.com.</b>
        </p>
        <h2 id="minors">6. Minors</h2>
        <p>
          Our services are not directed at individuals under 18. We do not
          knowingly collect information from minors. If we discover data from a
          minor, we will delete it promptly.
        </p>
        <h2 id="security-measures">7. Security Measures</h2>
        <p>
          We implement organizational and technical safeguards to protect your
          information. However, we cannot guarantee complete security against
          unauthorized access or breaches.
        </p>
        <h2 id="updates">8. Updates To This Privacy Policy</h2>
        <p>
          We may revise this Privacy Policy periodically. The updated version
          will be indicated by the "Last Updated" date. Significant changes will
          be communicated through appropriate channels.
        </p>
        <h2 id="contact-information">9. Contact Us</h2>
        <p>
          For questions or concerns about this Privacy Policy or data practices,
          contact us at:
          <br />
          Johnnie USA Corporation
          <br />
          team@johnniegrants.com
          <br />
          6340 Main Street, Houston, TX, 77005
          <br />
          503-433-2285
        </p>
        <br />
        <br />
        This policy reflects our commitment to transparency and responsible data
        practices. By using our services, you accept the terms of this Privacy
        Policy.
      </div>
    </div>
  );
}

export default PrivacyPolicy;
