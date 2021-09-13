import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import "./NavBar.scss";

const NavBar = () => {
  const ctx = useContext( AuthContext );
  const authenticated = localStorage.getItem( "isLoggedIn" );
  const user = JSON.parse(localStorage.getItem("user-info"))
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
        {  !authenticated && (
          <>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Login</Link>
            </li>
          </>
        )}
        {authenticated && (
          <li>
            <a href="/dashboard">
              <i className="fa fa-user" />
              {user && user.name}
              <i className="fa fa-chevron-down" style={{ fontSize: ".8em" }} />
            </a>
            <ul>
              <li>
                <Link to="/dashboard/posts">Dashboard</Link>
              </li>
              <li>
                <Link to="#" onClick={ctx.onLogout} className="logout">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        )}
      </ul>
    </header>
  );
};

export default NavBar;
