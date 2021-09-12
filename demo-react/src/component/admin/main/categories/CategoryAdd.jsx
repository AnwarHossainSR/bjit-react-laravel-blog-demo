import React, { useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../../header/NavBar";
import Sidebar from "../../sidebar/Sidebar";
import "../Main.scss";
import { storeApiData } from "../../../../api/Api";
import url from "../../../../config";
import { toast } from 'react-toastify';


const nameReducer = (state, action) => {
  if (action.val.length < 6) {
    return {
      value: action.val,
      isValid: "Name must be grater than 6",
      type: action.type,
    };
  }
  return { value: action.val, isValid: true, type: action.type };
};
const descriptionReducer = (state, action) => {
  if (action.val.length < 10) {
    return {
      value: action.val,
      isValid: "Description must be grater than 10",
      type: action.type,
    };
  }
  return { value: action.val, isValid: true, type: action.type };
};
const CategoryAdd = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    isValid: null,
    type: "",
  });
  const [descriptionState, dispatchDescription] = useReducer(
    descriptionReducer,
    {
      value: "",
      isValid: null,
      type: "",
    }
  );
  const histry = useHistory();
  const NameChangeHandler = (event) => {
    dispatchName({ type: "name", val: event.target.value });
  };

  const descriptionChangeHandler = (event) => {
    dispatchDescription({ type: "description", val: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = {
      name: nameState.value,
      description: descriptionState.value,
       };
    await storeApiData( `${url.basePublicUrl}/category`, category );
    toast.success('Category added successfully!', {
      position: "bottom-right",
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme:'dark',
      progress: undefined,
    });
    histry.push("/dashboard/categories");
  };
  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      histry.push( "/sign-in" );
      toast.error('Please login first!', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme:'dark',
        progress: undefined,
      });
    }
  }, [])
  return (
    <>
      <NavBar />
      <div className="admin-wrapper">
        <Sidebar />
        <div className="admin-content">
          <div className="content">
            <div className="content">
              <h2 className="page-title">Add Category</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={nameState.value}
                    onChange={NameChangeHandler}
                    className="text-input"
                  />
                  {nameState.isValid && (
                    <span className="error">{nameState.isValid}</span>
                  )}
                </div>
                <div>
                  <label>Description</label>
                  <br />
                  <textarea
                    name="description"
                    id="body"
                    value={descriptionState.value}
                    onChange={descriptionChangeHandler}
                    rows="4"
                    cols="104"
                  />
                  {descriptionState.isValid && (
                    <span className="error">{descriptionState.isValid}</span>
                  )}
                </div>
                <div>
                  <button type="submit" className="btn btn-big">
                    Add Category
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

export default CategoryAdd;
