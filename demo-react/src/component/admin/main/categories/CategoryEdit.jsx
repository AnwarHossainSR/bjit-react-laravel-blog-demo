import React, { useState, useEffect, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "../../../header/NavBar";
import Sidebar from "../../sidebar/Sidebar";
import "../Main.scss";
import { getSingleApiData,updateApiData } from "../../../../api/Api";
import url from "../../../../config";
import { toast } from "react-toastify";

const CategoryEdit = () => {
  const { slug } = useParams();

  const histry = useHistory();
  const [data, setDost] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect( () => {
    if (!localStorage.getItem("isLoggedIn")) {
      histry.push( "/sign-in" );
    }
    const fetch = async () => {
      const data = await (await getSingleApiData(`${url.basePublicUrl}/categories/${slug}`)).data.categories;
      setDost(data);
    };
    fetch();
  }, [] );
     //console.log(data)

  const handleSubmit = async (e) => {
    e.preventDefault();
        const category = {
          name: name,
          description: description,
        };
    await updateApiData( `${url.basePublicUrl}/categories/${data.id}`, category ).then(
      (res) => {
        toast.success("Category updated successfully!", {
          position: "bottom-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          progress: undefined,
        });
      }
    );
    histry.push("/dashboard/categories");
  };
  return (
    <>
      <NavBar />
      <div className="admin-wrapper">
        <Sidebar />
        <div className="admin-content">
          <div className="content">
            <div className="content">
              <h2 className="page-title">Edit Category</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    defaultValue={data.name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-input"
                  />
                  {/* {nameState.isValid && (
                    <span className="error">{nameState.isValid}</span>
                  )} */}
                </div>
                <div>
                  <label>Description</label>
                  <br />
                  <textarea
                    name="description"
                    id="body"
                    defaultValue={data.description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                    cols="104"
                  />
                  {/* {descriptionState.isValid && (
                    <span className="error">{descriptionState.isValid}</span>
                  )} */}
                </div>
                <div>
                  <button type="submit" className="btn btn-big">
                    Update Category
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

export default CategoryEdit;
