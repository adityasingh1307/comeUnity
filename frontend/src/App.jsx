import { Routes, Route } from "react-router-dom";

// Components
import ScrollToTop from "./components/ScrollToTop";

// Authentication
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Main Pages
import About from "./pages/About/About";
import Impact from "./pages/Impact/Impact";
import Support from "./pages/Support/Support";
import Activities from "./pages/Activities/Activities";

// Feature Pages
import FoodDonation from "./pages/FoodDonation/FoodDonation";
import DonateFood from "./pages/FoodDonation/DonateFood";
import AvailableFood from "./pages/AvailableFood/AvailableFood";
import MyDonations from "./pages/FoodDonation/MyDonations";
import NearbyNGOs from "./pages/NearbyNGOs/NearbyNGOs";

import BloodDonation from "./pages/BloodDonation/BloodDonation";
import DonateBlood from "./pages/BloodDonation/DonateBlood";
import NearbyHospitals from "./pages/BloodDonation/NearbyHospitals";
import RequestBlood from "./pages/BloodDonation/RequestBlood";
import MyContributions from "./pages/BloodDonation/MyContributions";

import VolunteerHub from "./pages/VolunteerHub/VolunteerHub";
import AIAssistant from "./pages/AIAssistant/AIAssistant";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Navigation Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/activities" element={<Activities />} />

        {/* Food Module */}
        <Route path="/food-donation" element={<FoodDonation />} />
        <Route
          path="/food-donation/donate"
          element={<DonateFood />}
        />
        <Route
          path="/food-donation/requests"
          element={<AvailableFood />}
        />
        <Route
          path="/food-donation/my-donations"
          element={<MyDonations />}
        />
        <Route
          path="/food-donation/ngos"
          element={<NearbyNGOs />}
        />

        {/* Blood Module */}
        <Route
          path="/blood-network"
          element={<BloodDonation />}
        />
        <Route
          path="/donate-blood"
          element={<DonateBlood />}
        />
        <Route
          path="/nearby-hospitals"
          element={<NearbyHospitals />}
        />
        <Route
          path="/request-blood"
          element={<RequestBlood />}
        />
        <Route
          path="/my-contributions"
          element={<MyContributions />}
        />

        {/* Other Modules */}
        <Route
          path="/volunteer"
          element={<VolunteerHub />}
        />
        <Route
          path="/ai-assistant"
          element={<AIAssistant />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </>
  );
}

export default App;