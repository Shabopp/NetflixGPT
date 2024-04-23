import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch ,useSelector} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
const useMovieTrailer = (movieId) => {
    
 
    const dipatch=useDispatch();
    const trailerVideo= useSelector((Store)=>Store.movies.trailerVideo);
    const getMovieVideos= async () => {
        const data= await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json= await data.json();
  
        const filterData = json.results.filter((video) => video.type ===  "Trailer");
        const trailer = filterData.length ?  filterData[0] : json.results[0];
       
        dipatch(addTrailerVideo(trailer))
    
    };
    useEffect(()=>{
      
      !trailerVideo && getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}
export default useMovieTrailer