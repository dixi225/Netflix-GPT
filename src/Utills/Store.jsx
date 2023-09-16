import { configureStore } from "@reduxjs/toolkit";
import Userslice from "./Userslice";

const Store=configureStore({
        reducer:{
            user:Userslice,
        }
})

export default Store