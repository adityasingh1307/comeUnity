import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";

import "./Login.css";
const API = import.meta.env.VITE_API_URL;
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

 const handleLogin = async () => {
  try {
    const response = await axios.post(
      `${API}/api/auth/login`,
      {
        email,
        password,
      }
    );

    console.log(response.data);

    // Store token
    localStorage.setItem(
      "token",
      response.data.token
    );

    // Store user object
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    // Store user ID
    localStorage.setItem(
      "userId",
      response.data.user._id
    );

    navigate("/dashboard");
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Invalid Credentials"
    );
  }
};

  return (
    <div className="login-page">
      <Navbar />

      <div className="login-container">
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>

      <footer>
        ©2026 Community Care | Privacy Policy |
        Terms of Service
      </footer>
    </div>
  );
}