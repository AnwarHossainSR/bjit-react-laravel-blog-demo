import React from "react";
import Body from "./Body";
import "./Main.scss";
import Slide from "./slide/Slide";

const Main = (props) => {
  return (
    <div className="page-wrapper">
      <Slide sliders={props.data.slider} />
      <Body posts={props.data.posts} categories={props.data.categories} />
    </div>
  );
};

export default Main;
