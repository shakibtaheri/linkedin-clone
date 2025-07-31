import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="HeaderOption__icon" />}
      {avatar && <Avatar className="HeaderOption__icon" src={avatar} />}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
