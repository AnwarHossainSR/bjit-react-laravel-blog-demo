import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <div class="admin-wrapper">
        <Sidebar />
        <Main url={props.url} title={props.title} />
      </div>
    </>
  );
};

export default Layout;
