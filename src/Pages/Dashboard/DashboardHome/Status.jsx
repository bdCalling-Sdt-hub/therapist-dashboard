import React from "react";

function Status() {
  return (
    <div className="flex gap-5">
      <div className="bg-white border-1 shadow-xl border-secondary rounded-xl  w-[220px] p-[24px] ">
        <div className="flex justify-evenly items-center">
          <img
            className="w-[44px] h-[44px]"
            src="https://i.ibb.co/4KnTTvP/Patient.png"
            alt=""
          />
          <div>
            <h1 className="text-[16px] font-medium">Total User</h1>
            <p className="text-[24px] text-primary font-bold">780</p>
          </div>
        </div>
      </div>
      <div className="bg-white border-1 shadow-xl border-secondary rounded-xl  w-[220px] p-[24px] ">
        <div className="flex justify-evenly items-center">
          <img
            className="w-[44px] h-[44px]"
            src="https://i.ibb.co/B4rPVBj/Doctor.png"
            alt=""
          />
          <div>
            <h1 className="text-[16px] font-medium">Total Therapist</h1>
            <p className="text-[24px] text-primary font-bold">880</p>
          </div>
        </div>
      </div>
      <div className="bg-white border-1 shadow-xl border-secondary rounded-xl  w-[220px] p-[24px] ">
        <div className="flex justify-evenly items-center">
          <img
            className="w-[44px] h-[44px]"
            src="https://i.ibb.co/djD11JY/Income.png"
            alt=""
          />
          <div>
            <h1 className="text-[16px] font-medium">Total Income</h1>
            <p className="text-[24px] text-primary font-bold">578</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
