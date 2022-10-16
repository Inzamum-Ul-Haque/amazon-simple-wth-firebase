import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit" className="btn-submit">
          Login
        </button>
      </form>
      <p>
        New to Amazon? <Link to="/signup">Create a New Account</Link>
      </p>
    </div>
  );
};

export default Login;
