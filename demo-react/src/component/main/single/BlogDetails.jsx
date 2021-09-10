import React, { useEffect, useState } from "react";
import NavBar from "../../header/NavBar";
import Footer from "../../footer/Footer";
import "./BlogDetails.scss";
import Main from "./main/Main";
import { useParams } from "react-router";
import { fetchSinglePost } from "../../../api/Api";

const BlogDetails = () => {
  const { slug: slug } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    const post = async () => {
      setData(await (await fetchSinglePost(slug)).data);
    };
    post();
  }, [slug] );
  return (
    <>
      <NavBar />
      <Main data={data}/>
      <Footer />
    </>
  );
};

export default React.memo(BlogDetails);
