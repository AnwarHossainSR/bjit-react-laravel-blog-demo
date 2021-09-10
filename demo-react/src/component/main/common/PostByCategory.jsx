import React, { useEffect, useState } from "react";
import Main from "../Main";
import Footer from "../../footer/Footer";
import NavBar from "../../header/NavBar";
import { fetchPostByCategory } from "../../../api/Api";
import { useParams } from "react-router";

const PostByCategory = () => {
  const { id: id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const posts = async (id) => {
      setPosts(await (await fetchPostByCategory(id)).data);
    };
    posts(id);
  }, [id] );
     //console.log(posts)
  return (
    <>
      <NavBar />
      <Main data={posts} />
      <Footer />
    </>
  );
};

export default PostByCategory;
