import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main = (props) => {
  return (
    <div class="admin-content">
      <div class="button-group">
        <Link href="create.html" class="btn btn-big">
          Add
        </Link>
        <Link to={`/dashboard/${props.url}`} class="btn btn-big">
          {props.title}
        </Link>
      </div>

      <div class="content">
        <h2 class="page-title">{props.title}</h2>

        <table>
          <thead>
            <th>SN</th>
            {props.url == "posts" && <th>title</th>}
            {(props.url == "posts" && <th>Author</th>) || <th>Name</th>}
            {props.url == "posts" && <th>Status</th>}
            {props.url == "users" && <th>Role</th>}
            <th colspan="2">Action</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {props.url == "posts" && <td>This is my first post</td>}
              <td>Anwar Hossain</td>
              {props.url == "posts" && <td>Published</td>}
              {props.url == "users" && <td>Admin</td>}
              <td>
                {props.url == "posts" && (
                  <Link to="" class="edit">
                    Unpublish
                  </Link>
                )}
                <Link to="" class="delete">
                  edit
                </Link>
                <Link to="" class="edit">
                  delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
