import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import url from "../../../config";
import { deleteApiData, fetchAll } from "../../../api/Api";
import { toast } from 'react-toastify';

const PostItem = (props) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(props.posts);
  }, [props]);
  const deletePost = async (id) => {
    await deleteApiData( `${url.basePublicUrl}/posts/${id}` );
    toast.error('Post deleted successfully!');
    const result = (await fetchAll(`${url.basePublicUrl}/posts`)).data.posts;
    setdata(result);
  };
  return (
    <table>
      <thead>
        <th>SN</th>
        <th>Title</th>
        <th>Author</th>
        <th colSpan="2">Action</th>
      </thead>
      <tbody>
        {data &&
          data.map((post, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{post.title}</td>
              <td>{post.user.name}</td>
              <td>
                <Link to={`/dashboard/posts/${post.slug}`} className="edit">
                  edit
                </Link>
                <Link
                  to="#"
                  onClick={(e) => deletePost(post.id)}
                  className="delete"
                >
                  delete
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PostItem;
