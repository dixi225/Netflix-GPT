import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
        name:'movie',
        initialState:{
            movieList:[],
            upcomingMovieList:[],
            topRatedMovieList:[],
            nowPlayingMovieList:[],
            mainTrailer:null
        },
        reducers:{
            addMovieData:(state,actions)=>{
                state.movieList=actions.payload
            },
            addUpcomingMovieData:(state,actions)=>{
                state.upcomingMovieList=actions.payload
            },
            addTopRatedMovieData:(state,actions)=>{
                state.topRatedMovieList=actions.payload
            },
            addNowPlayingMovieData:(state,actions)=>{
                state.nowPlayingMovieList=actions.payload
            },
            addMovieTrailer:(state,actions)=>{
                state.mainTrailer=actions.payload
            }
        }
})
export const {addMovieData,addMovieTrailer,addUpcomingMovieData,addTopRatedMovieData,addNowPlayingMovieData} = Movieslice.actions
export default Movieslice.reducer