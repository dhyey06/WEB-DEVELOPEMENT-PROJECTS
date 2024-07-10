// const NoPage = () => {
//     <img src="" alt="" />
//   };
  
//   export default NoPage;



import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist.</p>
        {/* <img src="https://via.placeholder.com/400x200" alt="404 Image" className="w-full mb-4" /> */}
        <p className="text-sm text-gray-500">You can try going back to the previous page or searching for what you're looking for.</p>
        <button><Link to="/home" className="underline hover:text-blue-800">Go Back</Link></button>
      </div>
    </div>
  );
};

export default NoPage;