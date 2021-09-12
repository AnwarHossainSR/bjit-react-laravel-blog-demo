import React, { useEffect, useState } from "react";
import NavBar from "../header/NavBar";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import config from '../../config'
import { fetchAll } from "../../api/Api";
import { useHistory } from "react-router";

const Layout = ( props ) => {
  const histry = useHistory()
  const [data, setData] = useState( [] );
  useEffect( () => {
    if (!localStorage.getItem("isLoggedIn")) {
      histry.push( "/sign-in" );
    }
    const fetchApiData = async () => {
      if ( props.url == 'categories' ) {
        setData( await ( await fetchAll( `${config.basePublicUrl}/categories` ) ).data )
      }
      if ( props.url == 'users' ) {
        setData( await ( await fetchAll( `${config.basePublicUrl}/users` ) ).data )
      }
      if ( props.url == 'posts' ) {
        setData( await ( await fetchAll( `${config.basePublicUrl}/posts` ) ).data )
      }
    };
    fetchApiData();
  }, [] );
  return (
    <>
      <NavBar />
      <div className="admin-wrapper">
        <Sidebar />
        <Main data={data} url={props.url} title={props.title} />
      </div>
    </>
  );
};

export default Layout;
