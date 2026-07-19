import "./Navbar.css";
import { FaHandshake } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaHandshake className="logo-icon" />
        <h2>COMEUNITY</h2>
      </div>

    <ul>
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
</ul>
    </nav>
  );
};

export default Navbar;