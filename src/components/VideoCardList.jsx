import React, { useState } from 'react';
import VideoCard from './VideoCard';

export default function VideoCardList() {
  const [videoInfo, setInfo] = useState();
  return (
    <div>
      {/* {videoInfo.map((video) => {
        return (
          <VideoCard
            title={video.title}
            channel={video.channel}
            days={video.days}
          />
        );
      })} */}
    </div>
  );
}
