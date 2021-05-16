import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({ baseURL: "https://helpy-hyf.herokuapp.com" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//   }

//   return req;
// });


export const showHomePage = () => API.get("/api/home");


