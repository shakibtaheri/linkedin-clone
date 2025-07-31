import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D16AQFmeIwa2n65xg/profile-displaybackgroundimage-shrink_200_800/B4DZaGb9HtHwAU-/0/1746012198415?e=1756944000&v=beta&t=2bAXRP-b2kNeo16Mi-WtClRoS_tD6X0f6-PyMaVolHE"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://media.licdn.com/dms/image/v2/D4D03AQEIzBZEN9DFOQ/profile-displayphoto-shrink_100_100/B4DZbyCqKkG0AU-/0/1747817507046?e=1756944000&v=beta&t=udEQ0z8Gc57io2S4Ykcmda7VT_0P9nN9zVE75pDc8nU"
        />
        <h2>Shakib Taheri</h2>
        <h4>Shakibtaheri7@gmail.com</h4>
        <div className="sidebar__textBox">
          <p>
            Aspiring Frontend Developer | Learning React & Next.js | From...
          </p>
          <p>Tehran, Tehran Province</p>
        </div>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">7</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">29</p>
        </div>
        <div className="sidebar__stat">
          <p>View on posts</p>
          <p className="sidebar__statNumber">10</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("javascript")}
        {recentItem("software")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
