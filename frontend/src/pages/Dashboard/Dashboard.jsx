import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="dashboard-card">

          <h1>USER DASHBOARD</h1>

          <div className="dashboard-grid">

            <button
              className="dash-btn"
              onClick={() => navigate("/food-donation")}
            >
              🍱 Food Donations
            </button>

            <button
              className="dash-btn"
              onClick={() => navigate("/blood-network")}
            >
              🩸 Blood Network
            </button>

            <button
              className="dash-btn"
              onClick={() => navigate("/volunteer")}
            >
              🤝 Volunteer Hub
            </button>

            <button
              className="dash-btn"
              onClick={() => navigate("/ai-assistant")}
            >
              🤖 AI Assistant
            </button>

          </div>

          <button
            className="profile-btn"
            onClick={() => navigate("/profile")}
          >
            👤 My Profile
          </button>

        </div>
      </div>
    </>
  );
}

