import React, { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import Main from "./Main";
import { fetchAll } from "../../api/Api";
import config from '../../config'

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
   
    const posts = async () => {
      setPosts(await (await fetchAll(`${config.basePublicUrl}/posts`)).data);
    };
    posts();
  }, []);
  return (
    <>
      <NavBar />
      <Main data={posts} />
      <Footer />
    </>
  );
};

export default Home;
