import React from "react";
import './Body.scss'
import Categories from "./Categories";
import Post from "./Post";
import Search from "./Search";

const Body = ( props ) => {
  return (
    <div className="content clearfix">
      <div className="main-content">
        <h1 className="recent-post-title">Recent Posts</h1>
        <Post posts={props.posts}/>
      </div>
      <div className="sidebar">
        <Search />
        <Categories categories={props.categories}/>
      </div>
    </div>
  );
};

export default Body;
