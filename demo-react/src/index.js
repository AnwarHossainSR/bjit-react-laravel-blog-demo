import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Router>
    <AuthContextProvider>
      <App />
      <ToastContainer
      />
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);
