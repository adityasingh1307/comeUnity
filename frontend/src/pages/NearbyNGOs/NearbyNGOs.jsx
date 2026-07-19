import "./NearbyNGOs.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useState } from "react";

function NearbyNGOs() {
  const [city, setCity] = useState("");
  const [loading, setLoading] =
    useState(false);

  const [ngos, setNgos] = useState(
    []
  );

  const [showPopup, setShowPopup] =
    useState(false);

  const searchNGOs = async () => {
    if (!city) return;

    try {
      setLoading(true);

      const response =
        await axios.get(
          `http://localhost:5000/api/ngos/${city}`
        );

      setNgos(response.data.ngos);

      if (
        response.data.ngos.length === 0
      ) {
        setShowPopup(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const cities = [
    "Mumbai",
    "Delhi",
    "Pune",
    "Bangalore",
    "Hyderabad",
    "Chennai",
  ];

  return (
    <>
      <Navbar />

      <div className="ngoPage">

        <div className="heroSection">

          <h1>Nearby NGOs</h1>

          <p>
            Connect with organizations
            making a difference in your
            community.
          </p>

        </div>

        <div className="searchContainer">

          <input
            type="text"
            placeholder="Search by City..."
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
          />

          <button
            onClick={searchNGOs}
          >
            Search
          </button>

        </div>

        {/* Popular Cities */}

        {!loading &&
          ngos.length === 0 && (
            <>
              <h3 className="popularTitle">
                Popular Searches
              </h3>

              <div className="popularCities">

                {cities.map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() =>
                        setCity(item)
                      }
                    >
                      {item}
                    </button>
                  )
                )}

              </div>

              <div className="welcomeCard">

                <h2>
                  🌍 Search NGOs
                  Across India
                </h2>

                <p>
                  Discover nearby NGOs,
                  donate food, and
                  support your community
                  through ComeUnity.
                </p>

              </div>
            </>
          )}

        {/* Loading */}

        {loading && (

          <div className="loadingCard">

            <div className="spinner"></div>

            <h2>
              Searching NGOs near{" "}
              {city}
            </h2>

            <p>
              Connecting with
              OpenStreetMap...
            </p>

          </div>

        )}

        {/* NGO Cards */}

        <div className="ngoGrid">

          {ngos.map(
            (ngo, index) => (

              <div
                className="ngoCard"
                key={index}
              >
                <h2>{ngo.name}</h2>

                <p>
                  📍 {ngo.city}
                </p>

                <p>
                  📞 {ngo.phone}
                </p>

                <a
                  href={ngo.website}
                  target="_blank"
                >
                  Visit Website
                </a>

                <button>
                  Donate Food
                </button>

              </div>

            )
          )}

        </div>

      </div>

      {/* POPUP */}

      {showPopup && (
        <div className="popupOverlay">

          <div className="popupCard">

            <div className="popupEmoji">
              😔
            </div>

            <h2>
              No NGOs Found
            </h2>

            <p>
              We couldn't find any NGOs
              in <b>{city}</b>.
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
}

export default NearbyNGOs;