import React, { useState } from "react";
import "./Signupform.css"; // import css

function Signupform() {
  // state to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted by ${formData.name} 🚀`);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create Account</h2>

        {/* Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signupform;
