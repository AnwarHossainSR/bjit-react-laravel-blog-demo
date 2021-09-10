import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../../../Categories";

const SideBar = ( { categories, popular } ) => {
  const [populars, setpopular] = useState( [popular] )
  useEffect(() => {
    setpopular(popular)
    return () => {
    }
  }, [populars])
  return (
    <div className="sidebar single">
      <div className="section popular">
        <h2 className="section-title">Popular</h2>
        {popular &&
          popular.map((post, i) => (
            <div className="post clearfix" key={i}>
              <img src={post.image} alt="photo" />
              <Link to={`/blog-detail/${post.slug}`} className="title">
                <h4>{post.title}</h4>
              </Link>
            </div>
          ))}
      </div>
      <Categories categories={categories} />
    </div>
  );
};

export default SideBar;
