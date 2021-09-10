import React from "react";
import Body from "./Body";
import SideBar from "./sidebar/SideBar";

const Main = ( props ) => {
  return (
    <div className="page-wrapper">
      <div className="content clearfix">
        <Body post={props.data.post}/>
        <SideBar categories={props.data.categories} popular={props.data.popular}/>
      </div>
    </div>
  );
};

export default Main;
