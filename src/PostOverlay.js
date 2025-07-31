import React from "react";
import "./PostOverlay.css";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
function PostOverlay({ onClose }) {
  return (
    <div className="postoverlay hidden">
      <div className="overlay">
        <div className="postoverlay__box">
          <CloseIcon className="postoverlay__close" onClick={onClose} />
          <div className="postoverlay__avatarContainer">
            <Avatar
              className="postoverlay__avatar"
              src="https://media.licdn.com/dms/image/v2/D4D03AQEIzBZEN9DFOQ/profile-displayphoto-shrink_100_100/B4DZbyCqKkG0AU-/0/1747817507046?e=1756944000&v=beta&t=udEQ0z8Gc57io2S4Ykcmda7VT_0P9nN9zVE75pDc8nU"
            />
            <div className="sidebar__avatar--textBox">
              <h4>Shakib taheri</h4>
              <p>Post to anyone</p>
            </div>
          </div>
          <textarea
            placeholder="What do you want to talk a"
            aria-label="Post content"
          />
          <div className="postoverlay__box--icons">
            <ImageOutlinedIcon className="icon" />
            <CalendarMonthOutlinedIcon className="icon" />
            <NewReleasesIcon className="icon" />
            <AddIcon className="icon" />
          </div>
          <div className="postOverlay__box--buttonContainer">
            <AccessTimeIcon className="icon" />
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostOverlay;
