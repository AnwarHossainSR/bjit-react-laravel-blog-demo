import React from "react";
import { Link,useRouteMatch } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import "./Main.scss";
import PostItem from "./PostItem";
import UserItem from "./UserItem";
const Main = ( props ) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="admin-content">
      <div className="button-group">
        {props.url == "categories" && (
          <Link to={`${url}/add-category`} className="btn btn-big">
            Add Category
          </Link>
        )}
        {props.url == "posts" && (
          <Link to={`${url}/add-post`} className="btn btn-big">
            Add
          </Link>
        )}
      </div>

      <div className="content">
        <h2 className="page-title">{props.title}</h2>
        {props.url == "categories" && <CategoryItem categories={props.data} />}
        {props.url == "posts" && <PostItem posts={props.data.posts} />}
        {props.url == "users" && <UserItem users={props.data} />}
      </div>
    </div>
  );
};

export default Main;
