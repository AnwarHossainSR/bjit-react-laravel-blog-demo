import React from "react";
import './Body.scss'

const Body = ( {post} ) => {
  return (
    <div className="main-content-wrapper">
      <div className="main-content single">
        <h1 className="post-title">{ post && post.title }</h1>
        <img src={post && post.image} alt="photo" />
        <div className="post-content">
        {post && post.body}
        </div>
      </div>
    </div>
  );
};

export default Body;
