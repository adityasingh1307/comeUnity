import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./MyContributions.css";
const API = import.meta.env.VITE_API_URL;
export default function MyContributions() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
  donations: 0,
  livesSaved: 0,
  bloodGroup: "",
  points: 0,
});

  const [goal, setGoal] = useState({
  current: 0,
  target: 5,
});

  const [donations, setDonations] = useState([]);

  const achievements = [
  {
    title: "First Donation",
    icon: "🥇",
    unlocked: stats.donations >= 1,
  },

  {
    title: "Life Saver",
    icon: "❤️",
    unlocked: stats.donations >= 1,
  },

  {
    title: "3 Donations Club",
    icon: "🩸",
    unlocked: stats.donations >= 3,
  },

  {
    title: "Regular Donor",
    icon: "🏅",
    unlocked: stats.donations >= 5,
  },

  {
    title: "Blood Champion",
    icon: "👑",
    unlocked: stats.donations >= 10,
  },
];

  useEffect(() => {
  const fetchContributions = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await fetch(
  `${API}/api/blood-contributions/${userId}`
);

      const data = await response.json();

      setStats({
        donations: data.donations,
        livesSaved: data.livesSaved,
        bloodGroup: data.bloodGroup,
        points: data.points,
      });

      setGoal({
        current: data.donations,
        target: 5,
      });

      setDonations(
        data.donationsList.map((item, index) => ({
          id: index + 1,
          hospital: item.hospital,
          date: new Date(
            item.date
          ).toLocaleDateString(),

          points: item.points,
          status: item.status,
        }))
      );

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  fetchContributions();
}, []);
  return (
    <>
      <Navbar />

      <div className="contribution-page">
        <div className="contribution-card">

          <h1>🩸 My Blood Contributions</h1>

          <p className="subtitle">
            Every blood donation can save up to three lives.
          </p>

          {/* STATS */}

          <div className="stats-grid">
            <div className="stat-box">
              <h2>{stats.donations}</h2>
              <p>Total Donations</p>
            </div>

            <div className="stat-box">
              <h2>{stats.livesSaved}</h2>
              <p>Lives Saved</p>
            </div>

            <div className="stat-box">
              <h2>{stats.bloodGroup}</h2>
              <p>Blood Group</p>
            </div>

            <div className="stat-box">
              <h2>{stats.points}</h2>
              <p>Community Points</p>
            </div>
          </div>

          {/* GOAL */}

          <div className="goal-card">
            <div className="goal-header">
              <h2>🎯 Donation Goal</h2>
              <span>
                {goal.current}/{goal.target}
              </span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${(goal.current / goal.target) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* ACHIEVEMENTS */}

          <div className="achievement-section">
            <h2>🏆 Achievements</h2>

            <div className="achievement-grid">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className={`achievement-card ${
                    item.unlocked ? "" : "locked"
                  }`}
                >
                  <span className="achievement-icon">
                    {item.icon}
                  </span>

                  <h3>{item.title}</h3>

                  <p>
                    {item.unlocked
                      ? "Unlocked"

                      : "Locked"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DONATION HISTORY */}

          <div className="history-section">
            <h2>📜 Donation History</h2>

            {loading ? (
              <div className="loading">
                Loading donations...
              </div>
            ) : (
              donations.map((donation) => (
                <div
                  className="donation-card"
                  key={donation.id}
                >
                  <div className="donation-left">
                    <h3>🩸 Blood Donation</h3>

                    <p>
                      <strong>Hospital:</strong>{" "}
                      {donation.hospital}
                    </p>

                    <p>
                      <strong>Date:</strong>{" "}
                      {donation.date}
                    </p>
                  </div>

                  <div className="donation-right">
                    <span className="completed">
                      ✅ {donation.status}
                    </span>

                    <h3>+{donation.points} pts</h3>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* SUMMARY */}
{/* SUMMARY */}

<div className="summary-section">

  <div className="summary-card">
    <h2>⭐ Points Summary</h2>

    {donations.length > 0 ? (
      donations.map((donation) => (
        <div
          className="summary-row"
          key={donation.id}
        >
          <span>
            Donation #{donation.id}
          </span>

          <span>
            +{donation.points}
          </span>
        </div>
      ))
    ) : (
      <div className="summary-row">
        <span>No donations yet</span>
        <span>0 pts</span>
      </div>
    )}

    <hr />

    <div className="summary-total">
      <span>Total Points</span>
      <span>{stats.points}</span>
    </div>
  </div>

  <div className="next-badge-card">
    <h2>🎖 Next Achievement</h2>

    <h3>
      {stats.donations < 5
        ? "Regular Donor"
        : stats.donations < 10
        ? "Blood Champion"
        : "All Achievements Unlocked!"}
    </h3>

    <p>
      {stats.donations < 5
        ? `Donate ${
            5 - stats.donations
          } more time(s) to unlock this badge.`
        : stats.donations < 10
        ? `Donate ${
            10 - stats.donations
          } more time(s) to become a Blood Champion.`
        : "You have unlocked every blood donation achievement!"}
    </p>

    <div className="progress-bar small">
      <div
        className="progress-fill"
        style={{
          width: `${Math.min(
            (goal.current / goal.target) * 100,
            100
          )}%`,
        }}
      />
    </div>
  </div>

</div>
          {/* THANK YOU */}

          <div className="thankyou-card">
            <h2>❤️ Thank You!</h2>

            <p>
              Your generosity has already helped save
              approximately
              <strong> {stats.livesSaved} lives</strong>.
            </p>

            <p>
              Every donation gives hope to patients in
              need and makes our community stronger.
            </p>
          </div>

          {/* MOTIVATION */}

          <div className="quote-card">
            <h2>💬 Motivation</h2>

            <p>
              "A single pint of blood can save multiple
              lives. Thank you for being someone's hero."
            </p>
          </div>

        </div>
      </div>
    </>
  );
}