import React, { useEffect, useState } from "react";
import {  Input } from 'antd';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    // dispatch(UserData({ email: email, password: password }));
    if (email == "" || password == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
      });
    }
  };
  return (
    <div
      className="flex mx-auto overflow-hidden  w-[1440px] rounded-xl shadow-xl bg-[url('https://i.ibb.co/t2TdKRm/signin.png')] "
      style={{ height: "100vh" }}
    >
      <div className=" w-[500px] h-[550px] bg-white shadow rounded-3xl my-auto mx-auto">
        <div>
          <img src="https://i.ibb.co/BZyk1GG/image-2.png" alt="" />
          <h1>Welcome</h1>
          <h2>Please sign in for better experience</h2>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Signin;
