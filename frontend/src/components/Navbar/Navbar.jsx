import "./Navbar.css";
import { FaHandshake } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [reading, setReading] = useState(false);
  const [menuOpen, setMenuOpen] =
  useState(false);

  const handleSpeech = () => {
    if (reading) {
      window.speechSynthesis.cancel();
      setReading(false);
      return;
    }

    const text =
      document.getElementById("page-content")?.innerText ||
      document.body.innerText;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;

    speech.onend = () => {
      setReading(false);
    };

    window.speechSynthesis.speak(speech);
    setReading(true);
  };

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
     <div className="logo">
  <FaHandshake
    className="logo-icon"
  />

  <h2>ComeUnity</h2>

  <button
    className="hamburger"
    onClick={() =>
      setMenuOpen(!menuOpen)
    }
  >
    ☰
  </button>
</div>

     <ul
  className={`nav-menu ${
    menuOpen ? "open" : ""
  }`}
>
        {/* Show Login only when logged out */}
        {!isLoggedIn && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Login
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Activities
          </NavLink>
        </li>

        <li>
          <button
            className={`voice-btn ${
              reading ? "voice-active" : ""
            }`}
            onClick={handleSpeech}
          >
            {reading ? "⏹ Reading..." : "🔊 Voice"}
          </button>
        </li>

        <li>
          <NavLink
            to="/impact"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Impact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Support
          </NavLink>
        </li>

        {/* Logged In Links */}
        {isLoggedIn && (
          <>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/ai-assistant"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Ask AI 🤖
              </NavLink>
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;