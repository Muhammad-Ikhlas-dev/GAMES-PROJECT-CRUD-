import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    initialState:{username:'',password:'',token:'',email:'',userData:null,setUserData:null},
        // setUserData:null},
    name:'authenticationInfo',
    reducers:{
        authInfoSetter:(state,action)=>{
            console.log("in sliceeee",action.payload)
            const userData=action.payload
            const {username,password,token,email,setUserData}=userData;
            state.username=username;
            state.password=password;
            state.token=token;
            state.email=email;
            state.userData=userData;
            state.setUserData=setUserData;
        },
        }
});


export const {authInfoSetter} =authSlice.actions;
export default authSlice.reducer;