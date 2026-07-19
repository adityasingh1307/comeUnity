import "./Activities.css";
import Navbar from "../../components/Navbar/Navbar";

const Activities = () => {
  return (
    <>
      <Navbar />

      <div className="activities-container">
        <div className="activities-card">
          <h1>ACTIVITIES</h1>

          <p className="activities-quote">
            "Small actions, when multiplied by millions of people, can transform the world."
          </p>

          <div className="activity">
            <h3>🩸 Blood Donation Camp</h3>
            <p>Successfully organized a blood donation drive with 15 donors.</p>
            <span>July 17, 2026</span>
          </div>

          <div className="activity">
            <h3>🍲 Food Donation Drive</h3>
            <p>Distributed meals to over 50 families across the city.</p>
            <span>July 16, 2026</span>
          </div>

          <div className="activity">
            <h3>🤝 Volunteer Meetup</h3>
            <p>20 volunteers participated in a community cleanliness campaign.</p>
            <span>July 15, 2026</span>
          </div>

          <div className="activity">
            <h3>🚀 Coming Soon</h3>
            <p>
              Real-time activity feeds, analytics, and live community updates
              will be available in future versions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;