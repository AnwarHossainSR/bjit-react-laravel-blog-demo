import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(props.users.users);
  }, [props] );
  return (
    <table>
      <thead>
        <th>SN</th>
        <th>Name</th>
        <th>Email</th>
        <th colSpan="2">Action</th>
      </thead>
      <tbody>
        {data &&
          data.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to="" className="delete">
                  edit
                </Link>
                <Link to="" className="edit">
                  delete
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default React.memo(UserItem);
