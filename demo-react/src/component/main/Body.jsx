import React from "react";
import './Body.scss'

const Body = () => {
  return (
    <div className="content clearfix">
      {/* Main Content */}
      <div className="main-content">
        <h1 className="recent-post-title">Recent Posts</h1>
        <div className="post clearfix">
          <img src="images/image_3.png" alt className="post-image" />
          <div className="post-preview">
            <h2>
              <a href="single.hmtl">
                The strongest and sweetest songs yet remain to be sung
              </a>
            </h2>
            <i className="far fa-user"> Awa Melvine</i>
            &nbsp;
            <i className="far fa-calendar"> Mar 11, 2019</i>
            <p className="preview-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem optio possimus a inventore maxime laborum.
            </p>
            <a href="single.html" className="btn read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="post clearfix">
          <img src="images/image_4.png" alt className="post-image" />
          <div className="post-preview">
            <h2>
              <a href="single.hmtl">
                The strongest and sweetest songs yet remain to be sung
              </a>
            </h2>
            <i className="far fa-user"> Awa Melvine</i>
            &nbsp;
            <i className="far fa-calendar"> Mar 11, 2019</i>
            <p className="preview-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem optio possimus a inventore maxime laborum.
            </p>
            <a href="single.html" className="btn read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="post clearfix">
          <img src="images/image_3.png" alt className="post-image" />
          <div className="post-preview">
            <h2>
              <a href="single.hmtl">
                The strongest and sweetest songs yet remain to be sung
              </a>
            </h2>
            <i className="far fa-user"> Awa Melvine</i>
            &nbsp;
            <i className="far fa-calendar"> Mar 11, 2019</i>
            <p className="preview-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem optio possimus a inventore maxime laborum.
            </p>
            <a href="single.html" className="btn read-more">
              Read More
            </a>
          </div>
        </div>
        <div className="post clearfix">
          <img src="images/image_3.png" alt className="post-image" />
          <div className="post-preview">
            <h2>
              <a href="single.hmtl">
                The strongest and sweetest songs yet remain to be sung
              </a>
            </h2>
            <i className="far fa-user"> Awa Melvine</i>
            &nbsp;
            <i className="far fa-calendar"> Mar 11, 2019</i>
            <p className="preview-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem optio possimus a inventore maxime laborum.
            </p>
            <a href="single.html" className="btn read-more">
              Read More
            </a>
          </div>
        </div>
      </div>
      {/* // Main Content */}
      <div className="sidebar">
        <div className="section search">
          <h2 className="section-title">Search</h2>
          <form action="index.html" method="post">
            <input
              type="text"
              name="search-term"
              className="text-input"
              placeholder="Search..."
            />
          </form>
        </div>
        <div className="section topics">
          <h2 className="section-title">Topics</h2>
          <ul>
            <li>
              <a href="#">Poems</a>
            </li>
            <li>
              <a href="#">Quotes</a>
            </li>
            <li>
              <a href="#">Fiction</a>
            </li>
            <li>
              <a href="#">Biography</a>
            </li>
            <li>
              <a href="#">Motivation</a>
            </li>
            <li>
              <a href="#">Inspiration</a>
            </li>
            <li>
              <a href="#">Life Lessons</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Body;
