import React from "react";
import "./Slide.scss";
import { Link } from "react-router-dom";

const Slide = (props) => {
  const data = props.sliders;
  return (
    <div className="post-slider">
      <h1 className="slider-title">Trending Posts</h1>
      <i className="fas fa-chevron-left prev" />
      <i className="fas fa-chevron-right next" />
      <div className="post-wrapper">
        {data &&
          data.map((post, i) => (
            <div className="post" key={i}>
              <img src={`http://localhost:8000/images/posts/${post.image}`} alt="photo" className="slider-image" />
              <div className="post-info">
                <h4>
                  <Link to={`/blog-detail/${post.slug}`}>{post.title}</Link>
                </h4>
                <i className="far fa-user">  {post.user.name}</i>
                &nbsp;
                <i className="far fa-calendar">  {post.created}</i>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Slide;
