import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./NearbyHospitals.css";

export default function NearbyHospitals() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        alert(
          "Please allow location access to find nearby hospitals."
        );
      }
    );
  };

  return (
    <>
      <Navbar />

      <div className="hospital-page">
        <div className="hospital-card">
          <h1>🗺️ NEARBY HOSPITALS</h1>

          <p className="hospital-subtitle">
            Find nearby hospitals, blood banks, and
            medical centers around your location.
          </p>

          {!location && (
            <div className="empty-state">
              <h2>
                Your next blood donation could save a
                life.
              </h2>

              <p>
                Allow location access to discover
                nearby healthcare facilities and blood
                donation centers.
              </p>

              <button
                className="location-btn"
                onClick={getLocation}
              >
                📍 Use My Location
              </button>
            </div>
          )}

          {location && (
            <>
              <div className="map-container">
                <iframe
                  title="Nearby Hospitals"
                  src={`https://maps.google.com/maps?q=hospitals+blood+banks+medical+centers+near+${location.lat},${location.lng}&z=14&output=embed`}
                  width="100%"
                  height="500"
                  style={{
                    border: 0,
                    borderRadius: "25px",
                  }}
                  allowFullScreen
                />
              </div>

              <div className="info-card">
                <h2>
                  Nearby Healthcare Centers
                </h2>

                <p>
                  Explore the map above to discover
                  nearby hospitals, blood banks, and
                  medical centers. Click on any marker
                  to view additional details, ratings,
                  and directions.
                </p>

                <a
                  href={`https://www.google.com/maps/search/hospitals+near+${location.lat},${location.lng}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="maps-btn">
                    Open in Google Maps
                  </button>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}