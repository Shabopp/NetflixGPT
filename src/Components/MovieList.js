import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies);

  // Check if movies is undefined or null
  if (!movies) {
    return <div>Loading...</div>; // or any other fallback content
  }

  return (
    <div className='p-6 bg-black'>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari, and Opera */
          .flex::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
