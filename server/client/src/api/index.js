import axios from "axios";

const API = axios.create(
  { baseURL: "https://grafartreklam.herokuapp.com/" },
  {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }
);

export const fetchPosts = () => API.get("/posts");
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/haber/ekle", newPost);
export const updatePost = (id, updatePost) =>
  API.patch(`/haber/guncelle/${id}`, updatePost);

export const deletePost = (id) => API.delete(`/haber/${id}`);

export const fetchReference = () => API.get("/referans");
export const createReference = (newReference) =>
  API.post("/referans/ekle", newReference);
export const updateReference = (id, updateReference) =>
  API.patch(`/referans/guncelle/${id}`, updateReference);
export const deleteReference = (id) => API.delete(`/referans/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const fetchUsers = () => API.get("/user");
export const fetchUsersDetails = () => API.get("/user/details");
export const deleteUser = (id) => API.delete(`/user/${id}`);
export const updateUser = (id, updateUser) =>
  API.patch(`/user/guncelle/${id}`, updateUser);

export const fetchStatistic = () => API.get("/statistic");
export const updateStatistic = (id, updateStatistic) =>
  API.patch(`/statistic/guncelle/${id}`, updateStatistic);

export const fetchSlogan = () => API.get("/slogan");
export const createSlogan = (newSlogan) => API.post("/slogan/ekle", newSlogan);

export const fetchPrinciple = () => API.get("/principle");
export const createPrinciple = (newPrinciple) =>
  API.post("/principle/ekle", newPrinciple);
export const updatePrinciple = (id, updatePrinciple) =>
  API.patch(`/principle/guncelle/${id}`, updatePrinciple);
export const deletePrinciple = (id) => API.delete(`/principle/${id}`);
