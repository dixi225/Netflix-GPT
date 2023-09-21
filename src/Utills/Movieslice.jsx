import { createSlice } from "@reduxjs/toolkit";

const Movieslice=createSlice({
        name:'movie',
        initialState:{
            movieList:[],
        },
        reducers:{
            addMovieData:(state,actions)=>{
                state.movieList=actions.payload
            }
        }
})
export const {addMovieData} = Movieslice.actions
export default Movieslice.reducer