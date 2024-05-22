import axios from "axios";

// "http://192.168.10.35:8000/api"
 const baseURL = axios.create({
  baseURL: "http://103.145.138.77:3000/api/v1",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar", authorization: `Bearer ${localStorage.getItem("token")}` },

})

export default baseURL;