import React, { useReducer, useState, useHistory } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import "./Auth.scss";
import {storeSignupApi} from '../../api/Api'

const emailReducer = (state, action) => {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  if (action.val.length === 0) {
    return {
      value: action.val,
      isValid: "Email is required",
      type: action.type,
    };
  }
  if (!pattern.test(action.val)) {
    return {
      value: action.val,
      isValid: "please provide a valid email address",
      type: action.type,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};

const passwordReducer = (state, action) => {
  if (action.val.length === 0) {
    return {
      value: action.val,
      isValid: "Password is required",
      type: action.type,
    };
  }
  if (action.val.length < 6) {
    return {
      value: action.val,
      isValid: "Password must be grater than 6",
      type: action.type,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};

const nameReducer = (state, action) => {
  if (action.val.length < 3) {
    return {
      value: action.val,
      isValid: "Name must be grater than 3",
      type: action.type,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};

const Register = () => {
 
  const [nameState, dispatchName] = useReducer( nameReducer, {
    value: "",
    isValid: null,
    type: "",
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
    type: "",
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
    type: "",
  } );
  // const { isValid: nameIsValid } = nameState;
  // const { isValid: emailIsValid } = emailState;
  // const { isValid: passwordIsValid } = passwordState;
  const [error, setErrorMessage] = useState( "" );
  const histry = useHistory();

  const nameChangeHandler = (event) => {
    dispatchName({ type: "name", val: event.target.value });
  };
  
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "email", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "password", val: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name: nameState.value, email: emailState.value, password: passwordState.value };
    //await storeSignupApi( user );
    histry.push("/sigh-in");
  };

  return (
    <>
      <NavBar />
      <div className="auth-content">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Register</h2>
          {error && (
            <span className="error">{error}</span>
          )}
          <div>
            <label>Name</label>
            <input
               value={nameState.value}
              onChange={nameChangeHandler}
              type="text"
              className="text-input"
            />
            {nameState.isValid && (
              <span className="error">{nameState.isValid}</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <input
               value={emailState.value}
              onChange={emailChangeHandler}
              type="email"
              className="text-input"
            />
            {emailState.isValid && (
              <span className="error">{emailState.isValid}</span>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
               value={passwordState.value}
              onChange={passwordChangeHandler}
              type="password"
              className="text-input"
            />
            {passwordState.isValid && (
              <span className="error">{passwordState.isValid}</span>
            )}
          </div>
          {/* <div>
            <label>Password Confirmation</label>
            <input type="password" name="passwordConf" className="text-input" />
          </div> */}
          <div>
            <button type="submit" name="register-btn" className="btn btn-big">
              Register
            </button>
          </div>
          <p>
            Or <Link to="/sign-in">Sign In</Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Register;
