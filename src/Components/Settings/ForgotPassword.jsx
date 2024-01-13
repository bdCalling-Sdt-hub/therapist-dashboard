import React, { useState } from "react";
import { Modal, Input } from "antd";
import OtpInput from "react-otp-input";

function ForgotPassword({ isModalOpen, setIsModalOpen, handleCancel }) {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [isNewPasswordSet, setIsNewPasswordSet] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleGetOTP = () => {
    // Logic to send OTP to the provided email
    // Update state to move to the next step
    setStep(2);
    console.log("send otp");
  };

  const handleVerifyOTP = () => {
    // Logic to verify the entered OTP
    // Update state to move to the next step
    setStep(3);
    console.log("verify otp");
  };

  const handleSetNewPassword = () => {
    // Logic to set a new password
    // Update state or perform any necessary actions
    setIsNewPasswordSet(true);
    // Optionally close the modal

    setIsModalOpen(false);
    setStep(1);
    console.log("set new password");
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <p className="text-zinc-80 text-[18px] pb-2 font-semibold font-['Montserrat']">
              Enter your email address to ger a verification code for resetting
              your password.
            </p>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-4 mt-[24px] mb-[170px] bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
              type="email"
            />

            <div onClick={handleGetOTP} className="cursor-pointer">
              <div className="w-full h-[60px] p-2.5 bg-primary rounded-md justify-center items-center  gap-2.5 inline-flex">
                <div className="text-white text-lg py-5 font-semibold font-['Montserrat']">
                  Get OTP
                </div>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <p className="text-zinc-80 text-[18px] pb-2 font-semibold font-['Montserrat']">
              We have sent you an OTP to your email address.Please check it and
              place the otp for resetting password
            </p>

            <div className="flex flex-col mt-[24px] my-[16px] gap-[27px]">
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

            <div className="flex justify-between mb-[60px]">
              <p className="text-[18px]">Didn’t get OTP?</p>
              <p className="text-primary text-[24px]">Resend</p>
            </div>

            <div onClick={handleVerifyOTP} className="cursor-pointer">
              <div className="w-full h-[60px] p-2.5 bg-primary rounded-md justify-center items-center  gap-2.5 inline-flex">
                <div className="text-white text-lg py-5 font-semibold font-['Montserrat']">
                  Verify
                </div>
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <p className="text-zinc-80 text-[18px] pb-2 font-semibold font-['Montserrat']">
              A password should be more than 8 characters, including digits,
              letters, and symbols
            </p>

            <div className="flex flex-col mt-[24px] gap-[27px] mb-[80px]">
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
                className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
              />
              <Input.Password
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
              />
            </div>

            <div onClick={handleSetNewPassword} className="cursor-pointer">
              <div className="w-full h-[60px] p-2.5 bg-primary rounded-md justify-center items-center  gap-2.5 inline-flex">
                <div className="text-white text-lg py-5 font-semibold font-['Montserrat']">
                  Confirm
                </div>
              </div>
            </div>
          </>
        )
      default:
        return null;
    }
  };

  return (
    <div>
      <Modal
        visible={isModalOpen}
        title={
          <div className="text-[32px] py-2 border-b-2 border-primary border-none font-semibold font-['Montserrat'] text-primary">
            <span>
              {step === 1
                ? "Email"
                : step === 2
                ? "Verify OTP"
                : step === 3
                ? "Set Password"
                : null}
            </span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={500}
      >
        <div className="flex flex-col">{renderContent()}</div>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
