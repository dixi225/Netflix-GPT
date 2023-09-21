import { configureStore } from "@reduxjs/toolkit";
import Movieslice from "./Movieslice";

const Store=configureStore({
        reducer:{
            'movie':Movieslice,
        }
})

export default Store