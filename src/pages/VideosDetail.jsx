import React from 'react';
import { useParams } from 'react-router-dom';

export default function VideosDetail() {
  const { videoID } = useParams();
  return <div>VideosDetail {videoID}</div>;
}
