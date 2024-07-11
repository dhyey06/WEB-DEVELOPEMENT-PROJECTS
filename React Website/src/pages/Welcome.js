// Welcome.js
import React from 'react';

const Welcome = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 my-10 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Website!</h1>
      <p className="text-lg mb-6">This is a sample website built with React and React Router.</p>
      <p className="text-lg mb-6">You can navigate to different pages using the navigation menu above.</p>
      <p className="text-lg mb-6">Feel free to explore and learn more about our website!</p>
    </div>
  );
};

export default Welcome;