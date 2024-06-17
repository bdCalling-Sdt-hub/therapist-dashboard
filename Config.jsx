import axios from "axios";
const token = localStorage.getItem("token");

const baseAxios = axios.create({
  // baseURL: "http://103.145.138.54:3000/api/v1",
  baseURL: "http://134.209.26.75/api/v1",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar", Authorization: `Bearer ${token}` },
});

export default baseAxios;
