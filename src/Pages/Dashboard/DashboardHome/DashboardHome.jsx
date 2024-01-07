import React from "react";

function DashboardHome() {
  return (
    <div>
      <div className="flex">
        <div className="w-[708px] flex flex-col pl-[20px] pt-[20px]">
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
          <div className="">2</div>
          <div className="">3</div>
        </div>
        <div className="w-[342px] pl-[20px] pt-[20px]">right</div>
      </div>
    </div>
  );
}

export default DashboardHome;
