import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import TherapistsListAssign from "../../../Components/Patients/TherapistsListAssign";
import { useGetSinglePatientsQuery } from "../../../redux/Features/getSinglePatientsApi";
import Loading from "../../../Components/Loading/Loading";
import { useGetAllTherapistQuery } from "../../../redux/Features/getAllTherapistApi";

function PatientRequestDetailsAssignTherapist() {
  const {id} = useParams();
  console.log(id);
  const navigate = useNavigate();
  const { data:singlePatients, isLoading, isError } = useGetSinglePatientsQuery({id});
  const {data: data2, isLoading: loading} = useGetAllTherapistQuery();
  if(isLoading || loading){
    return <Loading/>
  }

  console.log(singlePatients);
  console.log(data2?.data?.attributes);

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
              <p
                onClick={() => navigate(`/patientsRequest/${id}`)}
                className="text-[18px] font-semibold hover:text-primary cursor-pointer text-black"
              >
                Details
              </p>
            ),
          },
          {
            title: (
              <p className="text-[18px] text-primary font-semibold">
                Assign Therapist
              </p>
            ),
          },
        ]}
      />
      <div className="bg-white h-[306px] rounded-xl overflow-hidden mt-[24px]">
        <div>
          <div className="flex items-center gap-5 bg-white rounded-md  p-[16px]">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
                // src="https://i.ibb.co/f1YyLM4/Ellipse-2322.png"
                src={`${import.meta.env.VITE_BASE_URL}/${singlePatients?.data?.attributes?.image?.publicFileURL}`}
                alt=""
              />
            </div>
            <div className="flex gap-3 flex-col ">
              <div>
                <h1 className="text-[22px] font-semibold">{singlePatients?.data?.attributes?.name}</h1>
                {/* <p className="text-[14px] font-medium ">Teen Therapy(13-18)</p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Patients Details */}
        <div className="p-[24px]">
          <h1 className="text-[18px] font-semibold">Patient Details</h1>
          <p>User Name: {singlePatients?.data?.attributes?.name}</p>
          <p>Email: {singlePatients?.data?.attributes?.email}</p>
          <p>Date of Birth: {singlePatients?.data?.attributes?.dateOfBirth || "N/A"} </p>
          {/* <p>Survey: Teen Therapy(13-18)</p> */}
        </div>
      </div>

      <div>
        <TherapistsListAssign data={data2?.data?.attributes} id={id} />
      </div>
    </div>
  );
}

export default PatientRequestDetailsAssignTherapist;
