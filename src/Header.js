import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import logo from
//  "./assests/linkedin-app-icon.svg";

function Header() {
  // const search = document.querySelector(".search");
  // const headR = document.querySelector(".header__right");
  // headR.addEventListener("click", function (e) {
  //   const targetEl = e.target;
  //   console.log(targetEl);
  //   if (targetEl) search.focus();
  // });
  return (
    <div className="header">
      <div className="header__left">
        {/* <img src={logo} alt="" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match"
          focusable="false"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>

        <div className="header__search">
          <SearchIcon />
          <input type="text" className="search" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My 
        Network"
        />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notfications" />
        <HeaderOption
          avatar={
            "https://media.licdn.com/dms/image/v2/D4D03AQEIzBZEN9DFOQ/profile-displayphoto-shrink_100_100/B4DZbyCqKkG0AU-/0/1747817507046?e=1756944000&v=beta&t=udEQ0z8Gc57io2S4Ykcmda7VT_0P9nN9zVE75pDc8nU"
          }
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;
