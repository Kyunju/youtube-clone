import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };

  return (
    <div>
      Navbar
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Youtube Search: '
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
