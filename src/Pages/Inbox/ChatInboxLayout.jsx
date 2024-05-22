import React, { useEffect, useState } from 'react';
import NoChatOpen from './NoChatOpen';
import SinglePersonChatDetails from './SinglePersonChatDetails';
import MessageList from './MessageList';
import baseURL from '../../config';


const data = [
  {
    _id: 1,
    name: "Esther Howard",
   img:"https://i.ibb.co/VBcnsLy/download.jpg",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, facilis?",
    chat:{

    }
  },
  {
    _id: 2,
    name: "Ahad",
   img:"https://i.ibb.co/VBcnsLy/download.jpg",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, facilis?"
  },
  {
    _id: 3,
    name: "Hossain",
   img:"https://i.ibb.co/VBcnsLy/download.jpg",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, facilis?"
  },
  {
    _id: 4,
    name: "Aiman",
   img:"https://i.ibb.co/VBcnsLy/download.jpg",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, facilis?"
  }
]

const ChatInboxLayout = () => {
    const [chatList, setChatList] = useState([]);
    const [chat, setChat] = useState();
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [currentChatId, setCurrentChatId] = useState(null);
    const [currentChatPersonName, setCurrentChatPersonName] = useState(null);
    const [senderId, setSenderId] = useState(null);
    const [participantDetails, setParticipantDetails] = useState(null);
    const [participantId, setParticipantId] = useState(null);
  
    // console.log("name", currentChatPersonName);
  
    // useEffect(() => {
    //   baseAxios
    //     .get("/api/chats")
    //     .then((res) => {
    //       setChatList(res.data.data.attributes);
    //       console.log(res.data.data.attributes);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       if (err.response.data.message === "Invalid token") {
    //         localStorage.removeItem("token");
    //         localStorage.removeItem("yourInfo");
    //       }
    //     });
    // }, []);
// console.log(participantDetails);
    useEffect(() => {
      try {
        baseURL.get("/message/chat-list").then((res) => {

          // console.log("response------------------",res?.data?.data?.attributes);
          // console.log("response------------------",res);
          setChatList(res?.data?.data?.attributes);
        })
      } catch (error) {
        console.log(error);
          // if (error.response.data.message === "Invalid token") {
          //   localStorage.removeItem("token");
          //   localStorage.removeItem("yourInfo");
          // }
      }
    },[])
    // console.log("chatList", chatList);
  // console.log("currentChatPersonName", currentChatPersonName);
    const handleChat = (data) => {
      console.log(data);
      setCurrentChatId(data?.chat?._id);
    //   console.log(data)
      setCurrentChatPersonName(data?.participantDetails?.name);
    //   console.log(data?.chat.userId._id);
    setParticipantId(data?.chat?.participant)
      setSenderId(data?.chat?.senderId)
  
      baseURL
        .get(`/message/chat/${data?.chat?.participant}?limit=200`)
        .then((res) => {
          // console.log(res.data.data.attributes);
          setChat(res.data.data.attributes);
          // console.log(res.data.data.attributes.data);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.message === "Invalid token") {
            localStorage.removeItem("token");
            localStorage.removeItem("yourInfo");
          }
        });
    // console.log(data);
    };
  
    return (
      <div className="flex gap-5 mx-5">
        <MessageList
          chatList={chatList}
          setParticipantDetails={setParticipantDetails}
          setCurrentChatPersonName={setCurrentChatPersonName}
          handleChat={handleChat}
        />
        {currentChatPersonName ? (
          <SinglePersonChatDetails
            chat={chat}
            chatList={chatList}
            participantDetails={participantDetails}
            currentChatId={currentChatId}
            currentChatPersonName={currentChatPersonName}
            senderId={senderId}
            participantId={participantId}
          />
        ) : (
          <NoChatOpen />
        )}
      </div>
    );
  };

export default ChatInboxLayout;
