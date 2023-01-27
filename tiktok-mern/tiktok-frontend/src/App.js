import "./App.css";
import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import axios from "./components/axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/users");
      setVideos(res.data);
      return res;
    }
    fetchData();
  }, []);
  console.log(videos);
  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, message }) => (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              message={message}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
