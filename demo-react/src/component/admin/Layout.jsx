import React, { useEffect, useState } from "react";
import NavBar from "../header/NavBar";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import config from '../../config'
import { fetchAll } from "../../api/Api";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';

const Layout = ( props ) => {
  const histry = useHistory()
  const [data, setData] = useState( [] );
  const user = JSON.parse(localStorage.getItem("user-info"))
  useEffect( () => {
    if ( !localStorage.getItem( "isLoggedIn" ) ) {
      toast.error('Please login first!', {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
        progress: undefined,
      });
      histry.push( "/sign-in" );
    }
    if ( user && user.admin == 0 ) {
      toast.error('you have not permission to access admin panel !', {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
        progress: undefined,
      });
      histry.push( "/" );
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
