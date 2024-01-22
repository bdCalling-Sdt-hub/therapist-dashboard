import React from "react";

function PatientRequestCard() {
  return (
    <div className="flex bg-white rounded-md w-[385px] mt-5 p-[16px]">
      <div>
        <img
          className="w-[100px] h-[100px] rounded-full"
          src="https://i.ibb.co/f1YyLM4/Ellipse-2322.png"
          alt=""
        />
      </div>
      <div className="flex gap-3 flex-col ">
        <div>
          <h1 className="text-[22px] font-semibold">Dianne Russell</h1>
          <p className="text-[14px] font-medium ">Teen Therapy(13-18)</p>
        </div>
        <div className="flex gap-5">
          <button className="text-white bg-primary text-[18px] rounded  px-[20px]">
            Accept
          </button>
          <button className=" border-[1px] border-primary text-primary text-[18px]  rounded  p-[7px] px-[20px] ">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientRequestCard;
