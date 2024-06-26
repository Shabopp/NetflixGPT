import { createSlice } from "@reduxjs/toolkit";
const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action) =>{
           state.NowPlayingMovies=action.payload;      
         },
         addPopularMovies:(state,action) =>{
            state.PopularMovies=action.payload;      
          },
         addTrailerVideo:(state,action) =>{
            state.trailerVideo=action.payload;
                     }

    }
})
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies}=moviesSlice.actions;
export default moviesSlice.reducer;