import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">

      <div className="about-card">
        <h1>ABOUT</h1>

        <div className="about-content">
          <p>
            <span>ComeUnity</span> is a community-driven platform designed to
            connect people through acts of kindness and support.
          </p>

          <div className="about-section">
            <h3>🌍 Our Mission</h3>
            <p>
              To bridge the gap between those who need help and those willing
              to offer it through technology.
            </p>
          </div>

          <div className="about-section">
            <h3>❤️ What We Do</h3>
            <ul>
              <li>Blood Donation Network</li>
              <li>Food Donation Support</li>
              <li>Volunteer Opportunities</li>
              <li>AI Community Assistance</li>
            </ul>
          </div>

          <div className="about-section">
            <h3>✨ Why ComeUnity?</h3>
            <p>
              We believe every contribution matters. Together, we can create
              stronger and more connected communities.
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;