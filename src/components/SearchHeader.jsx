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
    // 상단 고정 부분
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600'>
      {/* youtube log & search-bar */}
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>

      {/* 입력폼 */}
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input
          type='text'
          placeholder='Search: '
          className='w-7/12 p-2 outline-none bg-black text-gray-500'
          value={text}
          onChange={handleChange}
        />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
