import React from "react";
import Categories from '../../../Categories'

const SideBar = () => {
  return (
    <div className="sidebar single">
      <div className="section popular">
        <h2 className="section-title">Popular</h2>
        <div className="post clearfix">
          <img src="images/image_1.png" alt />
          <a href className="title">
            <h4>How to overcome your fears</h4>
          </a>
        </div>
        <div className="post clearfix">
          <img src="images/image_1.png" alt />
          <a href className="title">
            <h4>How to overcome your fears</h4>
          </a>
        </div>
        <div className="post clearfix">
          <img src="images/image_1.png" alt />
          <a href className="title">
            <h4>How to overcome your fears</h4>
          </a>
        </div>
        <div className="post clearfix">
          <img src="images/image_1.png" alt />
          <a href className="title">
            <h4>How to overcome your fears</h4>
          </a>
        </div>
        <div className="post clearfix">
          <img src="images/image_1.png" alt />
          <a href className="title">
            <h4>How to overcome your fears</h4>
          </a>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default SideBar;
