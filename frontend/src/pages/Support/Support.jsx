import "./Support.css";
import Navbar from "../../components/Navbar/Navbar";

const Support = () => {
  return (
    <>
      <Navbar />

      <div className="support-container">
        <div className="support-card">
          <h1>SUPPORT</h1>

          <p className="support-quote">
            "Together, we can make communities stronger."
          </p>

          <div className="support-section">
            <h3>📧 Contact Us</h3>
            <p>Email: support@comeunity.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          <div className="support-section">
            <h3>❓ Need Help?</h3>
            <p>
              Facing issues with donations, volunteering, or your account?
              Our support team is here to help you 24/7.
            </p>
          </div>

          <div className="support-section">
            <h3>🐛 Report an Issue</h3>
            <p>
              Found a bug or experiencing technical difficulties? Let us know
              and we'll work to fix it as quickly as possible.
            </p>
          </div>

          <div className="support-section">
            <h3>🤝 Contribute</h3>
            <ul>
              <li>Become a Volunteer</li>
              <li>Partner with NGOs</li>
              <li>Donate Resources</li>
              <li>Spread Awareness</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;