import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const handleSubmit = (event) => {};

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" className="btn-submit">
          Sign Up
        </button>
      </form>
      <p>
        Already Have an Account? <Link to="/login">Create a New Account</Link>
      </p>
    </div>
  );
};

export default SignUp;
