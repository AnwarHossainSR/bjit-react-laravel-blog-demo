import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import './Auth.scss'

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="auth-content">
        <form action="login.html" method="post">
          <h2 className="form-title">Login</h2>
          <div>
            <label>Username</label>
            <input type="text" name="username" className="text-input" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" className="text-input" />
          </div>
          <div>
            <button type="submit" name="login-btn" className="btn btn-big">
              Login
            </button>
          </div>
          <p>
            Or <a href="register.html">Sign Up</a>
          </p>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
