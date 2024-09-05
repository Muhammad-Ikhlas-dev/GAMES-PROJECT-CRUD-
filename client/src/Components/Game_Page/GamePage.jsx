import React, { useEffect, useState,useContext} from 'react';
import axios from 'axios';
import Logo from '../logo.jsx';
import Header from '../Header.jsx';
import AddGame from './AddGame.jsx';
import Games from './Games.jsx';
import LogoutBtn from '../LogoutBtn.jsx';
import { useNavigate } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';

import MethodContext from '../../Contexts/MethodContext.jsx';
import { Provider } from 'react-redux';
import { useAppSelector,useAppDispatch } from '../../Redux/hooks/useReduxHelperHooks.js';
import store from '../../Redux/store/store.js';
import { deleteGame as DeleteGame,addGame as ADDGame,updateGame as UPDATEgame,getGames as GETgames} from '../../Redux/slice/CrudSlice.js';

const gamePage = () => {
  console.log("game page re-rendered")
  const navigate=useNavigate();
  const {token}=useAppSelector(state=>state.AuthSlice);
  const {isDeleteResponse,isDeleteError,isDeleteLoading,
    isAddResponse,isAddError,isAddLoading,
    isUpdateResponse,isUpdateError,isUpdateLoading,
    isGetResponse,isGetError,isGetLoading}=useAppSelector(state=>state.CrudSlice);
    const dispatch=useAppDispatch();

    /*we will want to run this useEffect whenever we want to get cards of games like 
    after every post request or delete request or update request and on first render 
    ofcourse*/
                                        //GET GAMES
  useEffect(()=>{
    console.log("122 isGetError ",token)
    if(!token){
      navigate('/login')
    }
    // if(!isGetLoading && !isDeleteLoading && !isUpdateLoading && !isAddLoading && !isGetError && !isUpdateError &&
    //   !isAddError && !isDeleteError){
      dispatch(GETgames({token}))
    // }
  },[])

                                            //GAME ADDER
useEffect(()=>{
if(isAddResponse){
  toast.success(isAddResponse,{
    position: 'top-right',
    style: {
      height: "60px",
      border: '1px solid green'
    },
  })
}
else if(isAddError){
  toast.error(isAddError)
  , {
    position: 'top-right',
    style: {
      height: "60px",
      border: '1px solid green'
    },
  }
}
},[isAddError,isAddResponse])
  async function addGame(gameInfo,setGameInfo){
    if(!token){
      navigate('/login')
    }
      await dispatch(ADDGame({ token, gameInfo })).unwrap(); //good approach
      dispatch(GETgames({ token }));
      
      setGameInfo({
        title: '',
        genre: '',
        description: ''
      });
  }
                                          //GAME DELETE
  useEffect(()=>{
    if(isDeleteResponse){
      toast.success(isDeleteResponse, {
             position: 'top-right',
             style: {
               height: "60px",
               border: '1px solid green'
             },
           })
    }
    else if(isDeleteError){
      toast.error(isDeleteError)
      , {
        position: 'top-right',
        style: {
          height: "60px",
          border: '1px solid green'
        },
      }
    }
  },[isDeleteError,isDeleteResponse])
 async function deleteGame(title) {
   if(!token){
     navigate('/login')
   }
   dispatch(DeleteGame({title,token}))
   dispatch(GETgames({token}))
      }

                                              //GAME UPDATE
useEffect(()=>{
  console.log("444 isUpdateResponse: ",isUpdateResponse)
  console.log("444 isUpdateError: ",isUpdateError)
  if(isUpdateResponse){
    toast.success(isUpdateResponse,{
      position: 'top-right',
      style: {
          height: "60px",
          border: '1px solid green'
      },
  }) 
  }
  else if(isUpdateError){
    toast.error(isUpdateError)
    , {
      position: 'top-right',
      style: {
        height: "60px",
        border: '1px solid green'
      },
    }
  }
},[isUpdateError,isUpdateResponse])
async function updateGame(newGameInfo,oldTitle,oldDescription,oldGenre){
                if(!token){
                  navigate('/login')
                }
                let EmptyPreventerGameInfo={
                    updated_title: newGameInfo.updated_title || oldTitle,
                    updated_description:newGameInfo.updated_description || oldDescription,
                    updated_genre:newGameInfo.updated_genre || oldGenre,
                }
            dispatch(UPDATEgame({token,oldTitle,EmptyPreventerGameInfo}))
            setTimeout(()=>{ //bad approach instead use unwrap to handle dispatch like promise or async action
              dispatch(GETgames({token}));      
            },500)
    }
      


  return (
    <div className='min-h-[100%] bg-[#40670C]
        flex flex-col items-center gap-8 pb-12 px-4'>
      {/* Top Display */}
      <div className="flex justify-between px-[2px] items-center w-full">
        <Logo />
        <Header />
        <LogoutBtn />
      </div>
      <MethodContext.Provider value={{deleteGame,updateGame,addGame}}>
      <Provider store={store}>
      {/* AddGame */}
      <AddGame />
      {/* GAMES */}
      {isGetResponse && isGetResponse.length>0 && <Games games={isGetResponse}/>}
      </Provider>
      </MethodContext.Provider>
      <Toaster/>
    </div>
  )
}

export default gamePage;