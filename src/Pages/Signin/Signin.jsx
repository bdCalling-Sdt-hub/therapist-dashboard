import React, { useEffect, useState } from "react";
import { Input, Checkbox } from "antd";
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
      <div className=" w-[500px] h-[550px] p-[32px] bg-white shadow rounded-3xl my-auto mx-auto">
        <div>
          <img
            className="w-[87px] h-[86px]"
            src="https://i.ibb.co/BZyk1GG/image-2.png"
            alt=""
          />
          <h1 className="text-[32px] mt-[24px] text-primary font-bold">
            Welcome
          </h1>
          <h2 className="text-[20px] mt-[8px] font-medium">
            Please sign in for better experience
          </h2>
        </div>
        <div className="flex flex-col mt-[24px] gap-[27px]">
          <Input
          onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
            type="email"
          />
          <Input.Password
          onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
          />
        </div>
        <div className="flex flex-col gap-[20px] mt-[18px]">
          <div className="flex justify-between">
            <Checkbox className="text-[18px] items-center">
              Remember me
            </Checkbox>
            <h1 className="text-primary cursor-pointer text-[24px] font-medium">
              Forgot Password?
            </h1>
          </div>
          <div>
            <button onClick={handleLogin} className="w-full p-3 bg-primary rounded text-white text-[24px]">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
