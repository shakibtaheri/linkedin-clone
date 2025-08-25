import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Avatar } from "@mui/material";
import PostOverlay from "./PostOverlay";
import Post from "./post";

import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

// const { db } = firebaseExpoerts;
function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const [showPostOverlay, setShowPostOverlay] = useState(false);

  const sendPost = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: "Shakib Taheri",
      description: "test",
      message: input,
      photoUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQEIzBZEN9DFOQ/profile-displayphoto-shrink_100_100/B4DZbyCqKkG0AU-/0/1747817507046?e=1756944000&v=beta&t=udEQ0z8Gc57io2S4Ykcmda7VT_0P9nN9zVE75pDc8nU ",
      timeStamp: serverTimestamp(),
    });
    console.log(db);
    setInput("");
    setShowPostOverlay(false);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("timeStamp", "desc"));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  function deletePost(id) {
    setPosts((posts) => posts.filter((post) => post.id !== id));
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputContainer--box">
          <Avatar
            className="sidebar__avatar"
            src="https://media.licdn.com/dms/image/v2/D4D03AQEIzBZEN9DFOQ/profile-displayphoto-shrink_100_100/B4DZbyCqKkG0AU-/0/1747817507046?e=1756944000&v=beta&t=udEQ0z8Gc57io2S4Ykcmda7VT_0P9nN9zVE75pDc8nU"
          />

          <div className="feed__input" onClick={() => setShowPostOverlay(true)}>
            <CreateIcon />
            <form>
              <button type="button">Start a Post</button>
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
        <PostOverlay
          message={input}
          setMessage={setInput}
          onClose={() => setShowPostOverlay(false)}
          onPost={sendPost}
        />
      )}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          onDeletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default Feed;
