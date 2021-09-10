import React from "react";
import './Body.scss'
import Categories from "./Categories";
import Post from "./Post";
import Search from "./Search";

const Body = () => {
  return (
    <div className="content clearfix">
      <div className="main-content">
        <h1 className="recent-post-title">Recent Posts</h1>
        <Post />
      </div>
      <div className="sidebar">
        <Search />
        <Categories />
      </div>
    </div>
  );
};

export default Body;
