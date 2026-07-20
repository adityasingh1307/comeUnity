import "./DonateFood.css";
import Select from "react-select";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
const DonateFood = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    category: "",
    isVeg: "",
    city: "",
    address: "",
    expiryTime: "",
    description: "",
    phone: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log("Form Data:", formData);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${API}/api/food/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      // Reset form
      setFormData({
        foodName: "",
        quantity: "",
        category: "",
        isVeg: "",
        city: "",
        address: "",
        expiryTime: "",
        description: "",
        phone: "",
      });

      setShowPopup(true);
    } catch (error) {
      console.log("ERROR:", error);

      console.log(
        "Backend Error:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
          "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />

      <div className="donate-page">
        <div className="donate-card">
          <h1>DONATE FOOD</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                type="text"
                name="foodName"
                placeholder="Food Name"
                value={formData.foodName}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Cooked">Cooked</option>
                <option value="Packaged">Packaged</option>
                <option value="Raw">Raw</option>
              </select>

              <select
                name="isVeg"
                value={formData.isVeg}
                onChange={handleChange}
                required
              >
                <option value="">Veg / Non-Veg</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="expiryTime"
                placeholder="Expiry Time (e.g. 8 PM)"
                value={formData.expiryTime}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="address"
              placeholder="Pickup Address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="donate-btn"
              disabled={loading}
            >
              {loading
                ? "Donating..."
                : "Donate Now"}
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <div className="popup-icon">
              🍱
            </div>

            <h2>
              Food Donated Successfully!
            </h2>

            <p>
              Thank you for helping your
              community.
              <br />
              Your donation has been
              submitted and is currently
              marked as <b>Submitted!</b>.
            </p>

            <button
              className="popup-btn"
              onClick={() =>
                navigate(
                  "/food-donation/my-donations"
                )
              }
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DonateFood;