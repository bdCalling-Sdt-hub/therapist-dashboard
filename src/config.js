import axios from "axios";

// "http://192.168.10.35:8000/api"
 const baseURL = axios.create({
  baseURL: "https://api.mindgaze.org/api/v1",
  // baseURL: "http://192.168.10.35:8000/api",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar", authorization: `Bearer ${localStorage.getItem("token")}` },

})

export default baseURL;