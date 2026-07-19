import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";

import { useState, useEffect } from "react";
import axios from "axios";

import {
  FaEdit,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTint,
} from "react-icons/fa";

export default function Profile() {
  const [user, setUser] = useState(null);

  const [showModal, setShowModal] =
  useState(false);
  
  const [showSuccess, setShowSuccess] =
  useState(false);

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      bloodGroup: "",
    });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        await axios.put(
          "http://localhost:5000/api/users/profile",
          formData,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        setShowSuccess(true);

setTimeout(() => {
  setShowSuccess(false);
}, 2500);

        setShowModal(false);

        fetchProfile();
      } catch (error) {
        console.log(error);

        alert(
          "Failed to update profile."
        );
      }
    };

  if (!user) {
    return (
      <>
        <Navbar />

        <div className="profile-loading">
          Loading Profile...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="profile-container">
          {/* HEADER */}

          <div className="profile-header">
            <img
              src={
                user.profilePic ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="profile"
            />

            <div className="profile-details">
              <h1>
                {user.firstName}{" "}
                {user.lastName}
              </h1>

              <p>
                <FaEnvelope />
                {user.email}
              </p>

              <span>
                Member Since:
                {" "}
                {new Date(
                  user.createdAt
                ).toLocaleDateString()}
              </span>
            </div>

            <button
              className="edit-btn"
              onClick={() => {
                setFormData({
                  firstName:
                    user.firstName,

                  lastName:
                    user.lastName,

                  email:
                    user.email,

                  phone:
                    user.phone ||
                    "",

                  address:
                    user.address ||
                    "",

                  bloodGroup:
                    user.bloodGroup ||
                    "",
                });

                setShowModal(true);
              }}
            >
              <FaEdit />
              Edit Profile
            </button>
          </div>

          {/* STATS */}

          <div className="stats-grid">
            <div className="stat-card">
              <h2>
                {
                  user.foodDonations
                }
              </h2>

              <p>
                Food Donations
              </p>
            </div>

            <div className="stat-card">
              <h2>
                {
                  user.bloodDonations
                }
              </h2>

              <p>
                Blood Donations
              </p>
            </div>

            <div className="stat-card">
              <h2>
                {user.livesSaved}
              </h2>

              <p>
                Lives Saved
              </p>
            </div>
          </div>

          {/* ACCOUNT */}

          <div className="info-section">
            <h2>
              Account
              Information
            </h2>

            <div className="info-grid">
              <div className="info-box">
                <FaEnvelope />

                <span>
                  {user.email}
                </span>
              </div>

              <div className="info-box">
                <FaPhone />

                <span>
                  {user.phone ||
                    "Not Added"}
                </span>
              </div>

              <div className="info-box">
                <FaTint />

                <span>
                  {user.bloodGroup ||
                    "Not Added"}
                </span>
              </div>

              <div className="info-box">
                <FaMapMarkerAlt />

                <span>
                  {user.address ||
                    "Not Added"}
                </span>
              </div>
            </div>
          </div>

          {/* ACHIEVEMENTS */}

          <div className="achievement-section">
            <h2>
              Achievements
            </h2>

            <div className="badges">
              {user
                .achievements
                ?.length >
              0 ? (
                user.achievements.map(
                  (
                    achievement,
                    index
                  ) => (
                    <div
                      className="badge"
                      key={
                        index
                      }
                    >
                      {
                        achievement
                      }
                    </div>
                  )
                )
              ) : (
                <p>
                  No
                  achievements
                  yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>
              Edit Profile
            </h2>

            <input
              type="text"
              placeholder="First Name"
              value={
                formData.firstName
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  firstName:
                    e.target
                      .value,
                })
              }
            />

            <input
              type="text"
              placeholder="Last Name"
              value={
                formData.lastName
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  lastName:
                    e.target
                      .value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={
                formData.email
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email:
                    e.target
                      .value,
                })
              }
            />

            <input
              type="text"
              placeholder="Phone"
              value={
                formData.phone
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone:
                    e.target
                      .value,
                })
              }
            />

            <input
              type="text"
              placeholder="Address"
              value={
                formData.address
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  address:
                    e.target
                      .value,
                })
              }
            />

            <input
              type="text"
              placeholder="Blood Group"
              value={
                formData.bloodGroup
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bloodGroup:
                    e.target
                      .value,
                })
              }
            />

            <div className="modal-buttons">
              <button
                onClick={
                  handleUpdateProfile
                }
              >
                Save
              </button>

              <button
                onClick={() =>
                  setShowModal(
                    false
                  )
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccess && (
  <div className="success-popup">
    <div className="success-card">
      <div className="check-circle">
        ✓
      </div>

      <h2>
        Profile Updated!
      </h2>

      <p>
        Your information has been
        saved successfully.
      </p>
    </div>
  </div>
)}
    </>
  );
}