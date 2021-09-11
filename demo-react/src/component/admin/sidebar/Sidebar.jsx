import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div class="left-sidebar">
      <ul>
        <li>
          <Link to="/dashboard/posts">Manage Posts</Link>
        </li>
        <li>
          <Link to="/dashboard/users">Manage Users</Link>
        </li>
        <li>
          <Link to="/dashboard/categories">Manage Categories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
