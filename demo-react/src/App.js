import React from "react";
import Home from "./component/main/Home";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Register from "./component/authentication/Register";
import Login from "./component/authentication/Login";
import BlogDetails from "./component/main/single/BlogDetails";
import PostByCategory from "./component/main/common/PostByCategory";
import Layout from "./component/admin/Layout";

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
        <Route exact path="/blog-detail/:slug">
          <BlogDetails />
        </Route>
        <Route exact path="/category/:id/posts">
          <PostByCategory />
        </Route>
        {/* admin */ }
        <Route exact path="/dashboard/posts">
          <Layout title="Manage Posts" url="posts" />
        </Route>
        <Route exact path="/dashboard/users">
          <Layout title="Manage Users" url="users" />
        </Route>
        <Route exact path="/dashboard/categories">
          <Layout title="Manage Categories" url="categories" />
        </Route>
        <Route exact path="*">
          <BlogDetails />
        </Route>
      </Switch>
    </>
  );
};

export default App;
