import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./Messengersender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./Stateprovider";
import firebase from "firebase";
import db from "./firebase";

function Messengersender() {
  const [input, setinput] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handlesubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilepic: user.photoURL,
      username: user.displayName,
      image: imageurl,
    });

    setinput("");
    setimageurl("");
  };

  return (
    <div className="messengersender">
      <div className="messengersender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder={`What's on your mind, ${user.displayName}?`}
            className="messengersender__input"
          />
          <input
            value={imageurl}
            onChange={(e) => setimageurl(e.target.value)}
            placeholder="Image URL (Optional)"
          />
          <button onClick={handlesubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messengersender__bottom">
        <div className="messengersender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h5>Live Video</h5>
        </div>
        <div className="messengersender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h5>Photo/Video</h5>
        </div>
        <div className="messengersender__option">
          <InsertEmoticonIcon style={{ color: "yellow" }} />
          <h5>Feeling/Activity</h5>
        </div>
      </div>
    </div>
  );
}

export default Messengersender;
