import React from "react";

import "./NavBar.css";

const Navbar = ({ user }) => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="custom-display">
        <div
          className="collapse navbar-collapse custom-display"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">{user.name}</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        className="custom-display-main"
      >
        <div
          className="d-flex justify-content-end collapse navbar-collapse"
          id="collapsibleNavbar"
        >
          <img
            src={user.avatar_url}
            width="50"
            height="50"
            className="mr-3 avatar"
            alt="user"
          />
          <h3 style={{ color: "white", margin: "0 2em" }}>{user.name}</h3>
          <li className="nav-item">
            <a className="ml-auto text-decoration-none" href="/">
              Search Other User
            </a>
          </li>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
