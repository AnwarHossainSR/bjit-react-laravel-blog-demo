import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchAll } from "../../../api/Api";
import url from "../../../config";
import NavBar from "../../header/NavBar";
import Footer from "../../footer/Footer";
import Post from '../../main/Post'
import Search from '../../main/Search'

const SearchPost = () => {
  const { query } = useParams();
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const postFetch = async () => {
      setPost(
        await (
          await fetchAll(`${url.basePublicUrl}/posts/search/${query}`)
        ).data.posts
      );
    };
    postFetch();
  }, [query]);
  console.log(posts);
  return (
    <>
      <NavBar />
      <div className="page-wrapper">
        <div className="content clearfix">
          <div className="main-content">
            <h1 className="recent-post-title">Found posts <span className="red">{posts.length}</span> for : <span className="red">{query}</span></h1>
            <Post posts={posts} />
          </div>
          <div className="sidebar">
            <Search />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPost;
