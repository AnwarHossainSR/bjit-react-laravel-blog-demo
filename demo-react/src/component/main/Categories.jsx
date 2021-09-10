import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="section topics">
      <h2 className="section-title">Topics</h2>
      <ul>
        {categories &&
          categories.map((category, i) => (
            <li key={i}>
              <Link to={`/category/${category.id}/posts`}>{category.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
