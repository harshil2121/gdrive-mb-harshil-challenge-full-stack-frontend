import axios from "axios";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI
  ? process.env.REACT_APP_BACKEND_URI
  : "";

export const api = () => {
  return axios.create({
    baseURL: `${BACKEND_URI}/`,
  });
};

export const handleResponse = (res) => {
  try {
    const data = res.data;
    if (res.data.error) {
      const error = data.message ? data.message : data.error;
      return Promise.reject(error);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleError = (err) => {
  if (err.response.status === 401) {
    window.location = "/";
  }
  return err.response.data;
};
