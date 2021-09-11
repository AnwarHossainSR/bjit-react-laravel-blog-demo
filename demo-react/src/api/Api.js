import axios from "axios";
import Url from '../config'

let url = Url.basePublicUrl;
export const fetchAll = async () => {
  
  try {
    return await axios.get(`${url}/posts`);
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

export const storeApiData = async (url,user) => {
  try {
    return await axios.post(url,user);
  } catch (error) {
    return error;
  }
};