import React, { useEffect, useState, useContext, useCallback } from "react";
import Footer from "../footer/Footer";
import NavBar from "../header/NavBar";
import Main from "./Main";
import { fetchAll } from "../../api/Api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const posts = async () => {
      setPosts(await (await fetchAll()).data);
    };
    posts();
  }, []);
  //console.log(posts)

  return (
    <>
      <NavBar />
      <Main data={posts} />
      <Footer />
    </>
  );
};

export default Home;
