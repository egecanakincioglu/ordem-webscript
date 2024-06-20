// VideoPlayer.tsx
import React from 'react';
import { VideoData } from '../@types/videos';
import "../style/Video.css"

const VideoPlayer: React.FC<VideoData> = ({ path }: VideoData) => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted width="600" className="background-video">
        <source src={path} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;