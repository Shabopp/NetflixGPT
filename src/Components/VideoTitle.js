import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/4 my-20 left-8 text-white z-10  p-6 rounded-lg">
      <h1 className="text-5xl font-bold mb-2">{title}</h1>
      <p className="text-lg mb-4 w-1/4 py-6">{overview}</p>
      <div className="flex space-x-4 ">
        <button className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-full transition-all duration-300">
          Play
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full transition-all duration-300">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
