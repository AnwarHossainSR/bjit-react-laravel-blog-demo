import React from "react";
import Home from "./component/main/Home";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Register from "./component/authentication/Register";
import Login from "./component/authentication/Login";
import BlogDetails from "./component/main/single/BlogDetails";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sign-up">
          <Register />
        </Route>
        <Route exact path="/sign-in">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Home />
        </Route>
        <Route exact path="/blog-detail/test">
          <BlogDetails />
        </Route>
        <Route exact path="*">
          <BlogDetails />
        </Route>
      </Switch>
    </>
  );
};

export default App;
