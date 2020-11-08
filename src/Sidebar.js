import React from "react";
import "./Sidebar.css";
import Sidebarrow from "./Sidebarrow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./Stateprovider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <Sidebarrow src={user.photoURL} title={user.displayName} />
      <Sidebarrow Icon={LocalHospitalIcon} title="Covid 19 Info Center" />
      <Sidebarrow Icon={EmojiFlagsIcon} title="Pages" />
      <Sidebarrow Icon={PeopleIcon} title="Friends" />
      <Sidebarrow Icon={ChatIcon} title="Messenger" />
      <Sidebarrow Icon={StorefrontIcon} title="Marketplace" />
      <Sidebarrow Icon={VideoLibraryIcon} title="Videos" />
      <Sidebarrow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
