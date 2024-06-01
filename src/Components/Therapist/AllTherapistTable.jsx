import React, { useState } from "react";
import { Table, Pagination, ConfigProvider, Modal } from "antd";
import { useGetAllTherapistQuery } from "../../redux/Features/getAllTherapistApi";
import Loading from "../Loading/Loading";
function AllTherapistTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentValue, setCurrentValue] = useState(null);
  const {data,isLoading,isSuccess,isError} = useGetAllTherapistQuery();
  console.log(data);
  const handleOpenModal = (value) => {
    setIsModalOpen(true);
    setCurrentValue(value);
  };
  if(isLoading){
    return <Loading />
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
console.log(isError);
  const BlockListDAta = [
    {
      accountType: "user",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      surveyCategory: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      img: "",
    },
    {
      accountType: "user",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      surveyCategory: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      img: "",
    },
    {
      accountType: "user",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      surveyCategory: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      img: "",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
  ];
console.log(currentValue);
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
      width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.email}</p>
        </>
      ),
    },

    {
      title: "Phone Number",
      dataIndex: "PhoneNumber",
      // width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.phone}</p>
        </>
      ),
    },
    {
      title: "Type",
      dataIndex: "therapistType",
      // width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.therapistType}</p>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",

      render: (_, record) => (
        <>
          <div>
            <p
              onClick={()=>handleOpenModal(record)}
              className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Details
            </p>
          </div>
        </>
      ),
    },
  ];

  const headerStyle = {
    background: "whsite", // Set your desired background color
    color: "#54A630", // Set your desired text color
    // Add any other styles you want to apply to the entire header
  };
  const handleChangePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };
  const result = data?.data?.attributes

  const handlePdf = (value) => {
    window.open(`${import.meta.env.VITE_BASE_URL}/${value}`);
  };
console.log(data?.pagination?.totalItems);
  return (
    <div>
      <Table
        className="overflow-y-scroll"
        components={{
          header: {
            cell: (props) => <th style={headerStyle}>{props.children}</th>,
          },
        }}
        scroll={{
          y: 550,
        }}
        pagination={{
          position: ["bottomCenter"],
          current: currentPage,
            pageSize:10,
            total:data?.pagination?.totalItems,
            showSizeChanger: false,
            onChange: handleChangePage,
        }}
        columns={columns}
        dataSource={result}
      />
      <div className="flex justify-between p-5">
        {/* <div className="text-[18px] text-primary">SHOWING 1-8 OF 250</div> */}
        <div>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#54A630",
                borderRadius: 2,

                // Alias Token
                colorBgContainer: "#f6ffed",
              },
            }}
          >
            {/* <Pagination defaultCurrent={1} total={50} /> */}
          </ConfigProvider>
        </div>
      </div>
      <div>
        <Modal
          visible={isModalOpen}
          title={
            <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
              <span className="text-[24px] text-primary ">
                Therapist Details
              </span>
              <p className=" text-[14px] text-[#B9B9B9]">
                See all details about {currentValue?.name}
              </p>
            </div>
          }
          onCancel={handleCancel}
          centered
          footer={[]}
          width={500}
        >
          <div className="flex flex-col">
            <div className="flex items-center  gap-5 border-b-[1px] pb-2 border-primary">
              <img
                className="w-[70px] h-[70px]"
                src={`${import.meta.env.VITE_BASE_URL}/${currentValue?.image?.publicFileURL
                  }`}
                alt=""
              />
              <div>
                <h1 className="text-primary text-[24px] ">{currentValue?.name}</h1>

{/* 
                <div className="flex items-center gap-1">

                  <svg
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

                  <h1 className="text-[18px] font-medium">4.9</h1>
                </div> */}



              </div>
            </div>
            <div className="">
              <h1 className=" text-[24px] font-semibold">Information</h1>
              <div className="text-[16px] flex flex-col gap-2">
                <p>Name: {currentValue?.name}</p>
                <p>Email: {currentValue?.email}</p>
                <p>Phone: {currentValue?.phone}</p>
                <p>Date of Birth: {currentValue?.dateOfBirth}</p>
                {/* <p>Address: {currentValue?.address || "N/A"}</p>
                <p>Survey Category: {currentValue?.survey || "N/A"}</p>
                <p>Session Completed: {currentValue?.session || "N/A"}</p> */}
              </div>
              <h1 className=" text-[24px] font-semibold">Documents</h1>
              <div className="flex gap-5">

                <div
                  onClick={()=>handlePdf(currentValue?.certificate?.publicFileURL)}
                  className="bg-secondary flex  cursor-pointer items-center flex-col rounded gap-2 "
                >
                  <div className=" p-[10px] w-[76px] h-[76px] rounded-full mt-2 flex items-center mx-auto bg-[#8CC374]">
                    <img
                      className="ml-[9px]"
                      src="https://i.ibb.co/JtfwKNg/XMLID-2268.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-wrap p-2">{`${currentValue?.certificate?.publicFileURL.slice(0, 20)}...`}</h1>
                </div>
                <div
                  onClick={()=>handlePdf(currentValue?.resume?.publicFileURL)}
                  className="bg-secondary flex  text-wrap cursor-pointer  items-center flex-col rounded gap-2 "
                >
                  <div className=" p-[10px] w-[76px] h-[76px] rounded-full mt-2 flex items-center mx-auto bg-[#8CC374]">
                    <img
                      className="ml-[9px]"
                      src="https://i.ibb.co/JtfwKNg/XMLID-2268.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-wrap p-2">{`${currentValue?.resume?.publicFileURL.slice(0, 20)}...`}</h1>
                </div>
              </div>
            </div>
            {/* <div className="flex mt-[24px]">
              <p className="bg-primary cursor-pointer px-5 py-2 text-white rounded">
                Block
              </p>
            </div> */}
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AllTherapistTable;
