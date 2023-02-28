import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoCardList from '../components/VideoCardList';

export default function Videos() {
  const { searchName } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/videos/watch/test01');
  };
  console.log(searchName);
  return (
    <div>
      <p>Videos {searchName}</p>
      <VideoCardList />
      <button onClick={handleClick}>see video</button>
    </div>
  );
}
