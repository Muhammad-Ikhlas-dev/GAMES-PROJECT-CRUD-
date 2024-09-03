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
import { deleteGame as DeleteGame,addGame as ADDGame,updateGame as UPDATEgame } from '../../Redux/slice/CrudSlice.js';

const gamePage = () => {
  console.log("game page re-rendered")
  const [games, setGames] = useState([])
  const navigate=useNavigate();
  const {token}=useAppSelector(state=>state.AuthSlice);
  // const {isDeleteResponse,isDeleteError,isAddResponse,isAddError}=useAppSelector(state=>state.CrudSlice);
  
  //we will want to run this useEffect whenever we want to get cards of games like 
  //after every post request or delete request or update request and on first render 
  //ofcourse
  //GET GAMES
  useEffect(()=>{
    getGames()
  },[])
  
  function getGames(){
    console.log("token in game page: ",token);
    if(token){
      axios.get('http://localhost:8000/games',{headers:
        {
          token:token,
        }
      }).then((response) => {
        console.log("games fetched:", response.data.games)
        setGames(response?.data?.games)
      }).catch((error) => {
        console.log(error)
      })
    }
    else{
      navigate('/login')
    }
  }
  
  const dispatch=useAppDispatch();
                                          //GAME ADDER
  async function addGame(event,gameInfo,setGameInfo){
    try{
      // console.log("response in addfunction",isAddResponse)
      event.preventDefault();
      const resultAction = await dispatch(ADDGame({ token, gameInfo })).unwrap();
      console.log("Response in add function", resultAction);

      toast.success(resultAction.data.message,{
        position: 'top-right',
        style: {
          height: "60px",
          border: '1px solid green'
        },
      })
      setGameInfo({
        title:'',
        genre:'',
        description:''
      })
      console.log("yahan tak aya hai")
      getGames(); 
        }
        catch(error){
          console.log("error",error)
          console.log("not succeccful")
          if(error?.response?.status==498)
                navigate('/login')
              if (error?.response?.data?.issue) { //error response came from zod
                toast.error(error.response.data.issue[0].message + ' at ' + error.response.data.issue[0].path)
                , {
                  position: 'top-right',
                  style: {
                    height: "60px",
                    border: '1px solid green'
                  },
                }
              }
              else if(error?.response?.data?.message){ //error response from manual validations
                // console.log(error)
                toast.error(error.response.data.message)
                , {
                  position: 'top-right',
                  style: {
                    height: "60px",
                    border: '1px solid green'
                  },
                }
              }
            else{ //axios related error
              toast.error(error.message)
              , {
                position: 'top-right',
                style: {
                  height: "60px",
                  border: '1px solid green'
                },
              }
            }
        }
      }
      
                                    //DELETE FUNCTION

 async function deleteGame(event,title) {
  try{
    event.preventDefault()
    const resultAction=await dispatch(DeleteGame({title,token})).unwrap();
    console.log("delete function",resultAction)
    // console.log("response in gamepage",isDeleteResponse)
    // console.log("error in deletePage",isDeleteError)
    
    // if(isDeleteResponse){
      toast.success(resultAction.data.message, {
        position: 'top-right',
        style: {
              height: "60px",
              border: '1px solid green'
            },
          })
          getGames(); //change state calluseEffect oR we can say 
          //run useEffect indirectly 
        // }
        // else if(isDeleteError){//error
 }
        catch(error){
          // console.log("error came!!!",isDeleteError)
  
          if(error?.response?.status==498)
            navigate('/login')
  
          if (error?.response?.data?.issue) { //error response came from zod
            console.log(error.response.data.issue)
            toast.error(error.response.data.issue[0].message + ' at ' + error.response.data.issue[0].path)
              , {
              position: 'top-right',
              style: {
                height: "60px",
                border: '1px solid green'
              },
            }
          }
          else if (error?.response?.data?.message) { //error response from manual validations
            // console.log(error)
            toast.error(error.response.data.message)
              , {
              position: 'top-right',
              style: {
                height: "60px",
                border: '1px solid green'
              },
            }
          }
          else { //axios related error
            console.log("chala")
            toast.error(error.message)
              , {
              position: 'top-right',
              style: {
                height: "60px",
                border: '1px solid green'
              },
            }
          }
        }
}

                                    //UPDATE FUNCTION

async function updateGame(event,newGameInfo,oldTitle,oldDescription,oldGenre){
        try{
            event.preventDefault();
                let EmptyPreventerGameInfo={
                    updated_title: newGameInfo.updated_title || oldTitle,
                    updated_description:newGameInfo.updated_description || oldDescription,
                    updated_genre:newGameInfo.updated_genre || oldGenre,
                }
            const resultAction=await dispatch(UPDATEgame({token,oldTitle,EmptyPreventerGameInfo})).unwrap()
            toast.success(resultAction.data.message,{
                position: 'top-right',
                style: {
                    height: "60px",
                    border: '1px solid green'
                },
            })            
              getGames();
            }
        catch(error){
          if(error?.response?.status==498){
            navigate('/login')
          }
            console.log(error)
            if (error?.response?.data?.issue) { //error response came from zod
                console.log(error.response.data.issue)
                toast.error(error.response.data.issue[0].message + ' at ' + error.response.data.issue[0].path)
                    , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
            else if(error?.response?.data?.message){ //error response from manual validations
                // console.log(error)
                toast.error(error.response.data.message)
                    , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
            else{ //axios related error or error in above try block
                toast.error(error.message)
                    , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
        }
      }
      


  return (
    <div className='min-h-[100%] bg-[#40670C]
        flex flex-col items-center gap-8 pb-12'>
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
      <Games games={games}/>
      </Provider>
      </MethodContext.Provider>
      <Toaster/>
    </div>
  )
}

export default gamePage;