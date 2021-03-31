import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item active mx-3">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/signup">
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                >
                  Sign Up
                </button>
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link" to="/login">
                <button
                  type="button"
                  className="btn"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  data-whatever="@mdo"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
