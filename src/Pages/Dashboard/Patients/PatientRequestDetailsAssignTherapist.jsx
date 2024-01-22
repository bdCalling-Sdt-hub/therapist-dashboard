import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";

function PatientRequestDetailsAssignTherapist() {
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
              <p  onClick={() => navigate("/patientsRequest/sdfsd")} className="text-[18px] font-semibold hover:text-primary cursor-pointer text-black">Details</p>
            ),
          },
          {
            title: (
              <p className="text-[18px] text-primary font-semibold">Assign Therapist</p>
            ),
          },
        ]}
      />
       <div className="bg-white h-[386px] rounded-xl overflow-hidden mt-[24px]">
        </div>
    </div>
  );
}

export default PatientRequestDetailsAssignTherapist;
