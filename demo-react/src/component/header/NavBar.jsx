import React from "react";
import './NavBar.scss'

const NavBar = () => {
  return (
    <header>
      <div className="logo">
        <h1 className="logo-text">
          <span>Anwar</span>Blog
        </h1>
      </div>
      <i className="fa fa-bars menu-toggle" />
      <ul className="nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-user" />
            Awa Melvine
            <i className="fa fa-chevron-down" style={{ fontSize: ".8em" }} />
          </a>
          <ul>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#" className="logout">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
