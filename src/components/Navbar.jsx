import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoLogoYoutube } from 'react-icons/io';

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
    <section className='flex justify-center items-center'>
      <div className='flex flex-row items-center'>
        <IoLogoYoutube className='text-rose-500 text-2xl' />
        <span className='ml-2 text-lg font-semibold'>Youtube</span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Youtube Search: '
          className='border-solid border-2 border-gray-100 rounded-md w-96 outline-none'
          value={text}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
