import React, { useState } from "react";
import "./loginPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const EmployeeLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/employee/employee_login", values)
      .then((result) => {
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true);
          navigate("/employee_detail/" + result.data.id);
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      <div className="loginPage">
        <div className="text-danger">{error && error}</div>
        <h2>Employee Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <FaLock className="icon" />
          </div>
          <button>Log in</button>
          <div className="consent-Box">
            <input
              type="checkbox"
              name="tick"
              id="tick"
              className="me-2"
              required
            />
            <label htmlFor="password">
              You are Agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
