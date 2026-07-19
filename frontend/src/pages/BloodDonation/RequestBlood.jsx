import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./RequestBlood.css";

export default function RequestBlood() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [donors, setDonors] = useState([]);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const searchDonors = async () => {
    if (!bloodGroup) {
      alert("Please select a blood group.");
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const res = await axios.get(
        "http://localhost:5000/api/blood/search",
        {
          params: {
            bloodGroup,
            city,
          },
        }
      );

      setDonors(res.data.donors || []);
    } catch (err) {
      console.log(err);
      alert("Unable to fetch donors.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="request-page">
        <div className="request-card">

          <div className="request-hero">
            <h1>🩸 Request Blood</h1>
            <p>Find verified blood donors in your city instantly.</p>
          </div>

          <div className="request-emergency-banner">
            <span>🚨</span>

            <div>
              <h3>Emergency Notice</h3>

              <p>
                If this is a medical emergency,
                please contact the nearest hospital while searching
                for donors.
              </p>
            </div>
          </div>

          <div className="request-search-card">

            <div className="request-field">
              <label>Blood Group</label>

              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            <div className="request-field">
              <label>City</label>

              <input
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <button
              className="request-search-btn"
              onClick={searchDonors}
            >
              🔎 Search
            </button>

          </div>

          {loading && (

            <div className="request-loading">

              <div className="request-loader"></div>

              <p>Searching verified donors...</p>

            </div>

          )}

          {!loading && searched && (

            <>

              <div className="request-results-header">

                <h2>Available Donors</h2>

                <span>{donors.length} Found</span>

              </div>

              {donors.length === 0 ? (

                <div className="request-empty-state">

                  <div className="request-empty-heart">
                    ❤️
                  </div>

                  <h2>No Donors Found</h2>

                  <p>
                    Try another city or blood group.
                  </p>

                </div>

              ) : (

                <div className="request-donor-grid">

                  {donors.map((donor) => (

                    <div
                      className="request-donor-card"
                      key={donor._id}
                    >

                      <div className="request-blood-tag">
                        🩸 {donor.bloodGroup}
                      </div>

                      <div className="request-status">
                        🟢 Available
                      </div>

                      <div className="request-avatar">
                        👤
                      </div>

                      <h3>{donor.name}</h3>

                      <div className="request-info">

                        <p>
                          📍 {donor.city}, {donor.state}
                        </p>

                        <p>
                          📞 {donor.phone}
                        </p>

                        <p>
                          ✉️ {donor.email}
                        </p>

                      </div>

                      <button
                        className="request-btn"
                        onClick={() =>
                          setSelectedDonor(donor)
                        }
                      >
                        ❤️ Request Blood
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </>

          )}

        </div>
      </div>

      {selectedDonor && (

        <div className="request-popup-overlay">

          <div className="request-popup">

            <h2>❤️ Blood Request</h2>

            <p>
              Contact the donor using the details below.
            </p>

            <div className="request-popup-info">

              <h3>{selectedDonor.name}</h3>

              <p>🩸 {selectedDonor.bloodGroup}</p>

              <p>📞 {selectedDonor.phone}</p>

              <p>✉️ {selectedDonor.email}</p>

              <p>
                📍 {selectedDonor.city}, {selectedDonor.state}
              </p>

            </div>

            <div className="request-popup-note">

              Please contact the donor respectfully
              and only for a genuine medical emergency.

            </div>

            <button
              className="request-close-btn"
              onClick={() => setSelectedDonor(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}
    </>
  );
}