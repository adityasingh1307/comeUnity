import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";
const API = import.meta.env.VITE_API_URL;
export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [stats, setStats] = useState({
    foodDonations: 0,
    bloodDonations: 0,
    livesSaved: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem(
          "token"
        );

        const userId =
          localStorage.getItem("userId");

        // User Profile
        const userRes = await axios.get(
          `${API}/api/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Food Donations
        const foodRes = await axios.get(
          `${API}/api/food/my-donations`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Blood Donations
        const bloodRes = await axios.get(
        `${API}/api/blood-contributions/${userId}`
        );

        setUser(userRes.data);

        setStats({
          foodDonations:
            foodRes.data.donations.length ||
            0,

          bloodDonations:
            bloodRes.data.donations || 0,

          livesSaved:
            bloodRes.data.livesSaved || 0,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="dashboard-card">
          {/* HERO */}

          <div className="hero-section">
            <h1>
              Welcome Back,{" "}
              {user.firstName || "Hero"} 👋
            </h1>

            <p>
              You've helped save{" "}
              <strong>
                {stats.livesSaved}
              </strong>{" "}
              lives through ComeUnity.
            </p>
          </div>

                    {/* QUICK ACTIONS */}

          <h2 className="section-title">
            Quick Actions
          </h2>

          <div className="dashboard-grid">
            <button
              className="dash-btn"
              onClick={() =>
                navigate("/food-donation")
              }
            >
              <span>🍱</span>

              <h3>Food Hub</h3>

              <p>Donate meals</p>
            </button>

            <button
              className="dash-btn"
              onClick={() =>
                navigate("/blood-network")
              }
            >
              <span>🩸</span>

              <h3>Blood Network</h3>

              <p>Save lives</p>
            </button>

            <button
              className="dash-btn"
              onClick={() =>
                navigate("/volunteer")
              }
            >
              <span>🤝</span>

              <h3>Volunteer Hub</h3>

              <p>Help others</p>
            </button>

            <button
              className="dash-btn"
              onClick={() =>
                navigate("/ai-assistant")
              }
            >
              <span>🤖</span>

              <h3>AI Assistant</h3>

              <p>Ask anything</p>
            </button>
          </div>


          {/* STATS */}

          <div className="stats-row">
            <div className="stat-card">
              <h2>
                {stats.foodDonations}
              </h2>

              <p>Food Donations</p>
            </div>

            <div className="stat-card">
              <h2>
                {stats.bloodDonations}
              </h2>

              <p>Blood Donations</p>
            </div>

            <div className="stat-card">
              <h2>
                {stats.livesSaved}
              </h2>

              <p>Lives Saved</p>
            </div>
          </div>


     
          {/* PROFILE */}

          <button
            className="profile-btn"
            onClick={() =>
              navigate("/profile")
            }
          >
            👤 View My Profile
          </button>
        </div>
      </div>
    </>
  );
}