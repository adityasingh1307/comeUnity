import "./Register.css";

import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const API = import.meta.env.VITE_API_URL;
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCalendar,
  FaGoogle,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    activityArea: "",
    skills: [],
    availableHours: "",
  });

  const [acceptedTerms, setAcceptedTerms] =
  useState(false);

const [showSuccessModal, setShowSuccessModal] =
  useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      if (!acceptedTerms) {
  alert(
    "Please accept the Terms & Conditions first."
  );
  return;
}
      if (
        formData.password !==
        formData.confirmPassword
      ) {
        alert("Passwords don't match!");
        return;
      }

     const response = await axios.post(
  `${API}/api/auth/register`,
  formData
);

      setShowSuccessModal(true);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="register-page">
        <div className="register-card">
          <h1>Join the ComeUnity</h1>

          <p>
            Create an account to start making
            your mark.
          </p>

          <div className="form-grid">
            {/* First Name */}

            <div className="input-group">
              <label>First Name</label>

              <div className="input-box">
                <FaUser />

                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="eg: Sarah"
                />
              </div>
            </div>

            {/* Last Name */}

            <div className="input-group">
              <label>Last Name</label>

              <div className="input-box">
                <FaUser />

                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="eg: Volunteer"
                />
              </div>
            </div>

            {/* Email */}

            <div className="input-group">
              <label>Email Address</label>

              <div className="input-box">
                <FaEnvelope />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="eg: Sarah@example.com"
                />
              </div>
            </div>

            

            

            {/* Password */}

<div className="input-group">
  <label>Create Password</label>

  <div className="input-box">
    <FaLock />

    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Create Password"
    />
  </div>
</div>
          {/* Confirm Password */}

<div className="input-group">
  <label>Confirm Password</label>

  <div className="input-box">
    <FaLock />

    <input
      type="password"
      name="confirmPassword"
      value={formData.confirmPassword}
      onChange={handleChange}
      disabled={!formData.password}
      placeholder={
        formData.password
          ? "Confirm Password"
          : "Enter password first"
      }
      className={
        !formData.password
          ? "cursor-not-allowed opacity-50"
          : ""
      }
    />
  </div>
</div>
            {/* Activity Area */}

            <div className="input-group">
              <label>
                Preferred Activity Area
              </label>

              <select
                name="activityArea"
                value={formData.activityArea}
                onChange={handleChange}
              >
                <option value="">
                  Select Activity
                </option>

                <option>
                  Blood Donation
                </option>

                <option>
                  Volunteer Hub
                </option>

                <option>
                  Food Donation
                </option>

                <option>
                  Emergency Assistance
                </option>
              </select>
            </div>

            {/* Birthday */}

            <div className="input-group">
              <label>Birthday</label>

              <div className="input-box">
                <FaCalendar />

                <input
                  type="date"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                />
              </div>
            </div>

          

            {/* Available Hours */}

            <div className="input-group">
              <label>
                Available Hours per Week
              </label>

              <div className="input-box">
                <input
                  type="number"
                  name="availableHours"
                  value={
                    formData.availableHours
                  }
                  onChange={handleChange}
                  placeholder="10"
                />
              </div>
            </div>
          </div>

          {/* Terms */}

          <div className="terms">
            <input
  type="checkbox"
  checked={acceptedTerms}
  onChange={() =>
    setAcceptedTerms(!acceptedTerms)
  }
/>

            <span>
              I agree to Terms &
              Conditions and Privacy
              Policy.
            </span>
          </div>

          {/* Register Button */}

          <button
            className="create-btn"
            onClick={handleRegister}
            disabled={!acceptedTerms}
          >
            CREATE ACCOUNT
          </button>

          {/* Social Buttons */}

          <div className="socials">
            <button
              onClick={() =>
                alert(
                  "Google Login Coming Soon!"
                )
              }
            >
              <FaGoogle />
            </button>

            <button
              onClick={() =>
                alert(
                  "Facebook Login Coming Soon!"
                )
              }
            >
              <FaFacebook />
            </button>

            <button
              onClick={() =>
                alert(
                  "Twitter Login Coming Soon!"
                )
              }
            >
              <FaTwitter />
            </button>
          </div>

          {/* Login Link */}

          <div className="login-link">
            Already registered?

            <span
              onClick={() =>
                navigate("/login")
              }
            >
              {" "}
              [Login Here]
            </span>
          </div>

          {/* Footer */}

          <div className="footer">
            ©2026 Community Care |
            Privacy Policy |
            Terms of Service
          </div>
        </div>
      </div>

      {showSuccessModal && (
  <div className="modal-overlay">
    <div className="success-modal">

      <div className="success-icon">
        🎉
      </div>

      <h2>Account Created!</h2>

      <p>
        Welcome to ComeUnity.
        Your journey to helping others
        starts today.
      </p>

      <button
        onClick={() => {
          setShowSuccessModal(false);
          navigate("/login");
        }}
      >
        Continue to Login
      </button>

    </div>
  </div>
)}
    </>
  );
};

export default Register;