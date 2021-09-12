import React, { useEffect, useState } from "react";
import NavBar from "../../../header/NavBar";
import Sidebar from "../../sidebar/Sidebar";
import "../Main.scss";
import url from "../../../../config";
import { fetchAll, storeApiData, getSingleApiData } from "../../../../api/Api";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const AddPost = () => {
  const { slug } = useParams();
  const [data, setdata] = useState([]);
  const [categories, setCategory] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [catId, setcatId] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const histry = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      histry.push("/sign-in");
    }
    const catFetch = async () => {
      setCategory(
        await (
          await fetchAll(`${url.basePublicUrl}/categories`)
        ).data.categories
      );
      setdata(
        await (
          await getSingleApiData(`${url.basePublicUrl}/posts/${slug}`)
        ).data.post
      );
    };
    catFetch();
  }, [setdata]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user-info"))
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("image", selectedFile);
    formData.append("category_id", catId);
    formData.append("user_id", user.id);
    await storeApiData(`${url.basePublicUrl}/posts/${data.id}`, formData).then(
      (res) => {
        console.log(res);
      }
    );
    toast.success("post updated successfully!");
    histry.push("/dashboard/posts");
  };

  return (
    <>
      <NavBar />
      <div className="admin-wrapper">
        <Sidebar />
        <div className="admin-content">
          <div className="content">
            <div className="content">
              <h2 className="page-title">Add Post</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={data.title}
                    onChange={(e) => settitle(e.target.value)}
                    className="text-input"
                  />
                </div>
                <div>
                  <label>Body</label>
                  <textarea
                    name="body"
                    id="body"
                    defaultValue={data.body}
                    onChange={(e) => setbody(e.target.value)}
                    cols="104"
                    rows="10"
                  />
                </div>
                <div>
                  <label>Image</label>
                  <input
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    name="image"
                    className="text-input"
                  />
                </div>
                <div>
                  <label>Category</label>
                  <select
                    name="category"
                    onChange={(e) => setcatId(e.target.value)}
                    className="text-input"
                  >
                    {categories.length > 0 &&
                      categories.map((item, i) => (
                        <option
                          key={i}
                          value={item.id}
                          selected={item.id == data.id}
                        >
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <button type="submit" className="btn btn-big">
                    Update Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
