import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteGame=createAsyncThunk('deleteGame',async ({title,token}) => {
        return await axios.delete('http://localhost:8000/game/' + title,
            {headers:{
             token,
            }}
         )
})


export const updateGame=createAsyncThunk('updateGame',async ({token,oldTitle,EmptyPreventerGameInfo}) => {
    console.log("token in crudslice: ",token)
        return await axios.put('http://localhost:8000/game?title_to_update='+oldTitle,
            EmptyPreventerGameInfo,{headers:{token,}})
})
export const addGame=createAsyncThunk('addGame',async ({token,gameInfo}) => {
    console.log("token in crudslice: ",token)
    console.log("gameInfo in crudSLice",gameInfo)
        return await axios.post('http://localhost:8000/game',gameInfo,{headers:
            {
              token,
            }
          });
})


const crudSlice=createSlice({
    name:'crudSlice',
    initialState:{
    //     isDeleteResponse:null,
    //     isDeleteError:null,

    //     isAddResponse:null,
    //     isAddError:null,
    },

    extraReducers:(builder)=>{
        //Delete Game
        // builder.addCase(deleteGame.fulfilled, (state,action)=>{
        //     state.isDeleteResponse=action.payload
        //     // console.log(state.isDeleteResponse,"response in crudslice")
        //     state.isDeleteError=null;
        //    });
        // builder.addCase(deleteGame.rejected,(state,action)=>{
        //     // console.log("Error occured: ",action.error)
        //     state.isDeleteError=action.error
        //     state.isDeleteResponse=null
        //    })
        // //Add game
        // builder.addCase(addGame.fulfilled, (state,action)=>{
        //     state.isAddResponse=action.payload
        //     // console.log(state.isDeleteResponse,"response in crudslice")
        //     state.isAddError=null;
        //    });
        // builder.addCase(addGame.rejected,(state,action)=>{
        //     // console.log("Error occured: ",action.error)
        //     state.isAddError=action.error
        //     state.isAddResponse=null
        //    })

        
    }
})

export default crudSlice.reducer;