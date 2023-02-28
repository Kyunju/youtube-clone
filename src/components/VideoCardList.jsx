import React, { useState } from 'react';
import VideoCard from './VideoCard';

export default function VideoCardList() {
  const [videoInfo, setInfo] = useState([
    { title: '첫번째', channel: '첫번째 채널', days: '첫번째 날짜' },
    { title: '두번째', channel: '두번째 채널', days: '두번째 날짜' },
    { title: '세번째', channel: '세번째 채널', days: '세번째 날짜' },
  ]);
  return (
    <div>
      {videoInfo.map((video) => {
        return (
          <VideoCard
            title={video.title}
            channel={video.channel}
            days={video.days}
          />
        );
      })}
    </div>
  );
}
