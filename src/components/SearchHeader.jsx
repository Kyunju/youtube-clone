import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText('');
  };
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    // Youtube logo
    <header className='flex justify-center items-center'>
      <div className='flex flex-row items-center'>
        <Link to='/'>
          <BsYoutube className='text-[#ff0000] text-2xl' />
          <h1 className='ml-2 text-lg font-semibold text-white'>Youtube</h1>
        </Link>
      </div>

      {/* 입력폼 */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search: '
          className='border-solid border-2 border-gray-100 rounded-md w-96 outline-none'
          value={text}
          onChange={handleChange}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
