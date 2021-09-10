import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import './Auth.scss'

const Register = () => {
  return (
    <>
      <NavBar />
      <div className="auth-content">
        <form action="register.html" method="post">
          <h2 className="form-title">Register</h2>
          {/* <div class="msg error">
  <li>Username required</li>
</div> */}
          <div>
            <label>Username</label>
            <input type="text" name="username" className="text-input" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" className="text-input" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" className="text-input" />
          </div>
          <div>
            <label>Password Confirmation</label>
            <input type="password" name="passwordConf" className="text-input" />
          </div>
          <div>
            <button type="submit" name="register-btn" className="btn btn-big">
              Register
            </button>
          </div>
          <p>
            Or <a href="login.html">Sign In</a>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Register;
