import React, { useState, useRef } from "react";
import { Table, Pagination, ConfigProvider, Modal } from "antd";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";
import { usePostAssigntMutation } from "../../redux/Features/postAssigntApi";
import Swal from "sweetalert2";
import baseURL from "../../config";

function TherapistsListAssignTable({ data, id: patientId }) {
  const [postAssign, { isLoading, isSuccess, isError, data: result }] = usePostAssigntMutation();
  const navigate = useNavigate();
  const [userDetails,setUserDetails] = useState({})
  const componentRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (value) => {
    setIsModalOpen(true);
    setUserDetails(value)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    
  };
  console.log(userDetails);
console.log(patientId,);
  // const handleAssign = async (therapistId) => {
  //   console.log(therapistId);
  //   try {
  //    const response = await postAssign({ patientId, therapistId }).unwrap();
  //    console.log(response);
  //     Swal.fire({
  //       position: "top-center",
  //       icon: "success",
  //       title: "Therapist assigned successfully",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     navigate(`/patientsRequest/${patientId}`);
  //   } catch (error) {
  //     console.log(error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: error,
  //     });
  //   }
  // };

  const handleAssign = async (therapistId) => {
    console.log(therapistId);
    try {
      // const response = await postAssign({ patientId, therapistId }).unwrap();
      const response = await baseURL.post(`/apointment/assign/${patientId}`, {therapistId},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
        
      );

      console.log(response);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Therapist assigned successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/patientsRequest/${patientId}`);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }   
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[16px]">{record?.name}</p>
          </div>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.email}</p>
        </>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[16px]">{record?.phone}</p>
          </div>
        </>
      ),
    },
    {
      title: "Type",
      dataIndex: "therapistType",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[16px]">{record?.therapistType}</p>
          </div>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div className="flex gap-2">
            <p
              onClick={() => handleAssign(record?._id)}
              className="px-6 py-1 text-[14px] bg-primary text-white font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Assign
            </p>
            <p
              onClick={()=>handleOpenModal(record)}
              className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Details
            </p>
          </div>
        </>
      ),
    },
  ];
// console.log(result,);
  return (
    <div>
      <div className="overflow-hidden px-5 h-[52vh]">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerColor: "#54A630",
                headerBorderRadius: 2,
              },
            },
          }}
        >
          <Table
            scroll={{
              y: 240,
            }}
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </ConfigProvider>
      </div>
      <div className="flex justify-between p-5">
        <div className="text-[18px] text-black">SHOWING 1-8 OF 250</div>
        <div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#54A630",
                borderRadius: 2,
                colorBgContainer: "#f6ffed",
              },
            }}
          >
            <Pagination defaultCurrent={1} total={50} />
          </ConfigProvider>
        </div>
      </div>

      <Modal
        visible={isModalOpen}
        title={
          <div className="py-2 border-b-[1px] border-primary font-['Montserrat']">
            <span className="text-[24px] text-primary">Therapist Details</span>
            <p className="text-[14px] text-[#B9B9B9]">See all details about {userDetails?.name}</p>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={500}
      >
        <div className="flex flex-col">
          <div className="flex gap-5 border-b-[1px] pb-2 border-primary">
          {
          userDetails?.image?.publicFileURL ? (
            <img
               className="w-[70px] h-[70px]"
              src="https://i.ibb.co/GtxhMsK/aiman.jpg"
              alt=""
            />
          ) : (
            <img
              className="w-[70px] h-[70px]"
              src={`${import.meta.env.VITE_BASE_URL}${userDetails?.image?.publicFileURL}`}
              alt=""
            />
          )
        }
            {/* <img
              className="w-[70px] h-[70px]"
              // src="https://i.ibb.co/Pw9b56k/b3b76175bc84084ec18597109498f96d.png"
              // src={`${import.meta.env.VITE_BASE_URL}/${userDetails?.image?.publicFileURL}` || "https://i.ibb.co/Pw9b56k/b3b76175bc84084ec18597109498f96d.png"}
              
              alt=""
            /> */}
            <div>
              <h1 className="text-primary text-[24px]">{userDetails?.name}</h1>
              <div className="flex items-center gap-1">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="text-[18px] font-medium">4.9</h1> */}
                {userDetails?.email}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold">Information</h1>
            <div className="text-[16px] flex flex-col gap-2">
              <p>Name: {userDetails?.name}</p>
              <p>Date of Birth: {userDetails?.dateOfBirth || "N/A"}</p>
              {/* <p>Survey Category: Teen Therapy (13-18)</p> */}
              <p>Email: {userDetails?.email}</p>
              {/* <p>Session Completed: 56</p> */}
            </div>
          </div>
          <div className="flex mt-[24px]">
            <p
              onClick={() => handleAssign(userDetails?._id)}
              className="px-6 py-1 text-[14px] bg-primary text-white font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Assign
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TherapistsListAssignTable;
