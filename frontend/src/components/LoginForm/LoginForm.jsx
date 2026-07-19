import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] =
  useState(false);

  return (
    <div className="login-card">
      <h1>Welcome Back to ComeUnity</h1>

      <p>Sign in to continue your journey.</p>

      {/* Email */}

      <div className="field">
        <label>Email Address</label>

        <div className="input-box">
          <FaEnvelope />

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="eg: Sanya123@gmail.com"
          />
        </div>
      </div>

      {/* Password */}

      <div className="field">
        <div className="password-row">
          <label>Password</label>

          
        </div>

        <div className="input-box">
          <FaLock />

       <input
  type={
    showPassword
      ? "text"
      : "password"
  }
  value={password}
  onChange={(e) =>
    setPassword(e.target.value)
  }
  placeholder="Password"
/>

<button
  type="button"
  onClick={() =>
    setShowPassword(
      !showPassword
    )
  }
  style={{
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#666",
  }}
>
  {showPassword
    ? <FaEyeSlash />
    : <FaEye />}
</button>
        </div>
      </div>


      {/* Login Button */}

      <button
        className="login-btn"
        onClick={handleLogin}
      >
        SIGN IN →
      </button>


      {/* Register */}

      <div className="register">
        New to ComeUnity?

        <span
          onClick={() =>
            navigate("/register")
          }
          style={{
            color: "#4A90D3",
            cursor: "pointer",
            marginLeft: "5px",
          }}
        >
          Create an account
        </span>
      </div>
    </div>
  );
}