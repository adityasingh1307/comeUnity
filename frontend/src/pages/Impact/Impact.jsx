import "./Impact.css";
import Navbar from "../../components/Navbar/Navbar";

const Impact = () => {
  return (
    <>
      <Navbar />

      <div className="impact-container">
        <div className="impact-card">
          <h1>IMPACT</h1>

          <p className="quote">
            "Every act of kindness creates a ripple effect."
          </p>

          <div className="stats">
            <div className="stat-box">
              <h2>100+</h2>
              <p>Volunteers</p>
            </div>

            <div className="stat-box">
              <h2>50+</h2>
              <p>Donations</p>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <p>Support</p>
            </div>
          </div>

          <div className="impact-section">
            <h3>🌍 Community Impact</h3>
            <p>
              Helping communities connect and support one another through
              technology.
            </p>
          </div>

          <div className="impact-section">
            <h3>❤️ Lives Saved</h3>
            <p>
              Facilitating blood donations and emergency assistance for those
              in need.
            </p>
          </div>

          <div className="impact-section">
            <h3>🤝 Volunteer Network</h3>
            <p>
              Empowering individuals to contribute their time and skills for
              a better tomorrow.
            </p>
          </div>

          <div className="impact-section">
            <h3>🚀 Future Goals</h3>
            <ul>
              <li>Expand to 1000+ users</li>
              <li>Partner with NGOs</li>
              <li>Add Disaster Management</li>
              <li>Launch Mobile App</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;