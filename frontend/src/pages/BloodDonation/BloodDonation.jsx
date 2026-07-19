import Navbar from "../../components/Navbar/Navbar";
import "./BloodDonation.css";
import { useNavigate } from "react-router-dom";

export default function BloodDonation() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="blood-page">
        <div className="blood-card">
          <h1>🩸 BLOOD NETWORK</h1>

          <p className="blood-subtitle">
            One donation can save up to three lives.
          </p>

          {/* Stats */}

          <div className="stats-container">
            <div className="stat-box">
              <h2>38,000+</h2>
              <p>People Need Blood Daily</p>
            </div>

            <div className="stat-box">
              <h2>1%</h2>
              <p>Regular Blood Donors in India</p>
            </div>

            <div className="stat-box">
              <h2>3 Lives</h2>
              <p>Saved By One Donation</p>
            </div>
          </div>

          {/* Motivation */}

          <div className="motivation-card">
            <h2>Why Donate Blood?</h2>

            <p>
              Every 2 seconds, someone somewhere needs blood. A single
              donation can save up to three lives. Your contribution
              could mean another birthday, another graduation, or
              another chance at life.
            </p>

            <span>
              “Become someone's hero today.”
            </span>
          </div>

          {/* Dashboard */}

          <div className="blood-grid">
            <button
              className="blood-btn"
              onClick={() =>
                navigate("/donate-blood")
              }
            >
              <div className="icon">
                🩸
              </div>

              <span>
                Available Donors
              </span>
            </button>

            <button
              className="blood-btn"
              onClick={() =>
                navigate(
                  "/request-blood"
                )
              }
            >
              <div className="icon">
                🔍
              </div>

              <span>
                Search by Blood Group
              </span>
            </button>

            <button
              className="blood-btn"
              onClick={() =>
                navigate(
                  "/nearby-hospitals"
                )
              }
            >
              <div className="icon">
                🏥
              </div>

              <span>
                Nearby Hospitals
              </span>
            </button>

            <button
              className="blood-btn"
              onClick={() =>
                navigate(
                  "/my-contributions"
                )
              }
            >
              <div className="icon">
                ❤️
              </div>

              <span>
                My Contributions
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}