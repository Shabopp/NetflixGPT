import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'
const usePopularMovies = () =>{
    const dispatch = useDispatch();

    const PopularMovies= useSelector((Store)=>Store.movies.PopularMovies); 

    const getPopularMovies = async() =>{
      const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', 
      API_OPTIONS
      );
      const json= await data.json();
   
      dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
      !PopularMovies && getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); 
};
export default usePopularMovies;