import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import {
  ChatOutlined,
  Repeat,
  SendOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClearIcon from "@mui/icons-material/Clear";
function Post({ name, description, message, photoUrl, onDeletePost }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <MoreHorizIcon className="options" />
        <ClearIcon
          onClick={(id) => onDeletePost(id)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpAltOutlined}
          title="Like"
          color="rgba(0, 0, 0, 0.75)"
        />
        <InputOption
          Icon={ChatOutlined}
          title="Comment"
          color="rgba(0, 0, 0, 0.75)"
        />
        <InputOption Icon={Repeat} title="Repost" color="rgba(0, 0, 0, 0.75)" />
        <InputOption
          Icon={SendOutlined}
          title="Send"
          color="rgba(0, 0, 0, 0.75)"
        />
      </div>
    </div>
  );
}
export default Post;
