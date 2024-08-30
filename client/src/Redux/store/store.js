import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/AuthSlice.js";

const store=configureStore({
    reducer:{
        AuthSlice:authSlice, //slices in the form of key value pairs
    },
})

export default store;