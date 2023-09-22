import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
        name:'movie',
        initialState:{
            movieList:[],
            mainTrailer:null
        },
        reducers:{
            addMovieData:(state,actions)=>{
                state.movieList=actions.payload
            },
            addMovieTrailer:(state,actions)=>{
                state.mainTrailer=actions.payload
            }
        }
})
export const {addMovieData,addMovieTrailer} = Movieslice.actions
export default Movieslice.reducer