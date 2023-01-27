import React, { useEffect, useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
// import axios from "./axios";

const Video = ({ url, channel, description, song, likes, shares, message }) => {
  const [playing, setPlaying] = useState(false);
  // const [video, setVideo] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const req = await axios.get("/users");
  //     setVideo(req.data);
  //   };
  //   fetchData();
  // });
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} message={message} />
    </div>
  );
};
export default Video;
