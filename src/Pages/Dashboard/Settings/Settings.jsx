import React, { useEffect, useState } from "react";
import SettingsHeader from "../../../Components/Settings/SettingsHeader";
import General from "./General";
import PersonalDetails from "./PersonalDetails";
import PasswordAndSecurity from "./PasswordAndSecurity";
import BlockList from "./BlockList";
import Activity from "./Activity";
import Percentage from "./Percentage";
import Others from "./Others";
import { Link, useLocation,useNavigate,useParams  } from 'react-router-dom';

function Settings() {
  const location = useLocation();
  const [currentLink, setCurrentLink] = useState("password-and-security");

  console.log('Current URL:', location.search);
  let { link } = useParams();
  console.log(link)

  const SettingsHeaderData = [
    // {
    //   id: 1,
    //   name: "General",
    //   link: "general",
    // },
    {
      id: 2,
      name: "Password and Security",
      link: "password-and-security",
    },
    {
      id: 1,
      name: "Personal Details",
      link: "personal-details",
    },
   
    // {
    //   id: 4,
    //   name: "Block List",
    //   link: "block-list",
    // },
    // {
    //   id: 5,
    //   name: "Activity",
    //   link: "activity",
    // },
    {
      id: 3,
      name: "Percentage",
      link: "percentage",
    },
    {
      id: 4,
      name: "Others",
      link: "others",
    },
  ];

  useEffect(() => {
  if(location.search==="?link=PersonalDetails"){
    setCurrentLink("personal-details");
  }
  },[])
const navigate = useNavigate();
  return (
    <div className="p-[24px]">
      <SettingsHeader
        setCurrentLink={setCurrentLink}
        currentLink={currentLink}
        SettingsHeaderData={SettingsHeaderData}
      />
      {/* Settings Route here */}
      <div className="mt-[24px]">
        {/* {currentLink === "general" && <General />} */}
        {currentLink === "personal-details" && navigate(`/personal-details`)}
        {currentLink === "password-and-security" && <PasswordAndSecurity />}
        {currentLink === "block-list" && <BlockList />}
        {currentLink === "activity" && <Activity />}
        {currentLink === "percentage" && <Percentage />}
        {currentLink === "others" && <Others />}
      </div>
    </div>
  );
}

export default Settings;
