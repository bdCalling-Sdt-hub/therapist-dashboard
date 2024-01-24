import React, { useEffect, useState } from "react";
import { Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import OtpInput from "react-otp-input";

function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleOtpResend = () => {
    console.log("Otp Resend");
  };
  const handleVerifyOtp = () => {
    navigate("/new-password/skfljsd");
    console.log("Verify Otp");
  };
  return (
    <div
      className="flex mx-auto overflow-hidden  w-[1440px] rounded-xl shadow-xl bg-[url('https://i.ibb.co/t2TdKRm/signin.png')] "
      style={{ height: "100vh" }}
    >
      <div className=" w-[500px] h-[550px] p-[32px] bg-white shadow rounded-3xl my-auto mx-auto">
        <div>
          <svg
            onClick={() => navigate("/login")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <h1 className="text-[32px] mt-[24px] text-primary font-medium">
            Verify OTP
          </h1>
          <h2 className="text-[18px] mt-[8px] font-medium">
            We have sent you an OTP to your email address.Please check it and
            place the otp for resetting password 
          </h2>
        </div>
        <div className="flex flex-col mt-[24px] gap-[27px]">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              width: "70px",
              height: "80px",
              fontSize: "50px",
              borderRadius: "5px",
              border: "1px solid #54A630",
            }}
            renderSeparator={<span style={{ width: "20px" }}></span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <div className="flex flex-col gap-[20px] mt-[18px]">
          <div className="flex justify-between">
            <h1 className="text-[18px]">Didn’t get OTP?</h1>
            <h1
              onClick={handleOtpResend}
              className="text-primary cursor-pointer text-[24px] font-medium"
            >
              Resend
            </h1>
          </div>
          <div>
            <button
              onClick={handleVerifyOtp}
              className="w-full mt-[68px] p-3 bg-primary rounded text-white text-[24px]"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
