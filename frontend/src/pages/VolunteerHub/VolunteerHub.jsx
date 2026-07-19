import Navbar from "../../components/Navbar/Navbar";
import "./VolunteerHub.css";

export default function VolunteerHub() {
  return (
    <>
      <Navbar />

      <div className="volunteer-page">
        <div className="volunteer-card">
          <h1>VOLUNTEER HUB</h1>

          <p className="volunteer-subtitle">
            Building India's largest community volunteering
            network—one act of kindness at a time.
          </p>

          <div className="heart-icon">❤️</div>

          <div className="volunteer-grid">

            {/* Upcoming Events */}

            <div className="flip-card">
              <div className="flip-inner">

                <div className="flip-front">
                  <h2>📅</h2>

                  <h3>Upcoming Events</h3>

                  <span>Coming Soon</span>
                </div>

                <div className="flip-back">
                  <h3>🚀 UPCOMING EVENTS</h3>

                  <ul>
                    <li>• Community Cleanups</li>
                    <li>• Tree Plantation Drives</li>
                    <li>• Blood Donation Camps</li>
                    <li>• Food Distribution Events</li>
                  </ul>

                  <p>
                    "Small actions create big change."
                  </p>
                </div>

              </div>
            </div>

            {/* NGO Drives */}

            <div className="flip-card">
              <div className="flip-inner">

                <div className="flip-front">
                  <h2>🤝</h2>

                  <h3>NGO Drives</h3>

                  <span>Coming Soon</span>
                </div>

                <div className="flip-back">
                  <h3>🌍 NGO DRIVES</h3>

                  <ul>
                    <li>• Partner NGO Campaigns</li>
                    <li>• Disaster Relief Missions</li>
                    <li>• Fundraising Events</li>
                    <li>• Volunteer Opportunities</li>
                  </ul>

                  <p>
                    "Communities grow when people come together."
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Join Event */}

          <div className="large-card">
            <h2>✨ JOIN EVENT</h2>

            <p>Coming Soon</p>

            <div className="features">
              <div>✓ One-click Registrations</div>
              <div>✓ Certificates</div>
              <div>✓ Attendance Tracking</div>
              <div>✓ Volunteer Leaderboards</div>
            </div>

            <span>
              Expected Release: CommunityOS v2.0
            </span>
          </div>

          {/* Vision Section */}

          <div className="vision-section">
            <h2>OUR VISION</h2>

            <div className="vision-grid">

              <div>
                <h3>10,000+</h3>
                <p>Volunteers</p>
              </div>

              <div>
                <h3>500+</h3>
                <p>Events</p>
              </div>

              <div>
                <h3>100+</h3>
                <p>Partner NGOs</p>
              </div>

            </div>

            <p className="vision-quote">
              "Together, we don't just build communities—
              we become one."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}