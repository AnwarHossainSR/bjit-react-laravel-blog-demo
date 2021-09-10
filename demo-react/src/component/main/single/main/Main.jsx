import React from "react";
import Body from "./Body";
import SideBar from "./sidebar/SideBar";

const Main = () => {
  return (
    <div className="page-wrapper">
      <div className="content clearfix">
        <Body />
        <SideBar />
      </div>
    </div>
  );
};

export default Main;
