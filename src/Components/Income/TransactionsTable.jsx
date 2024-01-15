import React, { useState } from "react";
import { Table, Pagination, ConfigProvider, Modal } from "antd";

function TransactionsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
  ];

  const columns = [
    {
      title: "accountType",
      dataIndex: "accountType",
      render: (_, record) => (
        <>
          <p className="w-[75px]">{record?.transactionsId}</p>
        </>
      ),
    },
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
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p>{record?.data}</p>
            <p>at {record?.timeRange}</p>
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
      0
    </div>
  );
}

export default TransactionsTable;
