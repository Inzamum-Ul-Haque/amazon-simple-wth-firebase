import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError("Password should be more than 6 characters or more!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your password did not match!!");
      return;
    }

    console.log(email, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" required />
          <p className="text-error">{error}</p>
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
