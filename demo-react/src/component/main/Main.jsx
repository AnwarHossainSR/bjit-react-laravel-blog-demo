import React from "react";
import Body from "./Body";
import "./Main.scss";
import Slide from "./slide/Slide";

const Main = () => {
  return (
    <div className="page-wrapper">
            <Slide />
            <Body />
    </div>
  );
};

export default Main;
