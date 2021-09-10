import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/sign-in">Login</Link>
        </li>
        <li>
          <a href="/dashboard">
            <i className="fa fa-user" />
            Awa Melvine
            <i className="fa fa-chevron-down" style={{ fontSize: ".8em" }} />
          </a>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/logout" className="logout">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
