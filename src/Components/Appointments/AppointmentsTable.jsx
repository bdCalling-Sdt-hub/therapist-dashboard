import React, { useState, useRef } from "react";
import { Table, Pagination, ConfigProvider, Modal, Rate } from "antd";
import { useReactToPrint } from "react-to-print";

function AppointmentsTable() {
  const componentRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });

  const data = [
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[16px]">{record?.name}</p>
            <p className="text-[#979797] text-[12px]">#{record?.userId}</p>
          </div>
        </>
      ),
    },
    {
      title: "accountType",
      dataIndex: "accountType",
      render: (_, record) => (
        <>
          <p>{record?.accountType}</p>
        </>
      ),
    },
    {
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p>{record?.data}</p>
            <p>{record?.timeRange}</p>
          </div>
        </>
      ),
    },
    {
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
              {record?.status}
            </p>
          </div>
        </>
      ),
    },
    {
      title: "viewDetails",
      dataIndex: "dataTime",
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

  return (
    <div>
      <div className="overflow-hidden px-5 h-[52vh] overflow-y-scroll">
        <Table
          showHeader={false}
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </div>
      <div className="flex justify-between p-5">
        <div className="text-[18px] text-black">SHOWING 1-8 OF 250</div>
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

      <Modal
        visible={isModalOpen}
        title={
          <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
            <div className="flex items-center gap-5">
              <span className="text-[24px] text-primary ">
                Appointment ID: #00014563{" "}
              </span>
              <span className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
                Completed
              </span>
            </div>
            <p className=" text-[14px] text-[#B9B9B9]">
              See all details about John Doe
            </p>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={900}
      >
        <div ref={componentRef} className="flex flex-col">
          <div className="flex items-center gap-5 border-b-[1px] pb-2 border-primary">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-[24px] font-semibold">Patient Details</h1>
                <div className="p-[8px]">
                  <p className="text-[16px]">Name: John Doe</p>
                  <p className="text-[16px]">Email: johndoe@gmail.com</p>
                </div>
              </div>
              <div>
                <h1 className="text-[24px] font-semibold">
                  Therapists Details
                </h1>
                <div className="p-[8px]">
                  <p className="text-[16px]">Name: John Doe</p>
                  <p className="text-[16px]">Email: johndoe@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="w-[720px] border-r-[1px] border-primary pl-5">
              <h1 className=" text-[24px] text-primary mt-[16px] font-semibold">
                Appointment Details
              </h1>
              <div>
                <p className="text-[16px]">
                  <span className="font-semibold">Appointment Date: </span>
                  12/12/2023
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">Appointment Time: </span>
                  02:00pm - 02:30pm
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">Treatment: </span>
                  Teen Therapy(13-18)
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">Total Session Time: </span>
                  01:30:36
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">Session Type: </span>
                  Video Call
                </p>
              </div>
            </div>
            <div>
              <h1 className=" text-[24px] mt-[16px] text-primary font-semibold">
                Patient Review
              </h1>
              <div className="py-4">
                <Rate allowHalf defaultValue={5} disabled />
              </div>
              <p className="text-[16px]">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo con
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-[24px] mx-auto">
            <p className="bg-primary cursor-pointer px-5 py-2 text-white rounded">
              Block
            </p>
            <p
              onClick={handlePrint}
              className="bg-primary cursor-pointer px-5 py-2 text-white rounded"
            >
              Download as PDF
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AppointmentsTable;
