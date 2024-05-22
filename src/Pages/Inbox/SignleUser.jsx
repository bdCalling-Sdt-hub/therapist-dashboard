import React from "react";
// import { imageUrl } from "../../lib/constant";

const SignleUser = ({ status, item, handleChat, setParticipantDetails }) => {

//   console.log(item?.message?.message)
setParticipantDetails(item);
// console.log(item);
  return (
    <div
      onClick={() => handleChat(item)}
      className={`{ ${
        status
          ? "bg-secondary flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
          : " flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
      } `}
    >
      <div>
        <img
          className="w-[60px] h-[60px] rounded-full"
          src={`${import.meta.env.VITE_BASE_URL}/${ item?.participantDetails?.image?.publicFileURL}`}
        // src={item?.img}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-primary font-semibold font-['Montserrat'] text-lg">
          {/* {item?.chat?.userId?.fullName} */}
          {item?.participantDetails?.name}
        </h1>
        <p className="text-sm font-normal font-['Montserrat']">
          {/* {item?.message?.message.slice(0, 11)} {item?.message?.message.length > 11 && "..."} */}
        { item?.lastMessage?.message ? item?.lastMessage?.message > 18 && "..." : "File Attached"}
        </p>
      </div>
    </div>
  );
};

export default SignleUser;