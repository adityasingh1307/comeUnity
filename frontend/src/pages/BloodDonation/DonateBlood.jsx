import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./DonateBlood.css";
import { useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
export default function DonateBlood() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    dob: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    available: true,
  });

  const calculateAge = (dob) => {
    if (!dob) return 0;

    const birth = new Date(dob);
    const diff = Date.now() - birth.getTime();

    return Math.floor(
      diff / (1000 * 60 * 60 * 24 * 365.25)
    );
  };

  const age = calculateAge(formData.dob);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "available"
          ? value === "true"
          : value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const payload = {
      ...formData,
      userId: localStorage.getItem("userId"),
    };

    const res = await axios.post(
     `${API}/api/blood/register`,
      payload
    );

    console.log(res.data);

    setShowPopup(true);

    setFormData({
      userId: localStorage.getItem("userId"),
      name: "",
      bloodGroup: "",
      hospital: "ComeUnity Blood Camp",
      dob: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      available: true,
    });
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
        "Something went wrong!"
    );
  }
};

  return (
    <>
      <Navbar />

      <div className="donate-page">
        <div className="donate-card">
          <h1>🩸 DONATE BLOOD</h1>

          <p>
            Your blood could be someone's second chance.
          </p>

          <div className="eligibility-box">
            <h2>Eligibility Checklist</h2>

            <ul>
              <li>✓ Age between 18 - 65 years</li>
              <li>✓ Weight above 50kg</li>
              <li>✓ Healthy and fit</li>
            </ul>
          </div>

          <form
            className="donor-form"
            onSubmit={handleSubmit}
          >
            {/* Row 1 */}

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />

            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">
                Blood Group
              </option>

              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>

            {/* Row 2 */}

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />

            {/* Row 3 */}

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />

            {/* Row 4 */}

            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              required
            />

            <select
              name="available"
              value={formData.available}
              onChange={handleChange}
            >
              <option value="true">
                Available to Donate
              </option>

              <option value="false">
                Not Available
              </option>
            </select>

            {/* Age Box */}

            {formData.dob && (
              <div className="age-box">
                Age: {age} years
              </div>
            )}

            {/* Submit */}

            <button
              type="submit"
              disabled={age < 18}
            >
              {age < 18
                ? "Must be 18+ to Donate"
                : "Register as Donor"}
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
  <div className="popup-overlay">

    <div className="popup">

      <h2>
        🩸 Registration Successful!
      </h2>

      <p>
        Thank you for joining the
        ComeUnity Blood Network.
      </p>

      <span>
        Your donation could save up to
        3 lives.
      </span>

      <div className="popup-buttons">

        <button
          className="popup-btn secondary"
          onClick={() =>
            setShowPopup(false)
          }
        >
          Stay Here
        </button>

        <button
          className="popup-btn"
          onClick={() =>
            navigate("/blood-network")
          }
        >
          Back to Dashboard
        </button>

      </div>

    </div>

  </div>
)}
      
    </>
  );
}