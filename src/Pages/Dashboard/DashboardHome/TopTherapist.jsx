import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllTopTherapistQuery } from "../../../redux/Features/getAllTopTherapistApi";
import Loading from "../../../Components/Loading/Loading";


function TopTherapist() {
  const navigate = useNavigate();
  const {data,isSuccess,isLoading,isError} = useGetAllTopTherapistQuery();
  if(isLoading){
    return <Loading />
  }
  console.log(data?.data);
  return (
    <div className="bg-white border-1 shadow-xl border-secondary rounded-xl  w-[380px] p-[24px] pb-0 mt-[24px]">
      <div className="flex justify-between border-b-[2px] border-secondary  pb-[16px]">
        <h1 className="text-[18px] font-medium text-primary">Top Therapist</h1>
        <p onClick={() => navigate("/allTherapist")} className="text-[18px] font-medium text-primary cursor-pointer">
          See All
        </p>
      </div>
      <div className="flex flex-col overflow-hidden h-[345px] overflow-y-scroll">
        {
          data?.data?.map((item,index)=>{
            return (<div key={index} className="flex justify-between bg-secondary p-[8px] mt-[8px] rounded-[8px]">
            <div className="flex items-center gap-2">
              <img
                className="w-[40px] h-[40px] rounded-full"
                // src="https://i.ibb.co/8mjT8k3/Whats-App-Image-2024-01-10-at-9-52-25-AM.jpg"
                src={`${import.meta.env.VITE_BASE_URL}${item?.image?.publicFileURL}`}
                alt=""
              />
              <h1 className="text-[18px]">{item?.name}</h1>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[15px] text-yellow-400 h-[15px]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[12px]">({item?.rating})</span>
            </div>
          </div>)
        })
      }
    
      </div>
    </div>
  );
}

export default TopTherapist;
