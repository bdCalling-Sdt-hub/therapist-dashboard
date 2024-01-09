import { Badge } from "antd";
import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import baseAxios from "../../../Config";

const Header = () => {
  const date = new Date(); // Assuming the input date is in ISO 8601 format (YYYY-MM-DD)

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const userData = JSON.parse(localStorage.getItem("yourInfo"));
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex w-[1138px] justify-between  mt-[32px] mb-[16px]">
      <div>
        <svg
          className="cursor-pointer"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33325 8H26.6666M5.33325 16H26.6666M5.33325 24H26.6666"
            stroke="#54A630"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex gap-5">
        <div onClick={(e) => navigate("/notification")} className="relative flex items-center ">
          <IoIosNotificationsOutline
            style={{ cursor: "pointer" }}
            className={` bg-primary w-[40px] h-[40px] text-white rounded-full p-1 `}
          />
        </div>
        <div className="flex items-center cursor-pointer mr-[30px] bg-primary text-white rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[30px] h-[30px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
