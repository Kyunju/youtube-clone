import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const [videoList, setVideoList] = useState([]);
  const { keyword } = useParams();
  useEffect(() => {
    loadVideos('/data/popular.json').then((item) =>
      setVideoList(item.map((video) => video.snippet.title))
    );
  }, []);
  console.log(videoList);
  return (
    <div>
      <p>Videos {keyword ? `🔍${keyword}` : '🔥hotTrend'}</p>
      <ul>
        {videoList.map((video) => {
          return <li>{video}</li>;
        })}
      </ul>
    </div>
  );
}

const loadVideos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.items);
};

const getPopularVideo = () => {
  return loadVideos('/data/popular.json').then((item) =>
    item.map((video) => video.snippet.title)
  );
};
