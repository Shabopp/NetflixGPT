import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const MovieCardContainer = () => {
  const movies= useSelector((store)=>store.movies);


  return (
    movies.NowPlayingMovies  &&(
      <div className=' bg-black '>
      <div className='-mt-48 relative pl-6 z-20'>
            <MovieList title={"Now PLaying"} movies={movies.NowPlayingMovies}/>     
            <MovieList title={"Most Popular"} movies={movies.PopularMovies}/>
            <MovieList title={"Most Watched"} movies={movies.NowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.NowPlayingMovies}/>
            <MovieList title={"Must watch"} movies={movies.NowPlayingMovies}/>
            <MovieList title={"Suspense Movies"} movies={movies.NowPlayingMovies}/>

      </div>
 

    </div>
    )
  
  )
}

export default MovieCardContainer