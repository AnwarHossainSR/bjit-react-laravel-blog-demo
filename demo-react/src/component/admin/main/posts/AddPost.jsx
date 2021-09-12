import React, { useEffect, useReducer, useState } from "react";
import NavBar from "../../../header/NavBar";
import Sidebar from "../../sidebar/Sidebar";
import "../Main.scss";
import axios from "axios";
//import CategoryContext from '../../../../store/CategoryContext'
import url from "../../../../config";
import { fetchAll, storeApiData } from "../../../../api/Api";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';

const titleReducer = (state, action) => {
  if (action.val.length < 10) {
    return {
      value: action.val,
      isValid: "Title length must be grater than 10 ",
      type: action.type,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};

const bodyReducer = (state, action) => {
  if (action.val.length === 0) {
    return {
      value: action.val,
      isValid: "Description is required",
      type: action.type,
    };
  }
  if (action.val.length < 150) {
    return {
      value: action.val,
      isValid: "description must be grater than 150 charecters",
      type: action.type,
    };
  }

  return { value: action.val, isValid: true, type: action.type };
};

const AddPost = () => {
  const [categories, setCategory] = useState([]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [catId, setcatId] = useState("");
  const histry = useHistory();
  const [error, setError] = useState("");

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
    };
    catFetch();
  }, [setCategory]);
  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: "",
    isValid: null,
    type: "",
  });
  const [bodyState, dispatchBody] = useReducer(bodyReducer, {
    value: "",
    isValid: null,
    type: "",
  } );
  

  const { isValid: titleIsValid } = titleState;
  const { isValid: bodyIsValid } = bodyState;
  useEffect(() => {
    setTimeout(() => {
      setFormIsValid(titleIsValid && bodyIsValid);
    }, 500);
  }, [titleIsValid, bodyIsValid]);

  const titleChangeHandler = (event) => {
    dispatchTitle({ type: "title", val: event.target.value });
  };

  const bodyChangeHandler = (event) => {
    dispatchBody({ type: "body", val: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( formIsValid ) {
      const user = JSON.parse(localStorage.getItem("user-info"))
      const formData = new FormData();
      formData.append("title", titleState.value);
      formData.append("body", bodyState.value);
      formData.append("image", selectedFile);
      formData.append("category_id", catId);
      formData.append("user_id", user.id);
      await storeApiData(`${url.basePublicUrl}/post`, formData).then((res) => {
        toast.success('Post added successfully!', {
          position: "bottom-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme:'dark',
          progress: undefined,
        });
      } );
      histry.push("/dashboard/posts");
    } else {
      toast.error('please provide valid input!', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
        progress: undefined,
      });
      setError("Please provide valid input");
    }
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
              {error && (
                <div className="center">
                  <span className="error">
                    <br />
                    {error} <br />
                  </span>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={titleState.value}
                    onChange={titleChangeHandler}
                    className="text-input"
                  />
                  {titleState.isValid && (
                    <span className="error">{titleState.isValid}</span>
                  )}
                </div>
                <div>
                  <label>Body</label>
                  <textarea
                    name="body"
                    id="body"
                    value={bodyState.value}
                    onChange={bodyChangeHandler}
                    cols="104"
                    rows="10"
                  />
                  {bodyState.isValid && (
                    <span className="error">{bodyState.isValid}</span>
                  )}
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
                        <option key={i} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <button type="submit" className="btn btn-big">
                    Add Post
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
