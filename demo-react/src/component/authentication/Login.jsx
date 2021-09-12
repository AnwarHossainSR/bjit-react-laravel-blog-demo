import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
} from "react";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import "./Auth.scss";
import AuthContext from "../../store/AuthContext";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';


const emailReducer = (state, action) => {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  if (action.val.length == 0) {
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
  if (action.val.length == 0) {
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

const Login = () => {
  const histry = useHistory()
  const authCtx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [error, setError] = useState("");
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
    type: "",
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
    type: "",
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "email", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "password", val: event.target.value });
  };
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      histry.push( "/" );
    }
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
  }, [emailIsValid, passwordIsValid] );
  
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin( emailState.value, passwordState.value ); 
    } else {
      setError( "Please provide valid input" );
      toast.error('Please provie all valid input!', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
        progress: undefined,
      });
    }
  };
  return (
    <>
      <NavBar />
      <div className="auth-content">
        <form onSubmit={submitHandler}>
          <h2 className="form-title">Login</h2>
          {error && (
            <span className="error">
              {" "}
              <br />
              {error} <br />
            </span>
          )}
          {authCtx.error && (
            <span className="error">
              {" "}
              <br />
              {authCtx.error} <br />
            </span>
          )}
          <div>
            <label>Username</label>
            <input
              id="email"
              label="E-Mail"
              type="email"
              value={emailState.value}
              onChange={emailChangeHandler}
              className="text-input"
            />
            {emailState.isValid && (
              <span className="error">{emailState.isValid}</span>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              id="password"
              label="Password"
              type="password"
              value={passwordState.value}
              onChange={passwordChangeHandler}
              className="text-input"
            />
            {passwordState.isValid && (
              <span className="error">{passwordState.isValid}</span>
            )}
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
