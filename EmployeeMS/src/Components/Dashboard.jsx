import React from "react";
import "./dashboard.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout").then((result) => {
      if (result.data.Status) {
        localStorage.removeItem("valid");
        navigate("/");
      }
    });
  };
  return (
    <div className="wrappers">
      <div className="container">
        <aside>
          <div className="top">
            <div className="logo">
              <Link to="/dashboard" className={"nav-link .name"}>
                <h2>
                  TIK<span className="danger">YANG</span>
                </h2>
              </Link>
            </div>
          </div>

          <div class="sidebar">
            <Link to="/dashboard" className={"nav-link link"}>
              <i className="fs-4 bi-speedometer2 "></i>
              <h3 className="">Dashboard</h3>
            </Link>
            <Link to="/dashboard/employee" className={"nav-link link"}>
              <i className="fs-4 bi-people"></i>
              <h3 className="">Manage Employee</h3>
            </Link>
            <Link to="/dashboard/category" className={"nav-link link"}>
              <i className="fs-4 bi-columns "></i>
              <h3 className="">Department</h3>
            </Link>
            <Link to="/dashboard/profile" className={"nav-link link"}>
              <i className="fs-4 bi-person"></i>
              <h3 className="">Profile</h3>
            </Link>
            <Link className={"nav-link link"} onClick={handleLogout}>
              <i className="fs-4 bi-power"></i>
              <h3 className="">Logout</h3>
            </Link>
          </div>
        </aside>
          <Outlet />

      </div>
    </div>
  );
};

{
  /*
    <div className="container">
      <aside>
        <div className="top">
          <div className="logo">
            <Link to="/dashboard" className="">
              <h2>
                JAMES<span className="nav-link danger">NIL</span>
              </h2>
            </Link>
          </div>

          <div className="sidebar">
            <div id="menu">
              <Link to="/dashboard" className="nav-link Link">
                <span className="">Dashboard</span>
                <i className="fs-4 bi-speedometer2"></i>
              </Link>

              <Link to="/dashboard/employee" className="nav-link Link">
                <span className="">
                  Manage Employees
                </span>
                <i className="fs-4 bi-people"></i>
              </Link>

              <Link to="/dashboard/category" className="nav-link Link">
                  <span className="">Category</span>
                <i className="fs-4 bi-columns"></i>
              </Link>

              <Link to="/dashboard/profile" className="nav-link px-0 Link">
                <span className="">Profile</span>
                <i className="fs-4 bi-person"></i>
              </Link>

              <Link className="nav-link Link" onClick={handleLogout}>
                <span className="">Logout</span>
                <i className="fs-4 bi-power"></i>
              </Link>
            </div>
          </div>

          <div className="col p-0 m-0">
            <div className="p-2 d-flex justify-content-center shadow">
              <h4>Employee Management System</h4>
            </div>
            <Outlet />
          </div>
        </div>
      </aside>
    </div>
  );
};
*/
}
export default Dashboard;
