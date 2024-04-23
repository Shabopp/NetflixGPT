import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/2 -my-10  left-8 text-white z-10 p-6 rounded-lg ">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ">{title}</h1>
      <p className="text-lg lg:text-xl mb-8 w-1/2 md:w-3/4 xl:w-1/2">{overview}</p>
      <div className="flex space-x-4">
        <button
          className="rounded-lg bg-[#D9232E] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-red-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Play
        </button>
        <button
          className="rounded-lg bg-[#D9232E] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:bg-red-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="false"
        >
          More Info
        </button>
      </div>
      <div className="w-full pt-5 px-4 mb-8 mx-auto"></div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />
      <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
    </div>
  );
};

export default VideoTitle;

