import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllAssignListQuery } from "../../redux/Features/getAllAssignListApi";
import AssignCart from "../../Components/AssignCart/AssignCart";

const AssignPatientList = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetAllAssignListQuery({
    id,
  });
  console.log(id);
  console.log(data);

  return (
    <div>
     
      <div className="p-10">
        <h1 className="text-[24px] font-semibold text-white rounded bg-primary p-[16px]">
        Assign Patient List
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data?.data?.attributes?.map((item) => (
          <AssignCart data={item} key={item?._id} />
        ))}
      </div>
    </div>
  );
};

export default AssignPatientList;
