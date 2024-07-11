import React from 'react';

const Blog = () => {
  return (
    <div className='blog-container border-slate-600 border-[1px] rounded-lg'>
      <h1 className='text-white text-4xl py-2'>Blog</h1>
      <p className='text-white'>Welcome to our blog!</p>
      <ul className='blog-post'>
        <li><a href="/Blog1">Blog Post 1</a></li>
        <li><a href="/Blog2">Blog Post 2</a></li>
        <li><a href="/Blog3">Blog Post 3</a></li>
      </ul>
    </div>
  );
};

export default Blog;