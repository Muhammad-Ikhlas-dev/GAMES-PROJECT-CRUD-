import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/AuthSlice.js";
import crudSlice from "../slice/CrudSlice.js";

 const store=configureStore({
    reducer:{
        AuthSlice:authSlice, //slices in the form of key value pairs
        CrudSlice:crudSlice,
    },
})
export default store;