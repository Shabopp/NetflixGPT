import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import BigContainer from './BigContainer.js';
import MovieCardContainer from './MovieCardContainer';
import usePopularMovies from '../Hooks/usePopularMovies.js';
import GptSearch from './GptSearch.js';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector((store) =>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className='bg-black bg-opacity-40'>
      <Header/>
      {
        showGptSearch ? (
          <GptSearch/>
        )
       
        : (
          <>
          <BigContainer/>
          <MovieCardContainer/>
          </>
        ) }

    </div>
  )
}

export default Browse