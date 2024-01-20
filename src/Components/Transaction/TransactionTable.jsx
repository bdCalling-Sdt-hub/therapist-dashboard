import React, { useState, useRef } from "react";
import { Table, Pagination, ConfigProvider, Modal, Rate, Input } from "antd";
import { useReactToPrint } from "react-to-print";

function TransactionTable() {
  const componentRef = useRef();
  const [isModalOpenDetails, setIsModalOpenDetails] = useState(false);
  const [isModalOpenSendMoney, setIsModalOpenSendMoney] = useState(false);

  const handleOpenModalDetails = () => {
    setIsModalOpenDetails(true);
  };
  const handleOpenModalSendMoney = () => {
    setIsModalOpenSendMoney(true);
  };
  const handleCancelDetails = () => {
    setIsModalOpenDetails(false);
  };
  const handleCancelSendMoney = () => {
    setIsModalOpenSendMoney(false);
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
      transactionId: "3CW489645W55697589",
      therapistName: "Esther Howard",
      price: 600,
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Pending",
      transactionId: "3CW489645W55697589",
      therapistName: "Esther Howard",
      price: 600,
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Pending",
      transactionId: "3CW489645W55697589",
      therapistName: "Esther Howard",
      price: 600,
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
      transactionId: "3CW489645W55697589",
      therapistName: "Esther Howard",
      price: 600,
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Pending",
      transactionId: "3CW489645W55697589",
      therapistName: "Esther Howard",
      price: 600,
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
      transactionId: "3CW489645W55697589",
      therapistName: "Esther Howard",
      price: 600,
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Pending",
      transactionId: "3CW489645W55697589",
      therapistName: "Esther Howard",
      price: 600,
    },
  ];

  const columns = [
    {
      title: "transactionsId",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[12px] w-[80px]">{record?.transactionId}</p>
          </div>
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
            {record?.status === "Completed" ? (
              <p className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
                Completed
              </p>
            ) : (
              <p className="text-[#6B6319] text-[12px] rounded inline-block px-1 bg-[#FFF9C2]">
                Pending
              </p>
            )}
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
            {record?.status === "Completed" ? (
              <p
                onClick={handleOpenModalDetails}
                className="px-[40px] py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
              >
                Details
              </p>
            ) : (
              <p
                onClick={handleOpenModalSendMoney}
                className="px-6 py-1 text-[14px] bg-primary text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
              >
                Send Money
              </p>
            )}
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
        visible={isModalOpenDetails}
        title={
          <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
            <div className="flex items-center gap-5">
              <span className="text-[24px] text-primary ">
                Transaction ID:#3CW489645W55697589
              </span>
            </div>
          </div>
        }
        onCancel={handleCancelDetails}
        centered
        footer={[]}
        width={900}
      >
        <div ref={componentRef} className="flex flex-col">
          <div className="flex items-center gap-5 border-b-[1px] pb-2 border-primary">
            <div className="flex flex-col gap-5">
              <h1 className="text-[24px] font-semibold">
                Patient Transaction Details
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-[16px]">
                  <span className="">Transaction ID: </span>
                  #3CW489645W55697589
                </p>
                <p className="text-[16px]">
                  <span className="">Patient Name: </span>
                  John Doe
                </p>
                <p className="text-[16px]">
                  <span className="">Therapist Name: </span>
                  Jeny Cooper
                </p>
                <p className="text-[16px]">
                  <span className="">Therapist Id: </span>
                  MGT000002
                </p>
                <p className="text-[16px]">
                  <span className="">Time & Date: </span>
                  01/12/2023 at 8:30 pm
                </p>
                <p className="text-[16px]">
                  <span className="">Amount: </span>
                  600 Bwp
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 border-b-[1px] pb-2 border-primary">
            <div className="flex flex-col gap-5">
              <h1 className="text-[24px] font-semibold">
                Therapist Transaction Details
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-[16px]">
                  <span className="">Transaction ID: </span>
                  #3CW489645W55697589
                </p>
                <p className="text-[16px]">
                  <span className="">Therapist Name: </span>
                  Jeny Cooper
                </p>
                <p className="text-[16px]">
                  <span className="">Therapist Id: </span>
                  MGT000002
                </p>
                <p className="text-[16px]">
                  <span className="">Account Number: </span>
                  **** **** 4589
                </p>
                <p className="text-[16px]">
                  <span className="">Account Holder Name: </span>
                  Jeny Cooper
                </p>
                <p className="text-[16px]">
                  <span className="">Received Amount: </span>
                  600 Bwp
                </p>
                <p className="text-[16px]">
                  <span className="">Mindgaze Fee: </span>
                  60 Bwp
                </p>
                <p className="text-[16px]">
                  <span className="">Total Amount: </span>
                  600 Bwp
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-[24px]">
            <p
              onClick={handlePrint}
              className="bg-primary cursor-pointer px-5 py-2 text-white rounded"
            >
              Download as PDF
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isModalOpenSendMoney}
        title={
          <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
            <div className="flex items-center gap-5">
              <span className="text-[24px] text-primary ">
                Transaction ID:#3CW489645W55697589
              </span>
            </div>
          </div>
        }
        onCancel={handleCancelSendMoney}
        centered
        footer={[]}
        width={900}
      >
        <div ref={componentRef} className="flex flex-col">
          <div className="flex items-center gap-5 border-b-[1px] pb-2 border-primary">
            <div className="flex flex-col gap-5">
              <h1 className="text-[24px] font-semibold">
                Patient Transaction Details
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-[16px]">
                  <span className="">Transaction ID: </span>
                  #3CW489645W55697589
                </p>
                <p className="text-[16px]">
                  <span className="">Patient Name: </span>
                  John Doe
                </p>
                <p className="text-[16px]">
                  <span className="">Therapist Name: </span>
                  Jeny Cooper
                </p>
                <p className="text-[16px]">
                  <span className="">Therapist Id: </span>
                  MGT000002
                </p>
                <p className="text-[16px]">
                  <span className="">Time & Date: </span>
                  01/12/2023 at 8:30 pm
                </p>
                <p className="text-[16px]">
                  <span className="">Amount: </span>
                  600 Bwp
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 pb-2 ">
            <div className="flex flex-col gap-5">
              <h1 className="text-[24px] font-semibold">
                Send Money to the Therapist
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 w-[850px] justify-between">
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Therapist ID"
                    className="p-4  bg-white rounded border border-primary w-full justify-start items-center gap-4  focus:border-primary "
                    type="text"
                  />
                  <Input
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Name"
                    className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
                    type="text"
                  />
                </div>
                <div className="flex gap-4 w-[850px] justify-between">
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Account Number"
                    className="p-4  bg-white rounded border border-primary w-full justify-start items-center gap-4  focus:border-primary "
                    type="number"
                  />
                  <Input
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Account Holder Name"
                    className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
                    type="text"
                  />
                </div>
                <div className="flex gap-4 w-[850px] justify-between">
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Received Amount"
                    className="p-4  bg-white rounded border border-primary w-full justify-start items-center gap-4  focus:border-primary "
                    type="number"
                  />
                  <Input
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Mind Gaze Fees"
                    className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
                    type="text"
                  />
                </div>
                <div className="flex gap-4 w-[417px] justify-between">
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Amount"
                    className="p-4  bg-white rounded border border-primary w-full justify-start items-center gap-4  focus:border-primary "
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-[24px] ">
            <p className="bg-primary cursor-pointer px-5 py-2 text-white rounded">
              Send Money
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TransactionTable;
