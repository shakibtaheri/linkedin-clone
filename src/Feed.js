import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Avatar } from "@mui/material";
import PostOverlay from "./PostOverlay";

function Feed() {
  const [showPostOverlay, setShowPostOverlay] = useState(false);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputContainer--box">
          <Avatar
            className="sidebar__avatar"
            src="https://media.licdn.com/dms/image/v2/D4D03AQEIzBZEN9DFOQ/profile-displayphoto-shrink_100_100/B4DZbyCqKkG0AU-/0/1747817507046?e=1756944000&v=beta&t=udEQ0z8Gc57io2S4Ykcmda7VT_0P9nN9zVE75pDc8nU"
          />

          <div className="feed__input">
            <CreateIcon />
            <form>
              <button type="button" onClick={() => setShowPostOverlay(true)}>
                Start a Post
              </button>
            </form>
          </div>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={SmartDisplayIcon} title="Video" color="#5F9B41" />
          <InputOption Icon={ImageIcon} title="Photo" color="#378FE9" />
          <InputOption
            Icon={NewspaperIcon}
            title="Write article"
            color="#E06847"
          />
        </div>
      </div>
      {showPostOverlay && (
        <PostOverlay onClose={() => setShowPostOverlay(false)} />
      )}
    </div>
  );
}

export default Feed;
