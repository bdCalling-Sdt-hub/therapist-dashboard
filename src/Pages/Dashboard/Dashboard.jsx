import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
// icons
import { RxDashboard } from "react-icons/rx";
import { GiQueenCrown } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa6";

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
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  console.log(collapsed);

  const logout = () => {
    Swal.fire({
      title: "Do you want to Logout from here?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("yourInfo");

        navigate("/login");
      } else if (result.isDenied) {
        Swal.fire("Ok", "", "info");
      }
    });
  };
  const items = [
    getItem(
      <p onClick={(e) => navigate("/")} className="text-[20px] leading-normal">
        Dashboard
      </p>,
      "1",
      <RxDashboard style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p className="text-[20px] leading-normal">Therapist</p>,
      "sub1",
      <FaUserDoctor style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/allTherapist")}
            className="text-[20px] leading-normal"
          >
            All Therapist
          </li>,
          "2"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/therapistRequest")}
            className="text-[20px] leading-normal"
          >
            Therapist Request
          </li>,
          "3"
        ),
      ]
    ),

    getItem(
      <p
        onClick={(e) => navigate("/index")}
        className="text-[22px] leading-normal"
      >
        Inbox
      </p>,
      "15",

      <TiMessages style={{ fontSize: "18px" }} />
    ),



    getItem(
      <p className="text-[20px] leading-normal">Patient</p>,
      "sub2",
      <FaRegUser style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/allPatients")}
            className="text-[20px] leading-normal"
          >
            All Patients
          </li>,
          "4"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/patientsRequest")}
            className="text-[20px] leading-normal"
          >
            Patients Request
          </li>,
          "5"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/matchedTherapist")}
            className="text-[20px] leading-normal"
          >
            Matched Therapist
          </li>,
          "6"
        ),
      ]
    ),
    getItem(
      <p
        onClick={(e) => navigate("/appointments")}
        className="text-[20px] leading-normal"
      >
        Appointments
      </p>,
      "7",
      <BsBookmarkCheck style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/questionnaires")}
        className="text-[20px] leading-normal"
      >
        Questionnaires
      </p>,
      "8",
      <FaClipboardList style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/transaction")}
        className="text-[20px] leading-normal"
      >
        Transaction
      </p>,
      "9",
      <FaArrowRightArrowLeft style={{ fontSize: "18px" }} />
    ),

    getItem(
      <p className="text-[20px] leading-normal">Income</p>,
      "sub3",
      <IoWalletOutline style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/totalIncome")}
            className="text-[20px] leading-normal"
          >
            Total Income
          </li>,
          "10"
        ),
        getItem(
          <li
            onClick={(e) => navigate("/wallet")}
            className="text-[20px] leading-normal"
          >
            Wallet
          </li>,
          "11"
        ),
      ]
    ),
    getItem(
      <p
        onClick={(e) => navigate("/subscription")}
        className="text-[20px] leading-normal"
      >
        Subscription
      </p>,
      "12",
      <GiQueenCrown style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/settings")}
        className="text-[20px] leading-normal"
      >
        Settings
      </p>,
      "13",
      <IoMdSettings style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={logout} className="text-[20px] leading-normal">
        Logout
      </p>,
      "14",
      <TbLogout2 style={{ fontSize: "18px" }} />
    ),
  ];

  return (
    <div
      className="flex mx-auto overflow-hidden border-2 container rounded-xl shadow-xl"
      style={{ height: "100vh" }}
    >
      <div className="">
        <>
          <h1 className=" text-center text-white">
            <img
              onClick={(e) => navigate("/")}
              // onClick={toggleCollapsed}
              className="w-[220px] cursor-pointer mx-auto p-5"
              src="https://i.ibb.co/BZyk1GG/image-2.png"
              alt="logo"
            />
          </h1>
          <Menu
            style={{ overflowY: "auto", height: "80vh" }}
            className={`w-[302px] p-[20px] pt-0  pb-[60px] bg-white text-black  rounded-b-xl `}
            defaultSelectedKeys={["1"]}
            mode={mode}
            theme={theme}
            items={items}
            inlineCollapsed={collapsed}
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
