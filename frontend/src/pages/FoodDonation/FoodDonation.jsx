import "./FoodDonation.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

const FoodDonation = () => {
  const navigate = useNavigate();
const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar />

      <div className="food-page">
        <div className="food-card">
          <h1>FOOD DASHBOARD</h1>

          <div className="food-grid">
            <button
              className="food-btn"
              onClick={() => navigate("/food-donation/donate")}
            >
              🍱 Donate Food
            </button>

            <button
              className="food-btn"
              onClick={() => navigate("/food-donation/my-donations")}
            >
              📦 My Donations
            </button>

            <button
              className="food-btn"
              onClick={() => navigate("/food-donation/requests")}
            >
              🍽 Food Requests
            </button>

            <button
              className="food-btn"
              onClick={() => navigate("/food-donation/ngos")}
            >
              🏢 Nearby NGOs
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDonation;