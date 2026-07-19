import "./AvailableFood.css";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import axios from "axios";

const AvailableFood = () => {
  const [foods, setFoods] = useState([]);
  const [city, setCity] = useState("");
  const [foodType, setFoodType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const fetchFood = async () => {
    try {
      setLoading(true);
      setSearched(true);

      const response = await axios.get(
        `http://localhost:5000/api/food/available?city=${city}&foodType=${foodType}`
      );

      setFoods(response.data.foods);

      if (response.data.foods.length === 0) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    } catch (error) {
      console.log(error);

      setFoods([]);
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="available-food-page">
        <div className="available-food-wrapper">
          <h1>AVAILABLE FOOD 🍱</h1>

          {/* Filters */}

          <div className="available-food-filters">
            <input
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
            />

            <select
              value={foodType}
              onChange={(e) =>
                setFoodType(e.target.value)
              }
            >
              <option value="">
                Select Food Type
              </option>

              <option value="Veg">
                Veg
              </option>

              <option value="Non-Veg">
                Non-Veg
              </option>
            </select>

            <button onClick={fetchFood}>
              Apply Filters
            </button>
          </div>

          {/* Initial Message */}

          {!searched && (
            <h2
              style={{
                textAlign: "center",
                color: "#666",
                marginBottom: "40px",
              }}
            >
              Enter your city and food
              type to find available
              food.
            </h2>
          )}

          {/* Loading */}

          {loading && (
            <h2
              style={{
                textAlign: "center",
              }}
            >
              Loading Food...
            </h2>
          )}

          {/* Food Cards */}

          <div className="available-food-container">
            {foods.map((food) => (
              <div
                className="available-food-card"
                key={food._id}
              >
                <h2>{food.foodName}</h2>

                <p>
                  <strong>Quantity:</strong>{" "}
                  {food.quantity}
                </p>

                <p>
                  <strong>Category:</strong>{" "}
                  {food.category}
                </p>

                <p>
                  <strong>Type:</strong>{" "}
                  {food.isVeg}
                </p>

                <p>
                  <strong>City:</strong>{" "}
                  {food.city}
                </p>

                <p>
                  <strong>Pickup Time:</strong>{" "}
                  {food.expiryTime}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {food.phone}
                </p>

                <p>
                  <strong>Address:</strong>
                  <br />
                  {food.address}
                </p>

                <p>
                  <strong>Description:</strong>
                  <br />
                  {food.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup */}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>🍽️ No Food Available</h2>

            <p>
              Sorry! No food donations
              are currently available in{" "}
              <b>{city}</b> for{" "}
              <b>{foodType}</b>.
              <br />
              <br />
              Please try another city or
              check back later.
            </p>

            <button
              onClick={() =>
                setShowPopup(false)
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AvailableFood;