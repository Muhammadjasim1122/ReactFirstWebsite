// header.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import useNavigate

import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // 👈 initialize navigate


  return (
    <div className="header">
      <div className="logo">
        <img src="/brand_logo.png" alt="logo" />
      </div>

      {/* Hamburger icon (only for mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`nav-items ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="/">MENU</a>
        </li>
        <li>
          <a href="/about">LOCATION</a>
        </li>
        <li>
          <a href="/contact">ABOUT</a>
        </li>
        <li>
          <a href="/cart">CONTACT</a>
        </li>
      </ul>

      <div className="auth-buttons">
        <button className="logout">Logout</button>
        <button
          className="signup"
          onClick={() => navigate("/signup")} // 👈 redirects to signup page
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
