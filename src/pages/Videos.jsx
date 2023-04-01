import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoCardList from '../components/VideoCardList';

export default function Videos() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/videos/watch/test01');
  };

  return (
    <div>
      <p>Videos {keyword ? `🔍${keyword}` : '🔥hotTrend'}</p>
      <VideoCardList />
      <button onClick={handleClick}>see video</button>
    </div>
  );
}
