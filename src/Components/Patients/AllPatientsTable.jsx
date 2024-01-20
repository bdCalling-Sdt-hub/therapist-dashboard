import React, { useState } from "react";
import { Table, Pagination, ConfigProvider, Modal } from "antd";

function AllPatientsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
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
      dataIndex: "PhoneNumber",
      width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.phoneNumber}</p>
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
              onClick={handleOpenModal}
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
        pagination={false}
        columns={columns}
        dataSource={BlockListDAta}
      />
      <div className="flex justify-between p-5">
        <div className="text-[18px] text-primary">SHOWING 1-8 OF 250</div>
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
            <Pagination defaultCurrent={1} total={50} />
          </ConfigProvider>
        </div>
      </div>
      <div>
        <Modal
          visible={isModalOpen}
          title={
            <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
              <span className="text-[24px] text-primary ">Patient Details</span>
              <p className=" text-[14px] text-[#B9B9B9]">
                See all details about John Doe
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
                src="https://i.ibb.co/Pw9b56k/b3b76175bc84084ec18597109498f96d.png"
                alt=""
              />
              <h1 className="text-primary text-[24px] ">John Doe</h1>
            </div>
            <div>
              <h1 className=" text-[24px] font-semibold">Information</h1>
              <div className="text-[16px] flex flex-col gap-2">
                <p>Name: John Doe</p>
                <p>Email: 6bHnN@example.com</p>
                <p>Phone Number: 1234567890</p>
                <p>Date of Birth: 01/01/2000</p>
                <p>Gender: Male</p>
                <p>Survey: Teen Therapy(13-18)</p>
              </div>
            </div>
            <div className="flex mt-[24px]">
              <p className="bg-primary cursor-pointer px-5 py-2 text-white rounded">
                Block
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AllPatientsTable;
