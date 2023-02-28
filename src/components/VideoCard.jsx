import React from 'react';

export default function VideoCard({ title, channel, days }) {
  return (
    <div>
      <img src='https://i.ytimg.com/vi/TJ2ifmkGGus/hqdefault.jpg' alt='' />
      <span>{title}</span>
      <span>{channel}</span>
      <span>{days}</span>
    </div>
  );
}
