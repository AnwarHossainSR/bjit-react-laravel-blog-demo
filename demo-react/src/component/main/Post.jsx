import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  const posts = props.posts;
  return (
    <>
      {!posts && <p className="red">There is no post at this moment</p>}
      {posts &&
        posts.map((post, i) => (
          <div className="post clearfix" key={i}>
            <img src={`http://localhost:8000/images/posts/${post.image}`} alt="photo" className="post-image" />
            <div className="post-preview">
              <h2>
                <Link to={`/blog-detail/${post.slug}`}>{post.title}</Link>
              </h2>
              <i className="far fa-user"> &nbsp; {post.user.name}</i>
              &nbsp;
              <i className="far fa-calendar"> &nbsp; {post.created}</i>
              <p className="preview-text">{post.body.substring(0, 240)}....</p>
              <Link to={`/blog-detail/${post.slug}`} className="btn read-more">
                Read More
              </Link>
            </div>
          </div>
        ) ) }
     
    </>
  );
};

export default Post;
