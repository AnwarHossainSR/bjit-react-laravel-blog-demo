import React from "react";
import "./NotFound.scss";
import NavBar from "../component/header/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="notfound">
        <h1 className="red">There is no page for this url</h1>
      </div>
    </>
  );
};

export default NotFound;
