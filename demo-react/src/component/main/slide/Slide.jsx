import React from "react";
import "./Slide.scss";

const Slide = () => {
  return (
    <div className="post-slider">
      <h1 className="slider-title">Trending Posts</h1>
      <i className="fas fa-chevron-left prev" />
      <i className="fas fa-chevron-right next" />
      <div className="post-wrapper">
        <div className="post">
          <img src="images/image_1.png" alt className="slider-image" />
          <div className="post-info">
            <h4>
              <a href="single.html">
                One day your life will flash before your eyes
              </a>
            </h4>
            <i className="far fa-user"> Awa Melvine</i>
            &nbsp;
            <i className="far fa-calendar"> Mar 8, 2019</i>
          </div>
        </div>
        <div className="post">
          <img src="images/image_1.png" alt className="slider-image" />
          <div className="post-info">
            <h4>
              <a href="single.html">
                One day your life will flash before your eyes
              </a>
            </h4>
            <i className="far fa-user"> Awa Melvine</i>
            &nbsp;
            <i className="far fa-calendar"> Mar 8, 2019</i>
          </div>
        </div>
        <div className="post">
          <img src="images/image_1.png" alt className="slider-image" />
          <div className="post-info">
            <h4>
              <a href="single.html">
                One day your life will flash before your eyes
              </a>
            </h4>
            <i className="far fa-user"> Awa Melvine</i>
            &nbsp;
            <i className="far fa-calendar"> Mar 8, 2019</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
