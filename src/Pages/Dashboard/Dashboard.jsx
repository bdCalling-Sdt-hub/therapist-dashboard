import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
// icons
import { RxDashboard } from "react-icons/rx";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoWalletOutline,IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

import { Menu } from "antd";
import Swal from "sweetalert2";
import Header from "../../Components/Header/Header";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");

  // const logout = () => {
  //   Swal.fire({
  //     title: "Do you want to Logout from here?",
  //     showDenyButton: true,
  //     showCancelButton: false,
  //     confirmButtonText: "Yes",
  //     denyButtonText: `No`,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("yourInfo");

  //       navigate("/signin");
  //     } else if (result.isDenied) {
  //       Swal.fire("Ok", "", "info");
  //     }
  //   });
  // };

  const items = [
    getItem(
      <p onClick={(e) => navigate("/")} className="text-[20px] leading-normal">
        Dashboard
      </p>,
      "1",
      <RxDashboard style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={(e) => navigate("/therapistList")} className="text-[20px] leading-normal">
        Therapist List
      </p>,
      "2",
      <FaUserDoctor style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={(e) => navigate("/patientList")} className="text-[20px] leading-normal">
        Patient List
      </p>,
      "3",
      <FaRegUser style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={(e) => navigate("/appointments")} className="text-[20px] leading-normal">
       Appointments
      </p>,
      "4",
      <BsBookmarkCheck style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={(e) => navigate("/transaction")} className="text-[20px] leading-normal">
     Transaction
      </p>,
      "5",
      <FaArrowRightArrowLeft style={{ fontSize: "18px" }} />
    ),

    getItem(
      <p className="text-[20px] leading-normal">Income</p>,
      "sub1",
      <IoWalletOutline style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/totalIncome")}
            className="text-[20px] leading-normal"
          >
            Total Income
          </li>,
          "6"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/wallet")}
            className="text-[20px] leading-normal"
          >
          Wallet
          </li>,
          "7"
        ),

      ]
    ),
    getItem(
      <p onClick={(e) => navigate("/subscription")} className="text-[20px] leading-normal">
     Subscription
      </p>,
      "8",
      <RxDashboard style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={(e) => navigate("/settings")} className="text-[20px] leading-normal">
     Settings
      </p>,
      "9",
      <IoMdSettings style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={(e) => navigate("/")} className="text-[20px] leading-normal">
     Logout
      </p>,
      "10",
      <TbLogout2 style={{ fontSize: "18px" }} />
    ),
  ];

  return (
    <div
      className="flex mx-auto overflow-hidden border-2 w-[1440px] rounded-xl shadow-xl"
      style={{ height: "100vh" }}
    >
      <div className="">
        <>
          <h1 className=" text-center text-white">
            <img
              onClick={(e) => navigate("/")}
              className="w-[220px] cursor-pointer mx-auto p-5"
              src="https://i.ibb.co/BZyk1GG/image-2.png"
              alt=""
            />
          </h1>
          <Menu
            style={{ overflowY: "auto", height: "80vh" }}
            className="w-[302px] p-[20px] pt-0  bg-white text-black  rounded-b-xl "
            defaultSelectedKeys={["1"]}
            // defaultOpenKeys={["sub1"]}
            mode={mode}
            theme={theme}
            items={items}
          />
        </>
      </div>
      <div>
        <div>
          <Header />
        </div>
        <div className="bg-secondary  w-[1138px] h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
