import React, { useState } from "react";
import { Modal, Input } from "antd";

function ForgotPassword({ isModalOpen, setIsModalOpen, handleCancel }) {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Modal
        open={isModalOpen}
        title={
          <div className="text-[32px] py-2 border-b-2 border-primary border-none font-semibold font-['Montserrat'] text-primary">
            <span >Email</span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={500}
        // height={540}
      >
        <div className="flex flex-col">
          <div className="mb-4 w-full">
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
          </div>

          <div className="cursor-pointer">
            <div className="w-full h-[60px] p-2.5 bg-primary rounded-md justify-center items-center  gap-2.5 inline-flex">
              <div className="text-white text-lg py-5 font-semibold font-['Montserrat']">
                Get OTP
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
