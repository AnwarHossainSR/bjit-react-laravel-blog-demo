import axios from "axios";
import Url from '../config'

let url = Url.basePublicUrl;
export const fetchAll = async (url) => {
  
  try {
    return await axios.get( `${url}` );
    
  } catch (error) {
       return error;
  }
};

export const fetchSinglePost = async (slug) => {
  try {
    return await axios.get(`${url}/posts/${slug}`);
  } catch (error) {
    return error;
  }
};

export const fetchPostByCategory = async (id) => {
  try {
    return await axios.get(`${url}/posts/category/${id}`);
  } catch (error) {
    return error;
  }
};

//reusable


export const storeApiData = async (url,data) => {
  try {
    return await axios.post(url,data);
  } catch (error) {
    return error;
  }
};
export const updateApiData = async (url,data) => {
  try {
    return await axios.put(url,data);
  } catch (error) {
    return error;
  }
};

export const getSingleApiData = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error;
  }
};

export const deleteApiData = async (url) => {
  try {
    return await axios.delete(url);
  } catch (error) {
    return error;
  }
};