"use client";
import { XCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVideoPlayer = () => {
    setIsOpen(!isOpen);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button className="float-right mb-1 transition-all shadow-xl" onClick={handleVideoPlayer}>
          <XCircle size={32} />
        </button>
        <YouTube videoId={youtubeId} onReady={(e) => e.target.pauseVideo()} opts={option} onError={() => alert("Video is broken, please try another")} />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button className="fixed bottom-5 right-5 w-32 bg-accent text-dark rounded transition-all shadow-xl" onClick={handleVideoPlayer}>
        Tonton Trailer
      </button>
    );
  };

  return <>{!isOpen ? <Player /> : <ButtonOpenPlayer />}</>;
};

export default VideoPlayer;
