import React from "react";
import ChatInboxLayout from "./ChatInboxLayout";
import EmptyInbox from "./EmplyInbox";


const Inbox = () => {
  const show = true;
  return <>{show ? <ChatInboxLayout /> : <EmptyInbox />}</>;
};

export default Inbox;
