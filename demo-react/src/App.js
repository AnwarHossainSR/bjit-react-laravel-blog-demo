import React from "react";
import Home from "./component/main/Home";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Register from "./component/authentication/Register";
import Login from "./component/authentication/Login";
import BlogDetails from "./component/main/single/BlogDetails";
import PostByCategory from "./component/main/common/PostByCategory";
import Layout from "./component/admin/Layout";
import CategoryAdd from "./component/admin/main/categories/CategoryAdd";
import AddPost from "./component/admin/main/posts/AddPost";
import EditPost from "./component/admin/main/posts/EditPost";
import CategoryEdit from "./component/admin/main/categories/CategoryEdit";
import NotFound from "./pages/NotFound";
import SearchPost from "./component/main/common/SearchPost";



const App = () => {
  
  return (
    <>
      {/* <button onClick={notify}>Notify !</button> */}
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
        {/* <Route exact path="/dashboard">
          <Home />
        </Route> */}
        <Route exact path="/blog-detail/:slug">
          <BlogDetails />
        </Route>
        <Route exact path="/category/:id/posts">
          <PostByCategory />
        </Route>
        <Route exact path="/search/:query">
          <SearchPost />
        </Route>
        {/* admin */}
        {/* <CategoryContext.Provider value={CategoryContext._currentValue.data}> */}
        <Route exact path="/dashboard/posts">
          <Layout title="Manage Posts" url="posts" />
        </Route>
        <Route exact path="/dashboard/users">
          <Layout title="Manage Users" url="users" />
        </Route>
        <Route exact path="/dashboard/categories">
          <Layout title="Manage Categories" url="categories" />
        </Route>
        <Route
          exact
          path={`/dashboard/categories/add-category`}
          component={CategoryAdd}
        />
        <Route
          exact
          path={`/dashboard/categories/:slug`}
          component={CategoryEdit}
        />
        <Route exact path={`/dashboard/posts/add-post`} component={AddPost} />
        <Route exact path={`/dashboard/posts/:slug`} component={EditPost} />
        {/* </CategoryContext.Provider> */}

        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
