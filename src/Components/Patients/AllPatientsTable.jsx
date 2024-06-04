import React, { useState } from "react";
import { Table, Pagination, ConfigProvider, Modal } from "antd";
import { useGetAllPatientsQuery } from "../../redux/Features/getAllPatientsApi";

function AllPatientsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const {data,isLoading,isSuccess,isError} = useGetAllPatientsQuery();
  console.log(data?.data?.attributes);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  const handleOpenModal = (record) => {
    console.log(record);
    setCurrentValue(record);
    setIsModalOpen(true);

  };
  const handleCancel = () => {
    setIsModalOpen(false);
    
  };

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
      dataIndex: "Phone",
      width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.phone}</p>
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
        dataSource={data?.data?.attributes}
      />
      
  


      <div>
        <Modal
          visible={isModalOpen}
          title={
            <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
              <span className="text-[24px] text-primary ">Patient Details</span>
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
            <div className="flex items-center gap-5 border-b-[1px] pb-2 border-primary">
              <img
                className="w-[70px] h-[70px]"
                src={`${import.meta.env.VITE_BASE_URL}${currentValue?.image?.publicFileURL
                }`}
                alt=""
              />
              <h1 className="text-primary text-[24px] ">{currentValue?.name}</h1>
            </div>
            <div>
              <h1 className=" text-[24px] font-semibold">Information</h1>
              <div className="text-[16px] flex flex-col gap-2">
                <p>Name: {currentValue?.name ? currentValue?.name : "N/A"}</p>
                <p>Email: {currentValue?.email ? currentValue?.email : "N/A"}</p>
                <p>Phone Number: {currentValue?.phone ? currentValue?.phone : "N/A"}</p>
                <p>Date of Birth: {currentValue?.address ? currentValue?.address  : "N/A"}</p>
                {/* <p>Gender: Male</p> */}
                {/* <p>Survey: Teen Therapy(13-18)</p> */}
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

export default AllPatientsTable;
