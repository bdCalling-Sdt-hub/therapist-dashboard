import React from "react";
import { Input, Checkbox } from "antd";

function PasswordAndSecurity() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  console.log(currentPassword, newPassword, confirmPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[24px] font-semibold ">Change Password</h1>
        <p>
          A password should be more than 8 characters, including digits,
          letters, and symbols
        </p>
      </div>
      <div className="rounded-xl border-1 h-[325px] w-full p-[24px] flex flex-col bg-white border-secondary">
        <div>
          <h2 className="text-[12px] text-primary font-semibold">
            Current Password
          </h2>
          <Input.Password
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter your current password"
            className="p-4 bg-white rounded border border-primary justify-start items-center w-[1040px] mt-2 focus:border-primary "
          />
        </div>
        <div className="flex justify-between mt-5">
          <div className="">
            <h2 className="text-[12px] text-primary font-semibold">
              New Password
            </h2>
            <Input.Password
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
              className="p-4 bg-white rounded border border-primary justify-start items-center w-[500px]  mt-2 focus:border-primary "
            />
          </div>
          <div>
            <h2 className="text-[12px] text-primary font-semibold">
              Confirm Password
            </h2>
            <Input.Password
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your confirm password"
              className="p-4 bg-white rounded border border-primary justify-start items-center w-[500px]  mt-2 focus:border-primary "
            />
          </div>
        </div>
        <div>
          <h2 className="text-primary font-semibold my-4 cursor-pointer">Forgot Password?</h2>
        </div>
        <div>
          <button className="text-[16px] font-semibold text-white bg-primary p-[16px] py-[10px] rounded-md">Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default PasswordAndSecurity;
