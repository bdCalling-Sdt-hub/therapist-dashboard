import React from 'react'
import { useNavigate } from "react-router-dom";
import baseURL from '../../config';
import Swal from 'sweetalert2';

function TherapistRequestCard({item}) {
  console.log(item);
    const navigate = useNavigate();
    const handleAcceptRequest =async (id) => {
      console.log(id);
      try{
const response = await baseURL.post(`/therapist/action/${id}`,{},{
  headers: {
    "Content-Type": "application/json",
    authentication: `Bearer ${localStorage.getItem("token")}`,
  }
});
  console.log(response);
  if(response?.data?.statusCode === "200"){
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Request Accepted Successfully',  
      footer: '<a href="">Why do I have this issue?</a>'
  
    })
    navigate("/allTherapist")
    window.location.reload()
  }


      }catch(error){
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',  
  footer: '<a href="">Why do I have this issue?</a>'

})
        }
    }
  return (
    <div className="flex bg-white rounded-md gap-5 col-span-1 h-[140px] mt-5 p-[16px]">
      <div>
        <img
          className="w-[100px] h-[100px] rounded-full"
          // src="https://i.ibb.co/f1YyLM4/Ellipse-2322.png"
          src={`${import.meta.env.VITE_BASE_URL}${item?.image?.publicFileURL}`}
          alt=""
        />
      </div>
      <div className="flex gap-3 flex-col ">
        <div>
          <h1 className="text-[28px] font-semibold">{item?.name}</h1>
          <p className="text-[12px] font-medium ">{item?.therapistType}</p>
        </div>
        <div className="flex gap-5">
          <button onClick={()=>handleAcceptRequest(item?._id)} className="text-white bg-primary text-[18px] rounded  px-[20px]  p-[4px] px-[20px] ">
            Accept
          </button>
          {/* <button
            // onClick={() => navigate("/patientsRequest/fslkdfs")}
            className=" border-[1px] border-primary text-primary text-[18px]  rounded  p-[4px] px-[20px] "
          >
            Delete
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default TherapistRequestCard