import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import BigContainer from './BigContainer.js';
import MovieCardContainer from './MovieCardContainer';



const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className='bg-black bg-opacity-40'>
      <Header/>
      <BigContainer/>
      <MovieCardContainer/>
    </div>
  )
}

export default Browse