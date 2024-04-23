import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      <iframe
        className="w-full h-full object-cover scale-x-125 scale-y-150 "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

        controls="0" // Set controls attribute to 0 to hide controls
        muted
      ></iframe>
    </div>
  );
};

export default VideoBackground;
