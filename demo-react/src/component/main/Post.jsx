import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <>
      <div className="post clearfix">
        <img src="images/image_3.png" alt className="post-image" />
        <div className="post-preview">
          <h2>
            <Link to="/blog-detail/test">
              The strongest and sweetest songs yet remain to be sung
            </Link>
          </h2>
          <i className="far fa-user"> Awa Melvine</i>
          &nbsp;
          <i className="far fa-calendar"> Mar 11, 2019</i>
          <p className="preview-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem optio possimus a inventore maxime laborum.
          </p>
          <Link to="/blog-detail/test" className="btn read-more">
            Read More
          </Link>
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
    </>
  );
};

export default Post;
