import React, { useState } from "react";
import { useEffect } from "react";
import "./Feed.css";
import db from "./firebase";
import Messengersender from "./Messengersender";
import Post from "./Post";
import Storyreel from "./Storyreel";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setposts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <Storyreel />

      <Messengersender />
      <FlipMove className="feed__postflipmove">
        {posts.map((post) => (
          <Post
            key={post.id}
            profilepic={post.data.profilepic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
