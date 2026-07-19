import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./MyDonations.css";

import {
  FaBoxOpen,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUtensils,
  FaGift,
} from "react-icons/fa";

function MyDonations() {
  const navigate = useNavigate();

  // Replace this with backend data later
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDonation, setSelectedDonation] = useState(null);
  useEffect(() => {
  const fetchDonations = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/food/my-donations",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDonations(response.data.donations);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchDonations();
}, []);
  const total = donations.length;
  const submitted = donations.filter(
    (item) => item.status === "Submitted"
  ).length;
  const completed = donations.filter(
    (item) => item.status === "Completed"
  ).length;
if (loading) {
  return (
    <>
      <Navbar />
      <div className="myDonationPage">
        <h2>Loading donations...</h2>
      </div>
    </>
  );
}
  return (
    <>
      <Navbar />

      <div className="myDonationPage">

        <div className="myDonationContainer">

          <div className="pageHeader">
            <h1>My Donations</h1>
            <p>Track every food donation you've made.</p>
          </div>

          <div className="statsContainer">

            <div className="statCard">
              <FaGift />
              <h2>{total}</h2>
              <span>Total</span>
            </div>

            <div className="statCard submittedCard">
              <FaClock />
             <h2>{submitted}</h2>
             <span>Submitted</span>
            </div>

            <div className="statCard completedCard">
              <FaCheckCircle />
             <h2>{completed}</h2>
             <span>Completed</span>
            </div>

          </div>

          {donations.length === 0 ? (

            <div className="emptyState">

              <FaBoxOpen className="emptyIcon" />

              <h2>No Donations Yet</h2>

              <p>
                Your food donations will appear here once you donate.
              </p>

              <button
                onClick={() => navigate("/food-donation/donate")}
              >
                Donate Food
              </button>

            </div>

          ) : (

            <div className="donationList">

              {donations.map((item) => (

                <div className="donationCard" key={item.id}>

                  <div className="cardTop">

                    <div className="foodTitle">
                      <FaUtensils />
                      <h3>{item.foodName}</h3>
                    </div>

                    <span
                      className={`status ${item.status.toLowerCase()}`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <div className="cardInfo">

                    <p>
                      <FaBoxOpen />
                      Quantity :
                      <strong>{item.quantity}</strong>
                    </p>

                    <p>
                      <FaCalendarAlt />
                      Date :
                      <strong>
  {new Date(item.createdAt).toLocaleDateString()}
</strong>
                    </p>

                    <p>
                      <FaMapMarkerAlt />
                      Location :
                      <strong>{item.city}</strong>
                    </p>

                  </div>

                 <button
  className="detailsBtn"
  onClick={() => setSelectedDonation(item)}
>
  View Details →
</button>
                </div>

              ))}

            </div>

          )}

        </div>

      </div>
      {selectedDonation && (
  <div
    className="modalOverlay"
    onClick={() => setSelectedDonation(null)}
  >
    <div
      className="modalCard"
      onClick={(e) => e.stopPropagation()}
    >
      <h2>🍱 Donation Details</h2>

      <div className="modalContent">

        <p><strong>Food Name:</strong> {selectedDonation.foodName}</p>

        <p><strong>Quantity:</strong> {selectedDonation.quantity}</p>

        <p><strong>Category:</strong> {selectedDonation.category}</p>

        <p><strong>Type:</strong> {selectedDonation.isVeg}</p>

        <p><strong>City:</strong> {selectedDonation.city}</p>

        <p><strong>Pickup Address:</strong> {selectedDonation.address}</p>

        <p><strong>Expiry Time:</strong> {selectedDonation.expiryTime}</p>

        <p><strong>Phone:</strong> {selectedDonation.phone}</p>

        <p>
          <strong>Description:</strong>{" "}
          {selectedDonation.description || "No description"}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`status ${selectedDonation.status.toLowerCase()}`}
          >
            {selectedDonation.status}
          </span>
        </p>

      </div>

      <button
        className="closeModalBtn"
        onClick={() => setSelectedDonation(null)}
      >
        Close
      </button>

    </div>
  </div>
)}
     
    </>
  );
}

export default MyDonations;