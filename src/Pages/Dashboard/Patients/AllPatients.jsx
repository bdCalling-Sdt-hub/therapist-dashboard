import React from "react";
import { Input } from "antd";
import AllPatientsTable from "../../../Components/Patients/AllPatientsTable";
import { useGetAllPatientsQuery } from "../../../redux/Features/getAllPatientsApi";

function AllPatients() {
  const {data,isLoading,isSuccess,isError} = useGetAllPatientsQuery();
  console.log(data?.data?.attributes);
  return (
    <div className="p-[24px] ">
      <div className="bg-white h-[85vh] rounded-xl overflow-hidden">
        <div className="flex justify-between py-[20px] p-[20px] bg-primary">
          <h1 className="text-[32px] text-white">Patient List</h1>
          <div>
            <Input
              placeholder="Search Patient"
              className="p-[14px] w-[300px] bg-white rounded-lg"
              prefix={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.60051 12.75 2.25 10.3995 2.25 7.5C2.25 4.60051 4.60051 2.25 7.5 2.25C10.3995 2.25 12.75 4.60051 12.75 7.5Z"
                    stroke="#54A630"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <div>
          <AllPatientsTable />
        </div>
      </div>
    </div>
  );
}

export default AllPatients;
