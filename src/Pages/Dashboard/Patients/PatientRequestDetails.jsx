import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";

function PatientRequestDetails() {
  const navigate = useNavigate();
  return (
    <div className="p-[24px]">
      <Breadcrumb
        separator={<p className="text-[18px] text-[#686868]">/</p>}
        items={[
          {
            title: (
              <p
                onClick={() => navigate("/patientsRequest")}
                className="text-[18px] font-semibold hover:text-primary cursor-pointer text-black"
              >
                Patients Request
              </p>
            ),
          },
          {
            title: (
              <p className="text-[18px] text-primary font-semibold">Details</p>
            ),
          },
        ]}
      />
      <div className="bg-white h-[79vh] rounded-xl overflow-hidden mt-[24px]">
        <div>
          <div className="flex bg-white rounded-md  p-[16px]">
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
              {/* <div className="flex gap-5">
                <button className="text-white bg-primary text-[18px] rounded  px-[20px]">
                  Accept
                </button>
                <button
                  onClick={() => navigate("/patientsRequest")}
                  className=" border-[1px] border-primary text-primary text-[18px]  rounded  p-[4px] px-[20px] "
                >
                  Delete
                </button>
              </div> */}
              <div className="flex gap-5">
                <button className=" border-[1px] border-primary text-primary text-[18px]  rounded  p-[4px] px-[20px] ">
                  Accepted
                </button>
                <button
                  onClick={() => navigate("/patientsRequest/skdfls/sdflkjsd")}
                  className="text-white bg-primary text-[18px] rounded  px-[20px]"
                >
                  Assign Therapist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default PatientRequestDetails;
