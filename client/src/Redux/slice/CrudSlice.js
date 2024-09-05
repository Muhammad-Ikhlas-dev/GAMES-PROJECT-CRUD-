import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteGame=createAsyncThunk('deleteGame',async ({title,token},{rejectWithValue}) => {
    try{
        // console.log("321 in try of delete thunk",title,token)
        let response=await axios.delete('http://localhost:8000/game/' + title,
            {headers:{
             token,
            }}
         )
         return response.data;
        }
    catch(error){
        console.log("432 ,",error.response.status)
        if(error?.response?.data?.issue){
            console.log("432 zod error",error.response.data.issue[0])
            return rejectWithValue(`${error.response.data.issue[0].code} at ${error.response.data.issue[0].path}`) 
            //zod error go to action.payload bcz after throw //error changes
        }
        else if(error?.response?.data?.message){
                console.log("432 manual error")
            return rejectWithValue(error.response.data.message) //manual error go to action.payload bcz if we throw
            //it the error changes
        }
        //simple error go to  or axios related error
        return rejectWithValue(error.message)
    }
})
export const getGames=createAsyncThunk('getGames',async ({token},{rejectWithValue}) => {
    try{
        console.log("321 in try of get games")
        let response=await axios.get('http://localhost:8000/games',
            {headers:{
             token,
            }}
         )
         return response.data;
        }
    catch(error){
        throw error.message
    }
})
export const updateGame=createAsyncThunk('updateGame',async ({token,oldTitle,EmptyPreventerGameInfo},{rejectWithValue}) => {
    try{
        console.log("432 type of oldTitle,",oldTitle)
        let response=await axios.put('http://localhost:8000/game?title_to_update='+oldTitle,
        EmptyPreventerGameInfo,{headers:{token,}})
        return response.data
    }    
    catch(error){
        console.log("432 ,",error.response.status)
        if(error?.response?.data?.issue){
            console.log("432 zod error",error.response.data.issue[0])
            return rejectWithValue(`${error.response.data.issue[0].code} at ${error.response.data.issue[0].path}`) 
            //zod error go to action.payload bcz after throw //error changes
        }
        else if(error?.response?.data?.message){
                console.log("432 manual error")
            return rejectWithValue(error.response.data.message) //manual error go to action.payload bcz if we throw
            //it the error changes
        }
        
        //simple error go to  or axios related error
        return rejectWithValue(error.message)
    }
})
export const addGame=createAsyncThunk('addGame',async ({token,gameInfo},{rejectWithValue}) => {
    console.log("432 token in crudslice: ",token)
    console.log("gameInfo in crudSLice",gameInfo)
    try{
        let response=await axios.post('http://localhost:8000/game',gameInfo,{headers:
            {
              token,
            }
          });
          return response.data;
    }
    catch(error){
        console.log("432 ,",error.response.status)
        if(error?.response?.data?.issue){
            console.log("432 zod error",error.response.data.issue[0])
            return rejectWithValue(`${error.response.data.issue[0].code} at ${error.response.data.issue[0].path}`) 
            //zod error go to action.payload bcz after throw //error changes
        }
        else if(error?.response?.data?.message){
                console.log("432 manual error")
            return rejectWithValue(error.response.data.message) //manual error go to action.payload bcz if we throw
            //it the error changes
        }
      
        // simple error go to  or axios related error
        return rejectWithValue(error.message)
    }
})


const crudSlice=createSlice({
    name:'crudSlice',
    initialState:{
        isDeleteResponse:null,
        isDeleteLoading:false,
        isDeleteError:null,

        isAddResponse:null,
        isAddLoading:false,
        isAddError:null,

        isUpdateResponse:null,
        isUpdateLoading:false,
        isUpdateError:null,

        isGetResponse:null,
        isGetLoading:false,
        isGetError:null,
    },

    extraReducers:(builder)=>{
        //Delete Game
        builder.addCase(deleteGame.pending, (state)=>{
            state.isDeleteLoading=true;
            state.isDeleteError=null;
            state.isDeleteResponse=null;
        });
        builder.addCase(deleteGame.fulfilled, (state,action)=>{
            console.log("321 message delete: ",action.payload.message)
            state.isDeleteResponse=action.payload.message || ''
            console.log("321 isDeleteResponse in slice: ",state.isDeleteResponse)
            state.isDeleteError=null;
            state.isDeleteLoading=false;
        });
        builder.addCase(deleteGame.rejected,(state,action)=>{
                console.log("432 Error occured: ",action.payload)
                state.isDeleteError=action.payload
                state.isDeleteLoading=false;
                state.isDeleteResponse=null
        });
        
        //Add game
        builder.addCase(addGame.pending, (state)=>{
            state.isAddLoading=true;
            state.isAddError=null;
            state.isAddResponse=null;
        });
        builder.addCase(addGame.fulfilled, (state,action)=>{
            state.isAddResponse=action.payload.message
            state.isAddLoading=false;
            // console.log(state.isDeleteResponse,"response in crudslice")
            state.isAddError=null;
        });
        builder.addCase(addGame.rejected,(state,action)=>{
            console.log("432 Error occured: ",action.payload)
            state.isAddError=action.payload
            state.isAddLoading=false;
            state.isAddResponse=null
           })
           
           //Update Game
           builder.addCase(updateGame.pending, (state)=>{
               state.isUpdateLoading=true;
               state.isUpdateError=null;
               state.isUpdateResponse=null;
            });
            builder.addCase(updateGame.fulfilled, (state,action)=>{
                state.isUpdateResponse=action.payload.message;
                state.isUpdateLoading=false;
                state.isUpdateError=null;
            });
            builder.addCase(updateGame.rejected,(state,action)=>{
                console.log("432 Error occured: ",action.payload)
                state.isUpdateError=action.payload
                state.isUpdateLoading=false;
                state.isUpdateResponse=null
        })

        //Get Games
        builder.addCase(getGames.pending, (state)=>{
            state.isGetLoading=true;
            state.isGetError=null;
            state.isGetResponse=null;
            console.log("in pernding stae: ",state.isGetLoading)
         });
        builder.addCase(getGames.fulfilled, (state,action)=>{
            state.isGetResponse=action.payload.games || []
            state.isGetLoading=false;
            state.isGetError=null
           });
        builder.addCase(getGames.rejected,(state,action)=>{
            state.isGetError=action.error
            state.isGetLoading=false;
            state.isGetResponse=null
           })
    }
})

export default crudSlice.reducer;